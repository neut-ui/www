import { ComponentPage, Example } from "../../components/component-page";
import { For, Show, createSignal, onCleanup, onMount } from "solid-js";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Input,
  Label,
} from "@neut/ui";

const demoCode = `import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@neut/ui";

export default () => (
  <div class="flex flex-wrap gap-2">
    <Drawer>
      <DrawerTrigger variant="outline">Open Drawer</DrawerTrigger>
      <DrawerContent>
        <div class="p-4">
          <div class="h-80 w-full bg-neutral-100 dark:bg-neutral-800" />
        </div>
      </DrawerContent>
    </Drawer>
    <Drawer>
      <DrawerTrigger variant="outline">With header</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you are done.
          </DrawerDescription>
        </DrawerHeader>
        <div class="p-4">
          <div class="h-80 w-full bg-neutral-100 dark:bg-neutral-800" />
        </div>
      </DrawerContent>
    </Drawer>
    <Drawer>
      <DrawerTrigger variant="outline">With footer</DrawerTrigger>
      <DrawerContent>
        <div class="p-4">
          <div class="h-80 w-full bg-neutral-100 dark:bg-neutral-800" />
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose variant="outline">Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
);`;

const positionCode = `import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@neut/ui";
import { For } from "solid-js";

const sides = ["up", "right", "down", "left"] as const;

export default () => (
  <div class="flex flex-wrap gap-2">
    <For each={sides}>
      {(side) => (
        <Drawer swipeDirection={side}>
          <DrawerTrigger variant="outline" class="capitalize">
            {side}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div class="flex-1 p-4">
              <div class="h-64 w-full bg-neutral-100 dark:bg-neutral-800" />
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose variant="outline">Cancel</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </For>
  </div>
);`;

const handleCode = `import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@neut/ui";

export default () => (
  <Drawer showSwipeHandle>
    <DrawerTrigger variant="outline">Open Drawer</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Swipe to close</DrawerTitle>
        <DrawerDescription>
          Drag the handle down to dismiss the drawer.
        </DrawerDescription>
      </DrawerHeader>
      <div class="flex-1 p-4">
        <div class="h-64 w-full bg-neutral-100 dark:bg-neutral-800" />
      </div>
    </DrawerContent>
  </Drawer>
);`;

const nonModalCode = `import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@neut/ui";

export default () => (
  <Drawer modal={false} disablePointerDismissal swipeDirection="right">
    <DrawerTrigger variant="outline">Non Modal</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Non Modal Drawer</DrawerTitle>
      </DrawerHeader>
      <div class="flex-1 p-4">
        <div class="h-64 w-full bg-neutral-100 dark:bg-neutral-800" />
      </div>
      <DrawerFooter>
        <DrawerClose variant="outline">Close</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);`;

const scrollableCode = `import { For } from "solid-js";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@neut/ui";

const paragraphs = [
  "Your changes are saved automatically as you type.",
  "Delivery usually takes three to five business days.",
  "We use your email address for account notifications.",
  "Refunds are processed within five to ten business days.",
];

export default () => (
  <Drawer swipeDirection="right">
    <DrawerTrigger variant="outline">Open Drawer</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Terms</DrawerTitle>
        <DrawerDescription>Scroll to read the full document.</DrawerDescription>
      </DrawerHeader>
      <div class="flex-1 overflow-y-auto p-4">
        <For each={Array.from({ length: 20 })}>
          {(_, index) => (
            <p class="mb-4 leading-normal">
              {paragraphs[index() % paragraphs.length]}
            </p>
          )}
        </For>
      </div>
      <DrawerFooter>
        <Button>Accept</Button>
        <DrawerClose variant="outline">Cancel</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);`;

const sizeCode = `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@neut/ui";

export default () => (
  <div class="flex flex-wrap gap-2">
    <Drawer swipeDirection="down">
      <DrawerTrigger variant="outline">Custom height</DrawerTrigger>
      <DrawerContent class="data-[swipe-direction=down]:h-64">
        <DrawerHeader>
          <DrawerTitle>Down drawer</DrawerTitle>
          <DrawerDescription>Drawer with a custom height.</DrawerDescription>
        </DrawerHeader>
        <div class="flex-1 p-4">
          <div class="h-full w-full bg-neutral-100 dark:bg-neutral-800" />
        </div>
        <DrawerFooter>
          <DrawerClose variant="outline">Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    <Drawer swipeDirection="right">
      <DrawerTrigger variant="outline">Custom width</DrawerTrigger>
      <DrawerContent class="data-[swipe-direction=right]:w-80">
        <DrawerHeader>
          <DrawerTitle>Right drawer</DrawerTitle>
          <DrawerDescription>Drawer with a custom width.</DrawerDescription>
        </DrawerHeader>
        <div class="flex-1 p-4">
          <div class="h-full w-full bg-neutral-100 dark:bg-neutral-800" />
        </div>
        <DrawerFooter>
          <DrawerClose variant="outline">Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
);`;

const nestedCode = `import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@neut/ui";

export default () => (
  <Drawer>
    <DrawerTrigger variant="outline">Open Drawer</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer</DrawerTitle>
        <DrawerDescription>
          Open another drawer from the same direction.
        </DrawerDescription>
      </DrawerHeader>
      <div class="flex-1 p-4">
        <div class="h-64 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800" />
      </div>
      <DrawerFooter>
        <Drawer>
          <DrawerTrigger variant="outline">Open Nested Drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Nested Drawer</DrawerTitle>
              <DrawerDescription>
                The parent drawer stays mounted behind this one.
              </DrawerDescription>
            </DrawerHeader>
            <div class="flex-1 p-4">
              <div class="h-64 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800" />
            </div>
            <DrawerFooter>
              <DrawerClose variant="outline">Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <DrawerClose variant="outline">Close</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);`;

const dialogCode = `import { Show, createSignal, onCleanup, onMount } from "solid-js";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Input,
  Label,
} from "@neut/ui";

function ProfileFields() {
  return (
    <div class="grid gap-4">
      <div class="grid gap-2">
        <Label for="responsive-email">Email</Label>
        <Input
          id="responsive-email"
          type="email"
          defaultValue="shadcn@example.com"
        />
      </div>
      <div class="grid gap-2">
        <Label for="responsive-username">Username</Label>
        <Input id="responsive-username" defaultValue="@shadcn" />
      </div>
    </div>
  );
}

export default () => {
  const [isDesktop, setIsDesktop] = createSignal(true);

  onMount(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    onCleanup(() => query.removeEventListener("change", update));
  });

  return (
    <Show
      when={isDesktop()}
      fallback={
        <Drawer>
          <DrawerTrigger variant="outline">Edit Profile</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here.
              </DrawerDescription>
            </DrawerHeader>
            <div class="p-4">
              <ProfileFields />
            </div>
            <DrawerFooter>
              <Button>Save changes</Button>
              <DrawerClose variant="outline">Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      }
    >
      <Dialog>
        <DialogTrigger variant="outline">Edit Profile</DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here.
            </DialogDescription>
          </DialogHeader>
          <ProfileFields />
          <DialogFooter>
            <Button>Save changes</Button>
            <DialogClose variant="outline">Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Show>
  );
};`;

export default () => {
  return (
    <ComponentPage
      title="Drawer"
      description="A dialog that slides in from the edge of the screen."
    >
      <Example
        name="Basic"
        description="Content, header and footer variants."
        code={demoCode}
      >
        <div class="flex flex-wrap gap-2">
          <Drawer>
            <DrawerTrigger variant="outline">Open Drawer</DrawerTrigger>
            <DrawerContent>
              <div class="p-4">
                <div class="h-80 w-full bg-neutral-100 dark:bg-neutral-800" />
              </div>
            </DrawerContent>
          </Drawer>
          <Drawer>
            <DrawerTrigger variant="outline">With header</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you are
                  done.
                </DrawerDescription>
              </DrawerHeader>
              <div class="p-4">
                <div class="h-80 w-full bg-neutral-100 dark:bg-neutral-800" />
              </div>
            </DrawerContent>
          </Drawer>
          <Drawer>
            <DrawerTrigger variant="outline">With footer</DrawerTrigger>
            <DrawerContent>
              <div class="p-4">
                <div class="h-80 w-full bg-neutral-100 dark:bg-neutral-800" />
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose variant="outline">Cancel</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </Example>

      <Example
        name="Position"
        description="Open the drawer from any side with swipeDirection."
        code={positionCode}
      >
        <div class="flex flex-wrap gap-2">
          <For each={["up", "right", "down", "left"] as const}>
            {(side) => (
              <Drawer swipeDirection={side}>
                <DrawerTrigger variant="outline" class="capitalize">
                  {side}
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>
                      Set your daily activity goal.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div class="flex-1 p-4">
                    <div class="h-64 w-full bg-neutral-100 dark:bg-neutral-800" />
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose variant="outline">Cancel</DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            )}
          </For>
        </div>
      </Example>

      <Example
        name="Swipe handle"
        description="Show a drag handle with showSwipeHandle."
        code={handleCode}
      >
        <Drawer showSwipeHandle>
          <DrawerTrigger variant="outline">Open Drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Swipe to close</DrawerTitle>
              <DrawerDescription>
                Drag the handle down to dismiss the drawer.
              </DrawerDescription>
            </DrawerHeader>
            <div class="flex-1 p-4">
              <div class="h-64 w-full bg-neutral-100 dark:bg-neutral-800" />
            </div>
          </DrawerContent>
        </Drawer>
      </Example>

      <Example
        name="Non modal"
        description="modal={false} allows interacting with the page behind."
        code={nonModalCode}
      >
        <Drawer modal={false} disablePointerDismissal swipeDirection="right">
          <DrawerTrigger variant="outline">Non Modal</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Non Modal Drawer</DrawerTitle>
            </DrawerHeader>
            <div class="flex-1 p-4">
              <div class="h-64 w-full bg-neutral-100 dark:bg-neutral-800" />
            </div>
            <DrawerFooter>
              <DrawerClose variant="outline">Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Example>
      <Example
        name="Scrollable content"
        description="Make a flex-1 region scrollable inside the drawer."
        code={scrollableCode}
      >
        <Drawer swipeDirection="right">
          <DrawerTrigger variant="outline">Open Drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Terms</DrawerTitle>
              <DrawerDescription>
                Scroll to read the full document.
              </DrawerDescription>
            </DrawerHeader>
            <div class="flex-1 overflow-y-auto p-4">
              <For each={Array.from({ length: 20 })}>
                {(_, index) => (
                  <p class="mb-4 leading-normal">
                    Paragraph {index() + 1}. Your changes are saved
                    automatically as you type.
                  </p>
                )}
              </For>
            </div>
            <DrawerFooter>
              <Button>Accept</Button>
              <DrawerClose variant="outline">Cancel</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Example>

      <Example
        name="Custom size"
        description="Customize width and height with utility classes."
        code={sizeCode}
      >
        <div class="flex flex-wrap gap-2">
          <Drawer swipeDirection="down">
            <DrawerTrigger variant="outline">Custom height</DrawerTrigger>
            <DrawerContent class="data-[swipe-direction=down]:h-64">
              <DrawerHeader>
                <DrawerTitle>Down drawer</DrawerTitle>
                <DrawerDescription>
                  Drawer with a custom height.
                </DrawerDescription>
              </DrawerHeader>
              <div class="flex-1 p-4">
                <div class="h-full w-full bg-neutral-100 dark:bg-neutral-800" />
              </div>
              <DrawerFooter>
                <DrawerClose variant="outline">Close</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer swipeDirection="right">
            <DrawerTrigger variant="outline">Custom width</DrawerTrigger>
            <DrawerContent class="data-[swipe-direction=right]:w-80">
              <DrawerHeader>
                <DrawerTitle>Right drawer</DrawerTitle>
                <DrawerDescription>
                  Drawer with a custom width.
                </DrawerDescription>
              </DrawerHeader>
              <div class="flex-1 p-4">
                <div class="h-full w-full bg-neutral-100 dark:bg-neutral-800" />
              </div>
              <DrawerFooter>
                <DrawerClose variant="outline">Close</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </Example>

      <Example
        name="Nested"
        description="Open a drawer from inside another drawer; the parent stays mounted behind it."
        code={nestedCode}
      >
        <Drawer>
          <DrawerTrigger variant="outline">Open Drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer</DrawerTitle>
              <DrawerDescription>
                Open another drawer from the same direction.
              </DrawerDescription>
            </DrawerHeader>
            <div class="flex-1 p-4">
              <div class="h-64 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800" />
            </div>
            <DrawerFooter>
              <Drawer>
                <DrawerTrigger variant="outline">
                  Open Nested Drawer
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Nested Drawer</DrawerTitle>
                    <DrawerDescription>
                      The parent drawer stays mounted behind this one.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div class="flex-1 p-4">
                    <div class="h-64 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800" />
                  </div>
                  <DrawerFooter>
                    <DrawerClose variant="outline">Close</DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              <DrawerClose variant="outline">Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Example>

      <Example
        name="Responsive dialog"
        description="Render a Dialog on desktop and a Drawer on small screens."
        code={dialogCode}
      >
        <ResponsiveProfile />
      </Example>
    </ComponentPage>
  );
};

function ResponsiveProfile() {
  const [isDesktop, setIsDesktop] = createSignal(true);

  onMount(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    onCleanup(() => query.removeEventListener("change", update));
  });

  return (
    <Show
      when={isDesktop()}
      fallback={
        <Drawer>
          <DrawerTrigger variant="outline">Edit Profile</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here.
              </DrawerDescription>
            </DrawerHeader>
            <div class="p-4">
              <ProfileFields />
            </div>
            <DrawerFooter>
              <Button>Save changes</Button>
              <DrawerClose variant="outline">Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      }
    >
      <Dialog>
        <DialogTrigger variant="outline">Edit Profile</DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here.
            </DialogDescription>
          </DialogHeader>
          <ProfileFields />
          <DialogFooter>
            <Button>Save changes</Button>
            <DialogClose variant="outline">Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Show>
  );
}

function ProfileFields() {
  return (
    <div class="grid gap-4">
      <div class="grid gap-2">
        <Label for="responsive-email">Email</Label>
        <Input
          id="responsive-email"
          type="email"
          defaultValue="shadcn@example.com"
        />
      </div>
      <div class="grid gap-2">
        <Label for="responsive-username">Username</Label>
        <Input id="responsive-username" defaultValue="@shadcn" />
      </div>
    </div>
  );
}
