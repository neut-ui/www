import { Button, Card, CardContent, Kbd } from "@neut/ui";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui/components/tooltip";
import { For } from "solid-js";
import { Save } from "lucide-solid";
import { CardHeader } from "@neut/ui";

const tooltipSides = ["top", "right", "bottom", "left"] as const;
const tooltipAligns = ["start", "center", "end"] as const;

const TooltipGrid = () => {
  return (
    <div class="grid gap-2 [grid-template-areas:'._top-start_top-center_top-end_.''left-start_._._._right-start''left-center_._._._right-center''left-end_._._._right-end''._bottom-start_bottom-center_bottom-end_.']">
      <For each={tooltipSides}>
        {(side) => (
          <For each={tooltipAligns}>
            {(align) => (
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="outline"
                    style={{ "grid-area": `${side}-${align}` }}
                  >
                    {side}-{align}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side={side} align={align}>
                  {`${side}-${align}`}
                </TooltipContent>
              </Tooltip>
            )}
          </For>
        )}
      </For>
    </div>
  );
};

export default () => (
  <>
    <div class="p-24 flex items-center gap-3">
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          Tooltip content
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          Tooltip content
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Top Start</Button>
        </TooltipTrigger>
        <TooltipContent side="top" align="start">
          Tooltip content
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          Tooltip content
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          Tooltip content
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </div>

    <div>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline" size="sm" icon={<Save />} />
        </TooltipTrigger>
        <TooltipContent>
          Save Changes <Kbd>S</Kbd>
        </TooltipContent>
      </Tooltip>
    </div>

    <div>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline" size="sm" disabled>
            Disabled
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <TooltipArrow />
          <p>This feature is currently unavailable</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <span class="inline-block w-fit">
            <Button variant="outline" size="sm" disabled>
              Disabled
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <TooltipArrow />
          <p>This feature is currently unavailable</p>
        </TooltipContent>
      </Tooltip>
    </div>

    <Card>
      <CardHeader>不同side和align的文字提示</CardHeader>

      <CardContent>
        <TooltipGrid />
      </CardContent>
    </Card>
  </>
);
