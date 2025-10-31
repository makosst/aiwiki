## Chatbot

## Task

A collapsible task list component for displaying AI workflow progress, with status indicators and optional descriptions.
[x] Copy Markdown 
Open

The Task component provides a structured way to display task lists or workflow progress with collapsible details, status indicators, and progress tracking. It consists of a main Task container with TaskTrigger for the clickable header and TaskContent for the collapsible content area.

[ ] Found project files
Searching "app/page.tsx, components structure"
Read page.tsx
Scanning 52 files
Scanning 2 files
Reading files layout.tsx

## Installation

ai-elements shadow manual

npx ai-elements@latest add task

## Usage

<table><tr><th>import {</th><th>0</th></tr><tr><td>Task</td><td></td></tr><tr><td>TaskContent</td><td></td></tr><tr><td>TaskIten,</td><td></td></tr><tr><td>TaskItemFile.</td><td></td></tr><tr><td>TaskTrigger,</td><td></td></tr><tr><td>) from '@/components/a1-elements/task";</td><td></td></tr><tr><td></td><td></td></tr><tr><td>&lt;Task className="w-full"&gt;</td><td>0</td></tr><tr><td>&lt;TaskTrigger title-'Found project files" /&gt;</td><td></td></tr><tr><td>&lt;TaskContent&gt;</td><td></td></tr><tr><td>&lt;TaskItem&gt;</td><td></td></tr><tr><td>Read <TaskItemFile>index.md</TaskItemFile></td><td></td></tr><tr><td>&lt;/TaskItem&gt;</td><td></td></tr><tr><td>&lt;/TaskContent&gt;</td><td></td></tr><tr><td>&lt;/Task&gt;</td><td></td></tr></table>

## Usage with AI SDK

Build a mock async programming agent using experimental generateObject

Add the following component to your frontend:

app/page.tsx

'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import {
	Task,
	TaskItem,
	TaskItemFile,
	TaskTrigger,
	TaskContent,
} from '@/components/ai-elements/task';
import { Button } from '@/components/ui/button';
import { tasksSchema } from '@/app/api/task/route';
import {
	SiReact,
	SiTypescript,
	SiJavascript,
	SiCss,
	SiHtml5,
	SiJson,
	SiMarkdown,
} from '@icons-pack/react-simple-icons';

const iconMap = {
	react: { component: SiReact, color: '#149ECA' },
	typescript: { component: SiTypescript, color: '#3178C6' },
	javascript: { component: SiJavascript, color: '#F7DF1E' },
	css: { component: SiCss, color: '#1572B6' },
	html: { component: SiHtml5, color: '#E34F26' },
	json: { component: SiJson, color: '#000000' },
	markdown: { component: SiMarkdown, color: '#000000' },
};

Add the following route to your backend:

TS app/api/agent.ts

[ ] 0

import streamObject } from 'ai';
import {z} from "zod';

export const taskItemSchema = z.object({
type: z.enum(['text', 'file']).
text: z.string().
file: z
.object({
name: z.string().
icon: z.string(),
color: z.string().optional().
})
.optional().
});

export const taskSchema z.object({
title: z.string().
items: z.array(taskItemSchema),
status: z.enum(['pending', 'in progress', 'completed']).
});

export const tasksSchema z.object({
tasks: z.array(taskSchema),
});

// Allow streaming responses up to 30 seconds
export const maxDuration 30;

export async function POST(req: Request) {
const { prompt } = await req.json();

const result streamObject(

## Features

| • Visual icons for pending, in-progress, completed, and error states   |
|-|
| • Expandable content for task descriptions and additional information  |
| • Built-in progress counter showing completed vs total tasks           |
| • Optional progressive reveal of tasks with customizable timing        |
| • Support for custom content within task items                         |
| Full type safety with proper TypeScript definitions                    |
| • Keyboard navigation and screen reader support                        |

## Props

<table><tr><th><Task></Task></th><th></th></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>...props?</td><td>React.ComponentProps&lt;typeof Collapsible&gt;</td></tr><tr><td><TaskTrigger></TaskTrigger></td><td></td></tr><tr><td>Prop</td><td>Type</td></tr><tr><td>title?</td><td>string</td></tr><tr><td>... props?</td><td>React.ComponentPrope&lt;typeof CollapsibleTrigger&gt;</td></tr><tr><td colspan="2"><TaskContent></TaskContent></td></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>... props?</td><td>React.ComponentProps&lt;typeof CollapsibleContent&gt;</td></tr><tr><td colspan="2"><TaskItem></TaskItem></td></tr><tr><td>Prop</td><td>Type</td></tr><tr><td>...props?</td><td>React.ComponentProps&lt;"div"&gt;</td></tr><tr><td><TaskItemFile></TaskItemFile></td><td></td></tr><tr><td>Prop</td><td>Type</td></tr><tr><td>... props?</td><td>React.ComponentProps&lt;"div"&gt;</td></tr><tr><td></td><td></td></tr><tr><td colspan="2">&lt; Suggestion Tool &gt;</td></tr><tr><td colspan="2">A suggestion component that displays a horizontal row of... A collapsible component r displaying tool invocation det...</td></tr></table>