import { ComponentPage, Example } from "../../components/component-page";
import { createSignal } from "solid-js";
import { Field, FieldDescription, FieldLabel, NumberInput } from "@neut/ui";

const basicCode = `import { createSignal } from "solid-js";
import { NumberInput } from "@neut/ui";

export default () => {
  const [value, setValue] = createSignal<number | null>(1);

  return (
    <NumberInput
      value={value()}
      onValueChange={(next) => setValue(next)}
      aria-label="Quantity"
    />
  );
};`;

const rangeCode = `import { createSignal } from "solid-js";
import { NumberInput } from "@neut/ui";

export default () => {
  const [value, setValue] = createSignal<number | null>(50);

  return (
    <div class="flex flex-col items-center gap-3">
      <NumberInput
        value={value()}
        onValueChange={(next) => setValue(next)}
        min={0}
        max={100}
        step={5}
        aria-label="Percent"
      />
      <p class="text-sm text-neutral-500 dark:text-neutral-400">
        Value: <span class="font-medium">{value() ?? "empty"}</span>
      </p>
    </div>
  );
};`;

const decimalCode = `import { createSignal } from "solid-js";
import { NumberInput } from "@neut/ui";

export default () => {
  const [value, setValue] = createSignal<number | null>(1.5);

  return (
    <NumberInput
      value={value()}
      onValueChange={(next) => setValue(next)}
      min={0}
      step={0.1}
      format={(number) => number.toFixed(1)}
      aria-label="Amount"
    />
  );
};`;

const fieldCode = `import { createSignal } from "solid-js";
import {
  Field,
  FieldDescription,
  FieldLabel,
  NumberInput,
} from "@neut/ui";

export default () => {
  const [value, setValue] = createSignal<number | null>(3);

  return (
    <Field class="mx-auto w-56">
      <FieldLabel for="number-input-seats">Seats</FieldLabel>
      <NumberInput
        id="number-input-seats"
        class="w-full"
        value={value()}
        onValueChange={(next) => setValue(next)}
        min={1}
        max={12}
      />
      <FieldDescription>Between 1 and 12 seats.</FieldDescription>
    </Field>
  );
};`;

const disabledCode = `import { NumberInput } from "@neut/ui";

export default () => (
  <NumberInput
    defaultValue={8}
    min={0}
    max={10}
    disabled
    aria-label="Quantity"
  />
);`;

export default () => {
  const [basic, setBasic] = createSignal<number | null>(1);
  const [range, setRange] = createSignal<number | null>(50);
  const [decimal, setDecimal] = createSignal<number | null>(1.5);
  const [seats, setSeats] = createSignal<number | null>(3);

  return (
    <ComponentPage
      title="NumberInput"
      description="A numeric input with stepper buttons, bounds and formatting."
    >
      <Example
        name="Basic"
        description="A controlled number input with decrement and increment buttons."
        code={basicCode}
      >
        <NumberInput
          value={basic()}
          onValueChange={setBasic}
          aria-label="Quantity"
        />
      </Example>

      <Example
        name="Min, max and step"
        description="Buttons disable at the bounds; PageUp/PageDown use a larger step."
        code={rangeCode}
      >
        <div class="flex flex-col items-center gap-3">
          <NumberInput
            value={range()}
            onValueChange={setRange}
            min={0}
            max={100}
            step={5}
            aria-label="Percent"
          />
          <p class="text-sm text-neutral-500 dark:text-neutral-400">
            Value: <span class="font-medium">{range() ?? "empty"}</span>
          </p>
        </div>
      </Example>

      <Example
        name="Decimal"
        description="Use a fractional step and a custom format for display."
        code={decimalCode}
      >
        <NumberInput
          value={decimal()}
          onValueChange={setDecimal}
          min={0}
          step={0.1}
          format={(number) => number.toFixed(1)}
          aria-label="Amount"
        />
      </Example>

      <Example
        name="With field"
        description="Compose with Field so the label is associated with the input."
        code={fieldCode}
      >
        <Field class="mx-auto w-56">
          <FieldLabel for="number-input-seats">Seats</FieldLabel>
          <NumberInput
            id="number-input-seats"
            class="w-full"
            value={seats()}
            onValueChange={setSeats}
            min={1}
            max={12}
          />
          <FieldDescription>Between 1 and 12 seats.</FieldDescription>
        </Field>
      </Example>

      <Example
        name="Disabled"
        description="Disabled number inputs ignore interaction."
        code={disabledCode}
      >
        <NumberInput
          defaultValue={8}
          min={0}
          max={10}
          disabled
          aria-label="Quantity"
        />
      </Example>
    </ComponentPage>
  );
};
