import { Button, ButtonGroup, ButtonGroupSeparator } from "@neut/ui";
import { Minus, Plus } from "lucide-solid";

export default () => {
  return (
    <div class="flex flex-col items-center justify-center gap-8">
      <ButtonGroup
        orientation="vertical"
        aria-label="Media controls"
        class="h-fit"
      >
        <Button variant="outline" icon={<Plus />} />

        <Button variant="outline" icon={<Minus />} />
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Button
        </Button>
        <Button variant="outline" size="sm">
          Group
        </Button>
        <Button variant="outline" size="sm" icon={<Plus />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Group</Button>
        <Button variant="outline" icon={<Plus />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Group
        </Button>
        <Button variant="outline" size="lg" icon={<Plus />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">Button</Button>
        <ButtonGroupSeparator />
        <Button icon={<Plus />} variant="secondary" />
      </ButtonGroup>
    </div>
  );
};
