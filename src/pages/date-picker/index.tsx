import { ComponentPage, Example } from "../../components/component-page";
import {
  Calendar,
  DatePicker,
  Field,
  FieldGroup,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Popover,
  PopoverContent,
  PopoverTrigger,
  TimePicker,
  type DateRange,
} from "@neut/ui";
import { CalendarDays, ChevronDown } from "lucide-solid";
import { createSignal, Show } from "solid-js";

const formatInputDate = (date: Date | undefined) =>
  date
    ? date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

const formatShortDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

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

const rangePickerCode = `import {
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  type DateRange,
} from "@neut/ui";
import { CalendarDays, ChevronDown } from "lucide-solid";
import { createSignal } from "solid-js";

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

export default () => {
  const [range, setRange] = createSignal<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: new Date(new Date().getFullYear(), 0, 20),
  });

  const label = () => {
    const value = range();
    if (!value?.from) return "Pick a date range";
    const from = formatDate(value.from);
    return value.to ? from + " - " + formatDate(value.to) : from;
  };

  return (
    <Popover>
      <PopoverTrigger variant="outline" class="w-64 justify-start font-normal">
        <CalendarDays data-icon="inline-start" />
        <span classList={{ "text-muted-foreground": !range()?.from }}>
          {label()}
        </span>
        <ChevronDown data-icon="inline-end" />
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range()}
          onSelect={(value) => setRange(value as DateRange | undefined)}
          numberOfMonths={2}
          defaultMonth={range()?.from}
        />
      </PopoverContent>
    </Popover>
  );
};`;

const inputCode = `import {
  Calendar,
  Field,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@neut/ui";
import { CalendarDays } from "lucide-solid";
import { createSignal } from "solid-js";

const formatDate = (date: Date | undefined) =>
  date
    ? date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

export default () => {
  const initial = new Date(2025, 5, 1);
  const [open, setOpen] = createSignal(false);
  const [date, setDate] = createSignal<Date | undefined>(initial);
  const [month, setMonth] = createSignal<Date | undefined>(initial);
  const [value, setValue] = createSignal(formatDate(initial));

  const handleInput = (next: string) => {
    setValue(next);
    const parsed = new Date(next);
    if (!Number.isNaN(parsed.getTime())) {
      setDate(parsed);
      setMonth(parsed);
    }
  };

  return (
    <Field class="w-56">
      <FieldLabel for="date-picker-input">Subscription date</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="date-picker-input"
          value={value()}
          placeholder="June 01, 2025"
          onInput={handleInput}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setOpen(true);
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open()} onOpenChange={setOpen}>
            <PopoverTrigger
              component={InputGroupButton}
              icon={<CalendarDays />}
              aria-label="Select date"
            />
            <PopoverContent
              class="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={date()}
                month={month()}
                onMonthChange={setMonth}
                onSelect={(next) => {
                  setDate(next as Date | undefined);
                  setValue(formatDate(next as Date | undefined));
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
};`;

const timePickerCode = `import { DatePicker, Field, FieldGroup, FieldLabel, TimePicker } from "@neut/ui";
import { createSignal } from "solid-js";

export default () => {
  const [date, setDate] = createSignal<Date | undefined>();
  const [time, setTime] = createSignal<Date | undefined>(
    new Date(2026, 0, 1, 10, 30),
  );

  return (
    <FieldGroup class="flex-row items-start">
      <Field class="w-48">
        <FieldLabel>Date</FieldLabel>
        <DatePicker
          value={date()}
          onValueChange={setDate}
          placeholder="Select date"
          captionLayout="dropdown"
          class="w-full"
        />
      </Field>
      <Field class="w-40">
        <FieldLabel>Time</FieldLabel>
        <TimePicker
          value={time()}
          onValueChange={(value) => setTime(value)}
          placeholder="Pick a time"
        />
      </Field>
    </FieldGroup>
  );
};`;

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

      <Example
        name="Range"
        description="Compose Popover and Calendar to select a start and end date."
        code={rangePickerCode}
      >
        <RangePickerExample />
      </Example>

      <Example
        name="Input"
        description="Type a date in an input group, or open the calendar from the addon."
        code={inputCode}
      >
        <DatePickerInputExample />
      </Example>

      <Example
        name="Date and time"
        description="Combine a date picker with a time picker for a full date-time value."
        code={timePickerCode}
      >
        <DateTimePickerExample />
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

function RangePickerExample() {
  const [range, setRange] = createSignal<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: new Date(new Date().getFullYear(), 0, 20),
  });

  const label = () => {
    const value = range();
    if (!value?.from) return "Pick a date range";
    const from = formatShortDate(value.from);
    return value.to ? from + " - " + formatShortDate(value.to) : from;
  };

  return (
    <Popover>
      <PopoverTrigger variant="outline" class="w-64 justify-start font-normal">
        <CalendarDays data-icon="inline-start" />
        <span classList={{ "text-muted-foreground": !range()?.from }}>
          {label()}
        </span>
        <ChevronDown data-icon="inline-end" />
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range()}
          onSelect={(value) => setRange(value as DateRange | undefined)}
          numberOfMonths={2}
          defaultMonth={range()?.from}
        />
      </PopoverContent>
    </Popover>
  );
}

function DatePickerInputExample() {
  const initial = new Date(2025, 5, 1);
  const [open, setOpen] = createSignal(false);
  const [date, setDate] = createSignal<Date | undefined>(initial);
  const [month, setMonth] = createSignal<Date | undefined>(initial);
  const [value, setValue] = createSignal(formatInputDate(initial));

  const handleInput = (next: string) => {
    setValue(next);
    const parsed = new Date(next);
    if (!Number.isNaN(parsed.getTime())) {
      setDate(parsed);
      setMonth(parsed);
    }
  };

  return (
    <Field class="w-56">
      <FieldLabel for="date-picker-input">Subscription date</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="date-picker-input"
          value={value()}
          placeholder="June 01, 2025"
          onInput={handleInput}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setOpen(true);
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open()} onOpenChange={setOpen}>
            <PopoverTrigger
              component={InputGroupButton}
              icon={<CalendarDays />}
              aria-label="Select date"
            />
            <PopoverContent
              class="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={date()}
                month={month()}
                onMonthChange={setMonth}
                onSelect={(next) => {
                  setDate(next as Date | undefined);
                  setValue(formatInputDate(next as Date | undefined));
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}

function DateTimePickerExample() {
  const [date, setDate] = createSignal<Date | undefined>();
  const [time, setTime] = createSignal<Date | undefined>(
    new Date(2026, 0, 1, 10, 30),
  );

  return (
    <FieldGroup class="flex-row items-start">
      <Field class="w-48">
        <FieldLabel>Date</FieldLabel>
        <DatePicker
          value={date()}
          onValueChange={setDate}
          placeholder="Select date"
          captionLayout="dropdown"
          class="w-full"
        />
      </Field>
      <Field class="w-40">
        <FieldLabel>Time</FieldLabel>
        <TimePicker
          value={time()}
          onValueChange={(value) => setTime(value)}
          placeholder="Pick a time"
        />
      </Field>
    </FieldGroup>
  );
}
