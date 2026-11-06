import { ComponentPage, Example } from "../../components/component-page";
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
  Button,
  Collapsible,
  CollapsibleTrigger,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui";
import { Check, ChevronDown, Info, ThumbsDown, ThumbsUp } from "lucide-solid";
import { createSignal } from "solid-js";

const variantsCode = `import { Bubble, BubbleContent } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-4">
    <Bubble>
      <BubbleContent>Default bubbles use the primary color.</BubbleContent>
    </Bubble>
    <Bubble variant="secondary">
      <BubbleContent>Secondary bubbles use a neutral surface.</BubbleContent>
    </Bubble>
    <Bubble variant="muted">
      <BubbleContent>Muted bubbles lower the emphasis.</BubbleContent>
    </Bubble>
    <Bubble variant="tinted" align="end">
      <BubbleContent>Tinted bubbles use a softer primary tint.</BubbleContent>
    </Bubble>
    <Bubble variant="outline">
      <BubbleContent>Outline bubbles add a border.</BubbleContent>
    </Bubble>
    <Bubble variant="destructive">
      <BubbleContent>Destructive bubbles flag errors.</BubbleContent>
    </Bubble>
    <Bubble variant="ghost">
      <BubbleContent>Ghost bubbles are unframed.</BubbleContent>
    </Bubble>
  </div>
);`;

const alignmentCode = `import { Bubble, BubbleContent } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-4">
    <Bubble variant="muted">
      <BubbleContent>This bubble is aligned to the start.</BubbleContent>
    </Bubble>
    <Bubble align="end">
      <BubbleContent>This bubble is aligned to the end.</BubbleContent>
    </Bubble>
    <Bubble variant="muted">
      <BubbleContent>
        A multiline message aligned to the start with matching corner radii.
      </BubbleContent>
    </Bubble>
    <Bubble align="end">
      <BubbleContent>
        A multiline message aligned to the end with matching corner radii.
      </BubbleContent>
    </Bubble>
  </div>
);`;

const groupedCode = `import { Bubble, BubbleContent, BubbleGroup } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-6">
    <BubbleGroup>
      <Bubble variant="secondary">
        <BubbleContent>I finished the audit pass.</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>
          The registry output looks clean, but I found one stale route.
        </BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>Want me to remove it now?</BubbleContent>
      </Bubble>
    </BubbleGroup>
    <BubbleGroup>
      <Bubble variant="tinted" align="end">
        <BubbleContent>Yes, clean that up.</BubbleContent>
      </Bubble>
      <Bubble variant="tinted" align="end">
        <BubbleContent>Then rerun the registry build.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  </div>
);`;

const reactionsCode = `import {
  Bubble,
  BubbleContent,
  BubbleReactions,
  Button,
} from "@neut/ui";
import { ThumbsDown, ThumbsUp } from "lucide-solid";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-8">
    <Bubble>
      <BubbleContent>This is a one line message.</BubbleContent>
      <BubbleReactions role="img" aria-label="Reaction: thumbs up">
        <span>👍</span>
      </BubbleReactions>
    </Bubble>
    <Bubble variant="secondary" align="end">
      <BubbleContent>
        A longer message that wraps across lines so the reaction offset is
        easier to inspect.
      </BubbleContent>
      <BubbleReactions
        align="start"
        role="img"
        aria-label="Reactions: thumbs up, surprised"
      >
        <span>👍</span>
        <span>😮</span>
      </BubbleReactions>
    </Bubble>
    <Bubble variant="tinted">
      <BubbleContent>We are going to the movies first then dinner.</BubbleContent>
      <BubbleReactions class="gap-1 bg-white dark:bg-neutral-950">
        <Button
          variant="secondary"
          size="xs"
          aria-label="Thumbs up"
          icon={<ThumbsUp />}
        />
        <Button
          variant="secondary"
          size="xs"
          aria-label="Thumbs down"
          icon={<ThumbsDown />}
        />
      </BubbleReactions>
    </Bubble>
  </div>
);`;

const sizesCode = `import { Bubble, BubbleContent } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-8">
    <Bubble>
      <BubbleContent>This is a one line bubble.</BubbleContent>
    </Bubble>
    <Bubble>
      <BubbleContent>
        This bubble has multiple lines. It wraps to the next line and uses a
        different radius on the corners.
      </BubbleContent>
    </Bubble>
    <Bubble>
      <BubbleContent>
        <p>This bubble has multiple lines.</p>
        <p>It wraps and keeps the corners aligned with the sender side.</p>
      </BubbleContent>
    </Bubble>
  </div>
);`;

const collapsibleCode = `import { createSignal } from "solid-js";
import {
  Bubble,
  BubbleContent,
  Collapsible,
  CollapsibleTrigger,
} from "@neut/ui";
import { ChevronDown } from "lucide-solid";

const text =
  "The accessibility review found two focus states that were visually too subtle in dark mode. The menu needs the hover and focus tokens split so keyboard focus stays visible when the pointer is not involved.";

export default () => {
  const [open, setOpen] = createSignal(false);

  return (
    <Bubble variant="muted" align="end">
      <BubbleContent class="whitespace-pre-line">
        <div>{open() ? text : text.slice(0, 90) + "..."}</div>
        <Collapsible open={open()} onOpenChange={setOpen}>
          <CollapsibleTrigger variant="link" class="gap-1 p-0">
            {open() ? "Show less" : "Show more"}
            <ChevronDown
              class={open() ? "rotate-180 transition-transform" : "transition-transform"}
            />
          </CollapsibleTrigger>
        </Collapsible>
      </BubbleContent>
    </Bubble>
  );
};`;

const linksCode = `import { Bubble, BubbleContent, BubbleGroup, Button } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-4">
    <Bubble>
      <BubbleContent component="a" href="#">
        This bubble is a link.
      </BubbleContent>
    </Bubble>
    <Bubble variant="secondary">
      <BubbleContent component="button" type="button">
        This one is a button you can click.
      </BubbleContent>
    </Bubble>
    <BubbleGroup>
      <Bubble variant="outline" align="end">
        <BubbleContent
          class="border-dashed border-primary"
          component="button"
          type="button"
        >
          I need help with my account.
        </BubbleContent>
      </Bubble>
      <Bubble variant="outline" align="end">
        <BubbleContent
          class="border-dashed border-primary"
          component="button"
          type="button"
        >
          I forgot my password.
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  </div>
);`;

const popoverCode = `import {
  Bubble,
  BubbleContent,
  BubbleReactions,
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@neut/ui";
import { Info } from "lucide-solid";

export default () => (
  <div class="flex w-full max-w-sm flex-col gap-4">
    <Bubble align="end">
      <BubbleContent>Run the build script.</BubbleContent>
    </Bubble>
    <Bubble variant="destructive">
      <BubbleContent>Failed to run the command.</BubbleContent>
      <BubbleReactions>
        <Popover>
          <PopoverTrigger
            component={Button}
            variant="ghost"
            size="xs"
            aria-label="Show error details"
            icon={<Info />}
          />
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Command failed with exit code 1</PopoverTitle>
              <PopoverDescription>
                ENOENT: no such file or directory, open pnpm-lock.yaml
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </BubbleReactions>
    </Bubble>
  </div>
);`;

const tooltipCode = `import {
  Bubble,
  BubbleContent,
  BubbleReactions,
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@neut/ui";
import { Check } from "lucide-solid";

export default () => (
  <div class="flex w-full max-w-sm flex-col gap-4">
    <Bubble variant="secondary">
      <BubbleContent>Did you remove the stale route?</BubbleContent>
    </Bubble>
    <Bubble align="end">
      <BubbleContent>Yes, removed it from the registry.</BubbleContent>
      <BubbleReactions>
        <Tooltip>
          <TooltipTrigger
            component={Button}
            variant="ghost"
            size="xs"
            aria-label="Read receipt"
            icon={<Check />}
          />
          <TooltipContent>Read on Jan 5, 2026 at 4:32 PM</TooltipContent>
        </Tooltip>
      </BubbleReactions>
    </Bubble>
  </div>
);`;

const richCode = `import { Bubble, BubbleContent } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-sm flex-col gap-8">
    <Bubble align="end" variant="muted">
      <BubbleContent>
        Hello! Are you actually <strong>thinking</strong>?
      </BubbleContent>
    </Bubble>
    <Bubble variant="ghost">
      <BubbleContent class="space-y-2">
        <p>
          Ghost bubbles work for assistant text, <strong>rich content</strong>,
          and other content that should not be framed.
        </p>
        <p>
          You can also render <code class="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">code</code> in it.
        </p>
      </BubbleContent>
    </Bubble>
  </div>
);`;

export default () => {
  const [open, setOpen] = createSignal(false);

  return (
    <ComponentPage
      title="Bubble"
      description="A chat bubble with alignment, variants and reaction rows."
    >
      <Example
        name="Variants"
        description="Seven visual variants from primary to unframed ghost."
        code={variantsCode}
      >
        <div class="flex w-full max-w-md flex-col gap-4">
          <Bubble>
            <BubbleContent>
              Default bubbles use the primary color.
            </BubbleContent>
          </Bubble>
          <Bubble variant="secondary">
            <BubbleContent>
              Secondary bubbles use a neutral surface.
            </BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>Muted bubbles lower the emphasis.</BubbleContent>
          </Bubble>
          <Bubble variant="tinted" align="end">
            <BubbleContent>
              Tinted bubbles use a softer primary tint.
            </BubbleContent>
          </Bubble>
          <Bubble variant="outline">
            <BubbleContent>Outline bubbles add a border.</BubbleContent>
          </Bubble>
          <Bubble variant="destructive">
            <BubbleContent>Destructive bubbles flag errors.</BubbleContent>
          </Bubble>
          <Bubble variant="ghost">
            <BubbleContent>Ghost bubbles are unframed.</BubbleContent>
          </Bubble>
        </div>
      </Example>

      <Example
        name="Alignment"
        description="Align bubbles to the start or end of the conversation."
        code={alignmentCode}
      >
        <div class="flex w-full max-w-md flex-col gap-4">
          <Bubble variant="muted">
            <BubbleContent>This bubble is aligned to the start.</BubbleContent>
          </Bubble>
          <Bubble align="end">
            <BubbleContent>This bubble is aligned to the end.</BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>
              A multiline message aligned to the start with matching corner
              radii.
            </BubbleContent>
          </Bubble>
          <Bubble align="end">
            <BubbleContent>
              A multiline message aligned to the end with matching corner radii.
            </BubbleContent>
          </Bubble>
        </div>
      </Example>

      <Example
        name="Grouped"
        description="Group consecutive bubbles from the same sender."
        code={groupedCode}
      >
        <div class="flex w-full max-w-md flex-col gap-6">
          <BubbleGroup>
            <Bubble variant="secondary">
              <BubbleContent>I finished the audit pass.</BubbleContent>
            </Bubble>
            <Bubble variant="secondary">
              <BubbleContent>
                The registry output looks clean, but I found one stale route.
              </BubbleContent>
            </Bubble>
            <Bubble variant="secondary">
              <BubbleContent>Want me to remove it now?</BubbleContent>
            </Bubble>
          </BubbleGroup>
          <BubbleGroup>
            <Bubble variant="tinted" align="end">
              <BubbleContent>Yes, clean that up.</BubbleContent>
            </Bubble>
            <Bubble variant="tinted" align="end">
              <BubbleContent>Then rerun the registry build.</BubbleContent>
            </Bubble>
          </BubbleGroup>
        </div>
      </Example>

      <Example
        name="Reactions"
        description="Anchor emoji or buttons to the bubble edge."
        code={reactionsCode}
      >
        <div class="flex w-full max-w-md flex-col gap-8">
          <Bubble>
            <BubbleContent>This is a one line message.</BubbleContent>
            <BubbleReactions role="img" aria-label="Reaction: thumbs up">
              <span>👍</span>
            </BubbleReactions>
          </Bubble>
          <Bubble variant="secondary" align="end">
            <BubbleContent>
              A longer message that wraps across lines so the reaction offset is
              easier to inspect.
            </BubbleContent>
            <BubbleReactions
              align="start"
              role="img"
              aria-label="Reactions: thumbs up, surprised"
            >
              <span>👍</span>
              <span>😮</span>
            </BubbleReactions>
          </Bubble>
          <Bubble variant="tinted">
            <BubbleContent>
              We are going to the movies first then dinner.
            </BubbleContent>
            <BubbleReactions class="gap-1 bg-white dark:bg-neutral-950">
              <Button
                variant="secondary"
                size="xs"
                aria-label="Thumbs up"
                icon={<ThumbsUp />}
              />
              <Button
                variant="secondary"
                size="xs"
                aria-label="Thumbs down"
                icon={<ThumbsDown />}
              />
            </BubbleReactions>
          </Bubble>
        </div>
      </Example>
      <Example
        name="Sizes"
        description="Bubbles size to their content, up to 80% of the width."
        code={sizesCode}
      >
        <div class="flex w-full max-w-md flex-col gap-8">
          <Bubble>
            <BubbleContent>This is a one line bubble.</BubbleContent>
          </Bubble>
          <Bubble>
            <BubbleContent>
              This bubble has multiple lines. It wraps to the next line and uses
              a different radius on the corners.
            </BubbleContent>
          </Bubble>
          <Bubble>
            <BubbleContent>
              <p>This bubble has multiple lines.</p>
              <p>
                It wraps and keeps the corners aligned with the sender side.
              </p>
            </BubbleContent>
          </Bubble>
        </div>
      </Example>

      <Example
        name="Collapsible"
        description="Compose with Collapsible for a show more interaction."
        code={collapsibleCode}
      >
        <Bubble variant="muted" align="end">
          <BubbleContent class="whitespace-pre-line">
            <div>
              {open()
                ? "The accessibility review found two focus states that were visually too subtle in dark mode. The menu needs the hover and focus tokens split so keyboard focus stays visible when the pointer is not involved."
                : "The accessibility review found two focus states that were visually too subtle in dark mode..."}
            </div>
            <Collapsible open={open()} onOpenChange={setOpen}>
              <CollapsibleTrigger variant="link" class="gap-1 p-0">
                {open() ? "Show less" : "Show more"}
                <ChevronDown
                  class={
                    open()
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </CollapsibleTrigger>
            </Collapsible>
          </BubbleContent>
        </Bubble>
      </Example>

      <Example
        name="Button & links"
        description="Use a polymorphic BubbleContent for links and buttons."
        code={linksCode}
      >
        <div class="flex w-full max-w-md flex-col gap-4">
          <Bubble>
            <BubbleContent component="a" href="#">
              This bubble is a link.
            </BubbleContent>
          </Bubble>
          <Bubble variant="secondary">
            <BubbleContent component="button" type="button">
              This one is a button you can click.
            </BubbleContent>
          </Bubble>
          <BubbleGroup>
            <Bubble variant="outline" align="end">
              <BubbleContent
                class="border-dashed border-primary"
                component="button"
                type="button"
              >
                I need help with my account.
              </BubbleContent>
            </Bubble>
            <Bubble variant="outline" align="end">
              <BubbleContent
                class="border-dashed border-primary"
                component="button"
                type="button"
              >
                I forgot my password.
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </div>
      </Example>
      <Example
        name="Popover"
        description="Anchor a popover to a reaction for extra detail."
        code={popoverCode}
      >
        <div class="flex w-full max-w-sm flex-col gap-4">
          <Bubble align="end">
            <BubbleContent>Run the build script.</BubbleContent>
          </Bubble>
          <Bubble variant="destructive">
            <BubbleContent>Failed to run the command.</BubbleContent>
            <BubbleReactions>
              <Popover>
                <PopoverTrigger
                  component={Button}
                  variant="ghost"
                  size="xs"
                  aria-label="Show error details"
                  icon={<Info />}
                />
                <PopoverContent>
                  <PopoverHeader>
                    <PopoverTitle>Command failed with exit code 1</PopoverTitle>
                    <PopoverDescription>
                      ENOENT: no such file or directory, open pnpm-lock.yaml
                    </PopoverDescription>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            </BubbleReactions>
          </Bubble>
        </div>
      </Example>

      <Example
        name="Tooltip"
        description="Show a read receipt in a tooltip."
        code={tooltipCode}
      >
        <div class="flex w-full max-w-sm flex-col gap-4">
          <Bubble variant="secondary">
            <BubbleContent>Did you remove the stale route?</BubbleContent>
          </Bubble>
          <Bubble align="end">
            <BubbleContent>Yes, removed it from the registry.</BubbleContent>
            <BubbleReactions>
              <Tooltip>
                <TooltipTrigger
                  component={Button}
                  variant="ghost"
                  size="xs"
                  aria-label="Read receipt"
                  icon={<Check />}
                />
                <TooltipContent>Read on Jan 5, 2026 at 4:32 PM</TooltipContent>
              </Tooltip>
            </BubbleReactions>
          </Bubble>
        </div>
      </Example>
      <Example
        name="Rich content"
        description="Ghost bubbles can carry paragraphs, emphasis and inline code."
        code={richCode}
      >
        <div class="flex w-full max-w-sm flex-col gap-8">
          <Bubble align="end" variant="muted">
            <BubbleContent>
              Hello! Are you actually <strong>thinking</strong>?
            </BubbleContent>
          </Bubble>
          <Bubble variant="ghost">
            <BubbleContent class="space-y-2">
              <p>
                Ghost bubbles work for assistant text,{" "}
                <strong>rich content</strong>, and other content that should not
                be framed.
              </p>
              <p>
                You can also render{" "}
                <code class="rounded bg-neutral-100 px-1 py-0.5 text-xs dark:bg-neutral-800">
                  code
                </code>{" "}
                in it.
              </p>
            </BubbleContent>
          </Bubble>
        </div>
      </Example>
    </ComponentPage>
  );
};
