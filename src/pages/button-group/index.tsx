import { ComponentPage, Example } from "../../components/component-page";
import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@neut/ui";
import { Minus, Plus } from "lucide-solid";

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
    </ComponentPage>
  );
};
