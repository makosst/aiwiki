# Maintaining Consistent Styling Across Your Application

A comprehensive guide for restyling pages and maintaining a cohesive design system throughout your application.

## Core Principles

### 1. Use Design Tokens, Not Hardcoded Values

**Bad:**
```tsx
<div className="bg-zinc-950 text-zinc-100 border-zinc-800">
```

**Good:**
```tsx
<div className="bg-background text-foreground border-border">
```

**Why:** Design tokens (CSS variables) allow you to change your entire theme from one place, support dark/light modes automatically, and ensure consistency across all components.

## Step-by-Step Restyling Process

### Step 1: Audit Your Design System

Before making changes, identify your theme's color hierarchy:

1. **Background colors**: `background`, `card`, `popover`
2. **Foreground colors**: `foreground`, `muted-foreground`, `card-foreground`
3. **Interactive colors**: `primary`, `secondary`, `accent`, `destructive`
4. **Borders**: `border`, `input`, `ring`
5. **Specialized**: `sidebar`, `sidebar-accent`, etc.

**Action:** Check your `globals.css` or theme configuration file to see what variables are available.

### Step 2: Identify All States

Pages often have multiple states that need styling:

- ✅ **Loading state**: Spinners, skeletons, loading messages
- ✅ **Empty state**: No data, first-time user experience
- ✅ **Error state**: Error messages, 404, failed requests
- ✅ **Default/happy path**: Main content state
- ✅ **Authenticated/unauthenticated**: Different views for logged-in users

**Action:** List all possible states your page can be in, then style each one consistently.

### Step 3: Map Hardcoded Colors to Theme Variables

Create a mapping table:

| Old Hardcoded Value | New Theme Variable | Usage |
|---------------------|-------------------|-------|
| `bg-zinc-950` | `bg-background` | Page backgrounds |
| `text-zinc-100` | `text-foreground` | Primary text |
| `text-zinc-400` | `text-muted-foreground` | Secondary text |
| `border-zinc-800` | `border-border` | All borders |
| `bg-zinc-900` | `bg-card` | Elevated surfaces |
| `text-blue-400` | `text-primary` | Accent elements |

**Action:** Find and replace all hardcoded colors with theme variables throughout your page.

### Step 4: Check Related Components

Pages rarely exist in isolation. Update these related components:

1. **Navigation**: Sidebars, headers, footers
2. **Modals/Dialogs**: Any overlays triggered from the page
3. **Shared Components**: Buttons, cards, inputs used on the page
4. **Layout Wrappers**: Parent containers that affect the page

**Action:** List all components that appear with or affect your page, and ensure they use the same color system.

### ⚠️ Step 4.5: VERIFY Related Components Are Actually Styled

**CRITICAL:** Don't just assume related components are styled correctly. You MUST verify!

This is the most commonly skipped step that leads to inconsistent UIs. After restyling a page:

1. **Physically inspect** each related component file
2. **Look for hardcoded colors** like `bg-zinc-900`, `text-zinc-400`, `border-zinc-800`
3. **Actually restyle them** if they don't match your theme system

**Real Example:**

After restyling a dashboard page to use `bg-background` and `text-foreground`, the sidebar still had:
- ❌ `bg-zinc-900` (should be `bg-card`)
- ❌ `border-zinc-800` (should be `border-border`)
- ❌ `text-zinc-400` (should be `text-muted-foreground`)
- ❌ `hover:bg-zinc-800` (should be `hover:bg-accent`)

The result? A dashboard with modern themed cards next to an old-style sidebar with mismatched colors.

**Verification Checklist:**

For each related component:
- [ ] Open the component file
- [ ] Search for hardcoded color values (zinc, slate, gray, blue numbers)
- [ ] Replace with theme variables
- [ ] Check hover/active states match your system
- [ ] Verify icons and text use muted-foreground consistently

**How to Find Related Components:**

1. **Grep/search** your codebase for imports of the page component
2. **Check layout files** (e.g., `layout.tsx`) that wrap your page
3. **Look at the file structure** - sidebars, headers often have obvious names
4. **Run the app** (if needed) and visually identify what's on screen with your page

**Common Culprits:**
- Sidebars (often separate components)
- Navigation bars/headers
- Modals that can be triggered from the page
- Shared layout components
- Footer components

### Step 5: Use Component Library Consistently

If using a component library (like shadcn/ui):

```tsx
// Instead of custom divs
<div className="p-6 border rounded-lg">
  <h3 className="font-semibold">Title</h3>
  <p className="text-sm">Description</p>
</div>

// Use library components
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
</Card>
```

**Why:** Library components are already themed and maintain consistency automatically.

### Step 6: Test All States

Verify each state renders with consistent colors:

```tsx
// Loading state
<Skeleton className="..." /> // Uses theme's muted color

// Empty state  
<div className="text-muted-foreground">
  No items found
</div>

// Success state
<Card className="border-border">
  Your content
</Card>
```

**Action:** Manually test or screenshot each state to verify color consistency.

## Common Patterns

### Background Hierarchy

Use different background shades to create depth:

```tsx
<div className="bg-background"> {/* Base level */}
  <div className="bg-card"> {/* Elevated */}
    <div className="bg-accent"> {/* Highlighted */}
      Content
    </div>
  </div>
</div>
```

### Text Hierarchy

Establish clear text importance:

```tsx
<h1 className="text-foreground">Primary Heading</h1>
<p className="text-foreground">Body text</p>
<span className="text-muted-foreground">Secondary info</span>
<small className="text-muted-foreground/60">Tertiary details</small>
```

### Interactive States

All interactive elements should have consistent hover/active states:

```tsx
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary Action
</Button>

<Link className="hover:text-primary transition-colors">
  Navigation Link
</Link>

<Card className="border-border hover:border-primary/50 transition-colors">
  Interactive Card
</Card>
```

## Checklist

Before considering a restyle complete:

- [ ] All hardcoded colors replaced with theme variables
- [ ] All page states styled (loading, empty, error, success)
- [ ] Related components **identified AND verified**
- [ ] Related components **actually restyled** with theme variables
- [ ] Component library components used where appropriate
- [ ] Text hierarchy established (primary, secondary, tertiary)
- [ ] Background hierarchy creates proper depth
- [ ] Interactive states consistent (hover, active, focus)
- [ ] Dark/light mode tested (if applicable)
- [ ] No linter errors introduced
- [ ] Accessibility maintained (contrast ratios)

## Example: Complete Component Migration

### Before
```tsx
function MyPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <h1 className="text-zinc-100">Title</h1>
      </header>
      <main className="bg-zinc-950">
        <div className="p-6 border border-zinc-800 rounded-lg hover:border-zinc-700">
          <h3 className="text-zinc-100">Card Title</h3>
          <p className="text-zinc-400">Description</p>
          <button className="bg-blue-600 text-white hover:bg-blue-700">
            Action
          </button>
        </div>
      </main>
    </div>
  );
}
```

### After
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function MyPage() {
  return (
    <div className="bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <h1 className="text-foreground">Title</h1>
      </header>
      <main className="bg-background">
        <Card className="border-border hover:border-primary/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-foreground">Card Title</CardTitle>
            <CardDescription className="text-muted-foreground">
              Description
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
```

## Advanced Tips

### Creating New Theme Variables

If your design system lacks certain colors:

1. Add to your CSS theme file:
```css
:root {
  --my-custom-color: oklch(0.5 0.1 200);
}

.dark {
  --my-custom-color: oklch(0.7 0.1 200);
}
```

2. Add to Tailwind config:
```js
theme: {
  extend: {
    colors: {
      'my-custom': 'var(--my-custom-color)',
    }
  }
}
```

3. Use consistently:
```tsx
<div className="bg-my-custom text-my-custom-foreground">
```

### Opacity for Variations

Create subtle variations without new colors:

```tsx
<div className="bg-primary/10"> {/* 10% opacity */}
<Icon className="text-primary/70"> {/* 70% opacity */}
<div className="border-primary/50"> {/* 50% opacity */}
```

### Transition Consistency

Use consistent transition timings:

```tsx
// Quick interactions (hover)
className="transition-colors duration-200"

// State changes (expand/collapse)
className="transition-all duration-300"

// Page transitions
className="transition-opacity duration-500"
```

## Conclusion

Consistent styling is achieved through:

1. **Design tokens** over hardcoded values
2. **Systematic approach** to updating all states and related components
3. **Actually verifying** related components (don't skip Step 4.5!)
4. **Component libraries** for pre-themed UI elements
5. **Clear hierarchies** for backgrounds, text, and interactions
6. **Testing** all states in both light and dark modes

By following this guide, you'll create a cohesive design system that's easy to maintain and extend.