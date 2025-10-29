import { z } from 'zod';
import { createMcpHandler } from 'mcp-handler';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { existsSync } from 'fs';

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
          
          // Check if file exists
          if (!existsSync(filePath)) {
            return {
              content: [
                { 
                  type: 'text', 
                  text: `Error: Markdown file "${sanitizedId}" not found` 
                }
              ],
              isError: true,
            };
          }
          
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

