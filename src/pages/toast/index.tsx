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

const loadingCode = `import { Button, toast, Toaster } from "@neut/ui";

export default () => (
  <>
    <Toaster />
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.loading("Saving changes...");
        setTimeout(() => toast.success("Changes saved", { id }), 2000);
      }}
    >
      Loading toast
    </Button>
  </>
);`;

const customCode = `import { Button, toast, Toaster } from "@neut/ui";

export default () => (
  <>
    <Toaster />
    <Button
      variant="outline"
      onClick={() =>
        toast.custom((id) => (
          <div class="flex items-center gap-3 rounded-lg border bg-white p-3 dark:bg-neutral-950">
            <div class="flex flex-col gap-1">
              <span class="text-sm font-medium">Custom toast</span>
              <span class="text-xs text-neutral-500">
                Rendered with toast.custom
              </span>
            </div>
            <Button size="xs" variant="outline" onClick={() => toast.dismiss(id)}>
              Dismiss
            </Button>
          </div>
        ))
      }
    >
      Custom toast
    </Button>
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
      <Example
        name="Loading"
        description="Show a loading toast and update it when the work completes."
        code={loadingCode}
      >
        <div class="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() => {
              const id = toast.loading("Saving changes...");
              setTimeout(() => toast.success("Changes saved", { id }), 2000);
            }}
          >
            Loading toast
          </Button>
        </div>
      </Example>

      <Example
        name="Custom"
        description="Render arbitrary JSX inside a toast with toast.custom."
        code={customCode}
      >
        <div class="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast.custom((id) => (
                <div class="flex items-center gap-3 rounded-lg border bg-white p-3 dark:bg-neutral-950">
                  <div class="flex flex-col gap-1">
                    <span class="text-sm font-medium">Custom toast</span>
                    <span class="text-xs text-neutral-500">
                      Rendered with toast.custom
                    </span>
                  </div>
                  <Button
                    size="xs"
                    variant="outline"
                    onClick={() => toast.dismiss(id)}
                  >
                    Dismiss
                  </Button>
                </div>
              ))
            }
          >
            Custom toast
          </Button>
        </div>
      </Example>
    </ComponentPage>
  );
};
