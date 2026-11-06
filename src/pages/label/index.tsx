import { ComponentPage, Example } from "../../components/component-page";
import { Checkbox, Input, Label, Textarea } from "@neut/ui";

const basicCode = `import { Checkbox, Label } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-2">
    <Checkbox id="label-terms" />
    <Label for="label-terms">Accept terms and conditions</Label>
  </div>
);`;

const inputCode = `import { Input, Label } from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-2">
    <Label for="label-email">Email</Label>
    <Input id="label-email" type="email" placeholder="you@example.com" />
  </div>
);`;

const textareaCode = `import { Label, Textarea } from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-2">
    <Label for="label-message">Message</Label>
    <Textarea id="label-message" placeholder="Type your message here." />
  </div>
);`;

const disabledCode = `import { Checkbox, Label } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-2">
    <Checkbox id="label-disabled" disabled />
    <Label for="label-disabled">Accept terms and conditions</Label>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Label"
      description="Renders an accessible label associated with a form control."
    >
      <Example
        name="Basic"
        description="Associate a label with a checkbox."
        code={basicCode}
      >
        <div class="flex items-center gap-2">
          <Checkbox id="label-terms" />
          <Label for="label-terms">Accept terms and conditions</Label>
        </div>
      </Example>

      <Example
        name="With input"
        description="Labels also connect to text inputs."
        code={inputCode}
      >
        <div class="grid w-full max-w-sm gap-2">
          <Label for="label-email">Email</Label>
          <Input id="label-email" type="email" placeholder="you@example.com" />
        </div>
      </Example>

      <Example
        name="With textarea"
        description="Use a label with a multi-line text input."
        code={textareaCode}
      >
        <div class="grid w-full max-w-sm gap-2">
          <Label for="label-message">Message</Label>
          <Textarea id="label-message" placeholder="Type your message here." />
        </div>
      </Example>

      <Example
        name="Disabled"
        description="Labels remain associated with disabled controls."
        code={disabledCode}
      >
        <div class="flex items-center gap-2">
          <Checkbox id="label-disabled" disabled />
          <Label for="label-disabled">Accept terms and conditions</Label>
        </div>
      </Example>
    </ComponentPage>
  );
};
