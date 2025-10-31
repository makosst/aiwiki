## Chain of Thought

A collapsible component that visualizes AI reasoning steps with support for search results, images, and step-by-step progress indicators.

The ChainOfThought component provides a visual representation of an AI's reasoning process, showing step-by-step thinking with support for search results, images, and progress indicators. It helps users understand how AI arrives at conclusions.

## Installation

```bash
npx ai-elements@latest add chain-of-thought
```

## Usage

```tsx
import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtImage,
  ChainOfThoughtSearchResult,
  ChainOfThoughtSearchResults,
  ChainOfThoughtStep,
} from '@/components/ai-elements/chain-of-thought';

<ChainOfThought defaultOpen>
  <ChainOfThoughtHeader />
  <ChainOfThoughtContent>
    <ChainOfThoughtStep
      icon={SearchIcon}
      label="Searching for information"
      status="complete"
    >
      <ChainOfThoughtSearchResults>
        <ChainOfThoughtSearchResult>
          Result 1
        </ChainOfThoughtSearchResult>
      </ChainOfThoughtSearchResults>
    </ChainOfThoughtStep>
  </ChainOfThoughtContent>
</ChainOfThought>
```

## Features

- Collapsible interface with smooth animations powered by Radix UI
- Step-by-step visualization of AI reasoning process
- Support for different step statuses (complete, active, pending)
- Built-in search results display with badge styling
- Image support with captions for visual content
- Custom icons for different step types
- Context-aware components using React Context API
- Fully typed with TypeScript
- Accessible with keyboard navigation support
- Responsive design that adapts to different screen sizes
- Smooth fade and slide animations for content transitions
- Composable architecture for flexible customization

## Props

### <ChainOfThought />

| Prop | Type |
| open? | boolean |
| defaultOpen? | boolean |
| onOpenChange? | (open: boolean) => void |
| ...props? | React.ComponentProps<"div"> |

### <ChainOfThoughtHeader />

| Prop | Type |
| children? | React.ReactNode |
| ...props? | React.ComponentProps<typeof CollapsibleTrigger> |

### <ChainOfThoughtStep />

| Prop | Type |
| icon? | LucideIcon |
| label? | string |
| description? | string |
| status? | "complete" \| "active" \| "pending" |
| ...props? | React.ComponentProps<"div"> |

### <ChainOfThoughtSearchResults />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <ChainOfThoughtSearchResult />

| Prop | Type |
| ...props? | React.ComponentProps<typeof Badge> |

### <ChainOfThoughtContent />

| Prop | Type |
| ...props? | React.ComponentProps<typeof CollapsibleContent> |

### <ChainOfThoughtImage />

| Prop | Type |
| caption? | string |
| ...props? | React.ComponentProps<"div"> |
