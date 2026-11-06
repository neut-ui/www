import { ComponentPage, Example } from "../../components/component-page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  Kbd,
  Label,
  Spinner,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui";
import {
  ChevronDown,
  Copy,
  CornerDownLeft,
  CreditCard,
  Info,
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

const labelCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Label,
} from "@neut/ui";

export default () => (
  <div class="grid w-full max-w-sm gap-2">
    <Label for="input-group-email">Email</Label>
    <InputGroup>
      <InputGroupInput id="input-group-email" placeholder="you" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@company.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
);`;

const textareaCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@neut/ui";

export default () => (
  <InputGroup class="max-w-sm">
    <InputGroupTextarea placeholder="Write a message..." rows={4} />
    <InputGroupAddon align="block-end">
      <InputGroupText>Markdown supported</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
);`;

const dropdownCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@neut/ui";
import { ChevronDown } from "lucide-solid";

export default () => (
  <InputGroup class="max-w-sm">
    <InputGroupInput placeholder="Search..." />
    <InputGroupAddon align="inline-end">
      <DropdownMenu>
        <DropdownMenuTrigger
          variant="ghost"
          size="xs"
          aria-label="Filter"
          icon={<ChevronDown />}
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem>All</DropdownMenuItem>
          <DropdownMenuItem>Open</DropdownMenuItem>
          <DropdownMenuItem>Closed</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </InputGroupAddon>
  </InputGroup>
);`;

const buttonGroupCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@neut/ui";

export default () => (
  <InputGroup class="max-w-sm">
    <InputGroupAddon align="inline-start">
      <InputGroupButton size="xs">Copy</InputGroupButton>
    </InputGroupAddon>
    <InputGroupInput placeholder="https://neut.dev" />
    <InputGroupAddon align="inline-end">
      <InputGroupButton size="xs">Paste</InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);`;

const tooltipCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui";
import { Info } from "lucide-solid";

export default () => (
  <InputGroup class="max-w-sm">
    <InputGroupInput placeholder="Card number" />
    <InputGroupAddon align="inline-end">
      <Tooltip>
        <TooltipTrigger
          component={InputGroupButton}
          icon={<Info />}
          aria-label="Card number help"
        />
        <TooltipContent>Enter the 16-digit number on your card.</TooltipContent>
      </Tooltip>
    </InputGroupAddon>
  </InputGroup>
);`;

const inCardCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@neut/ui";

export default () => (
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Subscribe</CardTitle>
      <CardDescription>Get product updates in your inbox.</CardDescription>
    </CardHeader>
    <CardContent>
      <InputGroup>
        <InputGroupInput placeholder="you@example.com" type="email" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Subscribe</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </CardContent>
  </Card>
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

      <Example
        name="With label"
        description="Associate a label with the input inside the group."
        code={labelCode}
      >
        <div class="grid w-full max-w-sm gap-2">
          <Label for="input-group-email">Email</Label>
          <InputGroup>
            <InputGroupInput id="input-group-email" placeholder="you" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>@company.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </Example>

      <Example
        name="With textarea"
        description="InputGroup also works with InputGroupTextarea."
        code={textareaCode}
      >
        <InputGroup class="max-w-sm">
          <InputGroupTextarea placeholder="Write a message..." rows={4} />
          <InputGroupAddon align="block-end">
            <InputGroupText>Markdown supported</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Example>

      <Example
        name="With dropdown"
        description="Place a dropdown menu in the trailing addon."
        code={dropdownCode}
      >
        <InputGroup class="max-w-sm">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end">
            <DropdownMenu>
              <DropdownMenuTrigger
                variant="ghost"
                size="xs"
                aria-label="Filter"
                icon={<ChevronDown />}
              />
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Open</DropdownMenuItem>
                <DropdownMenuItem>Closed</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </InputGroupAddon>
        </InputGroup>
      </Example>
      <Example
        name="With button group"
        description="Place action buttons on both sides of the input."
        code={buttonGroupCode}
      >
        <InputGroup class="max-w-sm">
          <InputGroupAddon align="inline-start">
            <InputGroupButton size="xs">Copy</InputGroupButton>
          </InputGroupAddon>
          <InputGroupInput placeholder="https://neut.dev" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="xs">Paste</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Example>

      <Example
        name="With tooltip"
        description="Attach a tooltip to an addon button."
        code={tooltipCode}
      >
        <InputGroup class="max-w-sm">
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger
                component={InputGroupButton}
                icon={<Info />}
                aria-label="Card number help"
              />
              <TooltipContent>
                Enter the 16-digit number on your card.
              </TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </Example>

      <Example
        name="In a card"
        description="Place an input group inside a card."
        code={inCardCode}
      >
        <Card class="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Subscribe</CardTitle>
            <CardDescription>
              Get product updates in your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <InputGroup>
              <InputGroupInput placeholder="you@example.com" type="email" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>Subscribe</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </CardContent>
        </Card>
      </Example>
    </ComponentPage>
  );
};
