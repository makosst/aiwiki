---
title: Table
description: Displays an 8-bit table component.
---

## Installation

```bash
npx shadcn@latest add @8bitcn/table
```

## Usage

```tsx showLineNumbers
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/8bit/table"
```

```tsx showLineNumbers
<Table className="w-60 md:w-auto">
  <TableCaption className="text-xs md:text-sm">
    A list of your recent invoices.
  </TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="invisible md:visible">Method</TableHead>
      <TableHead className="text-right invisible md:visible">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="invisible md:visible">Credit Card</TableCell>
      <TableCell className="text-right invisible md:visible">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="invisible md:visible">Cash</TableCell>
      <TableCell className="text-right invisible md:visible">$300.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV003</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell className="invisible md:visible">Credit Card</TableCell>
      <TableCell className="text-right invisible md:visible">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```
