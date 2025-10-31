## Branch

Manages multiple versions of AI messages, allowing users to navigate between different response branches.

The Branch component manages multiple versions of AI messages, allowing users to navigate between different response branches. It provides a clean, modern interface with customizable themes and keyboard-accessible navigation buttons.

## Installation

```bash
npx ai-elements@latest add branch
```

## Usage

```tsx
import {
  Branch,
  BranchMessages,
  BranchNext,
  BranchPage,
  BranchPrevious,
  BranchSelector,
} from '@/components/ai-elements/branch';

<Branch defaultBranch="0">
    <BranchMessages>
        <Message from="user">
            <MessageContent>Hello</MessageContent>
        </Message>
        <Message from="user">
            <MessageContent>Hi!</MessageContent>
        </Message>
    </BranchMessages>
    <BranchSelector from="user">
        <BranchPrevious />
        <BranchPage />
        <BranchNext />
    </BranchSelector>
</Branch>
```

## Usage with AI SDK

Branching is an advanced use case that you can implement yourself to suit your application's needs. While the AI SDK does not provide built-in support for branching, you have full flexibility to design and manage multiple response paths as required.

## Features

- Context-based state management for multiple message branches
- Navigation controls for moving between branches (previous/next)
- Uses CSS to prevent re-rendering branches when switching
- Branch counter showing current position (e.g., "1 of 3")
- Automatic branch tracking and synchronization
- Callbacks for branch change and navigation using onBranchChange
- Support for custom branch change callbacks
- Responsive design with mobile-friendly controls
- Clean, modern styling with customizable themes
- Keyboard-accessible navigation buttons

## Props

### <Branch />

| Prop | Type |
| defaultBranch? | number |
| onBranchChange? | (branchIndex: number) => void |
| ...props? | React.HTMLAttributes<HTMLDivElement> |

### <BranchMessages />

| Prop | Type |
| ...props? | React.HTMLAttributes<HTMLDivElement> |

### <BranchSelector />

| Prop | Type |
| from? | UIMessage["role"] |
| ...props? | React.HTMLAttributes<HTMLDivElement> |

### <BranchPrevious />

| Prop | Type |
| ...props? | React.ComponentProps<typeof Button> |

### <BranchNext />

| Prop | Type |
| ...props? | React.ComponentProps<typeof Button> |

### <BranchPage />

| Prop | Type |
| ...props? | React.HTMLAttributes<HTMLSpanElement> |