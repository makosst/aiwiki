## Shimmer

An animated text shimmer component for creating eye-catching loading states and progressive reveal effects.

The Shimmer component provides an animated shimmer effect that sweeps across text, perfect for indicating loading states, progressive reveals, or drawing attention to dynamic content in AI applications.

## Installation

```bash
npx ai-elements@latest add shimmer
```

## Usage

```tsx
import { Shimmer } from '@/components/ai-elements/shimmer';

<Shimmer>Loading your response...</Shimmer>
```

## Features

- Smooth animated shimmer effect using CSS gradients and Framer Motion
- Customizable animation duration and spread
- Polymorphic component - render as any HTML element via the as prop
- Automatic spread calculation based on text length
- Theme-aware styling using CSS custom properties
- Infinite looping animation with linear easing
- TypeScript support with proper type definitions
- Memoized for optimal performance
- Responsive and accessible design
- Uses text-transparent with background-clip for crisp text rendering

## Examples

### Different Durations

- Fast (1 second): Loading quickly...
- Default (2 seconds): Loading at normal speed...
- Slow (4 seconds): Loading slowly...
- Very Slow (6 seconds): Loading very slowly...

### Custom Elements

- As paragraph (default): This is rendered as a paragraph
- As heading: Large Heading with Shimmer
- As span (inline): Processing your request with AI magic.
- As div with custom styling: Custom styled shimmer text

## Props

### <Shimmer />

| Prop | Type |
| children? | string |
| as? | ElementType |
| className? | string |
| duration? | number |
| spread? | number |
