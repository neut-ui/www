import { ComponentPage, Example } from "../../components/component-page";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  Label,
  Switch,
} from "@neut/ui";

const basicCode = `import { Label, Switch } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-2">
    <Switch id="airplane-mode" />
    <Label for="airplane-mode">Airplane Mode</Label>
  </div>
);`;

const descriptionCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  Switch,
} from "@neut/ui";

export default () => (
  <Field orientation="horizontal" class="w-full max-w-sm">
    <FieldContent>
      <FieldLabel for="switch-focus-mode">Share across devices</FieldLabel>
      <FieldDescription>
        Focus is shared across devices, and turns off when you leave the app.
      </FieldDescription>
    </FieldContent>
    <Switch id="switch-focus-mode" />
  </Field>
);`;

const disabledCode = `import { Field, FieldLabel, Switch } from "@neut/ui";

export default () => (
  <Field orientation="horizontal" data-disabled class="w-fit">
    <Switch id="switch-disabled" disabled />
    <FieldLabel for="switch-disabled">Disabled</FieldLabel>
  </Field>
);`;

const invalidCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  Switch,
} from "@neut/ui";

export default () => (
  <Field orientation="horizontal" class="w-full max-w-sm" data-invalid>
    <FieldContent>
      <FieldLabel for="switch-terms">Accept terms and conditions</FieldLabel>
      <FieldDescription>
        You must accept the terms and conditions to continue.
      </FieldDescription>
    </FieldContent>
    <Switch id="switch-terms" aria-invalid />
  </Field>
);`;

const sizesCode = `import { Label, Switch } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-6">
    <div class="flex items-center gap-2">
      <Switch id="switch-sm" size="sm" />
      <Label for="switch-sm">Small</Label>
    </div>
    <div class="flex items-center gap-2">
      <Switch id="switch-md" size="md" />
      <Label for="switch-md">Default</Label>
    </div>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Switch"
      description="A control that allows the user to toggle between checked and not checked."
    >
      <Example
        name="Basic"
        description="A switch paired with a label."
        code={basicCode}
      >
        <div class="flex items-center gap-2">
          <Switch id="airplane-mode" />
          <Label for="airplane-mode">Airplane Mode</Label>
        </div>
      </Example>

      <Example
        name="With description"
        description="Use a horizontal field to pair a title and description."
        code={descriptionCode}
      >
        <Field orientation="horizontal" class="w-full max-w-sm">
          <FieldContent>
            <FieldLabel for="switch-focus-mode">Share across devices</FieldLabel>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-focus-mode" />
        </Field>
      </Example>

      <Example
        name="Disabled"
        description="A disabled switch cannot be toggled."
        code={disabledCode}
      >
        <Field orientation="horizontal" data-disabled class="w-fit">
          <Switch id="switch-disabled" disabled />
          <FieldLabel for="switch-disabled">Disabled</FieldLabel>
        </Field>
      </Example>

      <Example
        name="Invalid"
        description="Mark the switch as invalid with aria-invalid."
        code={invalidCode}
      >
        <Field orientation="horizontal" class="w-full max-w-sm" data-invalid>
          <FieldContent>
            <FieldLabel for="switch-terms">
              Accept terms and conditions
            </FieldLabel>
            <FieldDescription>
              You must accept the terms and conditions to continue.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-terms" aria-invalid />
        </Field>
      </Example>

      <Example
        name="Sizes"
        description="Two sizes are available: small and default."
        code={sizesCode}
      >
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <Switch id="switch-sm" size="sm" />
            <Label for="switch-sm">Small</Label>
          </div>
          <div class="flex items-center gap-2">
            <Switch id="switch-md" size="md" />
            <Label for="switch-md">Default</Label>
          </div>
        </div>
      </Example>
    </ComponentPage>
  );
};
