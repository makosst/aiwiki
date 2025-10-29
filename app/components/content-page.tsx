'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/navigation';

interface ContentPageProps {
  initialContent: string;
  currentId: string;
}

export function ContentPage({ initialContent, currentId }: ContentPageProps) {
  const [content, setContent] = useState(initialContent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const loadContent = async (id: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Use Next.js router for navigation
      router.push(`/${id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load content');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    // Check if this is a markdown link (not starting with http)
    if (href && !href.startsWith('http')) {
      e.preventDefault();
      loadContent(href);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
      {/* Main content */}
      <div className="flex flex-1 items-center justify-center p-4">
        <article className="max-w-2xl w-full">
          {isLoading && (
            <div className="text-center text-zinc-600 dark:text-zinc-400">
              Loading...
            </div>
          )}
          
          {error && (
            <div className="text-red-600 dark:text-red-400 p-4 bg-red-50 dark:bg-red-950 rounded">
              Error: {error}
            </div>
          )}
          
          {!isLoading && !error && (
            <ReactMarkdown
              components={{
                h1: (props: any) => (
                  <h1 className="text-4xl font-bold mb-4 mt-0" {...props} />
                ),
                h2: (props: any) => (
                  <h2 className="text-2xl font-bold mt-8 mb-3" {...props} />
                ),
                h3: (props: any) => (
                  <h3 className="text-lg font-bold mt-6 mb-2" {...props} />
                ),
                p: (props: any) => (
                  <p className="mb-4 leading-relaxed text-zinc-900 dark:text-zinc-100" {...props} />
                ),
                ul: (props: any) => (
                  <ul className="list-disc list-inside mb-4 ml-4 text-zinc-900 dark:text-zinc-100" {...props} />
                ),
                li: (props: any) => (
                  <li className="mb-1" {...props} />
                ),
                a: (props: any) => (
                  <a
                    onClick={handleLinkClick}
                    className="text-blue-600 hover:underline dark:text-blue-400 cursor-pointer"
                    {...props}
                  />
                ),
                strong: (props: any) => (
                  <strong className="font-bold" {...props} />
                ),
                em: (props: any) => (
                  <em className="italic" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </article>
      </div>
    </div>
  );
}
