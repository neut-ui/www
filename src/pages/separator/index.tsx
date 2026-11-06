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

const demoCode = `import { Separator } from "@neut/ui";

export default () => (
  <div class="flex max-w-sm flex-col gap-4 text-sm">
    <div class="flex flex-col gap-1.5">
      <div class="leading-none font-medium">shadcn/ui</div>
      <div class="text-muted-foreground">
        The Foundation for your Design System
      </div>
    </div>
    <Separator />
    <div>
      A set of beautifully designed components that you can customize, extend,
      and build on.
    </div>
  </div>
);`;

const menuCode = `import { Separator } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-2 text-sm md:gap-4">
    <div class="flex flex-col gap-1">
      <span class="font-medium">Settings</span>
      <span class="text-xs text-muted-foreground">Manage preferences</span>
    </div>
    <Separator orientation="vertical" />
    <div class="flex flex-col gap-1">
      <span class="font-medium">Account</span>
      <span class="text-xs text-muted-foreground">Profile & security</span>
    </div>
    <Separator orientation="vertical" class="hidden md:block" />
    <div class="hidden flex-col gap-1 md:flex">
      <span class="font-medium">Help</span>
      <span class="text-xs text-muted-foreground">Support & docs</span>
    </div>
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

      <Example
        name="Demo"
        description="Separate a heading and description from supporting copy."
        code={demoCode}
      >
        <div class="flex max-w-sm flex-col gap-4 text-sm">
          <div class="flex flex-col gap-1.5">
            <div class="leading-none font-medium">shadcn/ui</div>
            <div class="text-muted-foreground">
              The Foundation for your Design System
            </div>
          </div>
          <Separator />
          <div>
            A set of beautifully designed components that you can customize,
            extend, and build on.
          </div>
        </div>
      </Example>

      <Example
        name="Menu"
        description="Vertical separators between menu items with descriptions."
        code={menuCode}
      >
        <div class="flex items-center gap-2 text-sm md:gap-4">
          <div class="flex flex-col gap-1">
            <span class="font-medium">Settings</span>
            <span class="text-xs text-muted-foreground">
              Manage preferences
            </span>
          </div>
          <Separator orientation="vertical" />
          <div class="flex flex-col gap-1">
            <span class="font-medium">Account</span>
            <span class="text-xs text-muted-foreground">
              Profile & security
            </span>
          </div>
          <Separator orientation="vertical" class="hidden md:block" />
          <div class="hidden flex-col gap-1 md:flex">
            <span class="font-medium">Help</span>
            <span class="text-xs text-muted-foreground">Support & docs</span>
          </div>
        </div>
      </Example>
    </ComponentPage>
  );
};
