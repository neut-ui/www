import { ComponentPage, Example } from "../../components/component-page";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
  Textarea,
} from "@neut/ui";

const basicCode = `import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Input,
} from "@neut/ui";

export default () => (
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
        <Input id="password" type="password" placeholder="••••••••" />
        <FieldDescription>Must be at least 8 characters long.</FieldDescription>
      </Field>
    </FieldGroup>
  </FieldSet>
);`;

const textareaCode = `import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Textarea,
} from "@neut/ui";

export default () => (
  <FieldSet class="w-full max-w-xs">
    <FieldGroup>
      <Field>
        <FieldLabel for="feedback">Feedback</FieldLabel>
        <Textarea
          id="feedback"
          rows={4}
          placeholder="Your feedback helps us improve..."
        />
        <FieldDescription>Share your thoughts about our service.</FieldDescription>
      </Field>
    </FieldGroup>
  </FieldSet>
);`;

const legendCode = `import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "@neut/ui";

export default () => (
  <FieldSet class="w-full max-w-sm">
    <FieldLegend>Address Information</FieldLegend>
    <FieldDescription>We need your address to deliver your order.</FieldDescription>
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
);`;

const invalidCode = `import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Input,
} from "@neut/ui";

export default () => (
  <FieldSet class="w-full max-w-xs">
    <FieldGroup>
      <Field data-invalid>
        <FieldLabel for="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="you@example.com" aria-invalid />
        <FieldError>Please enter a valid email address.</FieldError>
      </Field>
    </FieldGroup>
  </FieldSet>
);`;

export default () => {
  return (
    <ComponentPage
      title="Field"
      description="A set of form layout primitives for building labels, descriptions and errors."
    >
      <Example
        name="Basic form"
        description="A simple form with labeled inputs and helper descriptions."
        code={basicCode}
      >
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
              <Input id="password" type="password" placeholder="••••••••" />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
      </Example>

      <Example
        name="Textarea"
        description="A field wrapping a textarea with a helper description."
        code={textareaCode}
      >
        <FieldSet class="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel for="feedback">Feedback</FieldLabel>
              <Textarea
                id="feedback"
                rows={4}
                placeholder="Your feedback helps us improve..."
              />
              <FieldDescription>
                Share your thoughts about our service.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
      </Example>

      <Example
        name="With legend"
        description="Group address fields under a legend with a two-column grid."
        code={legendCode}
      >
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
      </Example>

      <Example
        name="Invalid"
        description="Mark a field as invalid and show an error message with aria-invalid."
        code={invalidCode}
      >
        <FieldSet class="w-full max-w-xs">
          <FieldGroup>
            <Field data-invalid>
              <FieldLabel for="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                aria-invalid
              />
              <FieldError>Please enter a valid email address.</FieldError>
            </Field>
          </FieldGroup>
        </FieldSet>
      </Example>
    </ComponentPage>
  );
};
