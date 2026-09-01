import { ComponentPage, Example } from "../../components/component-page";
import { Input } from "@neut/ui";

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

export default () => {
  return (
    <ComponentPage
      title="Input"
      description="A text field that lets the user enter and edit a value."
    >
      <Example
        name="Text"
        description="A plain text input."
        code={textCode}
      >
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
    </ComponentPage>
  );
};
