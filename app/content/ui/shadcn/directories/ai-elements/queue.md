## Queue

A comprehensive queue component system for displaying message lists, todos, and collapsible task sections in AI applications.

The Queue component provides a flexible system for displaying lists of messages, todos, attachments, and collapsible sections. Perfect for showing AI workflow progress, pending tasks, message history, or any structured list of items in your application.

## Installation

```bash
npx ai-elements@latest add queue
```

## Usage

```tsx
import {
  Queue,
  QueueSection,
  QueueSectionTrigger,
  QueueSectionLabel,
  QueueSectionContent,
  QueueList,
  QueueItem,
  QueueItemIndicator,
  QueueItemContent,
} from '@/components/ai-elements/queue';

<Queue>
  <QueueSection>
    <QueueSectionTrigger>
      <QueueSectionLabel count={3} label="Tasks" />
    </QueueSectionTrigger>
    <QueueSectionContent>
      <QueueList>
        <QueueItem>
          <QueueItemIndicator />
          <QueueItemContent>Analyze user requirements</QueueItemContent>
        </QueueItem>
      </QueueList>
    </QueueSectionContent>
  </QueueSection>
</Queue>
```

## Features

- Flexible component system with composable parts
- Collapsible sections with smooth animations
- Support for completed/pending state indicators
- Built-in scroll area for long lists
- Attachment display with images and file indicators
- Hover-revealed action buttons for queue items
- TypeScript support with comprehensive type definitions
- Customizable styling with Tailwind CSS
- Responsive design with mobile-friendly interactions
- Keyboard navigation and accessibility support
- Theme-aware with automatic dark mode support

## Examples

### With PromptInput

The Queue component can be integrated with PromptInput to show pending tasks or messages.

## Props

### <Queue />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <QueueSection />

| Prop | Type |
| defaultOpen? | boolean |
| ...props? | React.ComponentProps<typeof Collapsible> |

### <QueueSectionTrigger />

| Prop | Type |
| ...props? | React.ComponentProps<"button"> |

### <QueueSectionLabel />

| Prop | Type |
| label? | string |
| count? | number |
| icon? | React.ReactNode |
| ...props? | React.ComponentProps<"span"> |

### <QueueSectionContent />

| Prop | Type |
| ...props? | React.ComponentProps<typeof CollapsibleContent> |

### <QueueList />

| Prop | Type |
| ...props? | React.ComponentProps<typeof ScrollArea> |

### <QueueItem />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <QueueItemIndicator />

| Prop | Type |
| completed? | boolean |
| ...props? | React.ComponentProps<"span"> |

### <QueueItemContent />

| Prop | Type |
| completed? | boolean |
| ...props? | React.ComponentProps<"span"> |

### <QueueItemDescription />

| Prop | Type |
| completed? | boolean |
| ...props? | React.ComponentProps<"div"> |

### <QueueItemActions />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <QueueItemAction />

| Prop | Type |
| ...props? | Omit<React.ComponentProps<typeof Button>, "variant" \| "size"> |

### <QueueItemAttachment />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <QueueItemImage />

| Prop | Type |
| ...props? | React.ComponentProps<"img"> |

### <QueueItemFile />

| Prop | Type |
| ...props? | React.ComponentProps<"span"> |
