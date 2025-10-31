## Artifact

A container component for displaying generated content like code, documents, or other outputs with built-in actions.

The Artifact component provides a structured container for displaying generated content like code, documents, or other outputs with built-in header actions.

## Installation

```bash
npx ai-elements@latest add artifact
```

## Usage

```tsx
import {
  Artifact,
  ArtifactAction,
  ArtifactActions,
  ArtifactContent,
  ArtifactDescription,
  ArtifactHeader,
  ArtifactTitle,
} from '@/components/ai-elements/artifact';

<Artifact>
  <ArtifactHeader>
    <div>
      <ArtifactTitle>Dijkstra's Algorithm Implementation</ArtifactTitle>
      <ArtifactDescription>Updated 1 minute ago</ArtifactDescription>
    </div>
    <ArtifactActions>
      <ArtifactAction icon={CopyIcon} label="Copy" tooltip="Copy to clipboard" />
    </ArtifactActions>
  </ArtifactHeader>
  <ArtifactContent>
    Your content here
  </ArtifactContent>
</Artifact>
```

## Features

- Structured container with header and content areas
- Built-in header with title and description support
- Flexible action buttons with tooltips
- Customizable styling for all subcomponents
- Support for close buttons and action groups
- Clean, modern design with border and shadow
- Responsive layout that adapts to content
- TypeScript support with proper type definitions
- Composable architecture for maximum flexibility

## Examples

### With Code Display

```python
# Dijkstra's Algorithm Implementation
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    heap = [(0, start)]
    visited = set()

    while heap:
        current_distance, current_node = heapq.heappop(heap)
        if current_node in visited:
            continue
        visited.add(current_node)

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))

    return distances

# Example graph
graph = {
    # Graph definition...
}
```

## Props

### <Artifact />

| Prop | Type |
| ...props? | React.HTMLAttributes<HTMLDivElement> |

### <ArtifactHeader />

| Prop | Type |
| ...props? | React.HTMLAttributes<HTMLDivElement> |

### <ArtifactTitle />

| Prop | Type |
| ...props? | React.HTMLAttributes<HTMLParagraphElement> |

### <ArtifactDescription />

| Prop | Type |
| ...props? | React.HTMLAttributes<HTMLParagraphElement> |

### <ArtifactActions />

| Prop | Type |
| ...props? | React.HTMLAttributes<HTMLDivElement> |

### <ArtifactAction />

| Prop | Type |
| tooltip? | string |
| label? | string |
| icon? | LucideIcon |
| ...props? | React.ComponentProps<typeof Button> |

### <ArtifactClose />

| Prop | Type |
| ...props? | React.ComponentProps<typeof Button> |

### <ArtifactContent />

| Prop | Type |
| ...props? | React.HTMLAttributes<HTMLDivElement> |
