import { ComponentPage, Example } from "../../components/component-page";
import { Label, Slider } from "@neut/ui";
import { createSignal } from "solid-js";

const basicCode = `import { Slider } from "@neut/ui";

export default () => (
  <Slider
    defaultValue={[75]}
    max={100}
    step={1}
    class="mx-auto w-full max-w-xs"
  />
);`;

const rangeCode = `import { Slider } from "@neut/ui";

export default () => (
  <Slider
    defaultValue={[25, 50]}
    max={100}
    step={5}
    class="mx-auto w-full max-w-xs"
  />
);`;

const multipleCode = `import { Slider } from "@neut/ui";

export default () => (
  <Slider
    defaultValue={[10, 20, 70]}
    max={100}
    step={10}
    class="mx-auto w-full max-w-xs"
  />
);`;

const verticalCode = `import { Slider } from "@neut/ui";

export default () => (
  <div class="mx-auto flex w-full max-w-xs items-center justify-center gap-6">
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      orientation="vertical"
      class="h-40"
    />
    <Slider
      defaultValue={[25]}
      max={100}
      step={1}
      orientation="vertical"
      class="h-40"
    />
  </div>
);`;

const controlledCode = `import { Label, Slider } from "@neut/ui";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal([50]);

  return (
    <div class="mx-auto grid w-full max-w-xs gap-3">
      <div class="flex items-center justify-between gap-2">
        <Label for="slider-volume">Volume</Label>
        <span class="text-sm text-neutral-500 dark:text-neutral-400">
          {value().join(", ")}%
        </span>
      </div>
      <Slider
        id="slider-volume"
        value={value()}
        onValueChange={(value) => setValue(value)}
        max={100}
        step={1}
      />
    </div>
  );
};`;

const disabledCode = `import { Slider } from "@neut/ui";

export default () => (
  <Slider
    defaultValue={[50]}
    max={100}
    step={1}
    disabled
    class="mx-auto w-full max-w-xs"
  />
);`;

function ControlledDemo() {
  const [value, setValue] = createSignal([50]);

  return (
    <div class="mx-auto grid w-full max-w-xs gap-3">
      <div class="flex items-center justify-between gap-2">
        <Label for="slider-volume">Volume</Label>
        <span class="text-sm text-neutral-500 dark:text-neutral-400">
          {value().join(", ")}%
        </span>
      </div>
      <Slider
        id="slider-volume"
        value={value()}
        onValueChange={(value) => setValue(value)}
        max={100}
        step={1}
      />
    </div>
  );
}

export default () => {
  return (
    <ComponentPage
      title="Slider"
      description="An input where the user selects a value from within a range."
    >
      <Example
        name="Basic"
        description="A single-thumb slider with a default value of 75."
        code={basicCode}
      >
        <Slider
          defaultValue={[75]}
          max={100}
          step={1}
          class="mx-auto w-full max-w-xs"
        />
      </Example>

      <Example
        name="Range"
        description="Two thumbs to select a range of values."
        code={rangeCode}
      >
        <Slider
          defaultValue={[25, 50]}
          max={100}
          step={5}
          class="mx-auto w-full max-w-xs"
        />
      </Example>

      <Example
        name="Multiple thumbs"
        description="Add more values to create multiple thumbs."
        code={multipleCode}
      >
        <Slider
          defaultValue={[10, 20, 70]}
          max={100}
          step={10}
          class="mx-auto w-full max-w-xs"
        />
      </Example>

      <Example
        name="Vertical"
        description="Set the orientation to vertical."
        code={verticalCode}
      >
        <div class="mx-auto flex w-full max-w-xs items-center justify-center gap-6">
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            orientation="vertical"
            class="h-40"
          />
          <Slider
            defaultValue={[25]}
            max={100}
            step={1}
            orientation="vertical"
            class="h-40"
          />
        </div>
      </Example>

      <Example
        name="Controlled"
        description="Control the value from outside with createSignal."
        code={controlledCode}
      >
        <ControlledDemo />
      </Example>

      <Example
        name="Disabled"
        description="A disabled slider ignores interaction."
        code={disabledCode}
      >
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          disabled
          class="mx-auto w-full max-w-xs"
        />
      </Example>
    </ComponentPage>
  );
};
