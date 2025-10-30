---
title: Theme Selector
description: A complete theme selector component with dropdown selection and code copy functionality. Includes theme context provider for managing active themes across the application.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/theme-selector
```

## Usage

```tsx showLineNumbers
import { ActiveThemeProvider } from "@/components/active-theme"

// You can also overwrite your globals.css file
import "./retro-globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    ...
    <ActiveThemeProvider>
      {children}
    </ActiveThemeProvider>
    ...
  )
}
```

```tsx showLineNumbers
import { SelectThemeDropdown } from "@/components/select-theme-dropdown";
          
  export default function Component() {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <SelectThemeDropdown
      activeTheme={activeTheme}
      setActiveTheme={setActiveTheme}
    />
  )
}
```
