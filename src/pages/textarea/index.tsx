import { ComponentPage, Example } from "../../components/component-page";
import {
  Button,
  Field,
  FieldDescription,
  FieldLabel,
  Label,
  Textarea,
} from "@neut/ui";

const basicCode = `import { Textarea } from "@neut/ui";

export default () => (
  <Textarea placeholder="Type your message here." class="max-w-sm" />
);`;

const disabledCode = `import { Textarea } from "@neut/ui";

export default () => (
  <Textarea placeholder="Disabled" disabled class="max-w-sm" />
);`;

const labelCode = `import { Label, Textarea } from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-2">
    <Label for="textarea-message">Your message</Label>
    <Textarea id="textarea-message" placeholder="Type your message here." />
  </div>
);`;

const buttonCode = `import { Button, Textarea } from "@neut/ui";

export default () => (
  <form
    class="grid w-full max-w-sm gap-3"
    onSubmit={(event) => event.preventDefault()}
  >
    <Textarea placeholder="Type your message here." />
    <Button type="submit" class="w-fit">
      Send message
    </Button>
  </form>
);`;

const helperCode = `import { Textarea } from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-2">
    <Textarea placeholder="Type your message here." />
    <p class="text-sm text-neutral-500 dark:text-neutral-400">
      Your message will be sent to the support team.
    </p>
  </div>
);`;

const fieldCode = `import {
  Field,
  FieldDescription,
  FieldLabel,
  Textarea,
} from "@neut/ui";

export default () => (
  <Field class="w-full max-w-sm">
    <FieldLabel for="textarea-field-message">Message</FieldLabel>
    <FieldDescription>Enter your message below.</FieldDescription>
    <Textarea
      id="textarea-field-message"
      placeholder="Type your message here."
    />
  </Field>
);`;

const invalidCode = `import {
  Field,
  FieldDescription,
  FieldLabel,
  Textarea,
} from "@neut/ui";

export default () => (
  <Field class="w-full max-w-sm" data-invalid>
    <FieldLabel for="textarea-invalid">Message</FieldLabel>
    <Textarea
      id="textarea-invalid"
      placeholder="Type your message here."
      aria-invalid
    />
    <FieldDescription>Please enter a valid message.</FieldDescription>
  </Field>
);`;

export default () => {
  return (
    <ComponentPage
      title="Textarea"
      description="Displays a form textarea or a component that looks like one."
    >
      <Example
        name="Basic"
        description="A multi-line text input."
        code={basicCode}
      >
        <Textarea placeholder="Type your message here." class="max-w-sm" />
      </Example>

      <Example
        name="Field"
        description="Use Field, FieldLabel and FieldDescription for a labelled input with helper text."
        code={fieldCode}
      >
        <Field class="w-full max-w-sm">
          <FieldLabel for="textarea-field-message">Message</FieldLabel>
          <FieldDescription>Enter your message below.</FieldDescription>
          <Textarea
            id="textarea-field-message"
            placeholder="Type your message here."
          />
        </Field>
      </Example>

      <Example
        name="Disabled"
        description="Disabled textareas ignore input."
        code={disabledCode}
      >
        <Textarea placeholder="Disabled" disabled class="max-w-sm" />
      </Example>

      <Example
        name="With label"
        description="Associate a label with the textarea."
        code={labelCode}
      >
        <div class="grid w-full max-w-sm gap-2">
          <Label for="textarea-message">Your message</Label>
          <Textarea
            id="textarea-message"
            placeholder="Type your message here."
          />
        </div>
      </Example>

      <Example
        name="Invalid"
        description="Mark the textarea and its field as invalid."
        code={invalidCode}
      >
        <Field class="w-full max-w-sm" data-invalid>
          <FieldLabel for="textarea-invalid">Message</FieldLabel>
          <Textarea
            id="textarea-invalid"
            placeholder="Type your message here."
            aria-invalid
          />
          <FieldDescription>Please enter a valid message.</FieldDescription>
        </Field>
      </Example>

      <Example
        name="With button"
        description="Pair a textarea with a submit action."
        code={buttonCode}
      >
        <form
          class="grid w-full max-w-sm gap-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <Textarea placeholder="Type your message here." />
          <Button type="submit" class="w-fit">
            Send message
          </Button>
        </form>
      </Example>
      <Example
        name="With text"
        description="Pair a textarea with helper text below."
        code={helperCode}
      >
        <div class="grid w-full max-w-sm gap-2">
          <Textarea placeholder="Type your message here." />
          <p class="text-sm text-neutral-500 dark:text-neutral-400">
            Your message will be sent to the support team.
          </p>
        </div>
      </Example>
    </ComponentPage>
  );
};
