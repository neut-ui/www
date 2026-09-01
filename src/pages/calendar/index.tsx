import { ComponentPage, Example } from "../../components/component-page";
import { Calendar, type DateRange } from "@neut/ui";
import { createSignal } from "solid-js";

const basicCode = `import { Calendar } from "@neut/ui";

export default () => (
  <Calendar mode="single" class="rounded-lg border" />
);`;

const dropdownCode = `import { Calendar } from "@neut/ui";

export default () => (
  <Calendar mode="single" captionLayout="dropdown" class="rounded-lg border" />
);`;

const rangeCode = `import { Calendar, type DateRange } from "@neut/ui";
import { createSignal } from "solid-js";

export default () => {
  const [range, setRange] = createSignal<DateRange | undefined>();

  return (
    <Calendar
      mode="range"
      selected={range()}
      onSelect={(value) => setRange(value as DateRange | undefined)}
      numberOfMonths={2}
      class="rounded-lg border"
    />
  );
};`;

const multipleCode = `import { Calendar } from "@neut/ui";
import { createSignal } from "solid-js";

export default () => {
  const [dates, setDates] = createSignal<Date[]>();

  return (
    <Calendar
      mode="multiple"
      selected={dates()}
      onSelect={(value) => setDates(value as Date[] | undefined)}
      class="rounded-lg border"
    />
  );
};`;

const weekNumbersCode = `import { Calendar } from "@neut/ui";

export default () => (
  <Calendar mode="single" showWeekNumber class="rounded-lg border" />
);`;

export default () => {
  return (
    <ComponentPage
      title="Calendar"
      description="A date selection component with single, multiple and range modes."
    >
      <Example
        name="Basic"
        description="A basic calendar in single-select mode."
        code={basicCode}
      >
        <Calendar mode="single" class="rounded-lg border" />
      </Example>

      <Example
        name="Month and year selector"
        description="Use captionLayout to show dropdown selectors for month and year."
        code={dropdownCode}
      >
        <Calendar mode="single" captionLayout="dropdown" class="rounded-lg border" />
      </Example>

      <Example
        name="Range"
        description="Enable range selection across multiple months."
        code={rangeCode}
      >
        <RangeExample />
      </Example>

      <Example
        name="Multiple"
        description="Select several individual dates at once."
        code={multipleCode}
      >
        <MultipleExample />
      </Example>

      <Example
        name="Week numbers"
        description="Show week numbers in the left column."
        code={weekNumbersCode}
      >
        <Calendar mode="single" showWeekNumber class="rounded-lg border" />
      </Example>
    </ComponentPage>
  );
};

function RangeExample() {
  const [range, setRange] = createSignal<DateRange | undefined>();

  return (
    <Calendar
      mode="range"
      selected={range()}
      onSelect={(value) => setRange(value as DateRange | undefined)}
      numberOfMonths={2}
      class="rounded-lg border"
    />
  );
}

function MultipleExample() {
  const [dates, setDates] = createSignal<Date[]>();

  return (
    <Calendar
      mode="multiple"
      selected={dates()}
      onSelect={(value) => setDates(value as Date[] | undefined)}
      class="rounded-lg border"
    />
  );
}
