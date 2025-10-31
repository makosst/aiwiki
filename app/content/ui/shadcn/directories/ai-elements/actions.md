## Actions

A row of composable action buttons for AI responses, including retry, like, dislike, copy, share, and custom actions.

The Actions component provides a flexible row of action buttons for AI responses with common actions like retry, like, dislike, copy, and share.

## Installation

```bash
npx ai-elements@latest add actions
```

## Usage

```tsx
import { Actions, Action } from '@/components/ai-elements/actions';
import { ThumbsUpIcon } from 'lucide-react';

<Actions className="mt-2">
  <Action label="Like">
    <ThumbsUpIcon className="size-4" />
  </Action>
</Actions>
```

## Usage with AI SDK

Build a simple chat UI where the user can copy or regenerate the most recent message.

Add the following component to your frontend:

```tsx
// app/page.tsx
'use client';

import { useState } from 'react';
import { Actions, Action } from '@/components/ai-elements/actions';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { Response } from '@/components/ai-elements/response';
import { RefreshCcwIcon, CopyIcon } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import { Fragment } from 'react';

const ActionsDemo = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status, regenerate } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  // Component implementation...
};
```

Add the following route to your backend:

```tsx
// api/chat/route.ts
import { streamText, UIMessage, convertToModelMessages } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { model, messages }: { messages: UIMessage[]; model: string } =
        await req.json();

    const result = streamText({
      model: 'openai/gpt-4o',
      messages: convertToModelMessages(messages),
    });

    return result.toUIResponseStream();
}
```

## Features

- Row of composable action buttons with consistent styling
- Support for custom actions with tooltips
- State management for toggle actions (like, dislike, favorite)
- Keyboard accessible with proper ARIA labels
- Clipboard and Web Share API integration
- TypeScript support with proper type definitions
- Consistent with design system styling

## Examples

This is a response from an assistant. Try hovering over this message to see the actions appear!

## Props

### <Actions />

| Prop | Type |
| ...props? | React.HTMLAttributes<HTMLDivElement> |

### <Action />

| Prop | Type |
| tooltip? | string |
| label? | string |
| ...props? | React.ComponentProps<typeof Button> |
