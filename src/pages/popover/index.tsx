import { ComponentPage, Example } from "../../components/component-page";
import {
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@neut/ui";

const basicCode = `import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@neut/ui";

export default () => (
  <Popover>
    <PopoverTrigger variant="outline">Open popover</PopoverTrigger>
    <PopoverContent class="w-72">
      <PopoverHeader>
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>
          Set the dimensions for the layer.
        </PopoverDescription>
      </PopoverHeader>
    </PopoverContent>
  </Popover>
);`;

const alignCode = `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@neut/ui";

export default () => (
  <div class="flex gap-6">
    <Popover>
      <PopoverTrigger variant="outline" size="sm">Start</PopoverTrigger>
      <PopoverContent align="start" class="w-40">
        Aligned to start
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger variant="outline" size="sm">Center</PopoverTrigger>
      <PopoverContent align="center" class="w-40">
        Aligned to center
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger variant="outline" size="sm">End</PopoverTrigger>
      <PopoverContent align="end" class="w-40">
        Aligned to end
      </PopoverContent>
    </Popover>
  </div>
);`;

const formCode = `import {
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@neut/ui";

export default () => (
  <Popover>
    <PopoverTrigger variant="outline">Open popover</PopoverTrigger>
    <PopoverContent class="w-64" align="start">
      <PopoverHeader>
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>
          Set the dimensions for the layer.
        </PopoverDescription>
      </PopoverHeader>
      <FieldGroup class="gap-4">
        <Field orientation="horizontal">
          <FieldLabel for="width" class="w-1/2">Width</FieldLabel>
          <Input id="width" defaultValue="100%" />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel for="height" class="w-1/2">Height</FieldLabel>
          <Input id="height" defaultValue="25px" />
        </Field>
      </FieldGroup>
    </PopoverContent>
  </Popover>
);`;

const customCode = `import { Label, Input, Popover, PopoverContent, PopoverTrigger } from "@neut/ui";

export default () => (
  <Popover>
    <PopoverTrigger variant="outline">Open popover</PopoverTrigger>
    <PopoverContent class="w-80">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Dimensions</h4>
          <p class="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
        <div class="grid gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="width">Width</Label>
            <Input id="width" defaultValue="100%" class="col-span-2 h-8" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="maxWidth">Max. width</Label>
            <Input id="maxWidth" defaultValue="300px" class="col-span-2 h-8" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="height">Height</Label>
            <Input id="height" defaultValue="25px" class="col-span-2 h-8" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label for="maxHeight">Max. height</Label>
            <Input id="maxHeight" defaultValue="none" class="col-span-2 h-8" />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);`;

export default () => {
  return (
    <ComponentPage
      title="Popover"
      description="Displays rich content in a portal, triggered by a button."
    >
      <Example
        name="Basic"
        description="A popover with a header, title and description."
        code={basicCode}
      >
        <Popover>
          <PopoverTrigger variant="outline">Open popover</PopoverTrigger>
          <PopoverContent class="w-72">
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>
                Set the dimensions for the layer.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Example>

      <Example
        name="Align"
        description="Control horizontal alignment of the content relative to the trigger."
        code={alignCode}
      >
        <div class="flex gap-6">
          <Popover>
            <PopoverTrigger variant="outline" size="sm">
              Start
            </PopoverTrigger>
            <PopoverContent align="start" class="w-40">
              Aligned to start
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger variant="outline" size="sm">
              Center
            </PopoverTrigger>
            <PopoverContent align="center" class="w-40">
              Aligned to center
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger variant="outline" size="sm">
              End
            </PopoverTrigger>
            <PopoverContent align="end" class="w-40">
              Aligned to end
            </PopoverContent>
          </Popover>
        </div>
      </Example>

      <Example
        name="With form"
        description="Use Field components to build a small form inside a popover."
        code={formCode}
      >
        <Popover>
          <PopoverTrigger variant="outline">Open popover</PopoverTrigger>
          <PopoverContent class="w-64" align="start">
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>
                Set the dimensions for the layer.
              </PopoverDescription>
            </PopoverHeader>
            <FieldGroup class="gap-4">
              <Field orientation="horizontal">
                <FieldLabel for="width" class="w-1/2">
                  Width
                </FieldLabel>
                <Input id="width" defaultValue="100%" />
              </Field>
              <Field orientation="horizontal">
                <FieldLabel for="height" class="w-1/2">
                  Height
                </FieldLabel>
                <Input id="height" defaultValue="25px" />
              </Field>
            </FieldGroup>
          </PopoverContent>
        </Popover>
      </Example>

      <Example
        name="Custom content"
        description="Render arbitrary content with Label and Input components."
        code={customCode}
      >
        <Popover>
          <PopoverTrigger variant="outline">Open popover</PopoverTrigger>
          <PopoverContent class="w-80">
            <div class="grid gap-4">
              <div class="space-y-2">
                <h4 class="font-medium leading-none">Dimensions</h4>
                <p class="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div class="grid gap-2">
                <div class="grid grid-cols-3 items-center gap-4">
                  <Label for="width">Width</Label>
                  <Input id="width" defaultValue="100%" class="col-span-2 h-8" />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <Label for="maxWidth">Max. width</Label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    class="col-span-2 h-8"
                  />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <Label for="height">Height</Label>
                  <Input id="height" defaultValue="25px" class="col-span-2 h-8" />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <Label for="maxHeight">Max. height</Label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    class="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </Example>
    </ComponentPage>
  );
};
