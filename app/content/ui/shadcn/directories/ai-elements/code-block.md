## Code Block

Provides syntax highlighting, line numbers, and copy to clipboard functionality for code blocks.

The CodeBlock component provides syntax highlighting, line numbers, and copy to clipboard functionality for code blocks.

## Installation

```bash
npx ai-elements@latest add code-block
```

## Usage

```tsx
import { CodeBlock, CodeBlockCopyButton } from '@/components/ai-elements/code-block';

<CodeBlock 
  code="console.log('hello world')" 
  language="jsx"
>
  <CodeBlockCopyButton 
    onCopy={() => console.log('Copied code to clipboard')}
    onError={(error) => console.log('Failed to copy code to clipboard', error)}
  />
</CodeBlock>
```

## Usage with AI SDK

Build a simple code generation tool using the experimental useObject hook.

Add the following component to your frontend:

```tsx
// app/page.tsx
'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import { codeBlockSchema } from '@/app/api/codegen/route';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import {
  CodeBlock,
  CodeBlockCopyButton,
} from '@/components/ai-elements/code-block';
import { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState('');
  const { object, submit, isLoading } = useObject({
    api: '/api/codegen',
    schema: codeBlockSchema,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      submit(input);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        {/* Component implementation... */}
      </div>
    </div>
  );
}
```

Add the following route to your backend:

```tsx
// api/codegen/route.ts
import { streamObject } from 'ai';
import { z } from 'zod';

export const codeBlockSchema = z.object({
  language: z.string(),
  filename: z.string(),
  code: z.string(),
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const context = await req.json();

    const result = streamObject({
        model: 'openai/gpt-4o',
        schema: codeBlockSchema,
        prompt: "You are a helpful coding assistant. Only generate code, no markdown formatting or backticks, or text",
        context,
    });

    return result.toTextStreamResponse();
}
```

## Features

- Syntax highlighting with react-syntax-highlighter
- Line numbers (optional)
- Copy to clipboard functionality
- Automatic light/dark theme switching
- Customizable styles
- Accessible design

## Examples

### Dark Mode

To use the CodeBlock component in dark mode, you can wrap it in a div with the dark class.

```tsx
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}
```

## Props

### <CodeBlock />

| Prop | Type |
| code? | string |
| language? | string |
| showLineNumbers? | boolean |
| children? | React.ReactNode |
| className? | string |
| ...props? | React.HTMLAttributes<HTMLDivElement> |

### <CodeBlockCopyButton />

| Prop | Type |
| onCopy? | () => void |
| onError? | (error: Error) => void |
| timeout? | number |
| children? | React.ReactNode |
| className? | string |
| ...props? | React.ComponentProps<typeof Button> |
