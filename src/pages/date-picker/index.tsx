import { ComponentPage, Example } from "../../components/component-page";
import { DatePicker } from "@neut/ui";
import { createSignal, Show } from "solid-js";

const basicCode = `import { DatePicker } from "@neut/ui";

export default () => <DatePicker />;`;

const controlledCode = `import { DatePicker } from "@neut/ui";
import { createSignal, Show } from "solid-js";

export default () => {
  const [date, setDate] = createSignal<Date | undefined>();

  return (
    <div class="flex flex-col items-center gap-3">
      <DatePicker value={date()} onValueChange={setDate} />
      <Show when={date()}>
        <p class="text-sm text-muted-foreground">
          Selected: {date()!.toLocaleDateString()}
        </p>
      </Show>
    </div>
  );
};`;

const minMaxCode = `import { DatePicker } from "@neut/ui";

export default () => (
  <DatePicker
    min={new Date(new Date().getFullYear(), new Date().getMonth(), 1)}
    max={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)}
  />
);`;

const dropdownCode = `import { DatePicker } from "@neut/ui";

export default () => <DatePicker captionLayout="dropdown" />;`;

const formatCode = `import { DatePicker } from "@neut/ui";

export default () => (
  <DatePicker
    formatDate={(date) =>
      date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    }
  />
);`;

export default () => {
  return (
    <ComponentPage
      title="DatePicker"
      description="A ready-to-use date picker built on Popover and Calendar."
    >
      <Example
        name="Basic"
        description="A basic date picker with a placeholder."
        code={basicCode}
      >
        <DatePicker />
      </Example>

      <Example
        name="Controlled"
        description="Control the selected value and react to changes."
        code={controlledCode}
      >
        <ControlledExample />
      </Example>

      <Example
        name="Min and max"
        description="Constrain the selectable range to the current month."
        code={minMaxCode}
      >
        <DatePicker
          min={new Date(new Date().getFullYear(), new Date().getMonth(), 1)}
          max={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)}
        />
      </Example>

      <Example
        name="Dropdown caption"
        description="Use month and year dropdown selectors for quick navigation."
        code={dropdownCode}
      >
        <DatePicker captionLayout="dropdown" />
      </Example>

      <Example
        name="Custom format"
        description="Customize how the selected date is formatted in the trigger."
        code={formatCode}
      >
        <DatePicker
          formatDate={(date) =>
            date.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }
        />
      </Example>
    </ComponentPage>
  );
};

function ControlledExample() {
  const [date, setDate] = createSignal<Date | undefined>();

  return (
    <div class="flex flex-col items-center gap-3">
      <DatePicker value={date()} onValueChange={setDate} />
      <Show when={date()}>
        <p class="text-sm text-muted-foreground">
          Selected: {date()!.toLocaleDateString()}
        </p>
      </Show>
    </div>
  );
}
