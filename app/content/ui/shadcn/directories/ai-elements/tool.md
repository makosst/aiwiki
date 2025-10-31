## Chatbot

## Tool

A collapsible component for displaying tool invocation details in AI chatbot interfaces.

Copy Markdown
Open

The Tool component displays a collapsible interface for showing/hiding tool details. It is designed to take the ToolUIPart type from the AI SDK and display it in a collapsible interface.

Preview

database_query:
[ ] Pending
PARAMETERS: <empty>

database_query:
[x] Awaiting Approval

database_query:
[x] Responded

database_query:
[ ] Running

database_query:
[x] Completed

database_query:
[x] Error

database_query:
[x] Denied

## Installation

ai-elements shadow manual

npx ai-elements@latest add tool

## Usage

import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolOutput,
  ToolInput,
} from '@/components/ai-elements/tool';

<Tool>
  <ToolHeader type="tool-call" state={'output-available' as const} />
  <ToolContent>
    <ToolInput input="Input to tool call" />
    <ToolOutput errorText="Error" output="Output from tool call" />
  </ToolContent>
</Tool>

## Usage in Al SDK

Build a simple stateful weather app that renders the last message in a tool using useChat

Add the following component to your frontend:

app/page.tsx

'use client';

import { useChat } from '@ai-sdk/react';
import {
  DefaultChatTransport,
  type ToolUIPart
} from 'ai';
import { Button } from '@/components/ui/button';
import { Response } from '@/components/ai-elements/response';
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from '@/components/ai-elements/tool';

type WeatherToolInput = {
  location: string;
  units: 'celsius' | 'fahrenheit';
};

type WeatherToolOutput = {
  location: string;
  temperature: string;
  conditions: string;
  humidity: string;
  windSpeed: string;
  lastUpdated: string;
};

type WeatherToolUIPart = ToolUIPart<{
  fetch_weather_data: {
    input: WeatherToolInput;
    output: WeatherToolOutput;

Add the following route to your backend:

app/api/weather/route.tsx

import { streamText, UIMessage, convertToModelMessages } from "ai";
import { z } from "zod";

// Allow streaming responses up to 30 seconds

## export const maxDuration 30;

export async function POST(req: Request) {
const (messages): (messages: UIMessage[] ) await req.json();

const result streamText({
model: 'opena1/gpt-40'
messages: convertToModelMessages (messages).
tools: {
fetch weather data: {
description: 'Fetch weather information for a specific location',
parameters: z.object({
location: z
.string()
.describe('The city or location to get weather for'),
units: z
Lenum(['celsius', 'fahrenheit'])
.default('celsius')
.describe('Temperature units'),
}).
inputSchema: z.object({
location: z.string().
units: z.enun(['celsius', 'fahrenheit']).default('celsius'),
}),
execute: async ((location, units )) ( xecute:
await new Promise((resolve) setTimeout(resolve, 1500));

const tamn

## Features

| • Collapsible interface for showing/hiding tool details                           |
|-|
| • Visual status indicators with icons and badges                                  |
| • Support for multiple tool execution states (pending, running, completed, error) |
| • Formatted parameter display with JSON syntax highlighting                       |
| Result and error handling with appropriate styling                                |
| • Composable structure for flexible layouts                                       |
| ⚫ Accessible keyboard navigation and screen reader support                       |
| . Consistent styling that matches your design system                              |
| • Auto-opens completed tools by default for better UX                             |

## Examples

## Input Streaming (Pending)

Shows a tool in its initial state while parameters are being processed.

Preview Code

<key-icon> web_search 
[ ] Pending

## Input Available (Running)

Shows a tool that's actively executing with its parameters.

Preview Code

image_generation Running

## Output Available (Completed)

Shows a completed tool with successful results. Opens by default to show the results. In this instance, the output is a JSON object, so we can use the CodeBlock component to display it.

Preview Code

database_query 
[x] Completed

## Output Error

Shows a tool that encountered an error during execution. Opens by default to display the error.

Preview Code

api_request Error

## Props

<table><tr><th><Tool></Tool></th><th></th></tr><tr><td>Prop</td><td>Type</td></tr><tr><td>.props?</td><td>React.ComponentProps&lt;typeof Collapsible&gt;</td></tr><tr><td colspan="2"><ToolHeader></ToolHeader></td></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>type?</td><td>ToolUIPart["type"]</td></tr><tr><td>state?</td><td>ToolUIPart['state']</td></tr><tr><td>className?</td><td>string</td></tr><tr><td>...props?</td><td>React.ComponentProps&lt;typeof CollapsibleTrigger&gt;</td></tr><tr><td colspan="2"><ToolContent></ToolContent></td></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>.props?</td><td>React.ComponentPrope&lt;typeof CollapsibleContent&gt;</td></tr><tr><td><ToolInput></ToolInput></td><td></td></tr><tr><td>Prop</td><td>Type</td></tr><tr><td>input?</td><td>ToolUIPart['input']</td></tr><tr><td>... props?</td><td>React.ComponentProps&lt;"div"&gt;</td></tr><tr><td colspan="2"><ToolOutput></ToolOutput></td></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>output?</td><td>React.ReactNode</td></tr><tr><td>errorText?</td><td>ToolUIPart["errorText"]</td></tr><tr><td>... props?</td><td>React.ComponentProps&lt;"div"&gt;</td></tr><tr><td></td><td></td></tr><tr><td>&lt;Task</td><td>Canvas&gt;</td></tr><tr><td colspan="2">A collapsible task list component for displaying Al workflo.. A React Flow-based canvas component for building intera...</td></tr></table>