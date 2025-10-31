## Workflow

## Connection

A custom connection line component for React Flow-based canvases with animated bezier curve styling.
Copy Markdown
Open
The Connection component provides a styled connection line for React Flow canvases. It renders an animated bezier curve with a circle indicator at the target end, using consistent theming through CSS variables.
The Connection component is designed to be used with the Canvas component. See the Workflow demo for a full example.

## Installation

ai-elements shadow manual

npx ai-elements@latest add connection

## Usage

import { Connection } from '@/components/ai-elements/connection';

<ReactFlow connectionLineComponent={Connection} />

## Features

• Smooth bezier curve animation for connection lines

• Visual indicator circle at the target position

• Theme-aware styling using CSS variables

• Cubic bezier curve calculation for natural flow

• Lightweight implementation with minimal props

•Full TypeScript support with React Flow types

• Compatible with React Flow's connection system

## Props

## <Connection />

<connection />
Prop: fromX?
Type: number

Prop: fromY?
Type: number

Prop: toX?
Type: number

Prop: toY?
Type: number

< Canvas
A React Flow-based canvas component for building intera..

Controls > A styled controls component for React Flow-based canvas..