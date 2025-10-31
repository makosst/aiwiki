## Confirmation

An alert-based component for managing tool execution approval workflows with request, accept, and reject states.

The Confirmation component provides a flexible system for displaying tool approval requests and their outcomes. Perfect for showing users when AI tools require approval before execution, and displaying the approval status afterward.

## Installation

```bash
npx ai-elements@latest add confirmation
```

## Usage

```tsx
import {
  Confirmation,
  ConfirmationContent,
  ConfirmationRequest,
  ConfirmationAccepted,
  ConfirmationRejected,
  ConfirmationActions,
  ConfirmationAction,
} from '@/components/ai-elements/confirmation';

<Confirmation approval={{ id: 'tool-1' }} state="approval-requested">
  <ConfirmationContent>
    <ConfirmationRequest>
      This tool wants to access your file system. Do you approve?
    </ConfirmationRequest>
    <ConfirmationAccepted>
      <CheckIcon className="size-4" />
      <span>Approved</span>
    </ConfirmationAccepted>
    <ConfirmationRejected>
      <XIcon className="size-4" />
      <span>Rejected</span>
    </ConfirmationRejected>
  </ConfirmationContent>
  <ConfirmationActions>
    <ConfirmationAction variant="outline" onClick={handleReject}>
      Reject
    </ConfirmationAction>
    <ConfirmationAction variant="default" onClick={handleApprove}>
      Approve
    </ConfirmationAction>
  </ConfirmationActions>
</Confirmation>
```

## Usage with AI SDK

Build a chat UI with tool approval workflow where dangerous tools require user confirmation before execution.

Add the following component to your frontend:

```tsx
// app/page.tsx
'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type ToolUIPart } from 'ai';
import { useState } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Confirmation,
  ConfirmationContent,
  ConfirmationRequest,
  ConfirmationAccepted,
  ConfirmationRejected,
  ConfirmationActions,
  ConfirmationAction,
} from '@/components/ai-elements/confirmation';
import { Response } from '@/components/ai-elements/response';

type DeleteFileInput = {
  filePath: string;
  confirm: boolean;
};

type DeleteFileToolUIPart = ToolUIPart<{
  delete_file: {
    input: DeleteFileInput;
    output: { success: boolean; message: string };
  };
}>;

const Example = () => {
  // Component implementation...
};
```

Add the following route to your backend:

```tsx
// app/api/chat/route.tsx
import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { z } from 'zod';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model: 'openai/gpt-4o',
        messages: convertToModelMessages(messages),
        tools: {
            delete_file: {
                description: "Delete a file from the file system",
                parameters: z.object({
                    filePath: z.string().describe('The path to the file to delete'),
                    confirm: z
                        .boolean()
                        .default(false)
                        .describe('Confirmation that the user wants to delete the file')
                })
            }
        },
        requireApproval: true, // Enable approval workflow
        execute: async ({ filePath, confirm }) => {
            if (!confirm) {
                return {
                    success: false,
                    message: 'Deletion not confirmed'
                };
            }

            // Simulate file deletion
            await new Promise(resolve => setTimeout(resolve, 1000));
            return {
                success: true,
                message: `File ${filePath} deleted successfully`
            };
        }
    });

    return new Response(result.stream());
}
```

## Features

- Context-based state management for approval workflow
- Conditional rendering based on approval state
- Support for approval-requested, approval-responded, output-denied, and output-available states
- Built on shadcn/ui Alert and Button components
- TypeScript support with comprehensive type definitions
- Customizable styling with Tailwind CSS
- Keyboard navigation and accessibility support
- Theme-aware with automatic dark mode support

## Examples

### Approval Request State

Shows the approval request with action buttons when state is approval-requested.

### Approved State

Shows the accepted status when user approves and state is approval-responded or output-available.

### Rejected State

Shows the rejected status when user rejects and state is output-denied.

## Props

### <Confirmation />

| Prop | Type |
| approval? | ToolUIPart['approval'] |
| state? | ToolUIPart['state'] |
| className? | string |
| ...props? | React.ComponentProps<typeof Alert> |

### <ConfirmationContent />

| Prop | Type |
| className? | string |
| ...props? | React.ComponentProps<typeof AlertDescription> |

### <ConfirmationRequest />

| Prop | Type |
| children? | React.ReactNode |

### <ConfirmationAccepted />

| Prop | Type |
| children? | React.ReactNode |

### <ConfirmationRejected />

| Prop | Type |
| children? | React.ReactNode |

### <ConfirmationActions />

| Prop | Type |
| className? | string |
| ...props? | React.ComponentProps<"div"> |

### <ConfirmationAction />

| Prop | Type |
| ...props? | React.ComponentProps<typeof Button> |
