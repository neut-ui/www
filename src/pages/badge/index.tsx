import { ComponentPage, Example } from "../../components/component-page";
import { Badge, Spinner } from "@neut/ui";
import { ArrowUpRight, Check } from "lucide-solid";

const variantsCode = `import { Badge } from "@neut/ui";

export default () => (
  <div class="flex flex-wrap items-center gap-2">
    <Badge>Primary</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="ghost">Ghost</Badge>
    <Badge variant="link">Link</Badge>
  </div>
);`;

const inlineCode = `import { Badge } from "@neut/ui";

export default () => (
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <span>New messages</span>
      <Badge>4</Badge>
    </div>
    <div class="flex items-center gap-2">
      <span>Unread notifications</span>
      <Badge variant="destructive">99+</Badge>
    </div>
  </div>
);`;

const iconCode = `import { Badge } from "@neut/ui";
import { Check } from "lucide-solid";

export default () => (
  <Badge variant="secondary" class="gap-1">
    <Check class="size-3" />
    Verified
  </Badge>
);`;

const linkCode = `import { Badge } from "@neut/ui";
import { ArrowUpRight } from "lucide-solid";

export default () => (
  <a href="/changelog" class="inline-flex">
    <Badge variant="link" class="gap-1">
      Read the changelog
      <ArrowUpRight class="size-3" />
    </Badge>
  </a>
);`;

const colorsCode = `import { Badge } from "@neut/ui";

export default () => (
  <div class="flex flex-wrap gap-2">
    <Badge class="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
      Blue
    </Badge>
    <Badge class="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
      Green
    </Badge>
    <Badge class="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
      Sky
    </Badge>
    <Badge class="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
      Purple
    </Badge>
    <Badge class="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
      Red
    </Badge>
  </div>
);`;

const spinnerCode = `import { Badge, Spinner } from "@neut/ui";

export default () => (
  <div class="flex flex-wrap gap-2">
    <Badge variant="destructive">
      <Spinner data-icon="inline-start" />
      Deleting
    </Badge>
    <Badge variant="secondary">
      Generating
      <Spinner data-icon="inline-end" />
    </Badge>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Badge"
      description="Displays a short status label or count, typically inline with other content."
    >
      <Example
        name="Variants"
        description="Six visual variants for different semantic contexts."
        code={variantsCode}
      >
        <div class="flex flex-wrap items-center gap-2">
          <Badge>Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </div>
      </Example>

      <Example
        name="Inline with text"
        description="Badges work well when placed next to a label or sentence."
        code={inlineCode}
      >
        <div class="flex flex-col gap-2 text-sm">
          <div class="flex items-center gap-2">
            <span>New messages</span>
            <Badge>4</Badge>
          </div>
          <div class="flex items-center gap-2">
            <span>Unread notifications</span>
            <Badge variant="destructive">99+</Badge>
          </div>
        </div>
      </Example>
      <Example
        name="With icon"
        description="Pair a badge with a small icon."
        code={iconCode}
      >
        <Badge variant="secondary" class="gap-1">
          <Check class="size-3" />
          Verified
        </Badge>
      </Example>

      <Example
        name="As link"
        description="Wrap a badge in an anchor for a navigable status."
        code={linkCode}
      >
        <a href="/changelog" class="inline-flex">
          <Badge variant="link" class="gap-1">
            Read the changelog
            <ArrowUpRight class="size-3" />
          </Badge>
        </a>
      </Example>

      <Example
        name="Custom colors"
        description="Override background and text colors with Tailwind utilities."
        code={colorsCode}
      >
        <div class="flex flex-wrap gap-2">
          <Badge class="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            Blue
          </Badge>
          <Badge class="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
            Green
          </Badge>
          <Badge class="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
            Sky
          </Badge>
          <Badge class="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
            Purple
          </Badge>
          <Badge class="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
            Red
          </Badge>
        </div>
      </Example>

      <Example
        name="With spinner"
        description="Show progress inside a badge with the Spinner component."
        code={spinnerCode}
      >
        <div class="flex flex-wrap gap-2">
          <Badge variant="destructive">
            <Spinner data-icon="inline-start" />
            Deleting
          </Badge>
          <Badge variant="secondary">
            Generating
            <Spinner data-icon="inline-end" />
          </Badge>
        </div>
      </Example>
    </ComponentPage>
  );
};
