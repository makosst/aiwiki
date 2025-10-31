## Response

A component that renders a Markdown response from a large language model.

The Response component renders a Markdown response from a large language model. It uses Streamdown under the hood to render the markdown.

## Installation

```bash
npx ai-elements@latest add response
```

Note: Requires adding `@source "../node_modules/streamdown/dist/index.js";` to `globals.css`.

## Usage

```tsx
import { Response } from '@/components/ai-elements/response';

<Response>Hi there. I am an AI model designed to help you.</Response>
```

## Usage with AI SDK

Populate a markdown response with messages from useChat.

Add the following component to your frontend:

```tsx
// app/page.tsx
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import { useChat } from '@ai-sdk/react';
import { Response } from '@/components/ai-elements/response';

const ResponseDemo = () => {
  const { messages } = useChat();

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <Conversation>
          <ConversationContent>
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
          </ConversationContent>
        </Conversation>
      </div>
    </div>
  );
};
```

## Features

- Renders markdown content with support for paragraphs, links, and code blocks
- Supports GFM features like tables, task lists, and strikethrough text via remark-gfm
- Supports rendering Math Equations via rehype-katex
- Smart streaming support - automatically completes incomplete formatting during real-time text streaming
- Code blocks are rendered with syntax highlighting for various programming languages
- Code blocks include a button to easily copy code to clipboard
- Adapts to different screen sizes while maintaining readability
- Seamlessly integrates with both light and dark themes
- Customizable appearance through className props and Tailwind CSS utilities
- Built with accessibility in mind for all users

## Props

### <Response />

| Prop | Type |
| children? | string |
| parseIncompleteMarkdown? | boolean |
| className? | string |
| components? | object |
| allowedImagePrefixes? | string[] |
| allowedLinkPrefixes? | string[] |
| defaultOrigin? | string |
| rehypePlugins? | array |
| remarkPlugins? | array |
| ...props? | React.HTMLAttributes<HTMLDivElement> |
