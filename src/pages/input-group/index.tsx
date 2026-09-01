import { ComponentPage, Example } from "../../components/component-page";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  Kbd,
  Spinner,
} from "@neut/ui";
import {
  Copy,
  CornerDownLeft,
  CreditCard,
  Mail,
  Search,
} from "lucide-solid";

const iconCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@neut/ui";
import { CreditCard, Mail, Search } from "lucide-solid";

export default () => (
  <div class="grid w-full max-w-sm gap-6">
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput type="email" placeholder="Enter your email" />
      <InputGroupAddon>
        <Mail />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Card number" />
      <InputGroupAddon>
        <CreditCard />
      </InputGroupAddon>
    </InputGroup>
  </div>
);`;

const textCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-6">
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Enter your username" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@company.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
);`;

const buttonCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@neut/ui";
import { Copy, CornerDownLeft, Search } from "lucide-solid";

export default () => (
  <div class="grid w-full max-w-sm gap-6">
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <InputGroupButton icon={<Search />} aria-label="Search" />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Enter a command..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>
          Run <CornerDownLeft />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput defaultValue="https://neut.dev" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton icon={<Copy />} aria-label="Copy" />
      </InputGroupAddon>
    </InputGroup>
  </div>
);`;

const kbdCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
} from "@neut/ui";
import { Search } from "lucide-solid";

export default () => (
  <InputGroup class="max-w-sm">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon>
      <Search />
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <Kbd>⌘K</Kbd>
    </InputGroupAddon>
  </InputGroup>
);`;

const loadingCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Spinner,
} from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-4">
    <InputGroup>
      <InputGroupInput placeholder="Searching..." />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Saving changes..." />
      <InputGroupAddon align="inline-end">
        <InputGroupText>Saving...</InputGroupText>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Input Group"
      description="Compose inputs with icons, text, buttons and status addons."
    >
      <Example
        name="With icon"
        description="Add leading or trailing icons to an input group."
        code={iconCode}
      >
        <div class="grid w-full max-w-sm gap-6">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput type="email" placeholder="Enter your email" />
            <InputGroupAddon>
              <Mail />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Card number" />
            <InputGroupAddon>
              <CreditCard />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </Example>

      <Example
        name="With text addon"
        description="Use text addons for units, prefixes and suffixes."
        code={textCode}
      >
        <div class="grid w-full max-w-sm gap-6">
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="0.00" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>USD</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="example.com" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Enter your username" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>@company.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </Example>

      <Example
        name="With button"
        description="Attach buttons to an input for actions like search, run or copy."
        code={buttonCode}
      >
        <div class="grid w-full max-w-sm gap-6">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <InputGroupButton icon={<Search />} aria-label="Search" />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Enter a command..." />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>
                Run <CornerDownLeft />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput defaultValue="https://neut.dev" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton icon={<Copy />} aria-label="Copy" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </Example>

      <Example
        name="With keyboard shortcut"
        description="Show a keyboard shortcut as a trailing addon."
        code={kbdCode}
      >
        <InputGroup class="max-w-sm">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>
      </Example>

      <Example
        name="Loading states"
        description="Use a spinner addon to signal a pending operation."
        code={loadingCode}
      >
        <div class="grid w-full max-w-sm gap-4">
          <InputGroup>
            <InputGroupInput placeholder="Searching..." />
            <InputGroupAddon align="inline-end">
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Saving changes..." />
            <InputGroupAddon align="inline-end">
              <InputGroupText>Saving...</InputGroupText>
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </Example>
    </ComponentPage>
  );
};
