## Conversation

Wraps messages and automatically scrolls to the bottom. Also includes a scroll button that appears when not at the bottom.

The Conversation component wraps messages and automatically scrolls to the bottom. Also includes a scroll button that appears when not at the bottom.

## Installation

```bash
npx ai-elements@latest add conversation
```

## Usage

```tsx
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';

<Conversation className="relative w-full" style={{ height: '500px' }}>
  <ConversationContent>
    {messages.length === 0 ? (
      <ConversationEmptyState
        icon={<MessageSquare className="size-12" />}
        title="No messages yet"
        description="Start a conversation to see messages here"
      />
    ) : (
      messages.map((message) => (
        <Message from={message.from} key={message.id}>
          <MessageContent>{message.content}</MessageContent>
        </Message>
      ))
    )}
  </ConversationContent>
  <ConversationScrollButton />
</Conversation>
```

## Usage with AI SDK

Build a simple conversational UI with Conversation and PromptInput.

Add the following component to your frontend:

```tsx
// app/page.tsx
'use client';

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { Response } from '@/components/ai-elements/response';

const ConversationDemo = () => {
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
    <div className="flex flex-col items-center justify-start h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">AI Chat Demo</h1>

      {/* AI Avatar */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 relative">
        <img src="/avatar.png" alt="AI Avatar" className="w-full h-full object-cover" />
        <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs text-white font-semibold">
          AI
        </span>
      </div>

      {/* Conversation Area */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4 mb-6 overflow-y-auto max-h-[calc(100vh-20rem)]">
        <Conversation>
          {messages.map((message, index) => (
            <Message key={index}>
              <MessageContent>{message.content}</MessageContent>
            </Message>
          ))}
          {status === 'loading' && <ConversationEmptyState />}
        </Conversation>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <PromptInputTextarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message here..." />

        <PromptInputSubmit disabled={status === 'submitting'}>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Send
          </button>
        </PromptInputSubmit>
      </form>
    </div>
  );
};

export default ConversationDemo;
```

Add the following route to your backend:

```tsx
// api/chat/route.ts
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages }: { messages: UIMessage[] } = await req.json();

	const result = streamText({
		model: 'openai/gpt-4o',
		messages: convertToModelMessages(messages),
	});

	return result.toUIMessageStreamResponse();
}
```

## Features

- Automatic scrolling to the bottom when new messages are added
- Smooth scrolling behavior with configurable animation
- Scroll button that appears when not at the bottom
- Responsive design with customizable padding and spacing
- Flexible content layout with consistent message spacing
- Accessible with proper ARIA roles for screen readers
- Customizable styling through className prop
- Support for any number of child message components

## Props

### <Conversation />

| Prop | Type |
| contextRef? | React.Ref<StickToBottomContext> |
| instance? | StickToBottomInstance |
| children? | ((context: StickToBottomContext) => ReactNode) \| ReactNode |
| ...props? | Omit<React.HTMLAttributes<HTMLDivElement>, "children"> |

### <ConversationContent />

| Prop | Type |
| children? | (context: StickToBottomContext) => ReactNode \| ReactNode |
| ...props? | Omit<React.HTMLAttributes<HTMLDivElement>, "children"> |

### <ConversationEmptyState />

| Prop | Type |
| title? | string |
| description? | string |
| icon? | React.ReactNode |
| children? | React.ReactNode |
| ...props? | ComponentProps<"div"> |

### <ConversationScrollButton />

| Prop | Type |
| ...props? | ComponentProps<typeof Button> |
