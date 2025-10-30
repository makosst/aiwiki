---
title: Accordion
description: Displays an 8-bit accordion component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/accordion
```

## Usage

```tsx showLineNumbers
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/8bit/accordion"
```

```tsx showLineNumbers
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```
