import { ComponentPage, Example } from "../../components/component-page";
import { For } from "solid-js";
import {
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@neut/ui";

const basicCode = `import {
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@neut/ui";

export default () => (
  <HoverCard>
    <HoverCardTrigger
      delay={10}
      closeDelay={100}
      component={Button}
      variant="link"
    >
      Hover Here
    </HoverCardTrigger>
    <HoverCardContent class="flex w-64 flex-col gap-0.5">
      <div class="font-semibold">@nextjs</div>
      <div>The React Framework - created and maintained by @vercel.</div>
      <div class="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
        Joined December 2021
      </div>
    </HoverCardContent>
  </HoverCard>
);`;

const sidesCode = `import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from "@neut/ui";
import { For } from "solid-js";

const sides = ["left", "top", "bottom", "right"] as const;

export default () => (
  <div class="flex flex-wrap justify-center gap-2">
    <For each={sides}>
      {(side) => (
        <HoverCard>
          <HoverCardTrigger
            delay={100}
            closeDelay={100}
            component={Button}
            variant="outline"
            class="capitalize"
          >
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div class="flex flex-col gap-1">
              <h4 class="font-medium">Hover Card</h4>
              <p>This hover card appears on the {side} side of the trigger.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      )}
    </For>
  </div>
);`;

const delaysCode = `import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from "@neut/ui";

export default () => (
  <div class="flex flex-wrap items-center justify-center gap-4">
    <HoverCard>
      <HoverCardTrigger
        delay={0}
        closeDelay={0}
        component={Button}
        variant="outline"
      >
        No delay
      </HoverCardTrigger>
      <HoverCardContent>
        <div class="text-sm">Opens and closes immediately.</div>
      </HoverCardContent>
    </HoverCard>
    <HoverCard delay={700} closeDelay={300}>
      <HoverCardTrigger component={Button} variant="outline">
        Default delay
      </HoverCardTrigger>
      <HoverCardContent>
        <div class="text-sm">
          Uses the root delay (700ms) and closeDelay (300ms).
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="HoverCard"
      description="For sighted users to preview content available behind a link."
    >
      <Example
        name="Basic"
        description="Preview profile details when hovering a link."
        code={basicCode}
      >
        <HoverCard>
          <HoverCardTrigger
            delay={10}
            closeDelay={100}
            component={Button}
            variant="link"
          >
            Hover Here
          </HoverCardTrigger>
          <HoverCardContent class="flex w-64 flex-col gap-0.5">
            <div class="font-semibold">@nextjs</div>
            <div>The React Framework - created and maintained by @vercel.</div>
            <div class="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              Joined December 2021
            </div>
          </HoverCardContent>
        </HoverCard>
      </Example>

      <Example
        name="Sides"
        description="Place the card on any side of the trigger."
        code={sidesCode}
      >
        <div class="flex flex-wrap justify-center gap-2">
          <For each={["left", "top", "bottom", "right"] as const}>
            {(side) => (
              <HoverCard>
                <HoverCardTrigger
                  delay={100}
                  closeDelay={100}
                  component={Button}
                  variant="outline"
                  class="capitalize"
                >
                  {side}
                </HoverCardTrigger>
                <HoverCardContent side={side}>
                  <div class="flex flex-col gap-1">
                    <h4 class="font-medium">Hover Card</h4>
                    <p>
                      This hover card appears on the {side} side of the trigger.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            )}
          </For>
        </div>
      </Example>

      <Example
        name="Delays"
        description="Control open and close timing per trigger or per root."
        code={delaysCode}
      >
        <div class="flex flex-wrap items-center justify-center gap-4">
          <HoverCard>
            <HoverCardTrigger
              delay={0}
              closeDelay={0}
              component={Button}
              variant="outline"
            >
              No delay
            </HoverCardTrigger>
            <HoverCardContent>
              <div class="text-sm">Opens and closes immediately.</div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard delay={700} closeDelay={300}>
            <HoverCardTrigger component={Button} variant="outline">
              Default delay
            </HoverCardTrigger>
            <HoverCardContent>
              <div class="text-sm">
                Uses the root delay (700ms) and closeDelay (300ms).
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </Example>
    </ComponentPage>
  );
};
