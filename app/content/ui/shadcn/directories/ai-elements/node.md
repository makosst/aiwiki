## Workflow

## Node

A composable node component for React Flow-based canvases with Card-based styling.

Copy Markdown
Open

The Node component provides a composable, Card-based node for React Flow canvases. It includes support for connection handles, structured layouts, and consistent styling using shadcn/ui components.

The Node component is designed to be used with the Canvas component. See the Workflow demo for a full example.

## Installation

ai-elements shadow manual

npx ai-elements@latest add node

## Usage

import {
  Node,
  NodeHeader,
  NodeTitle,
  NodeDescription,
  NodeAction,
  NodeContent,
  NodeFooter,
} from '@/components/ai-elements/node'

<Node handles={{ target: true, source: true }}>
<NodeHeader>
<NodeTitle>Node Title</NodeTitle>
<NodeDescription>Optional description</NodeDescription>
<NodeAction>
<Button>Action</Button>
</NodeAction>
</NodeHeader>
<NodeContent>
Main content goes here
</NodeContent>
<NodeFooter>
Footer content
</NodeFooter>
</Node>

## Features

| • Built on shadcn/ui Card components for consistent styling                       |
|-|
| • Automatic handle placement (left for target, right for source)                  |
| • Composable sub-components (Header, Title, Description, Action, Content, Footer) |
| • Semantic structure for organizing node information                              |
| • Pre-styled sections with borders and backgrounds                                |
| • Responsive sizing with fixed small width                                        |
| ⚫ Full TypeScript support with proper type definitions                           |
| • Compatible with React Flow's node system                                        |

## Props

<table><tr><th colspan="2"><Node></Node></th></tr><tr><td></td><td>Туре</td></tr><tr><td>handles?</td><td>(target: boolean; source: boolean; }</td></tr><tr><td>className?</td><td>string</td></tr><tr><td>...props?</td><td>ComponentProps&lt;typeof Card&gt;</td></tr><tr><td><NodeHeader></NodeHeader></td><td></td></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>className?</td><td>string</td></tr><tr><td>...props?</td><td>ComponentProps&lt;typeof CardHeader&gt;</td></tr><tr><td><NodeTitle></NodeTitle></td><td></td></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>... props?</td><td>ComponentProps&lt;typeof CardTitle&gt;</td></tr><tr><td><NodeDescription></NodeDescription></td><td></td></tr><tr><td>Prop</td><td>Type</td></tr><tr><td>... props?</td><td>ComponentProps&lt;typeof CardDescription&gt;</td></tr><tr><td><NodeAction></NodeAction></td><td></td></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>... props?</td><td>ComponentProps&lt;typeof CardAction&gt;</td></tr><tr><td><NodeContent></NodeContent></td><td></td></tr><tr><td>Prop</td><td>Type</td></tr></table>

className?: string
...props?: ComponentProps<typeof CardContent>

## <NodeFooter />

Prop: className?
Type: string

Prop: ...props?
Type: ComponentProps<typeof CardFooter>

< Edge
Customizable edge components for React Flow canvases

Panel > A styled panel component for React Flow-based canvases..