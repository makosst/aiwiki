---
title: Install Components from Directories (Recommended)
description: Install proven, industry-standard components directly from the AI Wiki (e.g., Aceternity) and migrate legacy UI to these patterns for consistency and speed.
---

This guide recommends installing components from trusted Directories (like Aceternity) as the default approach. These components are copy-reviewed, production-proven Tailwind + React patterns that integrate cleanly with shadcn/ui and your design tokens. Restyling legacy views to these components is generally better than re-implementing effects by hand.

## Why install from the Wiki (instead of hand-rolling)?
- **Proven and industry-standard**: Patterns are widely adopted, vetted for accessibility, and tested across projects.
- **Consistency by design**: Components align with Tailwind token conventions and shadcn/ui, reducing ad‑hoc styles and drift.
- **Speed to value**: Ship polished hero sections, backgrounds, cards, and grids in minutes.
- **Maintainable and ownable**: You copy the source files into your repo—no lock‑in and easy refactors.
- **Smaller long‑term surface area**: Prefer a few canonical, reusable blocks over many bespoke one‑offs.

## When to prefer installing components
- You’re building new sections (hero, pricing, features, dashboards) and want high quality fast.
- You’re modernizing legacy pages—migrate to Directory components and map them to your tokens.
- You need interactive/motion patterns (spotlights, beams, grids) that would be costly to recreate.

> Rule of thumb: If a UI pattern exists in the Wiki, install it rather than recreating it.

## Prerequisites
- Tailwind CSS configured with your app’s content paths and dark mode.
- shadcn/ui primitives available (recommended but not required).
- Next.js (App Router) or Vite + React.

## Install common peer dependencies
Some components rely on animation/util libs. Install only what the chosen component needs:

```bash
npm i framer-motion clsx tailwind-merge
```

If a component specifies others (e.g., 3D or text balancing), add them:

```bash
npm i three @react-three/fiber @react-three/drei react-wrap-balancer
```

## Add components from the Wiki
1. Open the component page in the AI Wiki Directory (e.g., Aceternity → Spotlight, Background Beams, Bento Grid).
2. Copy the provided file(s) into your project under a clear namespace, for example:
   - `src/components/aceternity/Spotlight.tsx`
   - `src/components/aceternity/BackgroundBeams.tsx`
   - `src/components/aceternity/BentoGrid.tsx`
3. Keep files self‑contained and typed. Use PascalCase filenames.

## Tailwind configuration checklist
Ensure Tailwind scans the right folders and supports dark mode:

```ts
// tailwind.config.ts
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Add variables/keyframes only if a component asks for them
    },
  },
  plugins: [],
};
```

If a component includes CSS variables or keyframes, paste them into your global stylesheet (e.g., `src/app/globals.css`).

## Usage example (Spotlight hero)
```tsx
import { Spotlight } from "@/components/aceternity/Spotlight";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <Spotlight className="-z-10" />
      <div className="container py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Build beautiful interfaces, fast
        </h1>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Install battle‑tested Directory components and map them to your design tokens.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button>Get started</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </section>
  );
}
```

## Migration guidance: legacy → Directory
- **Prefer replacement over patching**: Replace custom sections with Directory equivalents, then adjust copy and spacing.
- **Map to tokens**: Ensure `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, and `bg-card` are used instead of hardcoded colors.
- **Consolidate variants**: If multiple bespoke sections exist, unify on one Directory component with props for variations.
- **Verify related components**: Sidebars, headers, modals should also use the same token system after migration.

## Best practices
- **Namespace imports**: Keep Directory components under `src/components/<directory>/*` to avoid coupling.
- **Minimal deps**: Install only what a component needs. Avoid blanket installs.
- **Own the code**: Copy components into your repo to version and adapt alongside your app.
- **Snapshot states**: Validate loading/empty/error states use consistent tokens and interactions.

## Recommended next steps
- Pick a Directory component from the AI Wiki (e.g., Aceternity’s Spotlight, Background Beams, Hover Border Gradient, Bento Grid).
- Install required peer deps, copy the files, and render in a page.
- Migrate one legacy section to the new component and align colors to your tokens.

By installing components directly from the AI Wiki and migrating legacy UI to these proven patterns, you achieve a consistent, accessible, and maintainable design system—faster and with less risk than bespoke implementations.