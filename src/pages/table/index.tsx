import { ComponentPage, Example } from "../../components/component-page";
import { For } from "solid-js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  NumberInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@neut/ui";
import { MoreHorizontal } from "lucide-solid";

const invoices = [
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit Card",
    total: "$250.00",
  },
  { invoice: "INV002", status: "Pending", method: "PayPal", total: "$150.00" },
  {
    invoice: "INV003",
    status: "Unpaid",
    method: "Bank Transfer",
    total: "$350.00",
  },
  {
    invoice: "INV004",
    status: "Paid",
    method: "Credit Card",
    total: "$450.00",
  },
  { invoice: "INV005", status: "Paid", method: "PayPal", total: "$550.00" },
];

const basicCode = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@neut/ui";
import { For } from "solid-js";

const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", total: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", total: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", total: "$350.00" },
];

export default () => (
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead class="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <For each={invoices}>
        {(invoice) => (
          <TableRow>
            <TableCell class="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell class="text-right">{invoice.total}</TableCell>
          </TableRow>
        )}
      </For>
    </TableBody>
  </Table>
);`;

const footerCode = `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@neut/ui";

export default () => (
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead class="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell class="font-medium">INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell class="text-right">$250.00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell class="font-medium">INV002</TableCell>
        <TableCell>Pending</TableCell>
        <TableCell>PayPal</TableCell>
        <TableCell class="text-right">$150.00</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell class="text-right">$400.00</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);`;

const actionsCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@neut/ui";
import { MoreHorizontal } from "lucide-solid";
import { For } from "solid-js";

const products = [
  { product: "Wireless Mouse", price: "$29.99" },
  { product: "Mechanical Keyboard", price: "$129.99" },
  { product: "USB-C Hub", price: "$49.99" },
];

const RowActions = () => (
  <DropdownMenu>
    <DropdownMenuTrigger
      variant="ghost"
      size="xs"
      class="size-8"
      aria-label="Open menu"
      icon={<MoreHorizontal />}
    />
    <DropdownMenuContent align="end">
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Product</TableHead>
        <TableHead>Price</TableHead>
        <TableHead class="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <For each={products}>
        {(product) => (
          <TableRow>
            <TableCell class="font-medium">{product.product}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell class="text-right">
              <RowActions />
            </TableCell>
          </TableRow>
        )}
      </For>
    </TableBody>
  </Table>
);`;

const editableCode = `import {
  NumberInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@neut/ui";
import { For } from "solid-js";

const people = [
  { value: "sarah", label: "Sarah Chen" },
  { value: "marcus", label: "Marc Rodriguez" },
  { value: "emily", label: "Emily Watson" },
];

const tasks = [
  { task: "Design homepage", assignee: "sarah", qty: 2 },
  { task: "Implement API", assignee: "marcus", qty: 4 },
  { task: "Write tests", assignee: "emily", qty: 1 },
];

export default () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Task</TableHead>
        <TableHead>Assignee</TableHead>
        <TableHead>Quantity</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <For each={tasks}>
        {(item) => (
          <TableRow>
            <TableCell class="font-medium">{item.task}</TableCell>
            <TableCell>
              <Select defaultValue={item.assignee}>
                <SelectTrigger size="sm" class="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <For each={people}>
                      {(person) => (
                        <SelectItem value={person.value}>{person.label}</SelectItem>
                      )}
                    </For>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell>
              <NumberInput
                defaultValue={item.qty}
                min={0}
                class="w-24"
                aria-label="Quantity"
              />
            </TableCell>
          </TableRow>
        )}
      </For>
    </TableBody>
  </Table>
);`;

export default () => {
  return (
    <ComponentPage
      title="Table"
      description="A responsive table for displaying structured data."
    >
      <Example
        name="Basic"
        description="A basic table with a caption."
        code={basicCode}
      >
        <div class="w-full max-w-2xl">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead class="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead class="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <For each={invoices}>
                {(invoice) => (
                  <TableRow>
                    <TableCell class="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell>{invoice.method}</TableCell>
                    <TableCell class="text-right">{invoice.total}</TableCell>
                  </TableRow>
                )}
              </For>
            </TableBody>
          </Table>
        </div>
      </Example>

      <Example
        name="With footer"
        description="Use TableFooter for totals and summaries."
        code={footerCode}
      >
        <div class="w-full max-w-2xl">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead class="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead class="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell class="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-medium">INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell class="text-right">$150.00</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell class="text-right">$400.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Example>

      <Example
        name="With actions"
        description="Add per-row actions with a DropdownMenu."
        code={actionsCode}
      >
        <div class="w-full max-w-2xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead class="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <For
                each={[
                  { product: "Wireless Mouse", price: "$29.99" },
                  { product: "Mechanical Keyboard", price: "$129.99" },
                  { product: "USB-C Hub", price: "$49.99" },
                ]}
              >
                {(product) => (
                  <TableRow>
                    <TableCell class="font-medium">{product.product}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell class="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          variant="ghost"
                          size="xs"
                          class="size-8"
                          aria-label="Open menu"
                          icon={<MoreHorizontal />}
                        />
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )}
              </For>
            </TableBody>
          </Table>
        </div>
      </Example>

      <Example
        name="Editable cells"
        description="Compose Select and NumberInput inside table cells."
        code={editableCode}
      >
        <div class="w-full max-w-2xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <For
                each={[
                  { task: "Design homepage", assignee: "sarah", qty: 2 },
                  { task: "Implement API", assignee: "marcus", qty: 4 },
                  { task: "Write tests", assignee: "emily", qty: 1 },
                ]}
              >
                {(item) => (
                  <TableRow>
                    <TableCell class="font-medium">{item.task}</TableCell>
                    <TableCell>
                      <Select defaultValue={item.assignee}>
                        <SelectTrigger size="sm" class="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <For
                              each={[
                                { value: "sarah", label: "Sarah Chen" },
                                { value: "marcus", label: "Marc Rodriguez" },
                                { value: "emily", label: "Emily Watson" },
                              ]}
                            >
                              {(person) => (
                                <SelectItem value={person.value}>
                                  {person.label}
                                </SelectItem>
                              )}
                            </For>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <NumberInput
                        defaultValue={item.qty}
                        min={0}
                        class="w-24"
                        aria-label="Quantity"
                      />
                    </TableCell>
                  </TableRow>
                )}
              </For>
            </TableBody>
          </Table>
        </div>
      </Example>
    </ComponentPage>
  );
};
