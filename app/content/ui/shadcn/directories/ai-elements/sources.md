## Sources

A component that allows a user to view the sources or citations used to generate a response.

The Sources component allows a user to view the sources or citations used to generate a response.

## Installation

```bash
npx ai-elements@latest add sources
```

## Usage

```tsx
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@/components/ai-elements/sources';

<Sources>
  <SourcesTrigger count={1} />
  <SourcesContent>
    <Source href="https://ai-sdk.dev" title="AI SDK" />
  </SourcesContent>
</Sources>
```

## Usage with AI SDK

Build a simple web search agent with Perplexity Sonar.

Add the following component to your frontend:

```tsx
// app/page.tsx
'use client';

import { useChat } from '@ai-sdk/react';
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@/components/ai-elements/sources';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import { Response } from '@/components/ai-elements/response';
import { useState } from 'react';
import { DefaultChatTransport } from 'ai';

const SourceDemo = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/sources',
    }),
  });
};
```

Add the following route to your backend:

```tsx
// api/chat/route.ts
import { streamText, convertToModelMessages } from 'ai';
import { perplexity } from '@ai-sdk/perplexity';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: perplexity('sonar'),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
```

## Features

- Displays source count with expandable trigger
- List of sources with clickable links
- Supports titles and descriptions for sources
- Clean, accessible design
- Theme-aware styling

## Props

### <Sources />

| Prop | Type |
| ...props? | React.ComponentProps<typeof Accordion> |

### <SourcesTrigger />

| Prop | Type |
| count? | number \| string |
| ...props? | React.ComponentProps<typeof AccordionTrigger> |

### <SourcesContent />

| Prop | Type |
| ...props? | React.ComponentProps<typeof AccordionContent> |

### <Source />

| Prop | Type |
| href? | string |
| title? | string |
| description? | string |
| ...props? | React.ComponentProps<"a"> |
