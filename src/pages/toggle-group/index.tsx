import { ComponentPage, Example } from "../../components/component-page";
import {
  Field,
  FieldDescription,
  FieldLabel,
  ToggleGroup,
  ToggleGroupItem,
} from "@neut/ui";
import { Bold, Italic, Underline } from "lucide-solid";
import { createSignal } from "solid-js";

const usageCode = `import { ToggleGroup, ToggleGroupItem } from "@neut/ui";
import { Bold, Italic, Underline } from "lucide-solid";

export default () => (
  <ToggleGroup variant="outline" multiple>
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
);`;

const outlineCode = `import { ToggleGroup, ToggleGroupItem } from "@neut/ui";

export default () => (
  <ToggleGroup variant="outline" defaultValue="all">
    <ToggleGroupItem value="all" aria-label="Toggle all">
      All
    </ToggleGroupItem>
    <ToggleGroupItem value="missed" aria-label="Toggle missed">
      Missed
    </ToggleGroupItem>
  </ToggleGroup>
);`;

const sizesCode = `import { ToggleGroup, ToggleGroupItem } from "@neut/ui";

export default () => (
  <div class="flex flex-col gap-4">
    <ToggleGroup size="sm" defaultValue="top" variant="outline">
      <ToggleGroupItem value="top">Top</ToggleGroupItem>
      <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup defaultValue="top" variant="outline">
      <ToggleGroupItem value="top">Top</ToggleGroupItem>
      <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup size="lg" defaultValue="top" variant="outline">
      <ToggleGroupItem value="top">Top</ToggleGroupItem>
      <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
    </ToggleGroup>
  </div>
);`;

const spacingCode = `import { ToggleGroup, ToggleGroupItem } from "@neut/ui";

export default () => (
  <div class="flex flex-col items-start gap-4">
    <ToggleGroup spacing={0} defaultValue="top">
      <ToggleGroupItem value="top">Top</ToggleGroupItem>
      <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup variant="outline" spacing={0} defaultValue="top">
      <ToggleGroupItem value="top">Top</ToggleGroupItem>
      <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup
      variant="outline"
      spacing={0}
      orientation="vertical"
      defaultValue="top"
    >
      <ToggleGroupItem value="top">Top</ToggleGroupItem>
      <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
    </ToggleGroup>
  </div>
);`;

const verticalCode = `import { ToggleGroup, ToggleGroupItem } from "@neut/ui";
import { Bold, Italic, Underline } from "lucide-solid";

export default () => (
  <ToggleGroup
    multiple
    orientation="vertical"
    spacing={1}
    defaultValue={["bold", "italic"]}
  >
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
);`;

const disabledCode = `import { ToggleGroup, ToggleGroupItem } from "@neut/ui";
import { Bold, Italic, Underline } from "lucide-solid";

export default () => (
  <ToggleGroup disabled>
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Bold />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <Italic />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <Underline />
    </ToggleGroupItem>
  </ToggleGroup>
);`;

const fontWeightCode = `import { createSignal } from "solid-js";
import {
  Field,
  FieldDescription,
  FieldLabel,
  ToggleGroup,
  ToggleGroupItem,
} from "@neut/ui";

export default () => {
  const [fontWeight, setFontWeight] = createSignal("normal");

  return (
    <Field class="w-fit">
      <FieldLabel>Font Weight</FieldLabel>
      <ToggleGroup
        value={fontWeight()}
        onValueChange={(value) => {
          if (value) setFontWeight(value);
        }}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light"
          class="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span class="text-2xl leading-none font-light">Aa</span>
          <span class="text-xs text-muted-foreground">Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="normal"
          aria-label="Normal"
          class="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span class="text-2xl leading-none font-normal">Aa</span>
          <span class="text-xs text-muted-foreground">Normal</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="medium"
          aria-label="Medium"
          class="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span class="text-2xl leading-none font-medium">Aa</span>
          <span class="text-xs text-muted-foreground">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bold"
          aria-label="Bold"
          class="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span class="text-2xl leading-none font-bold">Aa</span>
          <span class="text-xs text-muted-foreground">Bold</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <FieldDescription>
        Use <code class="rounded-md bg-muted px-1 py-0.5 font-mono">font-{fontWeight()}</code> to set the font weight.
      </FieldDescription>
    </Field>
  );
};`;

export default () => {
  return (
    <ComponentPage
      title="ToggleGroup"
      description="A set of two-state buttons that can be toggled on or off."
    >
      <Example
        name="Usage"
        description="Use multiple selection for formatting controls."
        code={usageCode}
      >
        <ToggleGroup variant="outline" multiple>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>

      <Example
        name="Font weight selector"
        description="A controlled toggle group used as a custom font weight picker."
        code={fontWeightCode}
      >
        <FontWeightSelector />
      </Example>

      <Example
        name="Outline"
        description="Single selection with an outline treatment."
        code={outlineCode}
      >
        <ToggleGroup variant="outline" defaultValue="all">
          <ToggleGroupItem value="all" aria-label="Toggle all">
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="missed" aria-label="Toggle missed">
            Missed
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>

      <Example
        name="Sizes"
        description="Small, default and large sizes."
        code={sizesCode}
      >
        <div class="flex flex-col gap-4">
          <ToggleGroup size="sm" defaultValue="top" variant="outline">
            <ToggleGroupItem value="top">Top</ToggleGroupItem>
            <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup defaultValue="top" variant="outline">
            <ToggleGroupItem value="top">Top</ToggleGroupItem>
            <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup size="lg" defaultValue="top" variant="outline">
            <ToggleGroupItem value="top">Top</ToggleGroupItem>
            <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </Example>

      <Example
        name="Spacing"
        description="Set spacing to 0 to join items into a single control."
        code={spacingCode}
      >
        <div class="flex flex-col items-start gap-4">
          <ToggleGroup spacing={0} defaultValue="top">
            <ToggleGroupItem value="top">Top</ToggleGroupItem>
            <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant="outline" spacing={0} defaultValue="top">
            <ToggleGroupItem value="top">Top</ToggleGroupItem>
            <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup
            variant="outline"
            spacing={0}
            orientation="vertical"
            defaultValue="top"
          >
            <ToggleGroupItem value="top">Top</ToggleGroupItem>
            <ToggleGroupItem value="bottom">Bottom</ToggleGroupItem>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </Example>

      <Example
        name="Vertical"
        description="Stack items vertically and navigate with arrow keys."
        code={verticalCode}
      >
        <ToggleGroup
          multiple
          orientation="vertical"
          spacing={1}
          defaultValue={["bold", "italic"]}
        >
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>

      <Example
        name="Disabled"
        description="Disable the entire group."
        code={disabledCode}
      >
        <ToggleGroup disabled>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>
    </ComponentPage>
  );
};

function FontWeightSelector() {
  const [fontWeight, setFontWeight] = createSignal("normal");

  return (
    <Field class="w-fit">
      <FieldLabel>Font Weight</FieldLabel>
      <ToggleGroup
        value={fontWeight()}
        onValueChange={(value) => {
          if (value) setFontWeight(value);
        }}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light"
          class="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span class="text-2xl leading-none font-light">Aa</span>
          <span class="text-xs text-muted-foreground">Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="normal"
          aria-label="Normal"
          class="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span class="text-2xl leading-none font-normal">Aa</span>
          <span class="text-xs text-muted-foreground">Normal</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="medium"
          aria-label="Medium"
          class="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span class="text-2xl leading-none font-medium">Aa</span>
          <span class="text-xs text-muted-foreground">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bold"
          aria-label="Bold"
          class="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span class="text-2xl leading-none font-bold">Aa</span>
          <span class="text-xs text-muted-foreground">Bold</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <FieldDescription>
        Use{" "}
        <code class="rounded-md bg-muted px-1 py-0.5 font-mono">
          font-{fontWeight()}
        </code>{" "}
        to set the font weight.
      </FieldDescription>
    </Field>
  );
}
