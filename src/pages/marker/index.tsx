import { ComponentPage, Example } from "../../components/component-page";
import { Marker, MarkerContent, MarkerIcon, Spinner } from "@neut/ui";
import { Check, FileText, GitBranch, RotateCcw, Search } from "lucide-solid";

const variantsCode = `import { Marker, MarkerContent } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-8">
    <Marker>
      <MarkerContent>A default marker for inline notes.</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>A separator marker</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerContent>A border marker for row boundaries.</MarkerContent>
    </Marker>
  </div>
);`;

const statusCode = `import { Marker, MarkerContent, MarkerIcon, Spinner } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-8">
    <Marker role="status">
      <MarkerIcon>
        <Spinner />
      </MarkerIcon>
      <MarkerContent>Compacting conversation</MarkerContent>
    </Marker>
    <Marker role="status">
      <MarkerIcon>
        <Spinner />
      </MarkerIcon>
      <MarkerContent>Running tests</MarkerContent>
    </Marker>
  </div>
);`;

const separatorCode = `import { Marker, MarkerContent } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-8">
    <Marker variant="separator">
      <MarkerContent>Today</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>Worked for 42s</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>Conversation compacted</MarkerContent>
    </Marker>
  </div>
);`;

const iconCode = `import { Marker, MarkerContent, MarkerIcon } from "@neut/ui";
import { GitBranch, Search } from "lucide-solid";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-8">
    <Marker>
      <MarkerIcon>
        <GitBranch />
      </MarkerIcon>
      <MarkerContent>Switched to a new branch</MarkerContent>
    </Marker>
    <Marker>
      <MarkerIcon>
        <Search />
      </MarkerIcon>
      <MarkerContent>Explored 4 files</MarkerContent>
    </Marker>
  </div>
);`;

const shimmerCode = `import { Marker, MarkerContent } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-8">
    <Marker>
      <MarkerContent class="shimmer">Thinking...</MarkerContent>
    </Marker>
    <Marker>
      <MarkerContent class="shimmer">Reading 4 files</MarkerContent>
    </Marker>
  </div>
);`;

const borderCode = `import { Marker, MarkerContent } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-8">
    <Marker variant="border">
      <MarkerContent>Switched to release-candidate</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerContent>Reviewed 8 related files</MarkerContent>
    </Marker>
  </div>
);`;

const linksCode = `import { Marker, MarkerContent, MarkerIcon } from "@neut/ui";
import { RotateCcw } from "lucide-solid";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-8">
    <Marker component="a" href="#">
      <MarkerContent>View the pull request</MarkerContent>
    </Marker>
    <Marker component="button" type="button">
      <MarkerIcon>
        <RotateCcw />
      </MarkerIcon>
      <MarkerContent>Revert this change</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerContent>Opened implementation notes</MarkerContent>
    </Marker>
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Marker"
      description="System notes, time separators and transient status rows in a conversation."
    >
      <Example
        name="Variants"
        description="Inline, separator and bordered row variants."
        code={variantsCode}
      >
        <div class="flex w-full max-w-md flex-col gap-8">
          <Marker>
            <MarkerContent>A default marker for inline notes.</MarkerContent>
          </Marker>
          <Marker variant="separator">
            <MarkerContent>A separator marker</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerContent>A border marker for row boundaries.</MarkerContent>
          </Marker>
        </div>
      </Example>

      <Example
        name="Status"
        description="Use role=status with a Spinner for in-progress markers."
        code={statusCode}
      >
        <div class="flex w-full max-w-md flex-col gap-8">
          <Marker role="status">
            <MarkerIcon>
              <Spinner />
            </MarkerIcon>
            <MarkerContent>Compacting conversation</MarkerContent>
          </Marker>
          <Marker role="status">
            <MarkerIcon>
              <Spinner />
            </MarkerIcon>
            <MarkerContent>Running tests</MarkerContent>
          </Marker>
        </div>
      </Example>

      <Example
        name="Separator"
        description="Use separator markers for dates and session boundaries."
        code={separatorCode}
      >
        <div class="flex w-full max-w-md flex-col gap-8">
          <Marker variant="separator">
            <MarkerContent>Today</MarkerContent>
          </Marker>
          <Marker variant="separator">
            <MarkerContent>Worked for 42s</MarkerContent>
          </Marker>
          <Marker variant="separator">
            <MarkerContent>Conversation compacted</MarkerContent>
          </Marker>
        </div>
      </Example>

      <Example
        name="With icon"
        description="Pair an icon with a short system message."
        code={iconCode}
      >
        <div class="flex w-full max-w-md flex-col gap-8">
          <Marker>
            <MarkerIcon>
              <GitBranch />
            </MarkerIcon>
            <MarkerContent>Switched to a new branch</MarkerContent>
          </Marker>
          <Marker>
            <MarkerIcon>
              <Search />
            </MarkerIcon>
            <MarkerContent>Explored 4 files</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerIcon>
              <FileText />
            </MarkerIcon>
            <MarkerContent>Opened implementation notes</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerIcon>
              <Check />
            </MarkerIcon>
            <MarkerContent>Syncing completed</MarkerContent>
          </Marker>
        </div>
      </Example>
      <Example
        name="Shimmer"
        description="Add the shimmer utility for animated streaming text."
        code={shimmerCode}
      >
        <div class="flex w-full max-w-md flex-col gap-8">
          <Marker>
            <MarkerContent class="shimmer">Thinking...</MarkerContent>
          </Marker>
          <Marker>
            <MarkerContent class="shimmer">Reading 4 files</MarkerContent>
          </Marker>
        </div>
      </Example>

      <Example
        name="Border"
        description="Use the border variant to separate rows."
        code={borderCode}
      >
        <div class="flex w-full max-w-md flex-col gap-8">
          <Marker variant="border">
            <MarkerContent>Switched to release-candidate</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerContent>Reviewed 8 related files</MarkerContent>
          </Marker>
        </div>
      </Example>

      <Example
        name="Links and buttons"
        description="Marker is polymorphic, so it can act as a link or a button."
        code={linksCode}
      >
        <div class="flex w-full max-w-md flex-col gap-8">
          <Marker component="a" href="#">
            <MarkerContent>View the pull request</MarkerContent>
          </Marker>
          <Marker component="button" type="button">
            <MarkerIcon>
              <RotateCcw />
            </MarkerIcon>
            <MarkerContent>Revert this change</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerContent>Opened implementation notes</MarkerContent>
          </Marker>
        </div>
      </Example>
    </ComponentPage>
  );
};
