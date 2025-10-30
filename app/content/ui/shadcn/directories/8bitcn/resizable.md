---
title: Resizable
description: Displays an 8-bit resizable panel component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/resizable
```

## Usage

```tsx showLineNumbers
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/8bit/resizable"
```

```tsx showLineNumbers
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
```
