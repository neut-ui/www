import { ComponentPage, Example } from "../../components/component-page";
import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@neut/ui";
import { ChevronDown, Minus, Plus } from "lucide-solid";

const horizontalCode = `import {
  Button,
  ButtonGroup,
  ButtonGroupText,
} from "@neut/ui";

export default () => (
  <ButtonGroup aria-label="Items per page">
    <ButtonGroupText>Per page</ButtonGroupText>
    <Button variant="outline">10</Button>
    <Button variant="outline">25</Button>
    <Button variant="outline">50</Button>
  </ButtonGroup>
);`;

const verticalCode = `import { Button, ButtonGroup } from "@neut/ui";
import { Minus, Plus } from "lucide-solid";

export default () => (
  <ButtonGroup orientation="vertical" aria-label="Media controls">
    <Button variant="outline" icon={<Plus />} aria-label="Add" />
    <Button variant="outline" icon={<Minus />} aria-label="Remove" />
  </ButtonGroup>
);`;

const sizesCode = `import { Button, ButtonGroup } from "@neut/ui";

export default () => (
  <div class="flex flex-col items-center gap-3">
    <ButtonGroup aria-label="Small buttons">
      <Button variant="outline" size="sm">Small</Button>
      <Button variant="outline" size="sm">Group</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Default buttons">
      <Button variant="outline">Default</Button>
      <Button variant="outline">Group</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Large buttons">
      <Button variant="outline" size="lg">Large</Button>
      <Button variant="outline" size="lg">Group</Button>
    </ButtonGroup>
  </div>
);`;

const separatorCode = `import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
} from "@neut/ui";
import { Minus, Plus } from "lucide-solid";

export default () => (
  <ButtonGroup aria-label="Zoom controls">
    <Button variant="secondary" icon={<Minus />} aria-label="Zoom out" />
    <ButtonGroupSeparator />
    <Button variant="secondary" icon={<Plus />} aria-label="Zoom in" />
  </ButtonGroup>
);`;

const dropdownCode = `import {
  Button,
  ButtonGroup,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@neut/ui";
import { ChevronDown } from "lucide-solid";

export default () => (
  <ButtonGroup>
    <Button variant="outline">Copy</Button>
    <DropdownMenu>
      <DropdownMenuTrigger
        variant="outline"
        icon={<ChevronDown />}
        aria-label="More actions"
      />
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Cut</DropdownMenuItem>
        <DropdownMenuItem>Paste</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </ButtonGroup>
);`;

const inputCode = `import { Button, ButtonGroup, Input } from "@neut/ui";

export default () => (
  <ButtonGroup class="max-w-sm">
    <Input placeholder="Search..." />
    <Button variant="outline">Search</Button>
  </ButtonGroup>
);`;

const selectCode = `import {
  Button,
  ButtonGroup,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@neut/ui";

export default () => (
  <ButtonGroup>
    <Select defaultValue="10">
      <SelectTrigger class="w-24">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="25">25</SelectItem>
        <SelectItem value="50">50</SelectItem>
      </SelectContent>
    </Select>
    <Button variant="outline">Per page</Button>
  </ButtonGroup>
);`;

const nestedCode = `import { Button, ButtonGroup } from "@neut/ui";
import { Minus, Plus } from "lucide-solid";

export default () => (
  <ButtonGroup>
    <ButtonGroupText>Zoom</ButtonGroupText>
    <ButtonGroup>
      <Button variant="outline" icon={<Minus />} aria-label="Zoom out" />
      <Button variant="outline" icon={<Plus />} aria-label="Zoom in" />
    </ButtonGroup>
  </ButtonGroup>
);`;

const inputGroupCode = `import {
  Button,
  ButtonGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@neut/ui";

export default () => (
  <ButtonGroup class="max-w-sm">
    <InputGroup class="flex-1">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Search</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <Button variant="outline">Go</Button>
  </ButtonGroup>
);`;

const popoverCode = `import {
  Button,
  ButtonGroup,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@neut/ui";

export default () => (
  <ButtonGroup>
    <Button variant="outline">Save</Button>
    <Popover>
      <PopoverTrigger variant="outline">Options</PopoverTrigger>
      <PopoverContent align="end" class="w-64">
        <PopoverHeader>
          <PopoverTitle>Save options</PopoverTitle>
          <PopoverDescription>
            Choose how the document should be saved.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  </ButtonGroup>
);`;

const splitCode = `import { Button, ButtonGroup } from "@neut/ui";
import { ChevronDown } from "lucide-solid";

export default () => (
  <ButtonGroup>
    <Button variant="outline">Copy link</Button>
    <Button
      variant="outline"
      icon={<ChevronDown />}
      aria-label="More copy options"
    />
  </ButtonGroup>
);`;

export default () => {
  return (
    <ComponentPage
      title="ButtonGroup"
      description="Groups related buttons into a single, visually connected control."
    >
      <Example
        name="Horizontal"
        description="Buttons and text are joined together in a row."
        code={horizontalCode}
      >
        <ButtonGroup aria-label="Items per page">
          <ButtonGroupText>Per page</ButtonGroupText>
          <Button variant="outline">10</Button>
          <Button variant="outline">25</Button>
          <Button variant="outline">50</Button>
        </ButtonGroup>
      </Example>

      <Example
        name="Vertical"
        description="Set orientation to vertical to stack the buttons."
        code={verticalCode}
      >
        <ButtonGroup orientation="vertical" aria-label="Media controls">
          <Button variant="outline" icon={<Plus />} aria-label="Add" />
          <Button variant="outline" icon={<Minus />} aria-label="Remove" />
        </ButtonGroup>
      </Example>

      <Example
        name="Sizes"
        description="Button sizes carry through into the group for a consistent look."
        code={sizesCode}
      >
        <div class="flex flex-col items-center gap-3">
          <ButtonGroup aria-label="Small buttons">
            <Button variant="outline" size="sm">
              Small
            </Button>
            <Button variant="outline" size="sm">
              Group
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Default buttons">
            <Button variant="outline">Default</Button>
            <Button variant="outline">Group</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Large buttons">
            <Button variant="outline" size="lg">
              Large
            </Button>
            <Button variant="outline" size="lg">
              Group
            </Button>
          </ButtonGroup>
        </div>
      </Example>

      <Example
        name="With separator"
        description="Insert a ButtonGroupSeparator to divide buttons in a group."
        code={separatorCode}
      >
        <ButtonGroup aria-label="Zoom controls">
          <Button variant="secondary" icon={<Minus />} aria-label="Zoom out" />
          <ButtonGroupSeparator />
          <Button variant="secondary" icon={<Plus />} aria-label="Zoom in" />
        </ButtonGroup>
      </Example>
      <Example
        name="With dropdown"
        description="Attach a dropdown menu to the end of a button group."
        code={dropdownCode}
      >
        <ButtonGroup>
          <Button variant="outline">Copy</Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              variant="outline"
              icon={<ChevronDown />}
              aria-label="More actions"
            />
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Cut</DropdownMenuItem>
              <DropdownMenuItem>Paste</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </Example>

      <Example
        name="With input"
        description="Join an input and a button into one control."
        code={inputCode}
      >
        <ButtonGroup class="max-w-sm">
          <Input placeholder="Search..." />
          <Button variant="outline">Search</Button>
        </ButtonGroup>
      </Example>

      <Example
        name="With select"
        description="Combine a select trigger with a button."
        code={selectCode}
      >
        <ButtonGroup>
          <Select defaultValue="10">
            <SelectTrigger class="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Per page</Button>
        </ButtonGroup>
      </Example>

      <Example
        name="Nested"
        description="Nest button groups for compound controls."
        code={nestedCode}
      >
        <ButtonGroup>
          <ButtonGroupText>Zoom</ButtonGroupText>
          <ButtonGroup>
            <Button variant="outline" icon={<Minus />} aria-label="Zoom out" />
            <Button variant="outline" icon={<Plus />} aria-label="Zoom in" />
          </ButtonGroup>
        </ButtonGroup>
      </Example>
      <Example
        name="With input group"
        description="Combine an input group and a button in one control."
        code={inputGroupCode}
      >
        <ButtonGroup class="max-w-sm">
          <InputGroup class="flex-1">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>Search</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <Button variant="outline">Go</Button>
        </ButtonGroup>
      </Example>

      <Example
        name="With popover"
        description="Attach a popover to a button group."
        code={popoverCode}
      >
        <ButtonGroup>
          <Button variant="outline">Save</Button>
          <Popover>
            <PopoverTrigger variant="outline">Options</PopoverTrigger>
            <PopoverContent align="end" class="w-64">
              <PopoverHeader>
                <PopoverTitle>Save options</PopoverTitle>
                <PopoverDescription>
                  Choose how the document should be saved.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </ButtonGroup>
      </Example>
      <Example
        name="Split"
        description="Pair a primary action with a secondary icon button."
        code={splitCode}
      >
        <ButtonGroup>
          <Button variant="outline">Copy link</Button>
          <Button
            variant="outline"
            icon={<ChevronDown />}
            aria-label="More copy options"
          />
        </ButtonGroup>
      </Example>
    </ComponentPage>
  );
};
