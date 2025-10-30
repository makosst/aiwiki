---
title: Grid And Dot Backgrounds
description: A simple grid and dots background to make your sections stand out.
---

## Installation

```bash
npx shadcn@latest add @aceternity/grid-and-dot-backgrounds
```

## Usage

```tsx showLineNumbers
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
