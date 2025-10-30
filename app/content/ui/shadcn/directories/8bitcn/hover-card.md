---
title: Hover Card
description: Displays an 8-bit hover card component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/hover-card
```

## Usage

```tsx showLineNumbers
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/8bit/hover-card"
```

```tsx showLineNumbers
<HoverCard>
  <HoverCardTrigger>
      <Button variant="link">Hover</Button>
  </HoverCardTrigger>
  <HoverCardContent>For the Horde! ⚔️</HoverCardContent>
</HoverCard>
```
