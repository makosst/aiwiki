---
title: Apple Cards Carousel
description: A sleek and minimal carousel implementation, as seen on apple.com
---

## Installation

```bash
npx shadcn@latest add @aceternity/apple-cards-carousel
```

## Usage

```tsx showLineNumbers
import React, { useEffect } from "react";
 
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };
 
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
 
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
```

```tsx showLineNumbers
type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};
```
