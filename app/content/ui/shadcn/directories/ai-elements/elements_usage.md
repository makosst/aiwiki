## Usage

Learn how to use AI Elements components in your application.
<icon-button><copy-icon></icon-button> Copy Markdown 
Open

Once an Al Elements component is installed, you can import it and use it in your application like any other React component. The components are added as part of your codebase (not hidden in a library), so the usage feels very natural

## Example

After installing Al Elements components, you can use them in your application like any other React component. For example:

conversation.tsx 0

'use client';

import {
Message
MessageAvatar,
MessageContent,
} from '@/components/ai-elements/message';
import {useChat } from '@a1-sdk/react';
import Response) from '@/components/a1-elements/response"; [ ]

const Example () {
const (messages) useChat();

return (

(messages.map((( role, parts ), index) 1
<Message from (role) key={index}>
<MessageContent>
(parts.map((part, i) ⇒ {
Switch (part.type) (
case 'text':
return <Response key=("$(role)-$(1) )>(part.text]</Response>;

}}}
</MessageContent>
</Message>
)))

);
};

export default Example:

In the example above, we import the Message component from our Al Elements directory and include it in our JSX. Then, we compose the component with the MessageContent and Response subcomponents. You can style or configure the component just as you would if you wrote it yourself - since the code lives in your project, you can even open the component file to see how it works or make custom modifications.

## Extensibility

All Al Elements components take as many primitive attributes possible. For example, the Message component extends HTMLAttributes<HTMLD1vElement>, so you can pass any props that a div supports. This makes it easy to extend the component with your own styles or functionality.

## Customization

If you re-install Al Elements by rerunning npx ai-elements@latest, the CLI will ask before overwriting the file so you can save any custom changes you made.

After installation, no additional setup is needed. The component's styles (Tailwind CSS classes) and scripts are already integrated. You can start interacting with the component in your app immediately.

For example, if you'd like to remove the rounding on Message, you can go to components/ai-elements/message.tsx and remove rounded-19 as follows:

components/ai-elements/message.tsx ·

export const MessageContent ((
children,
className,
props
): MessageContentProps) (
<div
className=[cn(
'flex flex-col gap-2 text-om text-foreground'
'group-[.is-user]: bg-primary group-[.is-user]: text-primary-foreground group-[.is-user]:px-4 group-[.
className,

<div className="is-user:dark">(children)</div>
</div>
);

| <Introduction                                  | Troubleshooting >                                   |
| What is Al Elements and why you should use it. | What to do if you run into issues with Al Elements. |