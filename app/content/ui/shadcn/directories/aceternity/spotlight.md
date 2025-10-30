---
title: Spotlight
description: A spotlight effect with Tailwind CSS, good for drawing attention to a particular element on the page.
---

## Installation

```bash
npx shadcn@latest add @aceternity/spotlight
```

## Usage

```tsx showLineNumbers
@import "tailwindcss";
 
@theme inline {
  --animate-spotlight: spotlight 2s ease 0.75s 1 forwards;
}
 
@keyframes spotlight {
  0% {
    opacity: 0;
    transform: translate(-72%, -62%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -40%) scale(1);
  }
}
```
