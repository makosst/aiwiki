## Workflow

An example of how to use the Al Elements to build a workflow visualization.

Copy Markdown Open

An example of how to use the Al Elements to build a workflow visualization with interactive nodes and animated connections, built with React Flow.

The image shows a blank React Flow workflow visualization in "Preview" mode. It features zoom controls and a lock icon in the lower left corner. The top left corner has tabs for "Preview" and "Code".

## Tutorial

Let's walk through how to build a workflow visualization using Al Elements. Our example will include custom nodes with headers, content, and footers, along with animated and temporary edge types.

## Setup

First, set up a new Next.js repo and cd into it by running the following command (make sure you choose to use Tailwind in the project setup):

- Create a new Next.js app (choose Tailwind when prompted):
  - `npx create-next-app@latest ai-workflow && cd ai-workflow`
- Install AI Elements (also sets up shadcn/ui if not already configured):
  - `npx ai-elements@latest`
- Install required dependency (example using npm):
  - `npm i @xyflow/react`
- Final note: Now ready to start building the workflow.

## Client

Let's build the workflow visualization step by step. We'll create the component structure, define our nodes and edges, and configure the canvas.

## Import the components

First, import the necessary Al Elements components in your app/page. tsx:

The image shows the code snippet for `app/page.tsx`, which includes:

*   `'use client';`
*   Import statements for various AI Elements components such as `Canvas`, `Connection`, `Controls`, `Edge`, `Node`, `Panel`, `Toolbar`, and `Button`. These components are imported from different paths under `@/components/ai-elements/` or `@/components/ui/`.

## Define node IDs

Create a constant object manage node identifiers. This makes it easier to reference nodes when creating edges:

The image shows a code snippet from `app/page.tsx` that defines a constant object called `nodeIds`. The `nodeIds` object contains key-value pairs where each key represents a node identifier and its corresponding value is a string representing the same identifier.

| Key        | Value        |
|------------|--------------|
| start      | 'start'      |
| process1   | 'process1'   |
| process2   | 'process2'   |
| decision   | 'decision'   |
| output1    | 'output1'    |
| output2    | 'output2'    |


:

## Create mock nodes

Define the nodes array with position, type, and data for each node in your workflow:

app/page.tsx

const nodes = [
  {
    id: nodeIds.start,
    type: 'workflow',
    position: { x: 0, y: 0 },
    data: {
      label: 'Start',
      description: 'Initialize workflow',
      handles: { target: false, source: true },
      content: 'Triggered by user action at 09:30 AM',
      footer: 'Status: Ready'
    }
  },
  {
    id: nodeIds.process1,
    type: 'workflow',
    position: { x: 500, y: 0 },
    data: {
      label: 'Process Data',
      description: 'Transform input',
      handles: { target: true, source: true },
      content: 'Validating 1,234 records and applying business rules',
      footer: 'Duration: -2.5s'
    }
  },
  {
    id: nodeIds.decision,
    type: 'workflow',
    position: { x: 1000, y: 0 },
    data: {
      label: 'Decision Point',
      description: 'Route based on conditions'
    }
  }
]

## Create mock edges

Define the connections between nodes. Use animated for active paths and temporary for conditional or error paths:

app/page.tsx [ ] 0

const edges - [

id: 'edge1'
source: nodeIds.start,
target: nodeIds.process1,
type: 'animated',

id: 'edge2'
source: nodeIds.process1,
target: nodeIds.decision,
type: 'animated'

id edge3',
source: nodeIds.decision,
target: nodeIds.output1,
type: 'animated'

id: 'edge4'
source: nodeIds.decision,
target: nodeIds.output2,
type: 'temporary'.

id: 'edge5'
source: nodeIds.output1,
target: nodeIds.process2,
type: 'animated'

## Create the node types

Define custom node rendering using the compound Node components:

app/page.tsx [ ] 0

const nodeTypes = (
workflow: ((
data,

data: {
label: string;
description: string;
handles: {target: boolean; source: boolean);
content: string:
footer: string;
};
) + ((
<Node handles (data.handles)>
<NodeHeader>
<NodeTitle>(data.label)</NodeTitle>
<NodeDescription>(data.description}</NodeDescription>
</NodeHeader>
<NodeContent>
<p className="text-sm">(data.content)</p>
</NodeContent>
<NodeFooter>
<p className="text-muted-foreground text-xs">(data.footer)</p>
</NodeFooter>
<Toolbar>
<Button size="sm" variant="ghost">
Edit
</Button>
<Button size='am' variant="ghost">
Delete
</Button>
</Toolbar>
</Nodes

## Create the edge types

Map the edge type names to the Edge components:

app/page.tsx

const edgeTypes = {
  animated: Edge.Animated,
  temporary: Edge.Temporary,
};

## Build the main component

Finally, create the main component that renders the Canvas with all nodes, edges, controls, and custom Ul panels:

app/page.tsx

const App = ()⇒(
<Canvas

0 [ ]

edges={edges}
edgeTypes={edgeTypes}
fitView
nodes={nodes}
nodeTypes={nodeTypes}
connectionLineComponent={(Connection) => {
  return (
    <Controls />
    <Panel position="top-left">
      <Button size="sm" variant="secondary">Export</Button>
    </Panel>
  );
}}
<Canvas></Canvas>

export default App;

## Key Features

The workflow visualization demonstrates several powerful features:

⚫ Custom Node Components: Each node uses the compound components (NodeHeader, NodeTitle, NodeDescription, NodeContent, NodeFooter) for consistent, structured layouts.

⚫ Node Toolbars: The Toolbar component attaches contextual actions (like Edit and Delete buttons) individual nodes, appearing when hovering or selecting them.

• Handle Configuration: Nodes can have source and/or target handles, controlling which connections are possible.

• Multiple Edge Types: The animated type shows active data flow, while temporary indicates conditional or error paths.

• Custom Connection Lines: The Connection component provides styled bezier curves when dragging new connections between nodes.

• Interactive Controls: The Controls component adds zoom in/out and fit view buttons with a modern, themed design.

• Custom UI Panels: The Panel component allows you to position custom I elements (like buttons, filters, or legends) anywhere on the canvas.

• Automatic Layout: The Canvas component auto-fits the view and provides pan/zoom controls out of the box.

You now have a working workflow visualization! Feel free to explore dynamic workflows by connecting this to Al- generated process flows, or extend it with interactive editing capabilities using React Flow's built-in features.

< v0 clone

An example of how to use the AI Elements to build a v0 cl.

Actions > A row of composable action buttons for AI responses, inclu