---
title: Calendar
description: Displays an 8-bit calendar component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/calendar
```

## Usage

```tsx showLineNumbers
import { Calendar } from "@/components/ui/8bit/calendar"
```

```tsx showLineNumbers
const [date, setDate] = React.useState<Date | undefined>(new Date())
      
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>
```
