import { ComponentPage, Example } from "../../components/component-page";
import { For, createSignal } from "solid-js";
import { ScrollArrows } from "@neut/ui";

const basicCode = `import { For, createSignal } from "solid-js";
import { ScrollArrows } from "@neut/ui";

export default () => {
  const [scrollEl, setScrollEl] = createSignal<HTMLElement>();

  return (
    <div class="relative w-full max-w-sm">
      <div ref={setScrollEl} class="max-h-72 overflow-y-auto rounded-lg border">
        <div class="divide-y">
          <For each={Array.from({ length: 40 })}>
            {(_, index) => (
              <div class="px-4 py-3 text-sm">Message {index() + 1}</div>
            )}
          </For>
        </div>
      </div>
      <ScrollArrows target={scrollEl} />
    </div>
  );
};`;

const hoverCode = `import { For, createSignal } from "solid-js";
import { ScrollArrows } from "@neut/ui";

export default () => {
  const [scrollEl, setScrollEl] = createSignal<HTMLElement>();

  return (
    <div class="relative w-full max-w-sm">
      <div ref={setScrollEl} class="max-h-72 overflow-y-auto rounded-lg border">
        <div class="divide-y">
          <For each={Array.from({ length: 40 })}>
            {(_, index) => (
              <div class="px-4 py-3 text-sm">Row {index() + 1}</div>
            )}
          </For>
        </div>
      </div>
      <ScrollArrows target={scrollEl} hoverScroll />
    </div>
  );
};`;

const styledCode = `import { For, createSignal } from "solid-js";
import { ScrollArrows } from "@neut/ui";

export default () => {
  const [scrollEl, setScrollEl] = createSignal<HTMLElement>();

  return (
    <div class="relative w-full max-w-sm">
      <div
        ref={setScrollEl}
        class="max-h-72 overflow-y-auto rounded-lg border bg-neutral-50 dark:bg-neutral-900"
      >
        <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
          <For each={Array.from({ length: 40 })}>
            {(_, index) => (
              <div class="px-4 py-3 text-sm">Item {index() + 1}</div>
            )}
          </For>
        </div>
      </div>
      <ScrollArrows
        target={scrollEl}
        class="text-neutral-500"
        upClass="rounded-t-lg"
        downClass="rounded-b-lg"
      />
    </div>
  );
};`;

export default () => {
  const [basicEl, setBasicEl] = createSignal<HTMLElement>();
  const [hoverEl, setHoverEl] = createSignal<HTMLElement>();
  const [styledEl, setStyledEl] = createSignal<HTMLElement>();

  return (
    <ComponentPage
      title="ScrollArrows"
      description="Shows arrows at the edges of a scroll container and optionally auto-scrolls on hover."
    >
      <Example
        name="Basic"
        description="Arrows appear when the container can scroll in that direction."
        code={basicCode}
      >
        <div class="relative w-full max-w-sm">
          <div
            ref={setBasicEl}
            class="max-h-72 overflow-y-auto rounded-lg border"
          >
            <div class="divide-y">
              <For each={Array.from({ length: 40 })}>
                {(_, index) => (
                  <div class="px-4 py-3 text-sm">Message {index() + 1}</div>
                )}
              </For>
            </div>
          </div>
          <ScrollArrows target={basicEl} />
        </div>
      </Example>

      <Example
        name="Hover scroll"
        description="Hovering an edge arrow continuously scrolls the container."
        code={hoverCode}
      >
        <div class="relative w-full max-w-sm">
          <div
            ref={setHoverEl}
            class="max-h-72 overflow-y-auto rounded-lg border"
          >
            <div class="divide-y">
              <For each={Array.from({ length: 40 })}>
                {(_, index) => (
                  <div class="px-4 py-3 text-sm">Row {index() + 1}</div>
                )}
              </For>
            </div>
          </div>
          <ScrollArrows target={hoverEl} hoverScroll />
        </div>
      </Example>

      <Example
        name="Custom styles"
        description="Style each arrow independently with upClass and downClass."
        code={styledCode}
      >
        <div class="relative w-full max-w-sm">
          <div
            ref={setStyledEl}
            class="max-h-72 overflow-y-auto rounded-lg border bg-neutral-50 dark:bg-neutral-900"
          >
            <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
              <For each={Array.from({ length: 40 })}>
                {(_, index) => (
                  <div class="px-4 py-3 text-sm">Item {index() + 1}</div>
                )}
              </For>
            </div>
          </div>
          <ScrollArrows
            target={styledEl}
            class="text-neutral-500"
            upClass="rounded-t-lg"
            downClass="rounded-b-lg"
          />
        </div>
      </Example>
    </ComponentPage>
  );
};
