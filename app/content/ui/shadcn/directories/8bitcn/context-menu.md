---
title: Context Menu
description: Displays an 8-bit context menu component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/context-menu
```

## Usage

```tsx showLineNumbers
import { ContextMenu } from "@/components/ui/8bit/context-menu"
```

```tsx showLineNumbers
<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```
