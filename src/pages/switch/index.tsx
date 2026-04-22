import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
  Label,
  Switch,
} from "@neut/ui";

export default () => {
  return (
    <>
      <div class="flex items-center space-x-2">
        <Switch id="airplane-mode" onChange={(v) => console.log(v)} />
        <Label for="airplane-mode">Airplane Mode</Label>
      </div>

      <Field orientation="horizontal" class="max-w-sm">
        <FieldContent>
          <FieldLabel for="switch-focus-mode">Share across devices</FieldLabel>
          <FieldDescription>
            Focus is shared across devices, and turns off when you leave the
            app.
          </FieldDescription>
        </FieldContent>
        <Switch id="switch-focus-mode" />
      </Field>

      <FieldGroup class="w-full max-w-sm">
        <FieldLabel for="switch-share">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Share across devices</FieldTitle>
              <FieldDescription>
                Focus is shared across devices, and turns off when you leave the
                app.
              </FieldDescription>
            </FieldContent>
            <Switch id="switch-share" />
          </Field>
        </FieldLabel>
        <FieldLabel for="switch-notifications">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>Enable notifications</FieldTitle>
              <FieldDescription>
                Receive notifications when focus mode is enabled or disabled.
              </FieldDescription>
            </FieldContent>
            <Switch id="switch-notifications" defaultChecked />
          </Field>
        </FieldLabel>
      </FieldGroup>

      <Field orientation="horizontal" data-disabled class="w-fit">
        <Switch id="switch-disabled-unchecked" disabled />
        <FieldLabel for="switch-disabled-unchecked">Disabled</FieldLabel>
      </Field>

      <Field orientation="horizontal" class="max-w-sm" data-invalid>
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

      <FieldGroup class="w-full max-w-40">
        <Field orientation="horizontal">
          <Switch id="switch-size-sm" size="sm" />
          <FieldLabel for="switch-size-sm">Small</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Switch id="switch-size-default" size="md" />
          <FieldLabel for="switch-size-default">Default</FieldLabel>
        </Field>
      </FieldGroup>
    </>
  );
};
