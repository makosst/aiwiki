import { z } from 'zod';
import { createMcpHandler } from 'mcp-handler';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const handler = createMcpHandler(
  (server) => {
    // Tool: Read markdown content by ID (defaults to "home")
    server.tool(
      'read',
      'Reads a markdown file by its ID (filename without .md extension). Supports directory paths like "ui/shadcn". Defaults to "home" if no ID is provided.',
      { 
        id: z.string().optional().describe('The ID of the markdown file to read (e.g., "getting-started", "ui/shadcn", "api/routes"). Defaults to "home" if not provided.') 
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
  },
  {},
  { basePath: '/api' },
);

export { handler as GET, handler as POST, handler as DELETE };

