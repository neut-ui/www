import { ComponentPage, Example } from "../../components/component-page";
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
  KbdGroup,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui";
import { Search } from "lucide-solid";

const basicCode = `import { Kbd } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-2 text-sm">
    <span>Press</span>
    <Kbd>Ctrl</Kbd>
    <span>+</span>
    <Kbd>K</Kbd>
    <span>to search</span>
  </div>
);`;

const groupCode = `import { Kbd, KbdGroup } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-2 text-sm">
    <span>Open settings with</span>
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>,</Kbd>
    </KbdGroup>
  </div>
);`;

const buttonCode = `import { Button, Kbd } from "@neut/ui";

export default () => (
  <Button variant="outline" class="gap-2">
    Search
    <Kbd>⌘K</Kbd>
  </Button>
);`;

const inputGroupCode = `import {
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

const tooltipCode = `import {
  Kbd,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui";

export default () => (
  <Tooltip>
    <TooltipTrigger variant="outline">Hover me</TooltipTrigger>
    <TooltipContent>
      Press <Kbd>K</Kbd> to search
    </TooltipContent>
  </Tooltip>
);`;

export default () => {
  return (
    <ComponentPage
      title="Kbd"
      description="Displays keyboard keys and shortcuts in documentation and UI."
    >
      <Example
        name="Basic"
        description="Render individual keys inside a sentence."
        code={basicCode}
      >
        <div class="flex items-center gap-2 text-sm">
          <span>Press</span>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>K</Kbd>
          <span>to search</span>
        </div>
      </Example>

      <Example
        name="Group"
        description="Group keys that belong to one shortcut."
        code={groupCode}
      >
        <div class="flex items-center gap-2 text-sm">
          <span>Open settings with</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>,</Kbd>
          </KbdGroup>
        </div>
      </Example>

      <Example
        name="In a button"
        description="Combine a keyboard hint with a button label."
        code={buttonCode}
      >
        <Button variant="outline" class="gap-2">
          Search
          <Kbd>⌘K</Kbd>
        </Button>
      </Example>

      <Example
        name="In an input group"
        description="Show a shortcut hint at the end of an input."
        code={inputGroupCode}
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
        name="In tooltip"
        description="Show a shortcut inside a tooltip."
        code={tooltipCode}
      >
        <Tooltip>
          <TooltipTrigger variant="outline">Hover me</TooltipTrigger>
          <TooltipContent>
            Press <Kbd>K</Kbd> to search
          </TooltipContent>
        </Tooltip>
      </Example>
    </ComponentPage>
  );
};
