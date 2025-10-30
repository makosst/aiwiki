---
title: Skeleton
description: Displays an 8-bit skeleton component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/skeleton
```

## Usage

```tsx showLineNumbers
import { Skeleton } from "@/components/ui/8bit/skeleton"
```

```tsx showLineNumbers
<div className="flex flex-col space-y-5">
    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    <div className="space-y-4">
        <Skeleton className="h-5 w-[250px]" />
        <Skeleton className="h-5 w-[200px]" />
    </div>
</div>
```
