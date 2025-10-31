## Chatbot

## Open In Chat

A dropdown menu for opening queries various Al chat platforms including ChatGPT, Claude, T3, Scira, and v0.

[ ] Copy Markdown
Open

The OpenIn component provides a dropdown menu that allows users O open queries in different Al chat platforms with a single click.

Preview
Code

Open in chat

## Installation

ai-elements shadcn manual

npx ai-elements@latest add open-in-chat

## Usage

import {
  OpenIn,
  OpenInChatGPT,
  OpenInClaude,
  OpenInContent,
  OpenInCursor,
  OpenInScira,
  OpenInT3,
  OpenInTrigger,
  OpenInv0,
} from '@/components/ai-elements/open-in-chat';

<OpenIn query="How can I implement authentication in Next.js?">
<OpenInTrigger />
<OpenInContent>
<OpenInChatGPT />
<OpenInClaude />
<OpenInT3 />
<OpenInScira />
<OpenInv0 />
<OpenInCursor />
</OpenInContent>
</OpenIn>

## Features

| • Pre-configured links to popular Al chat platforms              |
|-|
| • Context-based query passing for cleaner API                    |
| • Customizable dropdown trigger button                           |
| Automatic URL parameter encoding for queries                     |
| • Support for ChatGPT, Claude, T3 Chat, Scira Al, vo, and Cursor |
| ⚫ Branded icons for each platform                               |
| ⚫ TypeScript support with proper type definitions               |
| Accessible dropdown menu with keyboard navigation                |
| • External link indicators for clarity                           |

## Supported Platforms

• ChatGPT - Opens query in OpenAl's ChatGPT with search hints

⚫ Claude - Opens query in Anthropic's Claude Al

⚫T3 Chat - Opens query in T3 Chat platform

⚫ Scira Al - Opens query in Scira's Al assistant

• vo-Opens query in Vercel's vo platform

• Cursor - Opens query in Cursor Al editor

Props

<OpenIn />

Prop: query?
Type: string

Prop: ...props?
Type: React.ComponentProps<typeof DropdownMenu>

## <OpenInTrigger />

Prop: children?
Type: React.ReactNode

Prop: ...props?
Type: React.ComponentProps<typeof DropdownMenuTrigger>

## <OpenInContent />

Prop: className?
Type: string

Prop: ...props?
Type: React.ComponentProps<typeof DropdownMenuContent>

## <OpenInChatGPT />, <OpenInClaude />, <OpenInT3 />, <OpenInScira />, <OpenInvⓇ />, <OpenInCursor />

Prop: ...props?
Type: React.ComponentProps<typeof DropdownMenuItem>

<OpenInItem />, <OpenInLabel />, <OpenInSeparator />
Additional composable components for custom dropdown menu items, labels, and separators that follow the same props pattern as their underlying radix-ui counterparts.

< Message
Displays a chat interface message from either a user or an..

Plan > A collapsible plan component for displaying AI-generated