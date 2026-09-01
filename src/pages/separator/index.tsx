import { ComponentPage, Example } from "../../components/component-page";
import { Separator } from "@neut/ui";

const horizontalCode = `import { Separator } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-sm flex-col gap-2 text-sm">
    <dl class="flex items-center justify-between">
      <dt>Item 1</dt>
      <dd class="text-neutral-500 dark:text-neutral-400">Value 1</dd>
    </dl>
    <Separator />
    <dl class="flex items-center justify-between">
      <dt>Item 2</dt>
      <dd class="text-neutral-500 dark:text-neutral-400">Value 2</dd>
    </dl>
    <Separator />
    <dl class="flex items-center justify-between">
      <dt>Item 3</dt>
      <dd class="text-neutral-500 dark:text-neutral-400">Value 3</dd>
    </dl>
  </div>
);`;

const verticalCode = `import { Separator } from "@neut/ui";

export default () => (
  <div class="flex h-5 items-center gap-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Separator"
      description="Visually or semantically separates content."
    >
      <Example
        name="Horizontal"
        description="Separate rows in a definition list."
        code={horizontalCode}
      >
        <div class="flex w-full max-w-sm flex-col gap-2 text-sm">
          <dl class="flex items-center justify-between">
            <dt>Item 1</dt>
            <dd class="text-neutral-500 dark:text-neutral-400">Value 1</dd>
          </dl>
          <Separator />
          <dl class="flex items-center justify-between">
            <dt>Item 2</dt>
            <dd class="text-neutral-500 dark:text-neutral-400">Value 2</dd>
          </dl>
          <Separator />
          <dl class="flex items-center justify-between">
            <dt>Item 3</dt>
            <dd class="text-neutral-500 dark:text-neutral-400">Value 3</dd>
          </dl>
        </div>
      </Example>

      <Example
        name="Vertical"
        description="Separate items in an inline navigation."
        code={verticalCode}
      >
        <div class="flex h-5 items-center gap-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </Example>
    </ComponentPage>
  );
};
