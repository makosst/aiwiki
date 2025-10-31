## Chatbot

## Prompt Input

Allows a user to send a message with file attachments to a large language model. It includes a textarea, file upload capabilities, a submit button, and a dropdown for selecting the model.

[ ] Copy Markdown
Open

The PromptInput component allows a user to send a message with file attachments to a large language model. It includes a textarea, file upload capabilities, a submit button, and a dropdown for selecting the model

Preview Code

What would you like to know?: <empty>

+ 
Search
GPT-4
[x]

## Installation

ai-elements shadow manual

npx ai-elements@latest add prompt-input

## Usage

import { 0
PromptInput,
PromptInputActionAddAttachments,
PromptInputActionMenu.
PromptInputActionMenuContent,
PromptInputActionMenuItem,
PromptInputActionMenuTrigger,
PromptInputAttachment,
PromptInputAttachments,
PromptInputBody,
PromptInputButton,
PromptInputProvider,
PromptInputSpeechButton,
PromptInputSubmit,
PromptInputTextarea,
PromptInputFooter,
PromptInputTools,
usePromptInputAttachments,
} from '@/components/ai-elements/prompt-input';

import Globe Icon) from 'lucide-react'; [ ] 0

<PromptInput onSubmit={() = {}} className="mt-4 relative">
<PromptInputHeader>
<PromptInputAttachments>
((attachment) (
<PromptInputAttachment data (attachment) />
> }
</PromptInputAttachments>
</PromptInputHeader>
<PromptInputBody>
<PromptInputTextarea onChange-((e) ⇒ ()} value=''} />
</PromptInputBody>
<PromptInputFooter>
<PromptInputTools>
<PromptInputActionMenu>
<PromptInputActionMenuTrigger />
<PromptInputActionMenuContent>
<PromptInputActionAddAttachments />
</PromptInputActionMenuContent>
</PromptInputActionMenu>
<PromptInputSpeechButton />
<PromptInputButton>
<GlobeIcon size=(16) />
<span>Search</span>
</PromptInputButton>
<PromptInputModelSelect onValueChange-((value)()) value="gpt-40">
<PromptInputModelSelectTrigger>
<PromptInputModelSelectValue />
</PromptInputModelSelectTrigger>
<PromptInputModelSelectContent>
PromotIonut ModelSelectItem value="ant-An">

## Usage with Al SDK

Build a fully functional chat app using PromptInput , Conversation with a model picker:
Add the following component to your frontend:

app/page.tsx

'use client';
import {
PromptInput,

PromptInputActionAddAttachments,
PromptInputActionMenu,
PromptInputActionMenuContent,
PromptInputActionMenuTrigger,
PromptInputAttachment,
PromptInputAttachments,
PromptInputBody,
PromptInputButton,
type PromptInputMessage,
PromptInputModelSelect,
PromptInputModelSelectContent,
PromptInputModelSelectItem,
PromptInputModelSelectTrigger,
PromptInputModelSelectValue,
PromptInputSpeechButton,
PromptInputSubmit,
PromptInputTextarea,
PromptInputFooter,
PromptInputTools,

} from '@/components/ai-elements/prompt-input';
import { GlobeIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';

import {
Conversation,
ConversationContent,
ConversationScrollButton,

Add the following route to your backend:

Ts app/api/chat/route.ts 0

import streamText, UIMessage, convertToModelMessages) from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
const (
model,
messages,
webSearch
): (
messages: UIMessage[];
model: string;
webSearch?: boolean;
await req.json();

const result streamText({
model: webSearch ? 'perplexity/sonar' : model,
messages: convertToModelMessages (messages),
});

return result.toUIMessageStreamResponse();

## Features

| • Auto-resizing textarea that adjusts height based on content                |
|-|
| • File attachment support with drag-and-drop                                 |
| • Image preview for image attachments                                        |
| • Configurable file constraints (max files, max size, accepted types)        |
| • Automatic submit button icons based on status                              |
| • Support for keyboard shortcuts (Enter to submit, Shift+Enter for new line) |
| • Customizable min/max height for the textarea                               |
| • Flexible toolbar with support for custom actions and tools                 |
| • Built-in model selection dropdown                                          |
| • Built-in native speech recognition button (Web Speech API)                 |
| • Optional provider for lifted state management                              |
| .Form automatically resets on submit                                         |
| • Responsive design with mobile-friendly controls                            |
| • Clean, modern styling with customizable themes                             |
| • Form-based submission handling                                             |
| Hidden file input sync for native form posts.                                |
| • Global document drop support (opt-in)                                      |

## Examples

Cursor style

Key details from the image:

*   Tabs: 1
*   Model: GPT-4
*   Prompt: "Plan, search, build anything"

## Props

<PromptInput />

| Prop             | Туре                                                                              |
| onSubmit?        | (message: PromptinputMessage, event: FormEvent) => void                           |
| accept?          | string                                                                            |
| multiple?        | boolean                                                                           |
| globalDrop?      | boolean                                                                           |
| syncHiddenInput? | boolean                                                                           |
| maxFiles?        | number                                                                            |
| maxFileSize?     | number                                                                            |
| onError?         | (err: (code: "max_files" | "max_file_size" | "accept", message: string }) => void |
| ...props?        | React.HTMLAttributes<HTMLFormElement>                                             |

## <PromptInputTextarea />

Prop: ...props?
Type: React.ComponentProps<typeof Textarea>

## <PromptInputFooter />

Prop: ...props?
Type: React.HTMLAttributes<HTMLDivElement>

## <PromptInputTools />

Prop: ...props?
Type: React.HTMLAttributes<HTMLDivElement>

## <PromptInputButton />

Prop: ...props?
Type: React.ComponentProps<typeof Button>

## <PromptInputSubmit />

Prop: status?
Type: ChatStatus

Prop: ...props?
Type: React.ComponentProps<typeof Button>

## <PromptInputModelSelect />

Prop: ...props?
Type: React.ComponentProps<typeof Select>

## <PromptInputModel SelectTrigger />

Prop: ...props?
Type: React.ComponentProps<typeof SelectTrigger>

## <PromptInputModelSelectContent />

Prop: ...props?
Type: React.ComponentProps<typeof SelectContent>

## <PromptInputModelSelectItem />

| Prop       | Туре                                    |
| ... props? | React.ComponentProps<typeof SelectItem> |

<PromptInputModelSelectValue />

Prop: ...props?
Type: React.ComponentProps<typeof SelectValue>

## <PromptInputBody />

Prop: ...props?
Type: React.HTMLAttributes<HTMLDivElement>

## <PromptInputAttachments />

| Prop       | Type                                                      |
| children?  | (attachment: FileUIPart & (id: string ))> React.ReactNode |
| ... props? | React.HTML Attributes<HTMLDivElement>                     |

## <PromptInputAttachment />

Prop: data?
Type: FileUIPart & { id: string }
<change><s>data?</s></change>

Prop: ...props?
Type: React.HTMLAttributes<HTMLDivElement>
<change><s>...props?</s></change>

## <PromptInputActionMenu />

Prop: ...props?
Type: React.ComponentProps<typeof DropdownMenu>

<PromptInputActionMenuTrigger />

Prop: ...props?
Type: React.ComponentProps<typeof Button>

<table><tr><th colspan="2"><PromptInputActionMenuContent></PromptInputActionMenuContent></th></tr><tr><td>Prop</td><td></td></tr><tr><td>... props?</td><td>React.ComponentProps&lt;typeof DropdownMenuContent&gt;</td></tr><tr><td colspan="2"><PromptInputActionMenuItem></PromptInputActionMenuItem></td></tr><tr><td>Prop</td><td>Type</td></tr><tr><td>... props?</td><td>React.ComponentProps&lt;typeof DropdownMenultem&gt;</td></tr><tr><td colspan="2">&lt;PromptInputAction AddAttachments /&gt;</td></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>label?</td><td>string</td></tr><tr><td>... props?</td><td>React.ComponentProps&lt;typeof DropdownMenuItem&gt;</td></tr><tr><td colspan="2"><PromptInputProvider></PromptInputProvider></td></tr><tr><td>Prop</td><td>Type</td></tr><tr><td>initialInput?</td><td>string</td></tr><tr><td>children?</td><td>React.ReactNode</td></tr><tr><td colspan="2">Optional global provider that lifts PromptInput state outside of PromptInput. When used, it allows you to access and
control the input state from anywhere within the provider tree. If not used, PromptInput stays fully self-managed.</td></tr><tr><td colspan="2"><PromptInputSpeechButton></PromptInputSpeechButton></td></tr><tr><td>Prop</td><td>Type</td></tr><tr><td>textareaRef?</td><td>RefObject&lt;HTMLTextAreaElement|null&gt;</td></tr><tr><td>onTranscriptionChange?</td><td>(text: string) =&gt; void</td></tr><tr><td>... props?</td><td>React.ComponentProps&lt;typeof PromptInputButton&gt;</td></tr><tr><td rowspan="2" colspan="2">Built-in button component that provides native speech recognition using the Web Speech API. The button will be
disabled if speech recognition is not supported in the browser. Displays a microphone icon and pulses while actively
listening.</td></tr><tr></tr><tr><td>Hooks</td><td></td></tr><tr><td colspan="2">usePromptInputAttachments</td></tr><tr><td colspan="2">Access and manage file attachments within a Promptinput context.</td></tr><tr><td>const attachments =</td><td>usePromptInputAttachments(); [ ] 0</td></tr><tr><td>// Available methods:
attachments.files // Array</td><td>of current attachments</td></tr><tr><td>attachments.add(files) //</td><td>Add new files</td></tr><tr><td>attachments.remove(id) //
attachments.clear() //</td><td>Remove an attachment by ID
Clear all attachments</td></tr><tr><td>attachments.openFileDialog()</td><td>// Open file selection dialog.</td></tr><tr><td colspan="2">usePromptInputController</td></tr><tr><td colspan="2">Access the full PromptInput controller from a PromptInputProvider. Only available when using the provider.</td></tr><tr><td>const controller</td><td>usePromptInputController(); 0 [ ]</td></tr><tr><td>// Available methods:
controller.textInput.value</td><td>// Current text input value</td></tr><tr><td>controller.textInput.setInput(value)
controller.textInput.clear()
controller.attachments //</td><td>// Set text input value
// Clear text input
Same as usePromptInputAttachments</td></tr><tr><td colspan="2">useProviderAttachments</td></tr><tr><td colspan="2">Access attachments context from a PromptInputProvider. Only available when using the provider.</td></tr><tr><td>const attachments =</td><td>useProviderAttachments(); [ ] 0</td></tr><tr><td>// Same interface as</td><td>usePromptInputAttachments</td></tr><tr><td colspan="2"><PromptInputHeader></PromptInputHeader></td></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>... props?</td><td>Omit&lt;React.ComponentProps&lt;typeof InputGroupAddon&gt;, "align"&gt;</td></tr><tr><td colspan="2"><PromptInputHoverCard></PromptInputHoverCard></td></tr><tr><td>Prop</td><td>Туре</td></tr><tr><td>openDelay?</td><td>number</td></tr><tr><td>closeDelay?</td><td>number</td></tr><tr><td>... props?</td><td>React.ComponentProps&lt;typeof HoverCard&gt;</td></tr><tr><td colspan="2"><PromptInputHoverCardTrigger></PromptInputHoverCardTrigger></td></tr><tr><td>Prop</td><td>Type</td></tr><tr><td>... props?</td><td>React.ComponentProps&lt;typeof HoverCardTrigger&gt;</td></tr><tr><td colspan="2"><PromptInputHoverCardContent></PromptInputHoverCardContent></td></tr><tr><td>Prop</td><td>Type</td></tr></table>

align?: "start" | "center" | "end"
...props?: React.ComponentProps<typeof HoverCardContent>

## <PromptInputTabsList />

Prop: ...props?
Type: React.HTMLAttributes<HTMLDivElement>

## <PromptInputTab />

Prop: ...props?
Type: React.HTMLAttributes<HTMLDivElement>

## <PromptInputTabLabel />

Prop: ...props?
Type: React.HTMLAttributes<HTMLHeadingElement>

## <PromptInputTabBody />

Prop: ...props?
Type: React.HTMLAttributes<HTMLDivElement>

## <PromptInputTabItem />

Prop: ...props?
Type: React.HTMLAttributes<HTMLDivElement>

## <PromptInputCommand />

Prop: ...props?
Type: React.ComponentProps<typeof Command>

## <PromptInputCommand Input />

Prop: ...props?
Type: React.ComponentProps<typeof CommandInput>

## <PromptInputCommandList />

Prop: ...props?
Type: React.ComponentProps<typeof CommandList>

## <PromptInputCommandEmpty />

Prop: ...props?
Type: React.ComponentProps<typeof CommandEmpty>

## <PromptInputCommandGroup />

Prop: ...props?
Type: React.ComponentProps<typeof CommandGroup>

## <PromptInputCommandItem />

Prop: ...props?
Type: React.ComponentProps<typeof CommandItem>

## <PromptInputCommandSeparator />

Prop: ...props?
Type: React.ComponentProps<typeof CommandSeparator>

< Plan
A collapsible plan component for displaying AI-generated

Queue > A comprehensive queue component system for displaying ...