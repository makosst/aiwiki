## Plan

A collapsible plan component for displaying AI-generated execution plans with streaming support and shimmer animations.

The Plan component provides a flexible system for displaying AI-generated execution plans with collapsible content. Perfect for showing multi-step workflows, task breakdowns, and implementation strategies with support for streaming content and loading states.

## Installation

```bash
npx ai-elements@latest add plan
```

## Usage

```tsx
import {
  Plan,
  PlanAction,
  PlanContent,
  PlanDescription,
  PlanFooter,
  PlanHeader,
  PlanTitle,
  PlanTrigger,
} from '@/components/ai-elements/plan';

<Plan defaultOpen={false}>
  <PlanHeader>
    <PlanTitle>Implement new feature</PlanTitle>
    <PlanDescription>
      Add authentication system with JWT tokens and refresh logic.
    </PlanDescription>
    <PlanTrigger />
  </PlanHeader>
  <PlanContent>
    <div className="space-y-4 text-sm">
      <div>
        <h3 className="mb-2 font-semibold">Overview</h3>
        <p>This plan outlines the implementation strategy...</p>
      </div>
    </div>
  </PlanContent>
  <PlanFooter>
    <Button>Execute Plan</Button>
  </PlanFooter>
</Plan>
```

## Features

- Collapsible content with smooth animations
- Streaming support with shimmer loading states
- Built on shadcn/ui Card and Collapsible components
- TypeScript support with comprehensive type definitions
- Customizable styling with Tailwind CSS
- Responsive design with mobile-friendly interactions
- Keyboard navigation and accessibility support
- Theme-aware with automatic dark mode support
- Context-based state management for streaming

## Props

### <Plan />

| Prop | Type |
| isStreaming? | boolean |
| defaultOpen? | boolean |
| ...props? | React.ComponentProps<typeof Collapsible> |

### <PlanHeader />

| Prop | Type |
| ...props? | React.ComponentProps<typeof CardHeader> |

### <PlanTitle />

| Prop | Type |
| children? | string |
| ...props? | Omit<React.ComponentProps<typeof CardTitle>, "children"> |

### <PlanDescription />

| Prop | Type |
| children? | string |
| ...props? | Omit<React.ComponentProps<typeof CardDescription>, "children"> |

### <PlanTrigger />

| Prop | Type |
| ...props? | React.ComponentProps<typeof CollapsibleTrigger> |

### <PlanContent />

| Prop | Type |
| ...props? | React.ComponentProps<typeof CardContent> |

### <PlanFooter />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <PlanAction />

| Prop | Type |
| ...props? | React.ComponentProps<typeof Button> |
