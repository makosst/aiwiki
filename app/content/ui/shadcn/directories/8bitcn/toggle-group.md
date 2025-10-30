---
title: Toggle Group
description: Displays an 8-bit toggle group component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/toggle-group
```

## Usage

```tsx showLineNumbers
<ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="size-4" />
      </ToggleGroupItem>
</ToggleGroup>
```

```tsx showLineNumbers
<ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="size-4" />
      </ToggleGroupItem>
</ToggleGroup>
```
