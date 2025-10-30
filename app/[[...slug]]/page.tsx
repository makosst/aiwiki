import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { redirect } from "next/navigation";
import { ContentPage } from "../components/content-page";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Home({ params }: PageProps) {
  const { slug } = await params;
  
  // Redirect root to /home-for-humans
  if (!slug || slug.length === 0) {
    redirect("/home-for-humans");
  }
  
  const id = slug.join("/");
  const markdownPath = join(process.cwd(), "app", "content", `${id}.md`);
  const directoryPath = join(process.cwd(), "app", "content", id);
  
  let initialContent = "";
  
  // Try to read the markdown file
  if (existsSync(markdownPath)) {
    initialContent = readFileSync(markdownPath, "utf-8");
  } else if (existsSync(directoryPath) && statSync(directoryPath).isDirectory()) {
    // If directory exists but no markdown file, list children
    const children = readdirSync(directoryPath);
    const title = id.split("/").pop() || "Directory";
    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    
    initialContent = `# ${capitalizedTitle}\n\nAvailable pages:\n\n`;
    
    // List markdown files and subdirectories
    const items: { name: string; path: string; isDir: boolean }[] = [];
    const mdFiles = new Set<string>();
    
    // First pass: collect all .md files
    for (const child of children) {
      if (child.endsWith('.md')) {
        const name = child.replace('.md', '');
        mdFiles.add(name);
        items.push({ name, path: `${id}/${name}`, isDir: false });
      }
    }
    
    // Second pass: add directories that don't have a corresponding .md file
    for (const child of children) {
      const childPath = join(directoryPath, child);
      const isDirectory = statSync(childPath).isDirectory();
      
      if (isDirectory && !mdFiles.has(child)) {
        items.push({ name: child, path: `${id}/${child}`, isDir: true });
      }
    }
    
    // Sort: directories first, then files, both alphabetically
    items.sort((a, b) => {
      if (a.isDir && !b.isDir) return -1;
      if (!a.isDir && b.isDir) return 1;
      return a.name.localeCompare(b.name);
    });
    
    for (const item of items) {
      initialContent += `- [${item.name}](/${item.path})\n`;
    }
  } else {
    initialContent = "# Content Not Found\n\nThe page you're looking for doesn't exist.";
  }

  return <ContentPage initialContent={initialContent} currentId={id} />;
}
