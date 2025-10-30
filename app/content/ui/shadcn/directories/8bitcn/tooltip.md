---
title: Tooltip
description: Displays an 8-bit tooltip component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/tooltip
```

## Usage

```tsx showLineNumbers
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/8bit/tooltip"
```

```tsx showLineNumbers
<TooltipProvider>
    <Tooltip delayDuration={500}>
        <TooltipTrigger>
            <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
            <p>Add to library</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>
```
