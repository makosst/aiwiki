## Chatbot

An example of how to use the AI Elements to build a chatbot.
Copy Markdown Open

An example of how to use the Al Elements to build a chatbot.

Key information from the image:

**When to use which?**

*   **useCallback when:**
    *   Passing callbacks to optimized child components that rely on reference equality
    *   Working with event handlers that you pass to child components
*   **useMemo when:**
    *   You have computationally expensive calculations
    *   You want to avoid recreating objects that are used as dependencies for other hooks

**Performance Note:** Don't overuse these hooks!

The image also shows an AI chatbot interface with suggested questions and a search bar. The chatbot is using the GPT-4 model.

## Tutorial

Let's walk through how o build a chatbot using Al Elements and Al SDK. Our example will include reasoning, web search with citations, and a model picker.

## Setup

First, set up a new Next.js repo and cd into it by running the following command (make sure you choose to use Tailwind the project setup):

Terminal
npx create-next-app@latest ai-chatbot && cd ai-chatbot

Run the following command to install Al Elements. This will also set up shadcn/ui if you haven't already configured

it:

Terminal

nox ai-elements@latest

Now, install the AI SDK dependencies:

npm pnpm yarn bun

npm i ai @ai-sdk/react zod

In order to use the providers, let's configure an Al Gateway API key. Create a .env.local in your root directory and navigate here to create a token, then paste it in your .env.local.

We're now ready to start building our app!

## Client

In your app/page. tsx, replace the code with the file below.

Here, we use the PromptInput component with its compound components to build a rich input experience with file attachments, model picker, and action menu. The input component uses the new PromptInputMessage type for handling both text and file attachments.

The whole chat lives in a Conversation. We switch on message.parts and render the respective part within Message, Reasoning, and Sources. We also use status from useChat to stream reasoning tokens, as well as render Loader.

app/page.tsx

'use client';

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  type PromptInputMessage,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
}

PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import { Action, Actions } from '@/components/ai-elements/actions';
import { Fragment, useState } from 'react';

## Server

Create a new route handler app/api/chat/route.ts and paste in the following code. We're using perplexity/sonar for web search because by default the model returns search results. We also pass sendSources and sendReasoning to toUIResponse in order to receive as parts on the frontend. The handler now also accepts file attachments from the client.

app/api/chat/route.ts

import { streamText, UI_MESSAGE, convertToModelMessages } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const {
        messages,
        model,
        webSearch,
    }: {
        messages: UI_MESSAGE[];
        model: string;
        webSearch: boolean;
    } = await req.json();

    const result = streamText({
        model: webSearch ? 'perplexity/sonar' : model,
        messages: convertToModelMessages(messages),
        system:
            'You are a helpful assistant that can answer questions and help with tasks',
    });

    // send sources and reasoning back to the client
    return result.toUI_MESSAGE_STREAM_RESPONSE({
        sendSources: true,
        sendReasoning: true,
    });
}

You now have a working chatbot app with file attachment support! The chatbot can handle both text and file inputs through the action menu. Feel free to explore other components like Tool or Task to extend your app, or view the other examples.

< MCP Server
AI Elements supports the Model Context Protocol (MCP) fo..

v0 clone > An example of how to use the AI Elements to build a v0 cl.