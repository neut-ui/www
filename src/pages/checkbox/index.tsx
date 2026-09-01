import { ComponentPage, Example } from "../../components/component-page";
import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@neut/ui";
import { createSignal } from "solid-js";

const basicCode = `import { Checkbox, Field, FieldLabel } from "@neut/ui";

export default () => (
  <Field orientation="horizontal">
    <Checkbox id="terms" name="terms" />
    <FieldLabel for="terms">Accept terms and conditions</FieldLabel>
  </Field>
);`;

const descriptionCode = `import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@neut/ui";

export default () => (
  <Field orientation="horizontal">
    <Checkbox id="terms" name="terms" defaultChecked />
    <FieldContent>
      <FieldLabel for="terms">Accept terms and conditions</FieldLabel>
      <FieldDescription>
        By clicking this checkbox, you agree to the terms and conditions.
      </FieldDescription>
    </FieldContent>
  </Field>
);`;

const disabledCode = `import { Checkbox, Field, FieldLabel } from "@neut/ui";

export default () => (
  <Field orientation="horizontal" data-disabled>
    <Checkbox id="notifications" name="notifications" disabled />
    <FieldLabel for="notifications">Enable notifications</FieldLabel>
  </Field>
);`;

const groupCode = `import {
  Checkbox,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@neut/ui";

export default () => (
  <FieldSet class="w-64">
    <FieldLegend variant="label">Show these items on the desktop</FieldLegend>
    <FieldDescription>
      Select the items you want to show on the desktop.
    </FieldDescription>
    <FieldGroup class="gap-3">
      <Field orientation="horizontal">
        <Checkbox id="hard-disks" name="hard-disks" defaultChecked />
        <FieldLabel for="hard-disks" class="font-normal">
          Hard disks
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="external-disks" name="external-disks" />
        <FieldLabel for="external-disks" class="font-normal">
          External disks
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="cds-dvds" name="cds-dvds" defaultChecked />
        <FieldLabel for="cds-dvds" class="font-normal">
          CDs, DVDs, and iPods
        </FieldLabel>
      </Field>
    </FieldGroup>
  </FieldSet>
);`;

const controlledCode = `import { Checkbox, Field, FieldLabel } from "@neut/ui";
import { createSignal } from "solid-js";

export default () => {
  const [checked, setChecked] = createSignal(true);

  return (
    <div class="flex flex-col items-start gap-2">
      <Field orientation="horizontal">
        <Checkbox
          id="newsletter"
          name="newsletter"
          checked={checked()}
          onChange={setChecked}
        />
        <FieldLabel for="newsletter">Subscribe to the newsletter</FieldLabel>
      </Field>
      <p class="text-sm text-neutral-500 dark:text-neutral-400">
        Status: {checked() ? "Subscribed" : "Not subscribed"}
      </p>
    </div>
  );
};`;

export default () => {
  const [checked, setChecked] = createSignal(true);

  return (
    <ComponentPage
      title="Checkbox"
      description="A control that lets the user toggle between checked and unchecked states."
    >
      <Example
        name="Basic"
        description="A single checkbox with a label, using a horizontal field layout."
        code={basicCode}
      >
        <Field orientation="horizontal">
          <Checkbox id="terms" name="terms" />
          <FieldLabel for="terms">Accept terms and conditions</FieldLabel>
        </Field>
      </Example>

      <Example
        name="With description"
        description="Pair the label with a supporting description using FieldContent."
        code={descriptionCode}
      >
        <Field orientation="horizontal">
          <Checkbox id="terms-desc" name="terms-desc" defaultChecked />
          <FieldContent>
            <FieldLabel for="terms-desc">
              Accept terms and conditions
            </FieldLabel>
            <FieldDescription>
              By clicking this checkbox, you agree to the terms and conditions.
            </FieldDescription>
          </FieldContent>
        </Field>
      </Example>

      <Example
        name="Disabled"
        description="Disable the checkbox and its field when an option is unavailable."
        code={disabledCode}
      >
        <Field orientation="horizontal" data-disabled>
          <Checkbox id="notifications" name="notifications" disabled />
          <FieldLabel for="notifications">Enable notifications</FieldLabel>
        </Field>
      </Example>

      <Example
        name="Group"
        description="Group related options under a legend inside a field set."
        code={groupCode}
      >
        <FieldSet class="w-64">
          <FieldLegend variant="label">
            Show these items on the desktop
          </FieldLegend>
          <FieldDescription>
            Select the items you want to show on the desktop.
          </FieldDescription>
          <FieldGroup class="gap-3">
            <Field orientation="horizontal">
              <Checkbox id="hard-disks" name="hard-disks" defaultChecked />
              <FieldLabel for="hard-disks" class="font-normal">
                Hard disks
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="external-disks" name="external-disks" />
              <FieldLabel for="external-disks" class="font-normal">
                External disks
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="cds-dvds" name="cds-dvds" defaultChecked />
              <FieldLabel for="cds-dvds" class="font-normal">
                CDs, DVDs, and iPods
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </Example>

      <Example
        name="Controlled"
        description="Drive the checked state from a signal with checked and onChange."
        code={controlledCode}
      >
        <div class="flex flex-col items-start gap-2">
          <Field orientation="horizontal">
            <Checkbox
              id="newsletter"
              name="newsletter"
              checked={checked()}
              onChange={setChecked}
            />
            <FieldLabel for="newsletter">Subscribe to the newsletter</FieldLabel>
          </Field>
          <p class="text-sm text-neutral-500 dark:text-neutral-400">
            Status: {checked() ? "Subscribed" : "Not subscribed"}
          </p>
        </div>
      </Example>
    </ComponentPage>
  );
};
