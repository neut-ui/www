import {
  FieldSet,
  FieldGroup,
  Field,
  FieldLabel,
  Input,
  FieldDescription,
  Textarea,
  FieldLegend,
} from "@neut/ui";

export default () => {
  return (
    <>
      <FieldSet class="w-full max-w-xs">
        <FieldGroup>
          <Field>
            <FieldLabel for="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="Max Leiter" />
            <FieldDescription>
              Choose a unique username for your account.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel for="password">Password</FieldLabel>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet class="w-full max-w-xs">
        <FieldGroup>
          <Field>
            <FieldLabel for="feedback">Feedback</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="Your feedback helps us improve..."
              rows={4}
            />
            <FieldDescription>
              Share your thoughts about our service.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet class="w-full max-w-sm">
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>
          We need your address to deliver your order.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel for="street">Street Address</FieldLabel>
            <Input id="street" type="text" placeholder="123 Main St" />
          </Field>
          <div class="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel for="city">City</FieldLabel>
              <Input id="city" type="text" placeholder="New York" />
            </Field>
            <Field>
              <FieldLabel for="zip">Postal Code</FieldLabel>
              <Input id="zip" type="text" placeholder="90502" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </>
  );
};
