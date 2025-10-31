## Workflow

## Toolbar

A styled toolbar component for React Flow nodes with flexible positioning and custom actions.

Copy Markdown Open

The Toolbar component provides a positioned toolbar that attaches to nodes in React Flow canvases. It features modern card styling with backdrop blur and flexbox layout for action buttons and controls.

The Toolbar component is designed to be used with the Node component. See the Workflow demo for a full example.

## Installation

ai-elements shadow manual

npx ai-elements@latest add toolbar

## Usage

import { Toolbar } from '@/components/ai-elements/toolbar';

import { Toolbar } from "@/components/ai-elements/toolbar";
import { Button } from "@/components/ui/button";

const CustomNode = () => (
  <Node>
    <NodeContent></NodeContent>
    <Toolbar>
      <Button size="sm" variant="ghost">
        Edit
      </Button>
      <Button size="sm" variant="ghost">
        Delete
      </Button>
    </Toolbar>
  </Node>
);

## Features

| • Attaches to any React Flow node                    |
|-|
| Bottom positioning by default                        |
| Rounded card design with border                      |
| Theme-aware background styling                       |
| Flexbox layout with gap spacing                      |
| • Full TypeScript support                            |
| ■Compatible with all React Flow NodeToolbar features |

## Props

<Toolbar />

Prop: className?
Type: string

Prop: ...props?
Type: ComponentProps<typeof NodeToolbar>

<Panel>
A styled panel component for React Flow-based canvases...

<Artifact>
A container component for displaying generated content