import { ChevronDown, ChevronsUpDown, Maximize, Minimize } from "lucide-solid";
import { createSignal } from "solid-js";
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
  FieldGroup,
  FieldLabel,
  Input,
} from "@neut/ui";

function CollapsibleBasic() {
  return (
    <Card class="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible class="rounded-md data-[open=true]:bg-neutral-100 dark:data-[open=true]:bg-neutral-800">
          <CollapsibleTrigger variant="ghost" class="w-full">
            Product details
            <ChevronDown class="ml-auto group-data-[panel-open=true]/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent class="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>
              This panel can be expanded or collapsed to reveal additional
              content.
            </div>
            <Button size="xs">Learn More</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

function CollapsibleSettings() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <Card class="mx-auto w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={isOpen()}
          onOpenChange={setIsOpen}
          class="flex items-start gap-2"
        >
          <FieldGroup class="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel for="radius-x" class="sr-only">
                Radius X
              </FieldLabel>
              <Input
                type="number"
                id="radius-x"
                placeholder="0"
                defaultValue={0}
              />
            </Field>
            <Field>
              <FieldLabel for="radius-y" class="sr-only">
                Radius Y
              </FieldLabel>
              <Input
                type="number"
                id="radius-y"
                placeholder="0"
                defaultValue={0}
              />
            </Field>
            <CollapsibleContent class="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel for="radius-x" class="sr-only">
                  Radius X
                </FieldLabel>
                <Input
                  id="radius-x"
                  placeholder="0"
                  type="number"
                  defaultValue={0}
                />
              </Field>
              <Field>
                <FieldLabel for="radius-y" class="sr-only">
                  Radius Y
                </FieldLabel>
                <Input
                  id="radius-y"
                  placeholder="0"
                  type="number"
                  defaultValue={0}
                />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger
            variant="outline"
            size="md"
            icon={isOpen() ? <Minimize /> : <Maximize />}
          />
        </Collapsible>
      </CardContent>
    </Card>
  );
}

function CollapsibleDemo() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <Collapsible
      open={isOpen()}
      onOpenChange={setIsOpen}
      class="flex w-87.5 flex-col gap-2"
    >
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
        <span class="text-muted-foreground">Status</span>
        <span class="font-medium">Shipped</span>
      </div>
      <CollapsibleContent class="flex flex-col gap-2">
        <div class="rounded-md border px-4 py-2 text-sm">
          <p class="font-medium">Shipping address</p>
          <p class="text-muted-foreground">100 Market St, San Francisco</p>
        </div>
        <div class="rounded-md border px-4 py-2 text-sm">
          <p class="font-medium">Items</p>
          <p class="text-muted-foreground">2x Studio Headphones</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default () => {
  return (
    <div class="h-screen w-full flex flex-col gap-6 items-center justify-center">
      <CollapsibleBasic />
      <CollapsibleSettings />
      <CollapsibleDemo />
    </div>
  );
};
