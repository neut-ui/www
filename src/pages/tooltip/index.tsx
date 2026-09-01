import { ComponentPage, Example } from "../../components/component-page";
import {
  Button,
  Kbd,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui";
import { Save } from "lucide-solid";

const sidesCode = `import {
  Button,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui";

export default () => (
  <div class="flex items-center gap-3">
    <Tooltip>
      <TooltipTrigger variant="outline">Top</TooltipTrigger>
      <TooltipContent side="top">
        Tooltip on top
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger variant="outline">Right</TooltipTrigger>
      <TooltipContent side="right">
        Tooltip on right
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger variant="outline">Bottom</TooltipTrigger>
      <TooltipContent side="bottom">
        Tooltip on bottom
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger variant="outline">Left</TooltipTrigger>
      <TooltipContent side="left">
        Tooltip on left
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  </div>
);`;

const shortcutCode = `import { Button, Kbd, Tooltip, TooltipContent, TooltipTrigger } from "@neut/ui";
import { Save } from "lucide-solid";

export default () => (
  <Tooltip>
    <TooltipTrigger variant="outline" size="sm" icon={<Save />} aria-label="Save" />
    <TooltipContent>
      Save Changes <Kbd>S</Kbd>
    </TooltipContent>
  </Tooltip>
);`;

const disabledCode = `import {
  Button,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui";

export default () => (
  <Tooltip>
    <TooltipTrigger component="span" class="inline-block">
      <Button variant="outline" size="sm" disabled>
        Disabled
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <TooltipArrow />
      <p>This feature is currently unavailable</p>
    </TooltipContent>
  </Tooltip>
);`;

export default () => {
  return (
    <ComponentPage
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
    >
      <Example
        name="Sides"
        description="Place a tooltip on any of the four sides of its trigger."
        code={sidesCode}
      >
        <div class="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger variant="outline">Top</TooltipTrigger>
            <TooltipContent side="top">
              Tooltip on top
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger variant="outline">Right</TooltipTrigger>
            <TooltipContent side="right">
              Tooltip on right
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger variant="outline">Bottom</TooltipTrigger>
            <TooltipContent side="bottom">
              Tooltip on bottom
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger variant="outline">Left</TooltipTrigger>
            <TooltipContent side="left">
              Tooltip on left
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
        </div>
      </Example>

      <Example
        name="With keyboard shortcut"
        description="Show a keyboard shortcut alongside the tooltip label."
        code={shortcutCode}
      >
        <Tooltip>
          <TooltipTrigger
            variant="outline"
            size="sm"
            icon={<Save />}
            aria-label="Save"
          />
          <TooltipContent>
            Save Changes <Kbd>S</Kbd>
          </TooltipContent>
        </Tooltip>
      </Example>

      <Example
        name="Disabled trigger"
        description="Wrap a disabled button so the tooltip still appears on hover."
        code={disabledCode}
      >
        <Tooltip>
          <TooltipTrigger component="span" class="inline-block">
            <Button variant="outline" size="sm" disabled>
              Disabled
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <TooltipArrow />
            <p>This feature is currently unavailable</p>
          </TooltipContent>
        </Tooltip>
      </Example>
    </ComponentPage>
  );
};
