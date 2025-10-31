## Inline Citation

A hoverable citation component that displays source information and quotes inline with text, perfect for AI-generated content with references.

The InlineCitation component provides a way to display citations inline with text content, similar to academic papers or research documents. It consists of a citation pill that shows detailed source information on hover, making it perfect for AI-generated content that needs to reference sources.

## Installation

```bash
npx ai-elements@latest add inline-citation
```

## Usage

```tsx
import {
  InlineCitation,
  InlineCitationCard,
  InlineCitationCardBody,
  InlineCitationCardTrigger,
  InlineCitationCarousel,
  InlineCitationCarouselContent,
  InlineCitationCarouselItem,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationSource,
  InlineCitationText,
} from '@/components/ai-elements/inline-citation';

<InlineCitation>
  <InlineCitationText>{citation.text}</InlineCitationText>
  <InlineCitationCard>
    <InlineCitationCardTrigger
      sources={citation.sources.map((source) => source.url)}
    />
    <InlineCitationCardBody>
      <InlineCitationCarousel>
        <InlineCitationCarouselHeader>
          <InlineCitationCarouselIndex />
        </InlineCitationCarouselHeader>
        <InlineCitationCarouselContent>
          <InlineCitationCarouselItem>
            <InlineCitationSource
              title="AI SDK"
              url="https://ai-sdk.dev"
              description="The AI Toolkit for TypeScript"
            />
          </InlineCitationCarouselItem>
        </InlineCitationCarouselContent>
      </InlineCitationCarousel>
    </InlineCitationCardBody>
  </InlineCitationCard>
</InlineCitation>
```

## Usage with AI SDK

Build citations for AI-generated content using experimental generateObject.

Add the following component to your frontend:

```tsx
// app/page.tsx
'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import {
  InlineCitation,
  InlineCitationText,
  InlineCitationCard,
  InlineCitationCardTrigger,
  InlineCitationCardBody,
  InlineCitationCarousel,
  InlineCitationCarouselContent,
  InlineCitationCarouselItem,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationCarouselPrev,
  InlineCitationCarouselNext,
  InlineCitationSource,
  InlineCitationQuote,
} from '@/components/ai-elements/inline-citation';
import { Button } from '@/components/ui/button';
import { citationSchema } from '@/app/api/citation/route';

const CitationDemo = () => {
  const { object, submit, isLoading } = useObject({
    api: '/api/citation',
    schema: citationSchema,
  });

  const handleSubmit = (topic: string) => {
    submit({ prompt: topic });
  };
};
```

Add the following route to your backend:

```tsx
// app/api/citation/route.ts
import { streamObject } from 'ai';
import { z } from 'zod';

export const citationSchema = z.object({
  content: z.string(),
  citations: z.array(
    z.object({
      number: z.string(),
      title: z.string(),
      url: z.string(),
      description: z.string().optional(),
      quote: z.string().optional(),
    })
  ),
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const result = streamObject({
    model: 'openai/gpt-4o',
    schema: citationSchema,
    prompt: `Generate a well-researched paragraph about ${prompt} with proper citations.
Include:
- A comprehensive paragraph with inline citations marked as [1], [2], etc.
- 2-3 citations with realistic source information
Each citation should have a title, URL, and optional description/quote
Make the content informative and the sources credible`,
  });

  return result.toTextStreamResponse();
}
```

## Features

- Hover interaction to reveal detailed citation information
- Carousel navigation for multiple citations with prev/next controls
- Live index tracking showing current slide position (e.g., "1/5")
- Support for source titles, URLs, and descriptions
- Optional quote blocks for relevant excerpts
- Composable architecture for flexible citation formats
- Accessible design with proper keyboard navigation
- Seamless integration with AI-generated content
- Clean visual design that doesn't disrupt reading flow
- Smart badge display showing source hostname and count

## Props

### <InlineCitation />

| Prop | Type |
| ...props? | React.ComponentProps<"span"> |

### <InlineCitationText />

| Prop | Type |
| ...props? | React.ComponentProps<"span"> |

### <InlineCitationCard />

| Prop | Type |
| ...props? | React.ComponentProps<"span"> |

### <InlineCitationCardTrigger />

| Prop | Type |
| sources? | string[] |
| ...props? | React.ComponentProps<"button"> |

### <InlineCitationCardBody />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <InlineCitationCarousel />

| Prop | Type |
| ...props? | React.ComponentProps<typeof Carousel> |

### <InlineCitationCarouselContent />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <InlineCitationCarouselItem />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <InlineCitationCarouselHeader />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <InlineCitationCarouselIndex />

| Prop | Type |
| ...props? | React.ComponentProps<"div"> |

### <InlineCitationCarouselPrev />

| Prop | Type |
| ...props? | React.ComponentProps<typeof CarouselPrevious> |

### <InlineCitationCarouselNext />

| Prop | Type |
| ...props? | React.ComponentProps<typeof CarouselNext> |

### <InlineCitationSource />

| Prop | Type |
| title? | string |
| url? | string |
| description? | string |
| ...props? | React.ComponentProps<"div"> |

### <InlineCitationQuote />

| Prop | Type |
| ...props? | React.ComponentProps<"blockquote"> |
