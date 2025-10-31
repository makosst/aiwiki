## Chatbot

## Suggestion

A suggestion component that displays a horizontal row of clickable suggestions for user interaction.
<icon-button><copy-icon></icon-button> Copy Markdown 
Open

The Suggestion component displays a horizontal row of clickable suggestions for user interaction.

<change><u>Preview</u></change>
Code

What are the latest trends in AI?
How does machine learning work?
Explain quantum computing
Best pra

## Installation

ai-elements shadcn manual

nox ai-elements@latest add suggestion

## Usage

import { Suggestion, Suggestions } from '@components/ai-elements/suggestion';

<Suggestions>
  <Suggestion suggestion="What are the latest trends in AI?" />
</Suggestions>

## Usage with Al SDK

Build a simple input with suggestions users can click to send a message to the LLM.

Add the following component to your frontend:

app/page.tsx

'use client';

import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { Suggestion, Suggestions } from '@/components/ai-elements/suggestion';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';

const suggestions = [
  "Can you explain how to play tennis?",
  "What is the weather in Tokyo?",
  "How do I make a really good fish taco?",
];

const SuggestionDemo = () => {
  const [input, setInput] = useState('');
  const { sendMessage, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <div>
      <PromptInput
        placeholder="Type your message here"
        onSubmit={handleSubmit}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={status === 'sending'}
      />
      <Suggestions
        suggestions={suggestions}
        onClick={handleSuggestionClick}
      />
    </div>
  );
};

const handleSuggestionClick = (suggestion: string) => {
  sendMessage({ text: suggestion });
};

## Features

| • Horizontal row of clickable suggestion buttons               |
|-|
| • Customizable styling with variant and size options           |
| • Flexible layout that wraps suggestions on smaller screens    |
| .onClick callback that emits the selected suggestion string    |
| • Support for both individual suggestions and suggestion lists |
| • Clean, modern styling with hover effects                     |
| • Responsive design with mobile-friendly touch targets         |
| ⚫ TypeScript support with proper type definitions             |

## Examples

## Usage with Al Input

<change><u>Preview</u></change> Code

What are the latest trends in AI?
How does machine learning work?
Explain quantum computing
Best pra

Ask me about anything...

+ 
<change><s>mic</s></change>
Search
GPT-4
<change><u>Send</u></change>

## Props

## <Suggestions />

Prop: ...props?
Type: React.ComponentProps<typeof ScrollArea>

<Suggestion />
Prop: suggestion?
Type: string

Prop: onClick?
Type: (suggestion: string) => void

Prop: ...props?
Type: Omit<React.ComponentProps<typeof Button>, "onClick" >

< Sources
A component that allows a user to view the sources or cita..

Task > A collapsible task list component for displaying AI workflo