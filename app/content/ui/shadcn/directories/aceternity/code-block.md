---
title: Code Block
description: A configurable code block component built on top of react-syntax-highlighter.
---

## Installation

```bash
npx shadcn@latest add @aceternity/code-block
```

## Usage

```tsx showLineNumbers
1const DummyComponent = () => {
2 const [count, setCount] = React.useState(0);
3
4 const handleClick = () => {
5 setCount(prev => prev + 1);
6 };
7
8 return (
9 <div className="p-4 border rounded-lg">
10 <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
11 <p className="mb-2">Fight Club Fights Count: {count}</p>
12 <button
13 onClick={handleClick}
14 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
15 >
16        Increment
17 </button>
18 </div>
19 );
20};
21
```

```tsx showLineNumbers
Array<TabConfig>
```

```tsx showLineNumbers
1<div className="p-4 border rounded-lg">
2 <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
3 <p className="mb-2">Fight Club Fights Count: {count}</p>
4 <button
5 onClick={handleClick}
6 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
7 >
8    Increment
9 </button>
10</div>
11
```
