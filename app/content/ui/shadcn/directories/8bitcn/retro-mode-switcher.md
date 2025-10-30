---
title: Retro Mode Switcher
description: A retro-styled theme toggle component with pixel art sun and moon icons. Perfect for 8-bit themed applications that need a nostalgic theme switcher.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/retro-mode-switcher
```

## Usage

```tsx showLineNumbers
import { ThemeProvider } from "@/components/theme-provider"
 
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
```

```tsx showLineNumbers
import { RetroModeSwitcher } from "@/components/ui/retro-mode-switcher"
```
