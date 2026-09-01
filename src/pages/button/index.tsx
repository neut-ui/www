import { ComponentPage, Example } from "../../components/component-page";
import { Button, Spinner } from "@neut/ui";
import { ArrowUp, GitBranch, GitFork } from "lucide-solid";

const variantsCode = `import { Button } from "@neut/ui";

export default () => (
  <div class="flex flex-wrap items-center gap-3">
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
);`;

const sizesCode = `import { Button } from "@neut/ui";

export default () => (
  <div class="flex flex-wrap items-center gap-3">
    <Button size="xs">Extra small</Button>
    <Button size="sm">Small</Button>
    <Button>Default</Button>
    <Button size="lg">Large</Button>
  </div>
);`;

const iconCode = `import { Button } from "@neut/ui";
import { ArrowUp } from "lucide-solid";

export default () => (
  <div class="flex flex-wrap items-center gap-3">
    <Button icon={<ArrowUp />}>Upload</Button>
    <Button icon={<ArrowUp />} iconPosition="right">
      Upload
    </Button>
    <Button variant="outline" icon={<ArrowUp />} aria-label="Upload" />
  </div>
);`;

const branchCode = `import { Button } from "@neut/ui";
import { GitBranch, GitFork } from "lucide-solid";

export default () => (
  <div class="flex items-center gap-3">
    <Button variant="outline" icon={<GitBranch />}>
      New Branch
    </Button>
    <Button variant="outline" icon={<GitFork />} iconPosition="right">
      Fork
    </Button>
  </div>
);`;

const loadingCode = `import { Button, Spinner } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-3">
    <Button disabled icon={<Spinner />}>
      Generating
    </Button>
    <Button variant="secondary" disabled icon={<Spinner />} iconPosition="right">
      Downloading
    </Button>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Button"
      description="Displays a button or a component that looks like a button."
    >
      <Example
        name="Variants"
        description="The Button component supports six visual variants."
        code={variantsCode}
      >
        <div class="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </Example>

      <Example
        name="Sizes"
        description="Four sizes are available: extra small, small, default and large."
        code={sizesCode}
      >
        <div class="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </Example>

      <Example
        name="With icon"
        description="Use the icon prop to place an icon on either side of the label."
        code={iconCode}
      >
        <div class="flex flex-wrap items-center gap-3">
          <Button icon={<ArrowUp />}>Upload</Button>
          <Button icon={<ArrowUp />} iconPosition="right">
            Upload
          </Button>
          <Button variant="outline" icon={<ArrowUp />} aria-label="Upload" />
        </div>
      </Example>

      <Example
        name="GitHub-style actions"
        description="A common pattern: an icon paired with a short action label."
        code={branchCode}
      >
        <div class="flex items-center gap-3">
          <Button variant="outline" icon={<GitBranch />}>
            New Branch
          </Button>
          <Button variant="outline" icon={<GitFork />} iconPosition="right">
            Fork
          </Button>
        </div>
      </Example>

      <Example
        name="Loading"
        description="Disable a button and show a spinner to indicate a pending action."
        code={loadingCode}
      >
        <div class="flex items-center gap-3">
          <Button disabled icon={<Spinner />}>
            Generating
          </Button>
          <Button
            variant="secondary"
            disabled
            icon={<Spinner />}
            iconPosition="right"
          >
            Downloading
          </Button>
        </div>
      </Example>
    </ComponentPage>
  );
};
