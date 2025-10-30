---
title: Aurora Background
description: A subtle Aurora or Southern Lights background for your website.
---

## Installation

```bash
npx shadcn@latest add @aceternity/aurora-background
```

## Usage

```tsx showLineNumbers
@import "tailwindcss";
 
@theme inline {
  --animate-aurora: aurora 60s linear infinite;
  @keyframes aurora {
    from {
      background-position:
        50% 50%,
        50% 50%;
    }
    to {
      background-position:
        350% 50%,
        350% 50%;
    }
  }
}
```
