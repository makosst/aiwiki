## Workflow

## Controls

A styled controls component for React Flow-based canvases with zoom and fit view functionality.
[ ] Copy Markdown
[ ] Open

The Controls component provides interactive zoom and fit view controls for React Flow canvases. It includes a modern, themed design with backdrop blur and card styling.

The Controls component is designed to be used with the Canvas component. See the Workflow demo for a full example.

## Installation

ai-elements shadow manual

npx ai-elements@latest add controls

## Usage

import { Controls } from '@/components/ai-elements/controls';

<ReactFlow>
  <Controls />
</ReactFlow>

## Features

| Zoom in/out controls                              |
|-|
| ⚫ Fit view button to center and scale content    |
| • Rounded pill design with backdrop blur          |
| • Theme-aware card background                     |
| • Subtle drop shadow for depth                    |
| ⚫ Full TypeScript support                        |
| • Compatible with all React Flow control features |

## Props

## <Controls />

Prop: className?
Type: string

Prop: ...props?
Type: ComponentProps<typeof Controls>

< Connection
A custom connection line component for React Flow-based

Edge > Customizable edge components for React Flow canvases