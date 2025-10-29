import { readFileSync } from "fs";
import { join } from "path";
import { redirect } from "next/navigation";
import { ContentPage } from "../components/content-page";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Home({ params }: PageProps) {
  const { slug } = await params;
  
  // Redirect root to /home
  if (!slug || slug.length === 0) {
    redirect("/home");
  }
  
  const id = slug.join("/");
  const markdownPath = join(process.cwd(), "app", "content", `${id}.md`);
  
  let initialContent = "";
  try {
    initialContent = readFileSync(markdownPath, "utf-8");
  } catch {
    initialContent = "# Content Not Found\n\nThe page you're looking for doesn't exist.";
  }

  return <ContentPage initialContent={initialContent} currentId={id} />;
}
