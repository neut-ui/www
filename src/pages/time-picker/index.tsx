import { ComponentPage, Example } from "../../components/component-page";
import { createSignal } from "solid-js";
import {
  Field,
  FieldDescription,
  FieldLabel,
  TimePicker,
  TimePickerContent,
  TimePickerTrigger,
} from "@neut/ui";

const basicCode = `import { createSignal } from "solid-js";
import { TimePicker } from "@neut/ui";

export default () => {
  const [time, setTime] = createSignal<Date | undefined>();

  return (
    <TimePicker
      value={time()}
      onValueChange={(value) => setTime(value)}
      placeholder="Pick a time"
    />
  );
};`;

const secondsCode = `import { createSignal } from "solid-js";
import { TimePicker } from "@neut/ui";

export default () => {
  const [time, setTime] = createSignal<Date | undefined>(
    new Date(2026, 0, 1, 14, 5, 20),
  );

  return (
    <TimePicker
      value={time()}
      onValueChange={(value) => setTime(value)}
      showSeconds
    />
  );
};`;

const twelveHourCode = `import { createSignal } from "solid-js";
import { TimePicker } from "@neut/ui";

export default () => {
  const [time, setTime] = createSignal<Date | undefined>(
    new Date(2026, 0, 1, 14, 30),
  );

  return (
    <TimePicker
      value={time()}
      onValueChange={(value) => setTime(value)}
      hourCycle={12}
    />
  );
};`;

const stepCode = `import { createSignal } from "solid-js";
import { TimePicker } from "@neut/ui";

export default () => {
  const [time, setTime] = createSignal<Date | undefined>(
    new Date(2026, 0, 1, 0, 0),
  );

  return (
    <TimePicker
      value={time()}
      onValueChange={(value) => setTime(value)}
      minuteStep={15}
    />
  );
};`;

const fieldCode = `import { createSignal } from "solid-js";
import {
  Field,
  FieldDescription,
  FieldLabel,
  TimePicker,
  TimePickerContent,
  TimePickerTrigger,
} from "@neut/ui";

export default () => {
  const [time, setTime] = createSignal<Date | undefined>(
    new Date(2026, 0, 1, 9, 30),
  );

  return (
    <Field class="mx-auto w-56">
      <FieldLabel for="time-picker-meeting">Meeting time</FieldLabel>
      <TimePicker value={time()} onValueChange={(value) => setTime(value)}>
        <TimePickerTrigger id="time-picker-meeting" class="w-full" />
        <TimePickerContent />
      </TimePicker>
      <FieldDescription>Hours and minutes in 24-hour format.</FieldDescription>
    </Field>
  );
};`;

const disabledCode = `import { TimePicker } from "@neut/ui";

export default () => (
  <TimePicker
    value={new Date(2026, 0, 1, 8, 45)}
    disabled
    placeholder="Pick a time"
  />
);`;

export default () => {
  const [basic, setBasic] = createSignal<Date | undefined>();
  const [seconds, setSeconds] = createSignal<Date | undefined>(
    new Date(2026, 0, 1, 14, 5, 20),
  );
  const [twelve, setTwelve] = createSignal<Date | undefined>(
    new Date(2026, 0, 1, 14, 30),
  );
  const [step, setStep] = createSignal<Date | undefined>(
    new Date(2026, 0, 1, 0, 0),
  );
  const [meeting, setMeeting] = createSignal<Date | undefined>(
    new Date(2026, 0, 1, 9, 30),
  );

  return (
    <ComponentPage
      title="TimePicker"
      description="A time picker with hour, minute and optional second columns."
    >
      <Example
        name="Basic"
        description="A time picker with hour and minute columns."
        code={basicCode}
      >
        <TimePicker
          value={basic()}
          onValueChange={(value) => setBasic(value)}
          placeholder="Pick a time"
        />
      </Example>

      <Example
        name="With seconds"
        description="Show a seconds column."
        code={secondsCode}
      >
        <TimePicker
          value={seconds()}
          onValueChange={(value) => setSeconds(value)}
          showSeconds
        />
      </Example>

      <Example
        name="12-hour"
        description="Use hourCycle={12} for an AM/PM column."
        code={twelveHourCode}
      >
        <TimePicker
          value={twelve()}
          onValueChange={(value) => setTwelve(value)}
          hourCycle={12}
        />
      </Example>

      <Example
        name="Step"
        description="Limit minutes to 15-minute steps."
        code={stepCode}
      >
        <TimePicker
          value={step()}
          onValueChange={(value) => setStep(value)}
          minuteStep={15}
        />
      </Example>

      <Example
        name="With field"
        description="Compose with Field so the label is associated with the trigger."
        code={fieldCode}
      >
        <Field class="mx-auto w-56">
          <FieldLabel for="time-picker-meeting">Meeting time</FieldLabel>
          <TimePicker
            value={meeting()}
            onValueChange={(value) => setMeeting(value)}
          >
            <TimePickerTrigger id="time-picker-meeting" class="w-full" />
            <TimePickerContent />
          </TimePicker>
          <FieldDescription>
            Hours and minutes in 24-hour format.
          </FieldDescription>
        </Field>
      </Example>
      <Example
        name="Disabled"
        description="A disabled time picker ignores interaction."
        code={disabledCode}
      >
        <TimePicker
          value={new Date(2026, 0, 1, 8, 45)}
          disabled
          placeholder="Pick a time"
        />
      </Example>
    </ComponentPage>
  );
};
