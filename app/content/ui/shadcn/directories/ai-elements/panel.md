## Workflow

## Panel

A styled panel component for React Flow-based canvases to position custom UI elements.

[ ] Copy Markdown
[ ] Open

The Panel component provides a positioned container for custom UI elements on React Flow canvases. It includes modern card styling with backdrop blur and flexible positioning options.
The Panel component is designed to be used with the Canvas component. See the Workflow demo for a full example.

## Installation

ai-elements shadow manual

npm ai-elements@latest add panel

## Usage

import { Panel } from '@/components/ai-elements/panel';

<ReactFlow>
  <Panel position="top-left">
    <Button>Custom Action</Button>
  </Panel>
</ReactFlow>

## Features

- Flexible positioning (top-left, top-right, bottom-left, bottom-right, top-center, bottom-center)
- Rounded pill design with backdrop blur
- Theme-aware card background
- Flexbox layout for easy content alignment
- Subtle drop shadow for depth
- Full TypeScript support
- Compatible with React Flow's panel system

## Props

## <Panel />

Prop: position?
Type: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
Prop: className?
Type: string
Prop: ...props?
Type: ComponentProps<typeof Panel>

< Node
A composable node component for React Flow-based can..

Toolbar > A styled toolbar component for React Flow nodes with file