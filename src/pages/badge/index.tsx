import { ComponentPage, Example } from "../../components/component-page";
import { Badge } from "@neut/ui";

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
    </ComponentPage>
  );
};
