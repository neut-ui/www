import { ComponentPage, Example } from "../../components/component-page";
import {
  Button,
  Calendar,
  Card,
  CardContent,
  CardFooter,
  Field,
  FieldGroup,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  type DateRange,
} from "@neut/ui";
import { Clock } from "lucide-solid";
import { createSignal, For } from "solid-js";

const calendarPresets = [
  { label: "Today", value: 0 },
  { label: "Tomorrow", value: 1 },
  { label: "In 3 days", value: 3 },
  { label: "In a week", value: 7 },
  { label: "In 2 weeks", value: 14 },
];

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

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

const demoCode = `import { Calendar } from "@neut/ui";
import { createSignal } from "solid-js";

export default () => {
  const [date, setDate] = createSignal<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date()}
      onSelect={(value) => setDate(value as Date | undefined)}
      captionLayout="dropdown"
      class="rounded-lg border"
    />
  );
};`;

const bookedDatesCode = `import { Calendar, Card, CardContent } from "@neut/ui";
import { createSignal } from "solid-js";

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

export default () => {
  const year = new Date().getFullYear();
  const bookedDates = Array.from({ length: 15 }, (_, index) =>
    addDays(new Date(year, 0, 12), index),
  );
  const isBooked = (date: Date) =>
    bookedDates.some((booked) => booked.toDateString() === date.toDateString());
  const [date, setDate] = createSignal<Date | undefined>(new Date(year, 0, 6));

  return (
    <Card class="w-fit p-0">
      <CardContent class="p-0">
        <Calendar
          mode="single"
          defaultMonth={new Date(year, 0, 1)}
          selected={date()}
          onSelect={(value) => setDate(value as Date | undefined)}
          disabled={isBooked}
          classNames={{ disabled: "opacity-100 [&>button]:line-through" }}
        />
      </CardContent>
    </Card>
  );
};`;

const presetsCode = `import { Button, Calendar, Card, CardContent, CardFooter } from "@neut/ui";
import { createSignal, For } from "solid-js";

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

const presets = [
  { label: "Today", value: 0 },
  { label: "Tomorrow", value: 1 },
  { label: "In 3 days", value: 3 },
  { label: "In a week", value: 7 },
  { label: "In 2 weeks", value: 14 },
];

export default () => {
  const [date, setDate] = createSignal<Date | undefined>(new Date());
  const [month, setMonth] = createSignal(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );

  const choosePreset = (days: number) => {
    const next = addDays(new Date(), days);
    setDate(next);
    setMonth(new Date(next.getFullYear(), next.getMonth(), 1));
  };

  return (
    <Card size="sm" class="w-fit">
      <CardContent>
        <Calendar
          mode="single"
          selected={date()}
          onSelect={(value) => setDate(value as Date | undefined)}
          month={month()}
          onMonthChange={setMonth}
          class="p-0"
        />
      </CardContent>
      <CardFooter class="flex flex-wrap gap-2 border-t">
        <For each={presets}>
          {(preset) => (
            <Button
              variant="outline"
              size="sm"
              class="flex-1"
              onClick={() => choosePreset(preset.value)}
            >
              {preset.label}
            </Button>
          )}
        </For>
      </CardFooter>
    </Card>
  );
};`;

const timeCode = `import {
  Calendar,
  Card,
  CardContent,
  CardFooter,
  Field,
  FieldGroup,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@neut/ui";
import { Clock } from "lucide-solid";
import { createSignal } from "solid-js";

export default () => {
  const [date, setDate] = createSignal<Date | undefined>(new Date());

  return (
    <Card size="sm" class="w-fit">
      <CardContent>
        <Calendar
          mode="single"
          selected={date()}
          onSelect={(value) => setDate(value as Date | undefined)}
          class="p-0"
        />
      </CardContent>
      <CardFooter class="border-t bg-card">
        <FieldGroup class="gap-3">
          <Field>
            <FieldLabel for="calendar-time-from">Start time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="calendar-time-from"
                type="time"
                step="1"
                defaultValue="10:30:00"
                class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <InputGroupAddon>
                <Clock class="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel for="calendar-time-to">End time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="calendar-time-to"
                type="time"
                step="1"
                defaultValue="12:30:00"
                class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <InputGroupAddon>
                <Clock class="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardFooter>
    </Card>
  );
};`;

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
        <Calendar
          mode="single"
          captionLayout="dropdown"
          class="rounded-lg border"
        />
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

      <Example
        name="Demo"
        description="Control the selected date while using month and year dropdowns."
        code={demoCode}
      >
        <DemoExample />
      </Example>

      <Example
        name="Booked dates"
        description="Disable dates that are already booked and strike them through with classNames."
        code={bookedDatesCode}
      >
        <BookedDatesExample />
      </Example>

      <Example
        name="Presets"
        description="Pair the calendar with shortcut buttons that jump to common dates."
        code={presetsCode}
      >
        <PresetsExample />
      </Example>

      <Example
        name="Date and time"
        description="Add start and end time inputs below the calendar."
        code={timeCode}
      >
        <DateTimeExample />
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

function DemoExample() {
  const [date, setDate] = createSignal<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date()}
      onSelect={(value) => setDate(value as Date | undefined)}
      captionLayout="dropdown"
      class="rounded-lg border"
    />
  );
}

function BookedDatesExample() {
  const year = new Date().getFullYear();
  const bookedDates = Array.from({ length: 15 }, (_, index) =>
    addDays(new Date(year, 0, 12), index),
  );
  const isBooked = (date: Date) =>
    bookedDates.some((booked) => booked.toDateString() === date.toDateString());
  const [date, setDate] = createSignal<Date | undefined>(new Date(year, 0, 6));

  return (
    <Card class="w-fit p-0">
      <CardContent class="p-0">
        <Calendar
          mode="single"
          defaultMonth={new Date(year, 0, 1)}
          selected={date()}
          onSelect={(value) => setDate(value as Date | undefined)}
          disabled={isBooked}
          classNames={{ disabled: "opacity-100 [&>button]:line-through" }}
        />
      </CardContent>
    </Card>
  );
}

function PresetsExample() {
  const [date, setDate] = createSignal<Date | undefined>(new Date());
  const [month, setMonth] = createSignal(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );

  const choosePreset = (days: number) => {
    const next = addDays(new Date(), days);
    setDate(next);
    setMonth(new Date(next.getFullYear(), next.getMonth(), 1));
  };

  return (
    <Card size="sm" class="w-fit">
      <CardContent>
        <Calendar
          mode="single"
          selected={date()}
          onSelect={(value) => setDate(value as Date | undefined)}
          month={month()}
          onMonthChange={setMonth}
          class="p-0"
        />
      </CardContent>
      <CardFooter class="flex flex-wrap gap-2 border-t">
        <For each={calendarPresets}>
          {(preset) => (
            <Button
              variant="outline"
              size="sm"
              class="flex-1"
              onClick={() => choosePreset(preset.value)}
            >
              {preset.label}
            </Button>
          )}
        </For>
      </CardFooter>
    </Card>
  );
}

function DateTimeExample() {
  const [date, setDate] = createSignal<Date | undefined>(new Date());

  return (
    <Card size="sm" class="w-fit">
      <CardContent>
        <Calendar
          mode="single"
          selected={date()}
          onSelect={(value) => setDate(value as Date | undefined)}
          class="p-0"
        />
      </CardContent>
      <CardFooter class="border-t bg-card">
        <FieldGroup class="gap-3">
          <Field>
            <FieldLabel for="calendar-time-from">Start time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="calendar-time-from"
                type="time"
                step="1"
                defaultValue="10:30:00"
                class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <InputGroupAddon>
                <Clock class="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel for="calendar-time-to">End time</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="calendar-time-to"
                type="time"
                step="1"
                defaultValue="12:30:00"
                class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <InputGroupAddon>
                <Clock class="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardFooter>
    </Card>
  );
}
