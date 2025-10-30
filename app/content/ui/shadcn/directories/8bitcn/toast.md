---
title: Toast
description: Displays an 8-bit toast component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/toast
```

## Usage

```tsx showLineNumbers
import { Toaster } from "@/components/ui/sonner"
      
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

```tsx showLineNumbers
import { toast } from "@/components/ui/8bit/toast"
```
