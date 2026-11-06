import { ComponentPage, Example } from "../../components/component-page";
import {
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Switch,
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

const checkboxCode = `import {
  Checkbox,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@neut/ui";

export default () => (
  <FieldSet class="w-full max-w-sm">
    <FieldGroup>
      <Field orientation="horizontal">
        <Checkbox id="field-newsletter" />
        <FieldLabel for="field-newsletter">Newsletter</FieldLabel>
        <FieldDescription>
          Receive updates about new features and releases.
        </FieldDescription>
      </Field>
    </FieldGroup>
  </FieldSet>
);`;

const radioCode = `import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from "@neut/ui";

export default () => (
  <FieldSet class="w-full max-w-sm">
    <FieldLegend>Billing plan</FieldLegend>
    <FieldGroup>
      <RadioGroup defaultValue="monthly">
        <Field orientation="horizontal">
          <RadioGroupItem id="field-monthly" value="monthly" />
          <FieldLabel for="field-monthly">Monthly</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="field-yearly" value="yearly" />
          <FieldLabel for="field-yearly">Yearly</FieldLabel>
        </Field>
      </RadioGroup>
    </FieldGroup>
  </FieldSet>
);`;

const selectCode = `import {
  Field,
  FieldDescription,
  FieldLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@neut/ui";

export default () => (
  <Field class="w-full max-w-xs">
    <FieldLabel for="field-country">Country</FieldLabel>
    <Select defaultValue="us">
      <SelectTrigger id="field-country">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="us">United States</SelectItem>
        <SelectItem value="uk">United Kingdom</SelectItem>
        <SelectItem value="ca">Canada</SelectItem>
      </SelectContent>
    </Select>
    <FieldDescription>Where should we ship your order?</FieldDescription>
  </Field>
);`;

const sliderCode = `import { Field, FieldLabel, Slider } from "@neut/ui";

export default () => (
  <Field class="w-full max-w-xs">
    <FieldLabel for="field-volume">Volume</FieldLabel>
    <Slider id="field-volume" defaultValue={[50]} max={100} step={1} />
  </Field>
);`;

const switchCode = `import { Field, FieldLabel, Switch } from "@neut/ui";

export default () => (
  <Field orientation="horizontal" class="w-full max-w-sm">
    <Switch id="field-notifications" defaultChecked />
    <FieldLabel for="field-notifications">Enable notifications</FieldLabel>
  </Field>
);`;

const responsiveCode = `import {
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from "@neut/ui";

export default () => (
  <FieldGroup class="w-full max-w-md">
    <Field orientation="responsive">
      <FieldLabel for="field-first">First name</FieldLabel>
      <Input id="field-first" placeholder="Max" />
    </Field>
    <Field orientation="responsive">
      <FieldLabel for="field-last">Last name</FieldLabel>
      <Input id="field-last" placeholder="Leiter" />
    </Field>
  </FieldGroup>
);`;

const choiceCardCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
  RadioGroup,
  RadioGroupItem,
} from "@neut/ui";

export default () => (
  <FieldSet class="w-full max-w-sm">
    <FieldLegend>Plan</FieldLegend>
    <FieldDescription>Choose the plan that fits your team.</FieldDescription>
    <RadioGroup defaultValue="pro" class="gap-3">
      <FieldLabel for="field-plan-pro">
        <Field orientation="horizontal" class="rounded-lg border p-4">
          <FieldContent>
            <FieldTitle>Pro</FieldTitle>
            <FieldDescription>Unlimited projects and priority support.</FieldDescription>
          </FieldContent>
          <RadioGroupItem id="field-plan-pro" value="pro" />
        </Field>
      </FieldLabel>
      <FieldLabel for="field-plan-team">
        <Field orientation="horizontal" class="rounded-lg border p-4">
          <FieldContent>
            <FieldTitle>Team</FieldTitle>
            <FieldDescription>Everything in Pro, plus shared workspaces.</FieldDescription>
          </FieldContent>
          <RadioGroupItem id="field-plan-team" value="team" />
        </Field>
      </FieldLabel>
    </RadioGroup>
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

      <Example
        name="Checkbox"
        description="Use Field orientation=horizontal for a checkbox and its label."
        code={checkboxCode}
      >
        <FieldSet class="w-full max-w-sm">
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox id="field-newsletter" />
              <FieldLabel for="field-newsletter">Newsletter</FieldLabel>
              <FieldDescription>
                Receive updates about new features and releases.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
      </Example>

      <Example
        name="Radio group"
        description="Compose a FieldSet with radio items."
        code={radioCode}
      >
        <FieldSet class="w-full max-w-sm">
          <FieldLegend>Billing plan</FieldLegend>
          <FieldGroup>
            <RadioGroup defaultValue="monthly">
              <Field orientation="horizontal">
                <RadioGroupItem id="field-monthly" value="monthly" />
                <FieldLabel for="field-monthly">Monthly</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem id="field-yearly" value="yearly" />
                <FieldLabel for="field-yearly">Yearly</FieldLabel>
              </Field>
            </RadioGroup>
          </FieldGroup>
        </FieldSet>
      </Example>

      <Example
        name="Select"
        description="Pair a select control with a label and description."
        code={selectCode}
      >
        <Field class="w-full max-w-xs">
          <FieldLabel for="field-country">Country</FieldLabel>
          <Select defaultValue="us">
            <SelectTrigger id="field-country">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>Where should we ship your order?</FieldDescription>
        </Field>
      </Example>

      <Example
        name="Slider"
        description="Use Field to label a slider control."
        code={sliderCode}
      >
        <Field class="w-full max-w-xs">
          <FieldLabel for="field-volume">Volume</FieldLabel>
          <Slider id="field-volume" defaultValue={[50]} max={100} step={1} />
        </Field>
      </Example>

      <Example
        name="Switch"
        description="Use a horizontal field for a switch and its label."
        code={switchCode}
      >
        <Field orientation="horizontal" class="w-full max-w-sm">
          <Switch id="field-notifications" defaultChecked />
          <FieldLabel for="field-notifications">
            Enable notifications
          </FieldLabel>
        </Field>
      </Example>

      <Example
        name="Responsive"
        description="Use orientation=responsive to adapt the label and control layout."
        code={responsiveCode}
      >
        <FieldGroup class="w-full max-w-md">
          <Field orientation="responsive">
            <FieldLabel for="field-first">First name</FieldLabel>
            <Input id="field-first" placeholder="Max" />
          </Field>
          <Field orientation="responsive">
            <FieldLabel for="field-last">Last name</FieldLabel>
            <Input id="field-last" placeholder="Leiter" />
          </Field>
        </FieldGroup>
      </Example>
      <Example
        name="Choice card"
        description="Use FieldLabel and FieldContent to turn radio options into cards."
        code={choiceCardCode}
      >
        <FieldSet class="w-full max-w-sm">
          <FieldLegend>Plan</FieldLegend>
          <FieldDescription>
            Choose the plan that fits your team.
          </FieldDescription>
          <RadioGroup defaultValue="pro" class="gap-3">
            <FieldLabel for="field-plan-pro">
              <Field orientation="horizontal" class="rounded-lg border p-4">
                <FieldContent>
                  <FieldTitle>Pro</FieldTitle>
                  <FieldDescription>
                    Unlimited projects and priority support.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem id="field-plan-pro" value="pro" />
              </Field>
            </FieldLabel>
            <FieldLabel for="field-plan-team">
              <Field orientation="horizontal" class="rounded-lg border p-4">
                <FieldContent>
                  <FieldTitle>Team</FieldTitle>
                  <FieldDescription>
                    Everything in Pro, plus shared workspaces.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem id="field-plan-team" value="team" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </Example>
    </ComponentPage>
  );
};
