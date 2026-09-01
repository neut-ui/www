import { ComponentPage, Example } from "../../components/component-page";
import {
  Button,
  Card,
  CardContent,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@neut/ui";
import { createSignal } from "solid-js";
import { ChevronDown, ChevronsUpDown, Maximize, Minimize } from "lucide-solid";

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
    </ComponentPage>
  );
};
