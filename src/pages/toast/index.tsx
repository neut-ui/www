import { ComponentPage, Example } from "../../components/component-page";
import { Button, toast, Toaster } from "@neut/ui";

const variantsCode = `import { Button, toast, Toaster } from "@neut/ui";

export default () => (
  <>
    <Toaster />
    <div class="flex flex-wrap items-center gap-3">
      <Button variant="outline" onClick={() => toast("Event has been created")}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Event has been created")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("Be at the area 10 minutes before the event")}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("Event start time cannot be earlier than 8am")}
      >
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error("Event has not been created")}>
        Error
      </Button>
    </div>
  </>
);`;

const promiseCode = `import { Button, toast, Toaster } from "@neut/ui";

export default () => (
  <>
    <Toaster />
    <div class="flex flex-wrap items-center gap-3">
      <Button
        variant="outline"
        onClick={() =>
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Event" }), 2000),
              ),
            {
              loading: "Loading...",
              success: (data) => \`\${data.name} has been created\`,
              error: "Error",
            },
          )
        }
      >
        Save changes
      </Button>
    </div>
  </>
);`;

const actionsCode = `import { Button, toast, Toaster } from "@neut/ui";

export default () => (
  <>
    <Toaster />
    <div class="flex flex-wrap items-center gap-3">
      <Button
        variant="outline"
        onClick={() =>
          toast("Upload complete", {
            description: "Your file is ready to share.",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        With action
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Discard changes?", {
            cancel: {
              label: "Cancel",
              onClick: () => console.log("Cancelled"),
            },
          })
        }
      >
        With cancel
      </Button>
    </div>
  </>
);`;

export default () => {
  return (
    <ComponentPage
      title="Toast"
      description="A succinct message that is displayed temporarily."
    >
      <Toaster />

      <Example
        name="Variants"
        description="Several built-in variants for different feedback types."
        code={variantsCode}
      >
        <div class="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() => toast("Event has been created")}
          >
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Event has been created")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.info("Be at the area 10 minutes before the event")
            }
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.warning("Event start time cannot be earlier than 8am")
            }
          >
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("Event has not been created")}
          >
            Error
          </Button>
        </div>
      </Example>

      <Example
        name="Promise"
        description="Use toast.promise to show loading, success and error states."
        code={promiseCode}
      >
        <div class="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() => {
              toast.promise<{ name: string }>(
                () =>
                  new Promise((resolve) =>
                    setTimeout(() => resolve({ name: "Event" }), 2000),
                  ),
                {
                  loading: "Loading...",
                  success: (data) => `${data.name} has been created`,
                  error: "Error",
                },
              );
            }}
          >
            Save changes
          </Button>
        </div>
      </Example>

      <Example
        name="With actions"
        description="Attach an action or cancel button to a toast."
        code={actionsCode}
      >
        <div class="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast("Upload complete", {
                description: "Your file is ready to share.",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            With action
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Discard changes?", {
                cancel: {
                  label: "Cancel",
                  onClick: () => console.log("Cancelled"),
                },
              })
            }
          >
            With cancel
          </Button>
        </div>
      </Example>
    </ComponentPage>
  );
};
