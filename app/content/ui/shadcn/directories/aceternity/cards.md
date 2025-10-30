---
title: Cards
description: A set of cards that can be used for different use cases
---

## Installation

```bash
npx shadcn@latest add @aceternity/cards-demo-1 @aceternity/cards-demo-2 @aceternity/cards-demo-3
```

## Usage

```tsx showLineNumbers
import type { Config } from "tailwindcss";
 
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  plugins: [],
};
 
export default config;
```
