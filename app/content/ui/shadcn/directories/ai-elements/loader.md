## Loader

A spinning loader component for indicating loading states in AI applications.

The Loader component provides a spinning animation to indicate loading states in your AI applications. It includes both a customizable wrapper component and the underlying icon for flexible usage.

## Installation

```bash
npx ai-elements@latest add loader
```

## Usage

```tsx
import { Loader } from '@/components/ai-elements/loader';

<Loader />
```

## Usage with AI SDK

Build a simple chat app that displays a loader before the response starts streaming using status === "submitted".

Add the following component to your frontend:

```tsx
// app/page.tsx
'use client';

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { Loader } from '@/components/ai-elements/loader';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';

const LoaderDemo = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        {/* Component implementation... */}
      </div>
    </div>
  );
};
```

Add the following route to your backend:

```tsx
// app/api/chat/route.ts
import { streamText, UIMessage, convertToModelMessages } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { model, messages }: { messages: UIMessage[]; model: string } =
		await req.json();

	const result = await streamText({
		model: "openai/gpt-4o",
		messages: convertToModelMessages(messages),
	});

	return result.toUIMessageStreamResponse();
}
```

## Features

- Clean, modern spinning animation using CSS animations
- Configurable size with the size prop
- Customizable styling with CSS classes
- Built-in animate-spin animation with proper centering
- Exports both AILoader wrapper and LoaderIcon for flexible usage
- Supports all standard HTML div attributes
- TypeScript support with proper type definitions
- Optimized SVG icon with multiple opacity levels for smooth animation
- Uses currentColor for proper theme integration
- Responsive and accessible design

## Examples

### Different Sizes

- Small (16px)
- Medium (24px)
- Large (32px)
- Extra Large (48px)

### Custom Styling

- Colors: Blue, Green, Purple, Orange
- Animations: Slow Animation, Fast Animation
- Background: With Background, Dark Background

## Props

### <Loader />

| Prop | Type |
| size? | number |
| ...props? | React.HTMLAttributes<HTMLDivElement> |
