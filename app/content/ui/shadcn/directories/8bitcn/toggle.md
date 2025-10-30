---
title: Toggle
description: Displays an 8-bit toggle component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/toggle
```

## Usage

```tsx showLineNumbers
// Basic outline toggle
<Toggle variant="outline">
  <Bold className="size-4" />
</Toggle>

// With text
<Toggle variant="outline">
  <Italic className="size-4" />
  <span>Italic</span>
</Toggle>

// Disabled outline toggle
<Toggle variant="outline" disabled>
  <Underline className="size-4" />
  <span>Disabled</span>
</Toggle>
```
