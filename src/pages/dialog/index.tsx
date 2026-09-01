import { ComponentPage, Example } from "../../components/component-page";
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
  Input,
  Label,
  useDialogContext,
} from "@neut/ui";
import { createSignal } from "solid-js";

const basicCode = `import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "@neut/ui";

export default () => (
  <Dialog>
    <DialogTrigger variant="outline">Edit profile</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="dialog-name">Name</Label>
          <Input id="dialog-name" placeholder="Your name" />
        </div>
        <div class="grid gap-2">
          <Label for="dialog-email">Email</Label>
          <Input id="dialog-email" type="email" placeholder="you@example.com" />
        </div>
      </div>
      <DialogFooter>
        <DialogClose variant="outline">Cancel</DialogClose>
        <Button size="sm">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);`;

const controlledCode = `import { createSignal } from "solid-js";
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
} from "@neut/ui";

export default () => {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="flex flex-col items-center gap-4">
      <div class="flex items-center gap-2">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open dialog
        </Button>
        <span class="text-sm text-muted-foreground">
          State: {open() ? "open" : "closed"}
        </span>
      </div>
      <Dialog open={open()} onOpenChange={setOpen}>
        <DialogTrigger variant="outline">Open via trigger</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled dialog</DialogTitle>
            <DialogDescription>
              This dialog is fully controlled by the open prop.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
              Close via state
            </Button>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};`;

const defaultOpenCode = `import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@neut/ui";

export default () => (
  <Dialog defaultOpen>
    <DialogTrigger variant="outline">Open dialog</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Default open</DialogTitle>
        <DialogDescription>
          This dialog is open by default in uncontrolled mode.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose>Close</DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);`;

const noCloseButtonCode = `import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@neut/ui";

export default () => (
  <Dialog>
    <DialogTrigger variant="outline">Open dialog</DialogTrigger>
    <DialogContent showCloseButton={false}>
      <DialogHeader>
        <DialogTitle>No default close button</DialogTitle>
        <DialogDescription>
          Set showCloseButton to false to hide the X button.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose variant="outline">Cancel</DialogClose>
        <Button size="sm">Continue</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);`;

const programmaticCode = `import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  useDialogContext,
} from "@neut/ui";

function Subscribe() {
  const { setOpen } = useDialogContext();

  return (
    <div class="grid gap-4">
      <div class="grid gap-2">
        <Label for="subscribe-email">Email</Label>
        <Input id="subscribe-email" type="email" placeholder="you@example.com" />
      </div>
      <DialogFooter>
        <DialogClose variant="outline">Cancel</DialogClose>
        <Button size="sm" onClick={() => setOpen(false)}>Subscribe</Button>
      </DialogFooter>
    </div>
  );
}

export default () => (
  <Dialog>
    <DialogTrigger variant="outline">Open dialog</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Close programmatically</DialogTitle>
        <DialogDescription>
          Use useDialogContext inside the dialog to close it after an action.
        </DialogDescription>
      </DialogHeader>
      <Subscribe />
    </DialogContent>
  </Dialog>
);`;

export default () => {
  return (
    <ComponentPage
      title="Dialog"
      description="A window overlaid on either the primary window or another dialog window, rendering content underneath inert."
    >
      <Example
        name="Basic"
        description="A dialog with a title, description, form fields, and footer actions."
        code={basicCode}
      >
        <Dialog>
          <DialogTrigger variant="outline">Edit profile</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div class="grid gap-4">
              <div class="grid gap-2">
                <Label for="dialog-name">Name</Label>
                <Input id="dialog-name" placeholder="Your name" />
              </div>
              <div class="grid gap-2">
                <Label for="dialog-email">Email</Label>
                <Input
                  id="dialog-email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose variant="outline">Cancel</DialogClose>
              <Button size="sm">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Example>

      <Example
        name="Controlled"
        description="Control the open state with the open prop and onOpenChange."
        code={controlledCode}
      >
        <ControlledExample />
      </Example>

      <Example
        name="Default open"
        description="Set defaultOpen to render the dialog open on mount."
        code={defaultOpenCode}
      >
        <Dialog defaultOpen>
          <DialogTrigger variant="outline">Open dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Default open</DialogTitle>
              <DialogDescription>
                This dialog is open by default in uncontrolled mode.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Example>

      <Example
        name="No default close button"
        description="Hide the default X button with showCloseButton={false}."
        code={noCloseButtonCode}
      >
        <Dialog>
          <DialogTrigger variant="outline">Open dialog</DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>No default close button</DialogTitle>
              <DialogDescription>
                Set showCloseButton to false to hide the X button.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose variant="outline">Cancel</DialogClose>
              <Button size="sm">Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Example>

      <Example
        name="Close programmatically"
        description="Use useDialogContext to close the dialog from an action."
        code={programmaticCode}
      >
        <Dialog>
          <DialogTrigger variant="outline">Open dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Close programmatically</DialogTitle>
              <DialogDescription>
                Use useDialogContext inside the dialog to close it after an
                action.
              </DialogDescription>
            </DialogHeader>
            <DialogSubscribe />
          </DialogContent>
        </Dialog>
      </Example>
    </ComponentPage>
  );
};

function ControlledExample() {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="flex flex-col items-center gap-4">
      <div class="flex items-center gap-2">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open dialog
        </Button>
        <span class="text-sm text-muted-foreground">
          State: {open() ? "open" : "closed"}
        </span>
      </div>
      <Dialog open={open()} onOpenChange={setOpen}>
        <DialogTrigger variant="outline">Open via trigger</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled dialog</DialogTitle>
            <DialogDescription>
              This dialog is fully controlled by the open prop.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
              Close via state
            </Button>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DialogSubscribe() {
  const { setOpen } = useDialogContext();

  return (
    <div class="grid gap-4">
      <div class="grid gap-2">
        <Label for="subscribe-email">Email</Label>
        <Input
          id="subscribe-email"
          type="email"
          placeholder="you@example.com"
        />
      </div>
      <DialogFooter>
        <DialogClose variant="outline">Cancel</DialogClose>
        <Button size="sm" onClick={() => setOpen(false)}>Subscribe</Button>
      </DialogFooter>
    </div>
  );
}
