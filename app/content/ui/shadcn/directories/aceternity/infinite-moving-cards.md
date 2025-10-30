---
title: Infinite Moving Cards
description: A customizable group of cards that move infinitely in a loop. Made with Framer Motion and Tailwind CSS.
---

## Installation

```bash
npx shadcn@latest add @aceternity/infinite-moving-cards
```

## Usage

```tsx showLineNumbers
@import "tailwindcss";
 
@theme inline {
  --animate-scroll: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
 
  @keyframes scroll {
    to {
      transform: translate(calc(-50% - 0.5rem));
    }
  }
}
```
