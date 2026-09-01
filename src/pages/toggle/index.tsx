import { ComponentPage, Example } from "../../components/component-page";
import { Toggle } from "@neut/ui";
import { Bookmark, Bold, Italic } from "lucide-solid";
import { createSignal } from "solid-js";

const basicCode = `import { Toggle } from "@neut/ui";
import { Italic } from "lucide-solid";

export default () => (
  <Toggle aria-label="Toggle italic">
    <Italic />
    Italic
  </Toggle>
);`;

const outlineCode = `import { Toggle } from "@neut/ui";
import { Bold, Italic } from "lucide-solid";

export default () => (
  <div class="flex flex-wrap items-center gap-2">
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
    <Toggle variant="outline" aria-label="Toggle bold">
      <Bold />
      Bold
    </Toggle>
  </div>
);`;

const bookmarkCode = `import { Toggle } from "@neut/ui";
import { Bookmark } from "lucide-solid";

export default () => (
  <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
    <Bookmark class="group-aria-pressed/toggle:fill-foreground" />
    Bookmark
  </Toggle>
);`;

const sizesCode = `import { Toggle } from "@neut/ui";

export default () => (
  <div class="flex flex-wrap items-center gap-2">
    <Toggle variant="outline" aria-label="Toggle small" size="sm">
      Small
    </Toggle>
    <Toggle variant="outline" aria-label="Toggle default" size="default">
      Default
    </Toggle>
    <Toggle variant="outline" aria-label="Toggle large" size="lg">
      Large
    </Toggle>
  </div>
);`;

const controlledCode = `import { Toggle } from "@neut/ui";
import { Bold } from "lucide-solid";
import { createSignal } from "solid-js";

export default () => {
  const [pressed, setPressed] = createSignal(false);

  return (
    <div class="flex flex-col items-center gap-3">
      <Toggle
        pressed={pressed()}
        onPressedChange={setPressed}
        variant="outline"
        aria-label="Toggle bold"
      >
        <Bold />
        Bold
      </Toggle>
      <p class="text-sm text-muted-foreground">
        State: {pressed() ? "pressed" : "not pressed"}
      </p>
    </div>
  );
};`;

const disabledCode = `import { Toggle } from "@neut/ui";

export default () => (
  <div class="flex flex-wrap items-center gap-2">
    <Toggle aria-label="Toggle disabled" disabled>
      Disabled
    </Toggle>
    <Toggle variant="outline" aria-label="Toggle disabled outline" disabled>
      Disabled
    </Toggle>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Toggle"
      description="A two-state button that can be either on or off."
    >
      <Example
        name="Basic"
        description="A simple toggle with an icon and label."
        code={basicCode}
      >
        <Toggle aria-label="Toggle italic">
          <Italic />
          Italic
        </Toggle>
      </Example>

      <Example
        name="Outline"
        description="Use the outline variant for a bordered toggle."
        code={outlineCode}
      >
        <div class="flex flex-wrap items-center gap-2">
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic />
            Italic
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle bold">
            <Bold />
            Bold
          </Toggle>
        </div>
      </Example>

      <Example
        name="With fill"
        description="Highlight the icon when pressed using a group aria-pressed selector."
        code={bookmarkCode}
      >
        <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
          <Bookmark class="group-aria-pressed/toggle:fill-foreground" />
          Bookmark
        </Toggle>
      </Example>

      <Example
        name="Sizes"
        description="Three sizes are available: small, default and large."
        code={sizesCode}
      >
        <div class="flex flex-wrap items-center gap-2">
          <Toggle variant="outline" aria-label="Toggle small" size="sm">
            Small
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle default" size="default">
            Default
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle large" size="lg">
            Large
          </Toggle>
        </div>
      </Example>

      <Example
        name="Controlled"
        description="Control the pressed state and read it back."
        code={controlledCode}
      >
        <ControlledExample />
      </Example>

      <Example
        name="Disabled"
        description="Disable the toggle in both variants."
        code={disabledCode}
      >
        <div class="flex flex-wrap items-center gap-2">
          <Toggle aria-label="Toggle disabled" disabled>
            Disabled
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle disabled outline" disabled>
            Disabled
          </Toggle>
        </div>
      </Example>
    </ComponentPage>
  );
};

function ControlledExample() {
  const [pressed, setPressed] = createSignal(false);

  return (
    <div class="flex flex-col items-center gap-3">
      <Toggle
        pressed={pressed()}
        onPressedChange={setPressed}
        variant="outline"
        aria-label="Toggle bold"
      >
        <Bold />
        Bold
      </Toggle>
      <p class="text-sm text-muted-foreground">
        State: {pressed() ? "pressed" : "not pressed"}
      </p>
    </div>
  );
}
