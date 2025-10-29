import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Sanitize the ID to prevent directory traversal attacks
    // Allow alphanumeric, hyphens, underscores, and forward slashes (for directories)
    const sanitizedId = id
      .replace(/\.\./g, '')  // Remove ".." sequences
      .replace(/[^a-zA-Z0-9-_/]/g, '')  // Allow only safe characters + slashes
      .replace(/^\/+|\/+$/g, '')  // Remove leading/trailing slashes
      .replace(/\/+/g, '/');  // Replace multiple slashes with single slash
    
    // Prevent empty path after sanitization
    if (!sanitizedId) {
      return NextResponse.json(
        { error: 'Invalid file ID' },
        { status: 400 }
      );
    }
    
    // Construct the file path
    const filePath = join(process.cwd(), 'app', 'content', `${sanitizedId}.md`);
    
    // Check if file exists
    if (!existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Markdown file not found' },
        { status: 404 }
      );
    }
    
    // Read the file
    const content = await readFile(filePath, 'utf-8');
    
    // Return the content
    return NextResponse.json({
      id: sanitizedId,
      content,
    });
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: Add a function to list all available markdown files
export async function OPTIONS() {
  const { readdir } = await import('fs/promises');
  const contentDir = join(process.cwd(), 'app', 'content');
  
  try {
    const files = await readdir(contentDir);
    const markdownFiles = files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
    
    return NextResponse.json({
      availableIds: markdownFiles,
    });
  } catch (error) {
    console.error('Error listing markdown files:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

