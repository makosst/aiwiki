---
title: Radio Group
description: Displays an 8-bit radio group component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/radio-group
```

## Usage

```tsx showLineNumbers
import { Label } from "@/components/ui/8bit/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/8bit/radio-group"
```

```tsx showLineNumbers
<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>
```
