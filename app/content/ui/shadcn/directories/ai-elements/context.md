## Context

A compound component system for displaying AI model context window usage, token consumption, and cost estimation.

The Context component provides a comprehensive view of AI model usage through a compound component system. It displays context window utilization, token consumption breakdown (input, output, reasoning, cache), and cost estimation in an interactive hover card interface.

## Installation

```bash
npx ai-elements@latest add context
```

## Usage

```tsx
import {
  Context,
  ContextTrigger,
  ContextContent,
  ContextContentHeader,
  ContextContentBody,
  ContextContentFooter,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextCacheUsage,
} from '@/components/ai-elements/context';

<Context maxTokens={128000} usedTokens={40000} modelId="openai:gpt-4">
  <ContextTrigger />
  <ContextContent>
    <ContextContentHeader />
    <ContextContentBody>
      <ContextInputUsage />
      <ContextOutputUsage />
      <ContextReasoningUsage />
      <ContextCacheUsage />
    </ContextContentBody>
    <ContextContentFooter />
  </ContextContent>
</Context>
```

## Features

- Compound Component Architecture: Flexible composition of context display elements
- Visual Progress Indicator: Circular SVG progress ring showing context usage percentage
- Token Breakdown: Detailed view of input, output, reasoning, and cached tokens
- Cost Estimation: Real-time cost calculation using the tokenlens library
- Intelligent Formatting: Automatic token count formatting (K, M, B suffixes)
- Interactive Hover Card: Detailed information revealed on hover
- Context Provider Pattern: Clean data flow through React Context API
- TypeScript Support: Full type definitions for all components
- Accessible Design: Proper ARIA labels and semantic HTML
- Theme Integration: Uses currentColor for automatic theme adaptation

## Props

### <Context />

| Prop | Type |
| maxTokens? | number |
| usedTokens? | number |
| usage? | LanguageModelUsage |
| modelId? | ModelId |
| ...props? | ComponentProps<HoverCard> |

### <ContextTrigger />

| Prop | Type |
| children? | React.ReactNode |
| ...props? | ComponentProps<Button> |

### <ContextContent />

| Prop | Type |
| className? | string |
| ...props? | ComponentProps<HoverCardContent> |

### <ContextContentHeader />

| Prop | Type |
| children? | React.ReactNode |
| ...props? | ComponentProps<"div"> |

### <ContextContentBody />

| Prop | Type |
| children? | React.ReactNode |
| ...props? | ComponentProps<"div"> |

### <ContextContentFooter />

| Prop | Type |
| children? | React.ReactNode |
| ...props? | ComponentProps<"div"> |

## Usage Components

All usage components (ContextInputUsage, ContextOutputUsage, ContextReasoningUsage, ContextCacheUsage) share the same props:

| Prop | Type |
| children? | React.ReactNode |
| className? | string |
| ...props? | ComponentProps<"div"> |

## Component Architecture

The Context component uses a compound component pattern with React Context for data sharing:

1. `<Context>` - Root provider component that holds all context data
2. `<ContextTrigger>` - Interactive trigger element (default: button with percentage)
3. `<ContextContent>` - Hover card content container
4. `<ContextContentHeader>` - Header section with progress visualization
5. `<ContextContentBody>` - Body section for usage breakdowns
6. `<ContextContentFooter>` - Footer section for total cost
7. Usage Components - Individual token usage displays (Input, Output, Reasoning, Cache)

## Token Formatting

The component uses Intl.NumberFormat with compact notation for automatic formatting:

- Under 1,000: Shows exact count (e.g., "842")
- 1,000+: Shows with K suffix (e.g., "32K")
- 1,000,000+: Shows with M suffix (e.g., "1.5M")
- 1,000,000,000+: Shows with B suffix (e.g., "2.1B")

## Cost Calculation

When a modelId is provided, the component automatically calculates costs using the tokenlens library:

- Input tokens: Cost based on model's input pricing
- Output tokens: Cost based on model's output pricing
- Reasoning tokens: Special pricing for reasoning-capable models
- Cached tokens: Reduced pricing for cached input tokens
- Total cost: Sum of all token type costs

Costs are formatted using Intl.NumberFormat with USD currency.

## Styling

The component uses Tailwind CSS classes and follows your design system:

- Progress indicator uses currentColor for theme adaptation
- Hover card has customizable width and padding
- Footer has a secondary background for visual separation
- All text sizes use the text-xs class for consistency
- Muted foreground colors for secondary information
