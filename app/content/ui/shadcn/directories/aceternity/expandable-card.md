---
title: Expandable Card
description: Click cards to expand them and show additional information
---

## Installation

```bash
npx shadcn@latest add @aceternity/expandable-card-demo-standard @aceternity/expandable-card-demo-grid
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
