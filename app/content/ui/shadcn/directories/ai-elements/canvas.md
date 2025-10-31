## Workflow

## Canvas

A React Flow-based canvas component for building interactive node-based interfaces.
Copy Markdown Open

The Canvas component provides a React Flow-based canvas for building interactive node-based interfaces. It comes pre-configured with sensible defaults for Al applications, including panning, zooming, and selection behaviors.

The Canvas component is designed to be used with the Node and Edge components. See the Workflow demo for a full example.

## Installation

ai-elements shadcn manual

npx ai-elements@latest add canvas

## Usage

import { Canvas } from '@/components/ai-elements/canvas';
<Canvas nodes={nodes} edges={edges} nodeTypes={nodeTypes} edgeTypes={edgeTypes} />

## Features

| • Pre-configured React Flow canvas with Al-optimized defaults   |
|-|
| Pan on scroll enabled for intuitive navigation                  |
| • Selection on drag for multi-node operations                   |
| • Customizable background color using CSS variables             |
| • Delete key support (Backspace and Delete keys)                |
| • Auto-fit view to show all nodes                               |
| • Disabled double-click zoom for better UX                      |
| • Disabled pan on drag to prevent accidental canvas movement    |
| • Fully compatible with React Flow props and API                |

## Props

<Canvas />
Prop: children?
Type: ReactNode

Prop: ...props?
Type: ReactFlowProps

< Tool A collapsible component for displaying tool invocation det...
Connection > A custom connection line component for React Flow-base..