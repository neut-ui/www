import { ComponentPage, Example } from "../../components/component-page";
import { createSignal } from "solid-js";
import {
  Button,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@neut/ui";
import type { ResizablePanelHandle } from "@neut/ui";

const PanelContent = (props: { label: string; class?: string }) => (
  <div
    class={
      "flex h-full items-center justify-center p-6 text-sm font-semibold " +
      (props.class ?? "")
    }
  >
    {props.label}
  </div>
);

const basicCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@neut/ui";

export default () => (
  <ResizablePanelGroup class="min-h-50 w-full max-w-md rounded-lg border">
    <ResizablePanel>
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        One
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        Two
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        Three
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
);`;

const verticalCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@neut/ui";

export default () => (
  <ResizablePanelGroup
    orientation="vertical"
    class="min-h-50 w-full max-w-md rounded-lg border"
  >
    <ResizablePanel defaultSize="25%">
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        Header
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize="75%">
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        Content
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
);`;

const handleCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@neut/ui";

export default () => (
  <ResizablePanelGroup class="min-h-50 w-full max-w-md rounded-lg border">
    <ResizablePanel defaultSize="25%">
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        Sidebar
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize="75%">
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        Content
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
);`;

const nestedCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@neut/ui";

export default () => (
  <ResizablePanelGroup class="w-full max-w-md rounded-lg border">
    <ResizablePanel defaultSize="50%">
      <div class="flex h-50 items-center justify-center p-6 text-sm font-semibold">
        One
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize="50%">
      <ResizablePanelGroup orientation="vertical">
        <ResizablePanel defaultSize="25%">
          <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
            Two
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="75%">
          <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
            Three
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanel>
  </ResizablePanelGroup>
);`;

const collapsibleCode = `import { createSignal } from "solid-js";
import {
  Button,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@neut/ui";
import type { ResizablePanelHandle } from "@neut/ui";

export default () => {
  const [sidebar, setSidebar] = createSignal<ResizablePanelHandle>();

  return (
    <div class="flex w-full max-w-md flex-col gap-2">
      <ResizablePanelGroup class="min-h-50 rounded-lg border">
        <ResizablePanel
          defaultSize="30%"
          minSize="20%"
          maxSize="50%"
          collapsible
          collapsedSize="0%"
          panelRef={setSidebar}
        >
          <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
            Sidebar
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="70%">
          <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
            Content
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div class="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => sidebar()?.collapse()}>
          Collapse
        </Button>
        <Button variant="outline" size="sm" onClick={() => sidebar()?.expand()}>
          Expand
        </Button>
      </div>
    </div>
  );
};`;

const controlledCode = `import { createSignal } from "solid-js";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@neut/ui";

export default () => {
  const [layout, setLayout] = createSignal<Record<string, number>>({});

  return (
    <ResizablePanelGroup
      class="min-h-50 w-full max-w-md rounded-lg border"
      onLayoutChange={setLayout}
    >
      <ResizablePanel id="left" defaultSize="30%" minSize="20%">
        <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
          {Math.round(layout().left ?? 30)}%
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel id="right" defaultSize="70%" minSize="30%">
        <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
          {Math.round(layout().right ?? 70)}%
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};`;

const persistedCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@neut/ui";

export default () => (
  <ResizablePanelGroup
    autoSaveId="neut-resizable-demo"
    class="min-h-50 w-full max-w-md rounded-lg border"
  >
    <ResizablePanel id="one" defaultSize="33.33%">
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        One
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel id="two" defaultSize="33.33%">
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        Two
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel id="three" defaultSize="33.34%">
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        Three
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
);`;

const horizontalCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@neut/ui";

export default () => (
  <ResizablePanelGroup class="min-h-50 w-full max-w-md rounded-lg border">
    <ResizablePanel defaultSize="25%">
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        Sidebar
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize="75%">
      <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
        Content
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
);`;

export default () => {
  const [sidebar, setSidebar] = createSignal<ResizablePanelHandle>();
  const [layout, setLayout] = createSignal<Record<string, number>>({});

  return (
    <ComponentPage
      title="Resizable"
      description="Accessible resizable panel groups and layouts with keyboard support."
    >
      <Example
        name="Basic"
        description="A horizontal group with three panels."
        code={basicCode}
      >
        <ResizablePanelGroup class="min-h-50 w-full max-w-md rounded-lg border">
          <ResizablePanel>
            <PanelContent label="One" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <PanelContent label="Two" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <PanelContent label="Three" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Example>

      <Example
        name="Vertical"
        description='Use orientation="vertical" for vertical resizing.'
        code={verticalCode}
      >
        <ResizablePanelGroup
          orientation="vertical"
          class="min-h-50 w-full max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize="25%">
            <PanelContent label="Header" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="75%">
            <PanelContent label="Content" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Example>

      <Example
        name="With handle"
        description="Show a visible handle with the withHandle prop."
        code={handleCode}
      >
        <ResizablePanelGroup class="min-h-50 w-full max-w-md rounded-lg border">
          <ResizablePanel defaultSize="25%">
            <PanelContent label="Sidebar" />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="75%">
            <PanelContent label="Content" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Example>

      <Example
        name="Nested"
        description="Nest a vertical group inside a horizontal one."
        code={nestedCode}
      >
        <ResizablePanelGroup class="w-full max-w-md rounded-lg border">
          <ResizablePanel defaultSize="50%">
            <PanelContent label="One" class="h-50" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="50%">
            <ResizablePanelGroup orientation="vertical">
              <ResizablePanel defaultSize="25%">
                <PanelContent label="Two" />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize="75%">
                <PanelContent label="Three" />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Example>

      <Example
        name="Collapsible"
        description="Collapse a panel from code with the panel handle."
        code={collapsibleCode}
      >
        <div class="flex w-full max-w-md flex-col gap-2">
          <ResizablePanelGroup class="min-h-50 rounded-lg border">
            <ResizablePanel
              defaultSize="30%"
              minSize="20%"
              maxSize="50%"
              collapsible
              collapsedSize="0%"
              panelRef={setSidebar}
            >
              <PanelContent label="Sidebar" />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="70%">
              <PanelContent label="Content" />
            </ResizablePanel>
          </ResizablePanelGroup>
          <div class="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => sidebar()?.collapse()}
            >
              Collapse
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => sidebar()?.expand()}
            >
              Expand
            </Button>
          </div>
        </div>
      </Example>
      <Example
        name="Controlled"
        description="Read the live layout with onLayoutChange."
        code={controlledCode}
      >
        <ResizablePanelGroup
          class="min-h-50 w-full max-w-md rounded-lg border"
          onLayoutChange={setLayout}
        >
          <ResizablePanel id="left" defaultSize="30%" minSize="20%">
            <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
              {Math.round(layout().left ?? 30)}%
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel id="right" defaultSize="70%" minSize="30%">
            <div class="flex h-full items-center justify-center p-6 text-sm font-semibold">
              {Math.round(layout().right ?? 70)}%
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Example>

      <Example
        name="Persisted"
        description="Persist panel sizes with autoSaveId."
        code={persistedCode}
      >
        <ResizablePanelGroup
          autoSaveId="neut-resizable-demo"
          class="min-h-50 w-full max-w-md rounded-lg border"
        >
          <ResizablePanel id="one" defaultSize="33.33%">
            <PanelContent label="One" />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel id="two" defaultSize="33.33%">
            <PanelContent label="Two" />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel id="three" defaultSize="33.34%">
            <PanelContent label="Three" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Example>
      <Example
        name="Horizontal"
        description="Split a sidebar and content area 25 / 75."
        code={horizontalCode}
      >
        <ResizablePanelGroup class="min-h-50 w-full max-w-md rounded-lg border">
          <ResizablePanel defaultSize="25%">
            <PanelContent label="Sidebar" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize="75%">
            <PanelContent label="Content" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Example>
    </ComponentPage>
  );
};
