## Workflow

## Edge

| Customizable edge components for React Flow canvases with animated and temporary states.                       | Customizable edge components for React Flow canvases with animated and temporary states.                       |
| Copy Markdown                                                                                                  | Open                                                                                                           |
| The Edge component provides two pre-styled edge types for React Flow canvases: Temporary for dashed            | The Edge component provides two pre-styled edge types for React Flow canvases: Temporary for dashed            |
| temporary connections and Animated for connections with animated indicators.                                   | temporary connections and Animated for connections with animated indicators.                                   |
| The Edge component is designed to be used with the Canvas component. See the Workflow demo for a full example. | The Edge component is designed to be used with the Canvas component. See the Workflow demo for a full example. |

## Installation

ai-elements shadow manual

npx ai-elements@latest add edge

## Usage

| import Edge } from '@/components/ai-elements/edge'; 0   | import Edge } from '@/components/ai-elements/edge'; 0   |
| const edgeTypes (                                       | 0                                                       |
| temporary: Edge. Temporary.                             |                                                         |
| animated: Edge. Animated,                               |                                                         |
| };                                                      |                                                         |
| <Canvas                                                 |                                                         |
| nodes (nodes)                                           |                                                         |
| edges (edges)                                           |                                                         |
| edgeTypes (edgeTypes)                                   |                                                         |
| 1>                                                      |                                                         |

## Features

| • Two distinct edge types: Temporary and Animated            |
|-|
| • Temporary edges use dashed lines with ring color           |
| • Animated edges include a moving circle indicator           |
| Automatic handle position calculation                        |
| . Smart offset calculation based on handle type and position |
| • Uses Bezier curves for smooth, natural-looking connections |
| • Fully compatible with React Flow's edge system             |
| • Type-safe implementation with TypeScript                   |

## Edge Types

Edge. Temporary

A dashed edge style for temporary or preview connections. Uses a simple Bezier path with a dashed stroke pattern.

## Edge. Animated

A solid edge with an animated circle that moves along the path. The animation repeats indefinitely with a 2-second duration, providing visual feedback for active connections.

## Props

Both edge types accept standard React Flow EdgeProps:

| Prop            | Туре                |
| id?             | string              |
| Source?         | string              |
| target?         | string              |
| sourceX?        | number              |
| SourceY?        | number              |
| targetX?        | number              |
| targetY?        | number              |
| sourcePosition? | Position            |
| targetPosition? | Position            |
| markerEnd?      | string              |
| style?          | React.CSSProperties |

| < Controls                                                 | Node>                                                   |
| A styled controls component for React Flow-based canvas... | A composable node component for React Flow-based can... |