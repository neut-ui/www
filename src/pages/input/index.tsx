import { ComponentPage, Example } from "../../components/component-page";
import {
  Badge,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Label,
} from "@neut/ui";

const textCode = `import { Input } from "@neut/ui";

export default () => (
  <div class="w-full max-w-xs">
    <Input type="text" placeholder="Enter text" />
  </div>
);`;

const numberCode = `import { Input } from "@neut/ui";

export default () => (
  <div class="w-full max-w-xs">
    <Input
      type="number"
      defaultValue={0}
      onInput={(value) => console.log(value + 1)}
    />
  </div>
);`;

const emailCode = `import { Input } from "@neut/ui";

export default () => (
  <div class="w-full max-w-xs">
    <Input type="email" placeholder="you@example.com" />
  </div>
);`;

const passwordCode = `import { Input } from "@neut/ui";

export default () => (
  <div class="w-full max-w-xs">
    <Input type="password" placeholder="••••••••" />
  </div>
);`;

const disabledCode = `import { Input } from "@neut/ui";

export default () => (
  <div class="w-full max-w-xs">
    <Input placeholder="Disabled" disabled />
  </div>
);`;

const labelCode = `import { Input, Label } from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-2">
    <Label for="input-email">Email</Label>
    <Input id="input-email" type="email" placeholder="you@example.com" />
  </div>
);`;

const buttonCode = `import { Button, Input } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-sm items-center gap-2">
    <Input type="email" placeholder="Email" />
    <Button variant="outline">Subscribe</Button>
  </div>
);`;

const fileCode = `import { Input, Label } from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-2">
    <Label for="input-picture">Picture</Label>
    <Input id="input-picture" type="file" />
  </div>
);`;

const textCode2 = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@neut/ui";

export default () => (
  <InputGroup class="max-w-sm">
    <InputGroupAddon>
      <InputGroupText>https://</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput placeholder="example.com" />
    <InputGroupAddon align="inline-end">
      <InputGroupText>.com</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);`;

const invalidCode = `import { Input } from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-2">
    <Input aria-invalid placeholder="you@example.com" />
    <p class="text-sm text-red-600 dark:text-red-400">
      Please enter a valid email address.
    </p>
  </div>
);`;

const requiredCode = `import { Input, Label } from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-2">
    <Label for="input-required">
      Email <span class="text-red-600">*</span>
    </Label>
    <Input id="input-required" required placeholder="you@example.com" />
  </div>
);`;

const gridCode = `import { Input } from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm grid-cols-2 gap-2">
    <Input placeholder="First name" />
    <Input placeholder="Last name" />
  </div>
);`;

const badgeCode = `import {
  Badge,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@neut/ui";

export default () => (
  <InputGroup class="max-w-sm">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon align="inline-end">
      <Badge variant="secondary">New</Badge>
    </InputGroupAddon>
  </InputGroup>
);`;

export default () => {
  return (
    <ComponentPage
      title="Input"
      description="A text field that lets the user enter and edit a value."
    >
      <Example name="Text" description="A plain text input." code={textCode}>
        <div class="w-full max-w-xs">
          <Input type="text" placeholder="Enter text" />
        </div>
      </Example>

      <Example
        name="Number"
        description="Use type=number to receive number values in the input callback."
        code={numberCode}
      >
        <div class="w-full max-w-xs">
          <Input
            type="number"
            defaultValue={0}
            onInput={(value) => console.log(value + 1)}
          />
        </div>
      </Example>

      <Example
        name="Email"
        description="An email input with a placeholder."
        code={emailCode}
      >
        <div class="w-full max-w-xs">
          <Input type="email" placeholder="you@example.com" />
        </div>
      </Example>

      <Example
        name="Password"
        description="A password input that masks its value."
        code={passwordCode}
      >
        <div class="w-full max-w-xs">
          <Input type="password" placeholder="••••••••" />
        </div>
      </Example>

      <Example
        name="Disabled"
        description="A disabled input cannot be focused or edited."
        code={disabledCode}
      >
        <div class="w-full max-w-xs">
          <Input placeholder="Disabled" disabled />
        </div>
      </Example>

      <Example
        name="With label"
        description="Associate a label with the input."
        code={labelCode}
      >
        <div class="grid w-full max-w-sm gap-2">
          <Label for="input-email">Email</Label>
          <Input id="input-email" type="email" placeholder="you@example.com" />
        </div>
      </Example>

      <Example
        name="With button"
        description="Pair an input with a submit or action button."
        code={buttonCode}
      >
        <div class="flex w-full max-w-sm items-center gap-2">
          <Input type="email" placeholder="Email" />
          <Button variant="outline">Subscribe</Button>
        </div>
      </Example>

      <Example
        name="File"
        description="Use type=file to let users choose a file."
        code={fileCode}
      >
        <div class="grid w-full max-w-sm gap-2">
          <Label for="input-picture">Picture</Label>
          <Input id="input-picture" type="file" />
        </div>
      </Example>

      <Example
        name="With text addon"
        description="Add prefix or suffix text around the input."
        code={textCode2}
      >
        <InputGroup class="max-w-sm">
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Example>
      <Example
        name="Invalid"
        description="Use aria-invalid and an error message for validation feedback."
        code={invalidCode}
      >
        <div class="grid w-full max-w-sm gap-2">
          <Input aria-invalid placeholder="you@example.com" />
          <p class="text-sm text-red-600 dark:text-red-400">
            Please enter a valid email address.
          </p>
        </div>
      </Example>

      <Example
        name="Required"
        description="Mark a required input with an asterisk and the required attribute."
        code={requiredCode}
      >
        <div class="grid w-full max-w-sm gap-2">
          <Label for="input-required">
            Email <span class="text-red-600">*</span>
          </Label>
          <Input id="input-required" required placeholder="you@example.com" />
        </div>
      </Example>

      <Example
        name="Grid"
        description="Lay out multiple inputs in a grid."
        code={gridCode}
      >
        <div class="grid w-full max-w-sm grid-cols-2 gap-2">
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
        </div>
      </Example>

      <Example
        name="With badge"
        description="Place a badge in the trailing addon of an input group."
        code={badgeCode}
      >
        <InputGroup class="max-w-sm">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end">
            <Badge variant="secondary">New</Badge>
          </InputGroupAddon>
        </InputGroup>
      </Example>
    </ComponentPage>
  );
};
