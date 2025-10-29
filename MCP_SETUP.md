# MCP Server Setup Guide

This project includes a Model Context Protocol (MCP) server that exposes markdown content through standardized tools and resources.

## What's Available

The MCP server provides the following capabilities:

### Tools

1. **read_markdown** - Read a markdown file by its ID
   - Parameter: `id` (string) - The filename without the .md extension
   - Example: `read_markdown({ id: "getting-started" })`

2. **list_markdown_files** - List all available markdown files
   - No parameters required
   - Returns a list of all markdown file IDs

### Resources

- **markdown://{id}** - Access markdown content as a resource
- Automatically lists all available markdown files in the content directory

## Local Development Setup

### 1. Start the Development Server

```bash
npm run dev
```

The server will run at `http://localhost:3000`

### 2. Test with MCP Inspector

Run the MCP inspector to test your server:

```bash
npx @modelcontextprotocol/inspector@latest http://localhost:3000
```

Then:
1. Open `http://127.0.0.1:6274` in your browser
2. Select "Streamable HTTP" in the drop-down
3. Enter URL: `http://localhost:3000/api/mcp`
4. Click "Connect"
5. Test the tools under the "Tools" section

### 3. Configure in Cursor

Add this configuration to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "aiwiki-markdown": {
      "url": "http://localhost:3000/api/mcp"
    }
  }
}
```

## Production Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

After deployment, your MCP server will be available at:
```
https://your-project.vercel.app/api/mcp
```

### Update Cursor Configuration for Production

Update `.cursor/mcp.json` with your production URL:

```json
{
  "mcpServers": {
    "aiwiki-markdown": {
      "url": "https://your-project.vercel.app/api/mcp"
    }
  }
}
```

## Adding New Markdown Files

1. Add new `.md` files to the `app/content/` directory
2. The filename (without `.md`) becomes the ID
3. The MCP server will automatically detect and expose the new file

Example:
- Add file: `app/content/my-tutorial.md`
- Access via tool: `read_markdown({ id: "my-tutorial" })`
- Access via resource: `markdown://my-tutorial`

## Usage Examples

### In Cursor AI Chat

Once configured, you can ask Cursor:
- "Read the getting-started markdown file"
- "List all available markdown documentation"
- "Show me the introduction content"

The AI will use the MCP tools to fetch and display the content.

### Programmatic Access

```typescript
// Using AI SDK with MCP client
import { createMCPClient } from '@modelcontextprotocol/sdk/client/index.js';

const client = createMCPClient({
  url: 'http://localhost:3000/api/mcp',
});

// List available files
const files = await client.callTool('list_markdown_files', {});

// Read specific file
const content = await client.callTool('read_markdown', { 
  id: 'getting-started' 
});
```

## API Endpoints

In addition to the MCP server, the following REST API is also available:

- **GET** `/api/read/{id}` - Read markdown content by ID
- **OPTIONS** `/api/read/{id}` - List all available markdown files

## Security Notes

- File IDs are sanitized to prevent directory traversal attacks
- Only files in the `app/content/` directory are accessible
- Only alphanumeric characters, hyphens, and underscores are allowed in IDs

## Troubleshooting

### MCP Inspector won't connect
- Ensure your dev server is running (`npm run dev`)
- Check that the URL is correct: `http://localhost:3000/api/mcp`
- Verify the port matches your Next.js dev server

### Markdown file not found
- Verify the file exists in `app/content/`
- Check that the filename matches the ID (case-sensitive)
- Ensure the file has a `.md` extension

### Tools not showing in Cursor
- Restart Cursor after updating `mcp.json`
- Check that the MCP server URL is accessible
- Verify the JSON configuration is valid

