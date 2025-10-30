import { z } from 'zod';
import { createMcpHandler } from 'mcp-handler';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { existsSync, readdirSync, statSync } from 'fs';
import { glob } from 'glob';

// Helper function for searching content
async function searchContent(query: string, limit: number = 5, caseSensitive: boolean = false): Promise<string> {
  const contentRoot = join(process.cwd(), 'app', 'content');

  // Find all markdown files recursively
  const mdFiles = await glob('**/*.md', {
    cwd: contentRoot,
    absolute: false,
  });

  const results: Array<{
    id: string;
    count: number;
    preview: string;
  }> = [];

  // Search each file
  for (const filePath of mdFiles) {
    try {
      const fullPath = join(contentRoot, filePath);
      const content = await readFile(fullPath, 'utf-8');

      // Count occurrences of the query
      let count = 0;
      let flags = caseSensitive ? 'g' : 'gi';

      // Try as regex first, fall back to literal string if invalid regex
      let regex: RegExp;
      try {
        regex = new RegExp(query, flags);
      } catch {
        // If query is not a valid regex, escape it and search as literal
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        regex = new RegExp(escapedQuery, flags);
      }

      const matches = content.match(regex);
      count = matches ? matches.length : 0;

      if (count > 0) {
        // Generate preview: first line containing the query, truncated to ~100 chars
        const lines = content.split('\n');
        let preview = '';

        for (const line of lines) {
          if (regex.test(line)) {
            // Find the query in the line and get context around it
            const match = line.match(regex);
            if (match) {
              const matchIndex = line.indexOf(match[0]);
              const start = Math.max(0, matchIndex - 50);
              const end = Math.min(line.length, matchIndex + match[0].length + 50);
              preview = (start > 0 ? '...' : '') + line.substring(start, end) + (end < line.length ? '...' : '');
              break;
            }
          }
        }

        // Convert file path to ID (remove .md extension)
        const id = filePath.replace(/\.md$/, '');

        results.push({
          id,
          count,
          preview: preview || 'No preview available',
        });
      }
    } catch (error) {
      // Skip files that can't be read
      continue;
    }
  }

  // Sort by count descending and limit results
  results.sort((a, b) => b.count - a.count);
  const limitedResults = results.slice(0, limit);

  if (limitedResults.length === 0) {
    return `No related content found for "${query}"`;
  }

  // Format the results
  let response = `Related content for "${query}":\n\n`;

  for (const result of limitedResults) {
    response += `**${result.id}** (${result.count} mentions)\n`;
    response += `${result.preview}\n\n`;
  }

  return response.trim();
}

const handler = createMcpHandler(
  (server) => {

    // Tool: Contribute (create or update) markdown content
    // server.tool(
    //   'contribute',
    //   'Creates or updates a markdown file. For nested paths like "a/b/c", it creates the directory structure (folders a/, a/b/) and only the final file (a/b/c.md).',
    //   { 
    //     id: z.string().describe('The ID/path for the markdown file (e.g., "getting-started", "ui/components/button"). For nested paths, intermediate directories will be created.'),
    //     content: z.string().describe('The markdown content to write to the file.'),
    //   },
    //   async ({ id, content }) => {
    //     try {
    //       // Sanitize the ID to prevent directory traversal attacks
    //       const sanitizedId = id
    //         .replace(/\.\./g, '')  // Remove ".." sequences
    //         .replace(/[^a-zA-Z0-9-_/]/g, '')  // Allow only safe characters + slashes
    //         .replace(/^\/+|\/+$/g, '')  // Remove leading/trailing slashes
    //         .replace(/\/+/g, '/');  // Replace multiple slashes with single slash
          
    //       // Prevent empty path after sanitization
    //       if (!sanitizedId) {
    //         return {
    //           content: [
    //             { 
    //               type: 'text', 
    //               text: 'Error: Invalid file ID provided' 
    //             }
    //           ],
    //           isError: true,
    //         };
    //       }
          
    //       const contentRoot = join(process.cwd(), 'app', 'content');
    //       const filePath = join(contentRoot, `${sanitizedId}.md`);
          
    //       // Check if file exists
    //       const fileExists = existsSync(filePath);
          
    //       // Create parent directory if needed
    //       const dirPath = dirname(filePath);
    //       await mkdir(dirPath, { recursive: true });
          
    //       // Write the file
    //       await writeFile(filePath, content, 'utf-8');
          
    //       return {
    //         content: [
    //           { 
    //             type: 'text', 
    //             text: `Successfully ${fileExists ? 'updated' : 'created'} markdown file: ${sanitizedId}` 
    //           }
    //         ],
    //       };
    //     } catch (error) {
    //       return {
    //         content: [
    //           { 
    //             type: 'text', 
    //             text: `Error writing markdown file: ${error instanceof Error ? error.message : 'Unknown error'}` 
    //           }
    //         ],
    //         isError: true,
    //       };
    //     }
    //   },
    // );

    // Tool: Search and read markdown content
    server.tool(
      'search',
      'Versatile tool: if query is an existing page ID, returns full content; if not found, searches by words/patterns and returns top results based on count of mentions.',
      {
        query: z.string().describe('The search query. Can be a page ID (e.g., "ui/shadcn/components/button") to get full content, or a word/phrase/pattern to search across all pages.'),
        limit: z.number().optional().describe('Maximum number of search results to return when searching by content (default: 10). Ignored when returning full page content.'),
        caseSensitive: z.boolean().optional().describe('Whether content search should be case sensitive (default: false). Ignored when returning full page content.'),
      },
      async ({ query, limit = 10, caseSensitive = false }) => {
        try {
          // First, try to interpret query as an ID and check if file exists
          const sanitizedId = query
            .replace(/\.\./g, '')  // Remove ".." sequences
            .replace(/[^a-zA-Z0-9-_/]/g, '')  // Allow only safe characters + slashes
            .replace(/^\/+|\/+$/g, '')  // Remove leading/trailing slashes
            .replace(/\/+/g, '/');  // Replace multiple slashes with single slash

          if (sanitizedId && sanitizedId === query) {
            // Query looks like a valid ID, try to find the exact file
            const filePath = join(process.cwd(), 'app', 'content', `${sanitizedId}.md`);
            const directoryPath = join(process.cwd(), 'app', 'content', sanitizedId);

            // Check if exact markdown file exists
            if (existsSync(filePath)) {
              const content = await readFile(filePath, 'utf-8');
              return {
                content: [
                  {
                    type: 'text',
                    text: content,
                  },
                ],
              };
            }

            // Check if directory exists (for directory listing)
            if (existsSync(directoryPath) && statSync(directoryPath).isDirectory()) {
              const children = readdirSync(directoryPath);
              const title = sanitizedId.split("/").pop() || "Directory";
              const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

              let content = `# ${capitalizedTitle}\n\nAvailable pages:\n\n`;

              // List markdown files and subdirectories
              const items: { name: string; path: string; isDir: boolean }[] = [];
              const mdFiles = new Set<string>();

              // First pass: collect all .md files
              for (const child of children) {
                if (child.endsWith('.md')) {
                  const name = child.replace('.md', '');
                  mdFiles.add(name);
                  items.push({ name, path: `${sanitizedId}/${name}`, isDir: false });
                }
              }

              // Second pass: add directories that don't have a corresponding .md file
              for (const child of children) {
                const childPath = join(directoryPath, child);
                const isDirectory = statSync(childPath).isDirectory();

                if (isDirectory && !mdFiles.has(child)) {
                  items.push({ name: child, path: `${sanitizedId}/${child}`, isDir: true });
                }
              }

              // Sort: directories first, then files, both alphabetically
              items.sort((a, b) => {
                if (a.isDir && !b.isDir) return -1;
                if (!a.isDir && b.isDir) return 1;
                return a.name.localeCompare(b.name);
              });

              for (const item of items) {
                content += `- [${item.name}](/${item.path})\n`;
              }

              return {
                content: [
                  {
                    type: 'text',
                    text: content,
                  },
                ],
              };
            }
          }

          // If not an exact ID match, perform content search
          const searchResults = await searchContent(query, limit, caseSensitive);

          // Check if no results were found
          if (searchResults.startsWith('No related content found')) {
            return {
              content: [
                {
                  type: 'text',
                  text: `No results found for query: "${query}"`,
                },
              ],
            };
          }

          // Format the results with search-specific header
          const formattedResults = searchResults.replace(
            `Related content for "${query}":`,
            `Search results for "${query}":`
          );

          return {
            content: [
              {
                type: 'text',
                text: formattedResults,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: 'text',
                text: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
              },
            ],
            isError: true,
          };
        }
      },
    );
  },
  {},
  { basePath: '/api' },
);

export { handler as GET, handler as POST, handler as DELETE };

