## Reasoning

A collapsible component that displays AI reasoning content, automatically opening during streaming and closing when finished.

The Reasoning component displays reasoning content, automatically opening during streaming and closing when finished.

## Installation

```bash
npx ai-elements@latest add reasoning
```

## Usage

```tsx
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';

<Reasoning className="w-full" isStreaming={false}>
  <ReasoningTrigger />
  <ReasoningContent>
    I need to compute the square of 2.
  </ReasoningContent>
</Reasoning>
```

## Usage with AI SDK

Build a chatbot with reasoning using Deepseek R1.

Add the following component to your frontend:

```tsx
// app/page.tsx
'use client';

import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { Loader } from '@/components/ai-elements/loader';
import { Message, MessageContent } from '@/components/ai-elements/message';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { Response } from '@/components/ai-elements/response';

const ReasoningDemo = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage({ text: input });
    setInput('');
  };

  return (
    <div>
      {/* Component implementation... */}
    </div>
  );
};

export default ReasoningDemo;
```

Add the following route to your backend:

```tsx
// app/api/chat/route.ts
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { model, messages }: { messages: UIMessage[]; model: string } =
        await req.json();

    const result = streamText({
      model: 'deepseek/deepseek-r1',
      messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse({
      sendReasoning: true,
    });
}
```

## Features

- Automatically opens when streaming content and closes when finished
- Manual toggle control for user interaction
- Smooth animations and transitions powered by Radix UI
- Visual streaming indicator with pulsing animation
- Composable architecture with separate trigger and content components
- Built with accessibility in mind including keyboard navigation
- Responsive design that works across different screen sizes
- Seamlessly integrates with both light and dark themes
- Built on top of shadcn/ui Collapsible primitives
- TypeScript support with proper type definitions

## Props

### <Reasoning />

| Prop | Type |
| isStreaming? | boolean |
| ...props? | React.ComponentProps<typeof Collapsible> |

### <ReasoningTrigger />

| Prop | Type |
| title? | string |
| ...props? | React.ComponentProps<typeof CollapsibleTrigger> |

### <ReasoningContent />

| Prop | Type |
| ...props? | React.ComponentProps<typeof CollapsibleContent> |
