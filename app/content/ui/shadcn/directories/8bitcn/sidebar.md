---
title: Sidebar
description: Displays a simple 8-bit sidebar component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/sidebar
```

## Usage

```tsx showLineNumbers
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/8bit/blocks/sidebar"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        {children}
      </main>
    </SidebarProvider>
  )
}
```
