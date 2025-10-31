## Message

Displays a chat interface message from either a user or an AI.

The Message component displays a chat interface message from either a user or an AI. It includes an avatar, a name, and a message content.

## Installation

```bash
npx ai-elements@latest add message
```

## Usage

```tsx
import { Message, MessageContent } from '@/components/ai-elements/message';

// Default contained variant
<Message from="user">
  <MessageContent>Hi there!</MessageContent>
</Message>

// Flat variant for a minimalist look
<Message from="assistant">
  <MessageContent variant="flat">Hello! How can I help you today?</MessageContent>
</Message>
```

## Usage with AI SDK

Render messages in a list with useChat.

Add the following component to your frontend:

```tsx
// app/page.tsx
'use client';

import { Message, MessageContent } from '@/components/ai-elements/message';
import { useChat } from '@ai-sdk/react';
import { Response } from '@/components/ai-elements/response';

const MessageDemo = () => {
  const { messages } = useChat();

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        {messages.map((message) => (
          <Message from={message.role} key={message.id}>
            <MessageContent>
              {message.parts.map((part, i) => {
                switch (part.type) {
                  case 'text':
                    return (
                      <Response key={`${message.id}-${i}`}>
                        {part.text}
                      </Response>
                    );
                  default:
                    return null;
                }
              })}
            </MessageContent>
          </Message>
        ))}
      </div>
    </div>
  );
};
```

## Features

- Displays messages from both the user and assistant with distinct styling
- Two visual variants: contained (default) and flat for different design preferences
- Includes avatar images for message senders with fallback initials
- Shows the sender's name through avatar fallbacks
- Automatically aligns user and assistant messages on opposite sides
- Uses different background colors for user and assistant messages
- Accepts any React node message content

## Variants

### Contained (default)

The contained variant provides distinct visual separation with colored backgrounds:

- User messages appear with primary background color and are right-aligned
- Assistant messages have secondary background color and are left-aligned
- Both message types have padding and rounded corners

### Flat

The flat variant offers a minimalist design that matches modern AI interfaces like ChatGPT and Gemini:

- User messages use softer secondary colors with subtle borders
- Assistant messages display full-width without background or padding
- Creates a cleaner, more streamlined conversation appearance

## Notes

Always render the AIMessageContent first, then the AIMessageAvatar. The AIMessage component is a wrapper that determines the alignment of the message.

## Examples

### Render Markdown

We can use the Response Component to render markdown content.

### Flat Variant

The flat variant provides a minimalist design that matches modern AI interfaces.

## Props

### <Message />

| Prop | Type |
| from? | UIMessage["role"] |
| ...props? | React.HTMLAttributes<HTMLDivElement> |

### <MessageContent />

| Prop | Type |
| variant? | "contained" \| "flat" |
| ...props? | React.HTMLAttributes<HTMLDivElement> |

### <MessageAvatar />

| Prop | Type |
| src? | string |
| name? | string |
| ...props? | React.ComponentProps<typeof Avatar> |
