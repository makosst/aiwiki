## Introduction

What is AI Elements and why you should use it.

AI Elements is a component library and custom registry built on top of `shadcn/ui` to help you build AI-native applications faster. It provides pre-built components like conversations, messages and more.

Installing AI Elements is straightforward and can be done in a couple of ways. You can use the dedicated CLI command for the fastest setup, or integrate via the standard `shadcn/ui` CLI if you've already adopted shadcn's workflow.

```bash
npx ai-elements@latest
```

## Quick Start

Here are some basic examples of what you can achieve using components from AI Elements.

The image depicts a user interface (UI) possibly for a chatbot or AI assistant. The UI features include:

- **Available AI Models**: ChatGPT, Claude, Grok.
- **Previous conversation**: React Hooks Best Practices, "Can you explain how to use React hooks effectively?"
- **Chat input area**: Text input with options like "Attach," "Search," "Analyze data," "Surprise me," "Summarize text," "Code," "Get advice," "More," and "Voice" input.
- **Source usage**: The displayed content "Used 2 sources".

## Prerequisites

Before installing AI Elements, make sure your environment meets the following requirements:

| Requirement |
|-|
| Node.js, version 18 or later |
| A Next.js project with the AI SDK installed |
| `shadcn/ui` installed in your project. If you don't have it installed, running any install command will automatically install it for you |
| We also highly recommend using the AI Gateway and adding `AI_GATEWAY_API_KEY` to your `.env.local` so you don't have to use an API key from every provider. AI Gateway also gives $5 in usage per month so you can experiment with models. You can obtain an API key [here](https://ai-elements.dev) |

## Installing Components

You can install AI Elements components using either the AI Elements CLI or the `shadcn/ui` CLI. Both achieve the same result: adding the selected component's code and any needed dependencies to your project.

The CLI will download the component's code and integrate it into your project's directory (usually under your components folder). By default, AI Elements components are added to the `@/components/ai-elements/` directory (or whatever folder you've configured in your shadcn components settings).

After running the command, you should see a confirmation in your terminal that the files were added. You can then proceed to use the component in your code.

## Usage

Learn how to use AI Elements components in your application.
