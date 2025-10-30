import { z } from 'zod';
import { createMcpHandler } from 'mcp-handler';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { existsSync, readdirSync, statSync } from 'fs';

const handler = createMcpHandler(
  (server) => {
    // Tool: Read markdown content by ID (defaults to "home")
    server.tool(
      'read',
      'Reads a markdown file by its ID (filename without .md extension). Supports directory paths.',
      { 
        id: z.string().optional().describe('The ID of the markdown file to read. Can be called without an ID to explore the home page.') 
      },
      async ({ id }) => {
        try {
          // Default to "home" if no ID is provided
          const fileId = id || 'home';
          
          // Sanitize the ID to prevent directory traversal attacks
          // Allow alphanumeric, hyphens, underscores, and forward slashes (for directories)
          // Remove any ".." sequences and leading/trailing slashes
          const sanitizedId = fileId
            .replace(/\.\./g, '')  // Remove ".." sequences
            .replace(/[^a-zA-Z0-9-_/]/g, '')  // Allow only safe characters + slashes
            .replace(/^\/+|\/+$/g, '')  // Remove leading/trailing slashes
            .replace(/\/+/g, '/');  // Replace multiple slashes with single slash
          
          // Prevent empty path after sanitization
          if (!sanitizedId) {
            return {
              content: [
                { 
                  type: 'text', 
                  text: 'Error: Invalid file ID provided' 
                }
              ],
              isError: true,
            };
          }
          
          // Construct the file path
          const filePath = join(process.cwd(), 'app', 'content', `${sanitizedId}.md`);
          const directoryPath = join(process.cwd(), 'app', 'content', sanitizedId);

          // Try to read the markdown file first
          if (existsSync(filePath)) {
            // Read the file
            const content = await readFile(filePath, 'utf-8');

            return {
              content: [
                {
                  type: 'text',
                  text: content
                }
              ],
            };
          }

          // If no markdown file, check if directory exists and generate directory listing
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
                  text: content
                }
              ],
            };
          }

          // If neither file nor directory exists
          return {
            content: [
              {
                type: 'text',
                text: `Error: Content "${sanitizedId}" not found`
              }
            ],
            isError: true,
          };
        } catch (error) {
          return {
            content: [
              { 
                type: 'text', 
                text: `Error reading markdown file: ${error instanceof Error ? error.message : 'Unknown error'}` 
              }
            ],
            isError: true,
          };
        }
      },
    );

    // Tool: Contribute (create or update) markdown content
    server.tool(
      'contribute',
      'Creates or updates a markdown file. For nested paths like "a/b/c", it creates the directory structure (folders a/, a/b/) and only the final file (a/b/c.md).',
      { 
        id: z.string().describe('The ID/path for the markdown file (e.g., "getting-started", "ui/components/button"). For nested paths, intermediate directories will be created.'),
        content: z.string().describe('The markdown content to write to the file.'),
      },
      async ({ id, content }) => {
        try {
          // Sanitize the ID to prevent directory traversal attacks
          const sanitizedId = id
            .replace(/\.\./g, '')  // Remove ".." sequences
            .replace(/[^a-zA-Z0-9-_/]/g, '')  // Allow only safe characters + slashes
            .replace(/^\/+|\/+$/g, '')  // Remove leading/trailing slashes
            .replace(/\/+/g, '/');  // Replace multiple slashes with single slash
          
          // Prevent empty path after sanitization
          if (!sanitizedId) {
            return {
              content: [
                { 
                  type: 'text', 
                  text: 'Error: Invalid file ID provided' 
                }
              ],
              isError: true,
            };
          }
          
          const contentRoot = join(process.cwd(), 'app', 'content');
          const filePath = join(contentRoot, `${sanitizedId}.md`);
          
          // Check if file exists
          const fileExists = existsSync(filePath);
          
          // Create parent directory if needed
          const dirPath = dirname(filePath);
          await mkdir(dirPath, { recursive: true });
          
          // Write the file
          await writeFile(filePath, content, 'utf-8');
          
          return {
            content: [
              { 
                type: 'text', 
                text: `Successfully ${fileExists ? 'updated' : 'created'} markdown file: ${sanitizedId}` 
              }
            ],
          };
        } catch (error) {
          return {
            content: [
              { 
                type: 'text', 
                text: `Error writing markdown file: ${error instanceof Error ? error.message : 'Unknown error'}` 
              }
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

