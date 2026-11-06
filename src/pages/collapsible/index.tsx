import { ComponentPage, Example } from "../../components/component-page";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Field,
  FieldLabel,
  Input,
  Slider,
} from "@neut/ui";
import { For, Show, createSignal } from "solid-js";
import {
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  File,
  Folder,
  Maximize,
  Minimize,
} from "lucide-solid";

const basicCode = `import {
  Button,
  Card,
  CardContent,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@neut/ui";
import { ChevronDown } from "lucide-solid";

export default () => (
  <Card class="w-full max-w-sm">
    <CardContent>
      <Collapsible>
        <CollapsibleTrigger variant="ghost" class="w-full">
          Product details
          <ChevronDown class="ml-auto group-data-[panel-open=true]/button:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent class="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
          <p>
            This panel can be expanded or collapsed to reveal additional
            content.
          </p>
          <Button size="xs">Learn More</Button>
        </CollapsibleContent>
      </Collapsible>
    </CardContent>
  </Card>
);`;

const controlledCode = `import {
  Card,
  CardContent,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@neut/ui";
import { createSignal } from "solid-js";
import { Maximize, Minimize } from "lucide-solid";

export default () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <Card class="w-full max-w-sm">
      <CardContent>
        <Collapsible open={isOpen()} onOpenChange={setIsOpen}>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium">Advanced settings</p>
            <CollapsibleTrigger
              variant="outline"
              size="md"
              icon={isOpen() ? <Minimize /> : <Maximize />}
              aria-label="Toggle advanced settings"
            />
          </div>
          <CollapsibleContent class="pt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Configure proxy, cache and request timeout for this connection.
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};`;

const orderCode = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@neut/ui";
import { ChevronsUpDown } from "lucide-solid";

export default () => (
  <Collapsible defaultOpen class="flex w-full max-w-sm flex-col gap-2">
    <div class="flex items-center justify-between gap-4 px-4">
      <h4 class="text-sm font-semibold">Order #4189</h4>
      <CollapsibleTrigger
        variant="ghost"
        size="md"
        class="size-8"
        icon={<ChevronsUpDown />}
      >
        <span class="sr-only">Toggle details</span>
      </CollapsibleTrigger>
    </div>
    <div class="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
      <span class="text-neutral-500 dark:text-neutral-400">Status</span>
      <span class="font-medium">Shipped</span>
    </div>
    <CollapsibleContent class="flex flex-col gap-2">
      <div class="rounded-md border px-4 py-2 text-sm">
        <p class="font-medium">Shipping address</p>
        <p class="text-neutral-500 dark:text-neutral-400">
          100 Market St, San Francisco
        </p>
      </div>
      <div class="rounded-md border px-4 py-2 text-sm">
        <p class="font-medium">Items</p>
        <p class="text-neutral-500 dark:text-neutral-400">
          2x Studio Headphones
        </p>
      </div>
    </CollapsibleContent>
  </Collapsible>
);`;

const settingsCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Field,
  FieldLabel,
  Input,
  Slider,
} from "@neut/ui";
import { createSignal } from "solid-js";
import { ChevronDown } from "lucide-solid";

export default () => {
  const [radiusX, setRadiusX] = createSignal(12);
  const [radiusY, setRadiusY] = createSignal(12);

  return (
    <Card size="sm" class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible>
          <div class="flex items-start gap-2">
            <div class="grid w-full grid-cols-2 gap-2">
              <Field>
                <FieldLabel for="radius-x">Radius X</FieldLabel>
                <Input
                  id="radius-x"
                  type="number"
                  value={radiusX()}
                  onInput={(value) => setRadiusX(Number(value))}
                />
              </Field>
              <Field>
                <FieldLabel for="radius-y">Radius Y</FieldLabel>
                <Input
                  id="radius-y"
                  type="number"
                  value={radiusY()}
                  onInput={(value) => setRadiusY(Number(value))}
                />
              </Field>
            </div>
            <CollapsibleTrigger
              variant="outline"
              size="md"
              class="size-8 shrink-0"
              aria-label="Toggle radius settings"
              icon={
                <ChevronDown class="transition-transform group-data-[panel-open=true]/button:rotate-180" />
              }
            />
          </div>
          <CollapsibleContent class="flex flex-col gap-4 pt-4">
            <div class="flex items-center justify-center rounded-lg border bg-muted/30 p-6">
              <div
                class="size-16 bg-primary"
                style={{
                  "border-radius": radiusX() + "px " + radiusY() + "px",
                }}
              />
            </div>
            <Field>
              <FieldLabel>Radius X</FieldLabel>
              <Slider
                value={radiusX()}
                onValueChange={(value) => setRadiusX(value)}
                min={0}
                max={50}
                step={1}
              />
            </Field>
            <Field>
              <FieldLabel>Radius Y</FieldLabel>
              <Slider
                value={radiusY()}
                onValueChange={(value) => setRadiusY(value)}
                min={0}
                max={50}
                step={1}
              />
            </Field>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};`;

const fileTreeCode = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@neut/ui";
import { For, Show } from "solid-js";
import { ChevronRight, File, Folder } from "lucide-solid";

type TreeItem = {
  name: string;
  children?: TreeItem[];
};

const items: TreeItem[] = [
  {
    name: "components",
    children: [
      {
        name: "ui",
        children: [{ name: "button.tsx" }, { name: "card.tsx" }],
      },
    ],
  },
  { name: "lib", children: [{ name: "utils.ts" }] },
  { name: "hooks", children: [{ name: "use-media-query.ts" }] },
  { name: "types", children: [{ name: "index.ts" }] },
  { name: "public", children: [{ name: "favicon.ico" }] },
  { name: "app.tsx" },
  { name: "layout.tsx" },
  { name: "globals.css" },
  { name: "package.json" },
  { name: "tsconfig.json" },
  { name: "README.md" },
  { name: ".gitignore" },
];

const Tree = (props: { items: TreeItem[] }) => (
  <div class="flex flex-col gap-0.5">
    <For each={props.items}>
      {(item) => (
        <Show
          when={item.children}
          fallback={
            <div class="flex items-center gap-1.5 px-2 py-1 text-muted-foreground">
              <File class="size-4 shrink-0" />
              <span>{item.name}</span>
            </div>
          }
        >
          <Collapsible defaultOpen>
            <CollapsibleTrigger
              variant="ghost"
              size="sm"
              class="w-full justify-start gap-1.5 px-2 font-normal"
            >
              <ChevronRight class="size-4 shrink-0 transition-transform group-data-[panel-open=true]/button:rotate-90" />
              <Folder class="size-4 shrink-0" />
              <span>{item.name}</span>
            </CollapsibleTrigger>
            <CollapsibleContent class="ml-3 border-l pl-2">
              <Tree items={item.children!} />
            </CollapsibleContent>
          </Collapsible>
        </Show>
      )}
    </For>
  </div>
);

export default () => (
  <div class="w-full max-w-xs rounded-lg border bg-background p-2 text-sm">
    <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
      Explorer
    </div>
    <Tree items={items} />
  </div>
);`;

export default () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <ComponentPage
      title="Collapsible"
      description="An interactive component that expands and collapses its content."
    >
      <Example
        name="Basic"
        description="A card panel with a trigger that toggles hidden content."
        code={basicCode}
      >
        <Card class="w-full max-w-sm">
          <CardContent>
            <Collapsible>
              <CollapsibleTrigger variant="ghost" class="w-full">
                Product details
                <ChevronDown class="ml-auto group-data-[panel-open=true]/button:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent class="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                <p>
                  This panel can be expanded or collapsed to reveal additional
                  content.
                </p>
                <Button size="xs">Learn More</Button>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </Example>

      <Example
        name="Controlled"
        description="Control the open state with a signal and toggle a Minimize/Maximize icon."
        code={controlledCode}
      >
        <Card class="w-full max-w-sm">
          <CardContent>
            <Collapsible open={isOpen()} onOpenChange={setIsOpen}>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium">Advanced settings</p>
                <CollapsibleTrigger
                  variant="outline"
                  size="md"
                  icon={isOpen() ? <Minimize /> : <Maximize />}
                  aria-label="Toggle advanced settings"
                />
              </div>
              <CollapsibleContent class="pt-2 text-sm text-neutral-500 dark:text-neutral-400">
                Configure proxy, cache and request timeout for this connection.
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </Example>

      <Example
        name="Order details"
        description="A realistic collapsible panel for an order with status and shipping info."
        code={orderCode}
      >
        <Collapsible defaultOpen class="flex w-full max-w-sm flex-col gap-2">
          <div class="flex items-center justify-between gap-4 px-4">
            <h4 class="text-sm font-semibold">Order #4189</h4>
            <CollapsibleTrigger
              variant="ghost"
              size="md"
              class="size-8"
              icon={<ChevronsUpDown />}
            >
              <span class="sr-only">Toggle details</span>
            </CollapsibleTrigger>
          </div>
          <div class="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
            <span class="text-neutral-500 dark:text-neutral-400">Status</span>
            <span class="font-medium">Shipped</span>
          </div>
          <CollapsibleContent class="flex flex-col gap-2">
            <div class="rounded-md border px-4 py-2 text-sm">
              <p class="font-medium">Shipping address</p>
              <p class="text-neutral-500 dark:text-neutral-400">
                100 Market St, San Francisco
              </p>
            </div>
            <div class="rounded-md border px-4 py-2 text-sm">
              <p class="font-medium">Items</p>
              <p class="text-neutral-500 dark:text-neutral-400">
                2x Studio Headphones
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Example>

      <Example
        name="Settings"
        description="Use a trigger button to reveal additional radius settings."
        code={settingsCode}
      >
        <SettingsDemo />
      </Example>

      <Example
        name="File tree"
        description="Use nested collapsibles to build an interactive file tree."
        code={fileTreeCode}
      >
        <div class="w-full max-w-xs rounded-lg border bg-background p-2 text-sm">
          <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Explorer
          </div>
          <Tree items={items} />
        </div>
      </Example>
    </ComponentPage>
  );
};

function SettingsDemo() {
  const [radiusX, setRadiusX] = createSignal(12);
  const [radiusY, setRadiusY] = createSignal(12);

  return (
    <Card size="sm" class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible>
          <div class="flex items-start gap-2">
            <div class="grid w-full grid-cols-2 gap-2">
              <Field>
                <FieldLabel for="radius-x">Radius X</FieldLabel>
                <Input
                  id="radius-x"
                  type="number"
                  value={radiusX()}
                  onInput={(value) => setRadiusX(Number(value))}
                />
              </Field>
              <Field>
                <FieldLabel for="radius-y">Radius Y</FieldLabel>
                <Input
                  id="radius-y"
                  type="number"
                  value={radiusY()}
                  onInput={(value) => setRadiusY(Number(value))}
                />
              </Field>
            </div>
            <CollapsibleTrigger
              variant="outline"
              size="md"
              class="size-8 shrink-0"
              aria-label="Toggle radius settings"
              icon={
                <ChevronDown class="transition-transform group-data-[panel-open=true]/button:rotate-180" />
              }
            />
          </div>
          <CollapsibleContent class="flex flex-col gap-4 pt-4">
            <div class="flex items-center justify-center rounded-lg border bg-muted/30 p-6">
              <div
                class="size-16 bg-primary"
                style={{
                  "border-radius": radiusX() + "px " + radiusY() + "px",
                }}
              />
            </div>
            <Field>
              <FieldLabel>Radius X</FieldLabel>
              <Slider
                value={radiusX()}
                onValueChange={(value) => setRadiusX(value)}
                min={0}
                max={50}
                step={1}
              />
            </Field>
            <Field>
              <FieldLabel>Radius Y</FieldLabel>
              <Slider
                value={radiusY()}
                onValueChange={(value) => setRadiusY(value)}
                min={0}
                max={50}
                step={1}
              />
            </Field>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

type TreeItem = {
  name: string;
  children?: TreeItem[];
};

const items: TreeItem[] = [
  {
    name: "components",
    children: [
      {
        name: "ui",
        children: [{ name: "button.tsx" }, { name: "card.tsx" }],
      },
    ],
  },
  { name: "lib", children: [{ name: "utils.ts" }] },
  { name: "hooks", children: [{ name: "use-media-query.ts" }] },
  { name: "types", children: [{ name: "index.ts" }] },
  { name: "public", children: [{ name: "favicon.ico" }] },
  { name: "app.tsx" },
  { name: "layout.tsx" },
  { name: "globals.css" },
  { name: "package.json" },
  { name: "tsconfig.json" },
  { name: "README.md" },
  { name: ".gitignore" },
];

const Tree = (props: { items: TreeItem[] }) => (
  <div class="flex flex-col gap-0.5">
    <For each={props.items}>
      {(item) => (
        <Show
          when={item.children}
          fallback={
            <div class="flex items-center gap-1.5 px-2 py-1 text-muted-foreground">
              <File class="size-4 shrink-0" />
              <span>{item.name}</span>
            </div>
          }
        >
          <Collapsible defaultOpen>
            <CollapsibleTrigger
              variant="ghost"
              size="sm"
              class="w-full justify-start gap-1.5 px-2 font-normal"
            >
              <ChevronRight class="size-4 shrink-0 transition-transform group-data-[panel-open=true]/button:rotate-90" />
              <Folder class="size-4 shrink-0" />
              <span>{item.name}</span>
            </CollapsibleTrigger>
            <CollapsibleContent class="ml-3 border-l pl-2">
              <Tree items={item.children!} />
            </CollapsibleContent>
          </Collapsible>
        </Show>
      )}
    </For>
  </div>
);
