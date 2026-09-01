import { createSignal, Show, type ParentProps } from "solid-js";
import { Button } from "@neut/ui";
import { CodeXml } from "lucide-solid";
import { Code } from "./Code";

interface ExampleProps extends ParentProps {
  name: string;
  description?: string;
  code: string;
  previewClass?: string;
}

export const Example = (props: ExampleProps) => {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-1">
        <h3 class="text-base font-semibold tracking-tight">{props.name}</h3>
        <Show when={props.description}>
          <p class="text-sm text-neutral-500 dark:text-neutral-400">
            {props.description}
          </p>
        </Show>
      </div>

      <div
        class={
          props.previewClass ??
          "flex min-h-87.5 w-full items-center justify-center overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
        }
      >
        {props.children}
      </div>

      <div class="flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          icon={<CodeXml />}
          onClick={() => setOpen((o) => !o)}
        >
          {open() ? "Hide code" : "View code"}
        </Button>
      </div>

      <Show when={open()}>
        <Code code={props.code} />
      </Show>
    </div>
  );
};
