import { ComponentPage, Example } from "../../components/component-page";
import { For, Show } from "solid-js";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-solid";
import {
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  createTable,
} from "@neut/ui";
import type {
  Column,
  ColumnDef,
  DataTable as DataTableInstance,
} from "@neut/ui";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "489e1d42",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "13a2b7c9",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "9f8e7d6c",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "5c4b3a29",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
  {
    id: "2b8f4a71",
    amount: 129,
    status: "pending",
    email: "jules@example.com",
  },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ColumnHeader = (props: { column: Column<Payment>; title: string }) => (
  <Show
    when={props.column.getCanSort()}
    fallback={<div class="capitalize">{props.title}</div>}
  >
    <Button
      variant="ghost"
      size="sm"
      class="-ml-3 h-8"
      onClick={() =>
        props.column.toggleSorting(props.column.getIsSorted() === "asc")
      }
    >
      {props.title}
      <ArrowUpDown class="ml-2 size-4" />
    </Button>
  </Show>
);

const RowActions = (props: { rowId: string }) => (
  <DropdownMenu>
    <DropdownMenuTrigger
      variant="ghost"
      size="xs"
      aria-label="Open menu"
      icon={<MoreHorizontal />}
    />
    <DropdownMenuContent align="end" class="w-40">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem
        onClick={() => navigator.clipboard.writeText(props.rowId)}
      >
        Copy payment ID
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>View customer</DropdownMenuItem>
      <DropdownMenuItem>View payment details</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const basicColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: false,
    cell: ({ getValue }) => (
      <Badge variant="outline" class="capitalize">
        {String(getValue())}
      </Badge>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => <ColumnHeader column={column} title="Email" />,
  },
  {
    accessorKey: "amount",
    header: () => <div class="text-right">Amount</div>,
    cell: ({ getValue }) => (
      <div class="text-right font-medium">
        {currency.format(Number(getValue()))}
      </div>
    ),
  },
];

const fullColumns: ColumnDef<Payment>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onChange={(checked) => table.toggleAllPageRowsSelected(checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(checked) => row.toggleSelected(checked)}
        aria-label="Select row"
      />
    ),
  },
  ...basicColumns,
  {
    id: "actions",
    header: "",
    enableSorting: false,
    enableHiding: false,
    cell: ({ row }) => <RowActions rowId={row.original.id} />,
  },
];

const BasicTable = () => {
  const table = createTable<Payment>({
    columns: basicColumns,
    data: () => payments,
    getRowId: (row) => row.id,
  });

  return (
    <div class="w-full">
      <div class="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          class="max-w-sm"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onInput={(value: string) =>
            table.getColumn("email")?.setFilterValue(value)
          }
        />
      </div>
      <div class="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <For each={table.getHeaderGroups()}>
              {(headerGroup) => (
                <TableRow>
                  <For each={headerGroup.headers}>
                    {(header) => (
                      <TableHead>
                        {header.isPlaceholder ? null : header.render()}
                      </TableHead>
                    )}
                  </For>
                </TableRow>
              )}
            </For>
          </TableHeader>
          <TableBody>
            <Show
              when={table.getRowModel().rows.length > 0}
              fallback={
                <TableRow>
                  <TableCell colSpan={3} class="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              }
            >
              <For each={table.getRowModel().rows}>
                {(row) => (
                  <TableRow>
                    <For each={row.getVisibleCells()}>
                      {(cell) => <TableCell>{cell.render()}</TableCell>}
                    </For>
                  </TableRow>
                )}
              </For>
            </Show>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const ViewOptions = (props: { table: DataTableInstance<Payment> }) => (
  <DropdownMenu>
    <DropdownMenuTrigger
      variant="outline"
      size="sm"
      class="ml-auto hidden h-8 lg:flex"
    >
      Columns
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-37.5">
      <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <For
        each={props.table
          .getAllColumns()
          .filter((column) => column.getCanHide())}
      >
        {(column) => (
          <DropdownMenuCheckboxItem
            class="capitalize"
            checked={column.getIsVisible()}
            onCheckedChange={(checked) => column.toggleVisibility(checked)}
          >
            {column.id}
          </DropdownMenuCheckboxItem>
        )}
      </For>
    </DropdownMenuContent>
  </DropdownMenu>
);

const Pagination = (props: { table: DataTableInstance<Payment> }) => (
  <div class="flex items-center justify-between px-2 py-3">
    <div class="flex-1 text-sm text-neutral-500 dark:text-neutral-400">
      {props.table.getFilteredSelectedRowModel().rows.length} of{" "}
      {props.table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
    <div class="flex items-center space-x-6 lg:space-x-8">
      <div class="flex items-center space-x-2">
        <p class="text-sm font-medium">Rows per page</p>
        <Select
          value={String(props.table.state.pagination.pageSize)}
          onValueChange={(value) => props.table.setPageSize(Number(value))}
        >
          <SelectTrigger class="h-8 w-17.5">
            <SelectValue
              placeholder={String(props.table.state.pagination.pageSize)}
            />
          </SelectTrigger>
          <SelectContent>
            <For each={[5, 10, 20, 30]}>
              {(pageSize) => (
                <SelectItem value={String(pageSize)}>{pageSize}</SelectItem>
              )}
            </For>
          </SelectContent>
        </Select>
      </div>
      <div class="flex w-25 items-center justify-center text-sm font-medium">
        Page {props.table.state.pagination.pageIndex + 1} of{" "}
        {props.table.getPageCount()}
      </div>
      <div class="flex items-center space-x-2">
        <Button
          variant="outline"
          size="xs"
          class="hidden size-8 lg:flex"
          aria-label="Go to first page"
          icon={<ChevronsLeft />}
          onClick={() => props.table.setPageIndex(0)}
          disabled={!props.table.getCanPreviousPage()}
        />
        <Button
          variant="outline"
          size="xs"
          class="size-8"
          aria-label="Go to previous page"
          icon={<ChevronLeft />}
          onClick={() => props.table.previousPage()}
          disabled={!props.table.getCanPreviousPage()}
        />
        <Button
          variant="outline"
          size="xs"
          class="size-8"
          aria-label="Go to next page"
          icon={<ChevronRight />}
          onClick={() => props.table.nextPage()}
          disabled={!props.table.getCanNextPage()}
        />
        <Button
          variant="outline"
          size="xs"
          class="hidden size-8 lg:flex"
          aria-label="Go to last page"
          icon={<ChevronsRight />}
          onClick={() =>
            props.table.setPageIndex(props.table.getPageCount() - 1)
          }
          disabled={!props.table.getCanNextPage()}
        />
      </div>
    </div>
  </div>
);

const CompleteTable = () => {
  const table = createTable<Payment>({
    columns: fullColumns,
    data: () => payments,
    getRowId: (row) => row.id,
  });

  const visibleColumnCount = () =>
    table.getAllColumns().filter((column) => column.getIsVisible()).length;

  return (
    <div class="w-full">
      <div class="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          class="max-w-sm"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onInput={(value: string) =>
            table.getColumn("email")?.setFilterValue(value)
          }
        />
        <ViewOptions table={table} />
      </div>
      <div class="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <For each={table.getHeaderGroups()}>
              {(headerGroup) => (
                <TableRow>
                  <For each={headerGroup.headers}>
                    {(header) => (
                      <TableHead>
                        {header.isPlaceholder ? null : header.render()}
                      </TableHead>
                    )}
                  </For>
                </TableRow>
              )}
            </For>
          </TableHeader>
          <TableBody>
            <Show
              when={table.getRowModel().rows.length > 0}
              fallback={
                <TableRow>
                  <TableCell
                    colSpan={visibleColumnCount()}
                    class="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              }
            >
              <For each={table.getRowModel().rows}>
                {(row) => (
                  <TableRow
                    data-state={row.getIsSelected() ? "selected" : undefined}
                  >
                    <For each={row.getVisibleCells()}>
                      {(cell) => <TableCell>{cell.render()}</TableCell>}
                    </For>
                  </TableRow>
                )}
              </For>
            </Show>
          </TableBody>
        </Table>
      </div>
      <Pagination table={table} />
    </div>
  );
};

const basicCode = `import { For, Show } from "solid-js";
import {
  Badge,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  createTable,
} from "@neut/ui";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const payments: Payment[] = [
  { id: "728ed52f", amount: 316, status: "success", email: "ken99@example.com" },
  { id: "489e1d42", amount: 242, status: "success", email: "Abe45@example.com" },
  { id: "13a2b7c9", amount: 837, status: "processing", email: "Monserrat44@example.com" },
  { id: "9f8e7d6c", amount: 874, status: "success", email: "Silas22@example.com" },
  { id: "5c4b3a29", amount: 721, status: "failed", email: "carmella@example.com" },
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const table = createTable<Payment>({
  columns: [
    {
      accessorKey: "status",
      header: "Status",
      enableSorting: false,
      cell: ({ getValue }) => (
        <Badge variant="outline" class="capitalize">
          {String(getValue())}
        </Badge>
      ),
    },
    { accessorKey: "email", header: "Email" },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ getValue }) => (
        <div class="text-right font-medium">
          {currency.format(Number(getValue()))}
        </div>
      ),
    },
  ],
  data: () => payments,
  getRowId: (row) => row.id,
});

export default () => (
  <div class="w-full">
    <div class="flex items-center py-4">
      <Input
        placeholder="Filter emails..."
        class="max-w-sm"
        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
        onInput={(value: string) =>
          table.getColumn("email")?.setFilterValue(value)
        }
      />
    </div>
    <div class="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          <For each={table.getHeaderGroups()}>
            {(headerGroup) => (
              <TableRow>
                <For each={headerGroup.headers}>
                  {(header) => (
                    <TableHead>
                      {header.isPlaceholder ? null : header.render()}
                    </TableHead>
                  )}
                </For>
              </TableRow>
            )}
          </For>
        </TableHeader>
        <TableBody>
          <Show
            when={table.getRowModel().rows.length > 0}
            fallback={
              <TableRow>
                <TableCell colSpan={3} class="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            }
          >
            <For each={table.getRowModel().rows}>
              {(row) => (
                <TableRow>
                  <For each={row.getVisibleCells()}>
                    {(cell) => <TableCell>{cell.render()}</TableCell>}
                  </For>
                </TableRow>
              )}
            </For>
          </Show>
        </TableBody>
      </Table>
    </div>
  </div>
);`;

const completeCode = `// A data table with sorting, filtering, pagination, row selection,
// column visibility and row actions. See the full source in the docs page.
import { For, Show } from "solid-js";
import {
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  createTable,
} from "@neut/ui";

const table = createTable<Payment>({
  columns,
  data: () => payments,
  getRowId: (row) => row.id,
});

export default () => (
  <div class="w-full">
    <Input
      placeholder="Filter emails..."
      value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
      onInput={(value: string) => table.getColumn("email")?.setFilterValue(value)}
    />
    <Table>
      <TableHeader>
        <For each={table.getHeaderGroups()}>
          {(group) => (
            <TableRow>
              <For each={group.headers}>
                {(header) => <TableHead>{header.render()}</TableHead>}
              </For>
            </TableRow>
          )}
        </For>
      </TableHeader>
      <TableBody>
        <For each={table.getRowModel().rows}>
          {(row) => (
            <TableRow data-state={row.getIsSelected() ? "selected" : undefined}>
              <For each={row.getVisibleCells()}>
                {(cell) => <TableCell>{cell.render()}</TableCell>}
              </For>
            </TableRow>
          )}
        </For>
      </TableBody>
    </Table>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="DataTable"
      description="A table engine with sorting, filtering, selection, visibility and pagination."
    >
      <Example
        name="Basic"
        description="A sortable, filterable payments table."
        code={basicCode}
      >
        <div class="w-full max-w-3xl">
          <BasicTable />
        </div>
      </Example>

      <Example
        name="Complete"
        description="Add row selection, column visibility, pagination and row actions."
        code={completeCode}
      >
        <div class="w-full max-w-3xl">
          <CompleteTable />
        </div>
      </Example>
    </ComponentPage>
  );
};
