import { ComponentPage, Example } from "../../components/component-page";
import {
  Badge,
  Button,
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  Spinner,
} from "@neut/ui";

const basicCode = `import { Spinner } from "@neut/ui";

export default () => <Spinner class="size-6" />;`;

const textCode = `import { Spinner } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
    <Spinner class="size-4" />
    Loading...
  </div>
);`;

const sizesCode = `import { Spinner } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-4">
    <Spinner class="size-3" />
    <Spinner class="size-5" />
    <Spinner class="size-8" />
  </div>
);`;

const buttonCode = `import { Button, Spinner } from "@neut/ui";

export default () => (
  <Button disabled icon={<Spinner />}>
    Generating
  </Button>
);`;

const badgeCode = `import { Badge, Spinner } from "@neut/ui";

export default () => (
  <Badge variant="secondary" class="gap-1">
    <Spinner class="size-3" />
    Syncing
  </Badge>
);`;

const colorCode = `import { Spinner } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-4">
    <Spinner class="size-5 text-blue-600" />
    <Spinner class="size-5 text-emerald-600" />
    <Spinner class="size-5 text-amber-600" />
    <Spinner class="size-5 text-rose-600" />
  </div>
);`;

const emptyCode = `import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Spinner,
} from "@neut/ui";

export default () => (
  <Empty class="w-full max-w-sm">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Spinner />
      </EmptyMedia>
      <EmptyTitle>Loading projects</EmptyTitle>
      <EmptyDescription>Please wait while we fetch your projects.</EmptyDescription>
    </EmptyHeader>
  </Empty>
);`;

const inputGroupCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Spinner,
} from "@neut/ui";

export default () => (
  <InputGroup class="max-w-sm">
    <InputGroupInput placeholder="Searching..." disabled />
    <InputGroupAddon align="inline-end">
      <Spinner />
    </InputGroupAddon>
  </InputGroup>
);`;

const itemCode = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  Spinner,
} from "@neut/ui";

export default () => (
  <Item variant="outline" class="w-full max-w-sm">
    <ItemMedia variant="icon">
      <Spinner />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Syncing messages</ItemTitle>
      <ItemDescription>This may take a moment.</ItemDescription>
    </ItemContent>
  </Item>
);`;

const customCode = `export default () => (
  <svg
    class="size-6 animate-spin text-neutral-900 dark:text-neutral-100"
    viewBox="0 0 24 24"
    fill="none"
    role="status"
    aria-label="Loading"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
      class="opacity-25"
    />
    <path
      d="M4 12a8 8 0 018-8"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      class="opacity-75"
    />
  </svg>
);`;

export default () => {
  return (
    <ComponentPage
      title="Spinner"
      description="An animated loading indicator used to communicate progress."
    >
      <Example
        name="Basic"
        description="A rotating loading indicator."
        code={basicCode}
      >
        <Spinner class="size-6" />
      </Example>

      <Example
        name="With text"
        description="Pair a spinner with a loading message."
        code={textCode}
      >
        <div class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <Spinner class="size-4" />
          Loading...
        </div>
      </Example>

      <Example
        name="Sizes"
        description="Control the size with utility classes."
        code={sizesCode}
      >
        <div class="flex items-center gap-4">
          <Spinner class="size-3" />
          <Spinner class="size-5" />
          <Spinner class="size-8" />
        </div>
      </Example>

      <Example
        name="In a button"
        description="Show a spinner while an action is pending."
        code={buttonCode}
      >
        <Button disabled icon={<Spinner />}>
          Generating
        </Button>
      </Example>

      <Example
        name="In a badge"
        description="Use a small spinner to indicate background work."
        code={badgeCode}
      >
        <Badge variant="secondary" class="gap-1">
          <Spinner class="size-3" />
          Syncing
        </Badge>
      </Example>
      <Example
        name="Color"
        description="Use text color utilities to tint the spinner."
        code={colorCode}
      >
        <div class="flex items-center gap-4">
          <Spinner class="size-5 text-blue-600" />
          <Spinner class="size-5 text-emerald-600" />
          <Spinner class="size-5 text-amber-600" />
          <Spinner class="size-5 text-rose-600" />
        </div>
      </Example>

      <Example
        name="In empty state"
        description="Use a spinner inside an empty state while loading."
        code={emptyCode}
      >
        <Empty class="w-full max-w-sm">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Spinner />
            </EmptyMedia>
            <EmptyTitle>Loading projects</EmptyTitle>
            <EmptyDescription>
              Please wait while we fetch your projects.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </Example>

      <Example
        name="In input group"
        description="Show a spinner as a trailing addon while loading."
        code={inputGroupCode}
      >
        <InputGroup class="max-w-sm">
          <InputGroupInput placeholder="Searching..." disabled />
          <InputGroupAddon align="inline-end">
            <Spinner />
          </InputGroupAddon>
        </InputGroup>
      </Example>

      <Example
        name="In item"
        description="Use a spinner as item media for background work."
        code={itemCode}
      >
        <Item variant="outline" class="w-full max-w-sm">
          <ItemMedia variant="icon">
            <Spinner />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Syncing messages</ItemTitle>
            <ItemDescription>This may take a moment.</ItemDescription>
          </ItemContent>
        </Item>
      </Example>
      <Example
        name="Custom"
        description="Build a custom spinner with an SVG and animate-spin."
        code={customCode}
      >
        <svg
          class="size-6 animate-spin text-neutral-900 dark:text-neutral-100"
          viewBox="0 0 24 24"
          fill="none"
          role="status"
          aria-label="Loading"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
            class="opacity-25"
          />
          <path
            d="M4 12a8 8 0 018-8"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            class="opacity-75"
          />
        </svg>
      </Example>
    </ComponentPage>
  );
};
