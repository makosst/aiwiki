## Image

Displays AI-generated images from the AI SDK.

The Image component displays AI-generated images from the AI SDK. It accepts an Experimental GeneratedImage object from the AI SDK's generateImage function and automatically renders it as an image.

## Installation

```bash
npx ai-elements@latest add image
```

## Usage

```tsx
import { Image } from '@/components/ai-elements/image';

<Image
  base64="valid base64 string"
  mediaType="image/jpeg"
  uint8Array={new Uint8Array([])}
  alt="Example generated image"
  className="h-[150px] aspect-square border"
/>
```

## Usage with AI SDK

Build a simple app allowing a user to generate an image given a prompt.

Install the @ai-sdk/openai package:

```bash
npm install @ai-sdk/openai
```

Add the following component to your frontend:

```tsx
// app/page.tsx
'use client';

import { Image } from '@/components/ai-elements/image';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { useState } from 'react';
import { Loader } from '@/components/ai-elements/loader';

const ImageDemo = () => {
  const [prompt, setPrompt] = useState('A futuristic cityscape at sunset');
  const [imageData, setImageData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/image', {
        method: 'POST',
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      const data = await response.json();
      setImageData(data);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
      setPrompt('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <PromptInputTextarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image you want to generate..."
        />
        <PromptInputSubmit disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Image'}
        </PromptInputSubmit>
      </form>

      {isLoading && <Loader />}
      {imageData && <Image {...imageData} />}
    </div>
  );
};

export default ImageDemo;
```

Add the following route to your backend:

```tsx
// app/api/image/route.ts
import { generateImage } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await generateImage({
    model: openai('dall-e-3'),
    prompt,
  });

  return Response.json(result);
}
```

## Props

### <Image />

| Prop | Type |
| base64? | string |
| mediaType? | string |
| uint8Array? | Uint8Array |
| alt? | string |
| className? | string |
| ...props? | React.ComponentProps<"img"> |
