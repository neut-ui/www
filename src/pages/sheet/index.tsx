import { ComponentPage, Example } from "../../components/component-page";
import { For } from "solid-js";
import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@neut/ui";

const demoCode = `import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@neut/ui";

export default () => (
  <Sheet>
    <SheetTrigger variant="outline">Open</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you are done.
        </SheetDescription>
      </SheetHeader>
      <div class="grid flex-1 auto-rows-min gap-6 px-4">
        <div class="grid gap-3">
          <Label for="sheet-name">Name</Label>
          <Input id="sheet-name" defaultValue="Pedro Duarte" />
        </div>
        <div class="grid gap-3">
          <Label for="sheet-username">Username</Label>
          <Input id="sheet-username" defaultValue="@peduarte" />
        </div>
      </div>
      <SheetFooter>
        <Button type="submit">Save changes</Button>
        <SheetClose variant="outline">Close</SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);`;

const sidesCode = `import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@neut/ui";
import { For } from "solid-js";

const sides = ["top", "right", "bottom", "left"] as const;

export default () => (
  <div class="flex flex-wrap gap-2">
    <For each={sides}>
      {(side) => (
        <Sheet>
          <SheetTrigger variant="outline" class="capitalize">
            {side}
          </SheetTrigger>
          <SheetContent
            side={side}
            class="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
          >
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here.
              </SheetDescription>
            </SheetHeader>
            <div class="grid gap-3 px-4">
              <Label for="sheet-side-name">Name</Label>
              <Input id="sheet-side-name" defaultValue="Pedro Duarte" />
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose variant="outline">Cancel</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      )}
    </For>
  </div>
);`;

const noCloseCode = `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@neut/ui";

export default () => (
  <Sheet>
    <SheetTrigger variant="outline">Open Sheet</SheetTrigger>
    <SheetContent showCloseButton={false}>
      <SheetHeader>
        <SheetTitle>No Close Button</SheetTitle>
        <SheetDescription>
          This sheet does not have a close button in the top-right corner.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);`;

export default () => {
  return (
    <ComponentPage
      title="Sheet"
      description="Extends the Dialog component to display content that complements the main content of the screen."
    >
      <Example
        name="Basic"
        description="A right-side sheet with a form and a footer."
        code={demoCode}
      >
        <Sheet>
          <SheetTrigger variant="outline">Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you are done.
              </SheetDescription>
            </SheetHeader>
            <div class="grid flex-1 auto-rows-min gap-6 px-4">
              <div class="grid gap-3">
                <Label for="sheet-name">Name</Label>
                <Input id="sheet-name" defaultValue="Pedro Duarte" />
              </div>
              <div class="grid gap-3">
                <Label for="sheet-username">Username</Label>
                <Input id="sheet-username" defaultValue="@peduarte" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose variant="outline">Close</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </Example>

      <Example
        name="Sides"
        description="Open the sheet from the top, right, bottom or left."
        code={sidesCode}
      >
        <div class="flex flex-wrap gap-2">
          <For each={["top", "right", "bottom", "left"] as const}>
            {(side) => (
              <Sheet>
                <SheetTrigger variant="outline" class="capitalize">
                  {side}
                </SheetTrigger>
                <SheetContent
                  side={side}
                  class="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
                >
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here.
                    </SheetDescription>
                  </SheetHeader>
                  <div class="grid gap-3 px-4">
                    <Label for="sheet-side-name">Name</Label>
                    <Input id="sheet-side-name" defaultValue="Pedro Duarte" />
                  </div>
                  <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose variant="outline">Cancel</SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            )}
          </For>
        </div>
      </Example>

      <Example
        name="Without close button"
        description="Hide the corner close button with showCloseButton={false}."
        code={noCloseCode}
      >
        <Sheet>
          <SheetTrigger variant="outline">Open Sheet</SheetTrigger>
          <SheetContent showCloseButton={false}>
            <SheetHeader>
              <SheetTitle>No Close Button</SheetTitle>
              <SheetDescription>
                This sheet does not have a close button in the top-right corner.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Example>
    </ComponentPage>
  );
};
