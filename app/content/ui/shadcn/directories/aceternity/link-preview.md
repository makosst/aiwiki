---
title: Link Preview
description: Dynamic link previews for your anchor tags
---

## Installation

```bash
npx shadcn@latest add @aceternity/link-preview
```

## Usage

```tsx showLineNumbers
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};
 
module.exports = nextConfig;
```
