import { createSignal, Show } from "solid-js";
import { Check, Copy } from "lucide-solid";

interface CodeProps {
  code: string;
}

export const Code = (props: CodeProps) => {
  const [copied, setCopied] = createSignal(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(props.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard may be unavailable in sandboxed contexts.
    }
  };

  return (
    <div class="relative overflow-hidden rounded-lg bg-neutral-950">
      <button
        type="button"
        onClick={copy}
        class="absolute right-2 top-2 z-10 rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-200"
        aria-label="Copy code"
      >
        <Show when={copied()} fallback={<Copy class="size-4" />}>
          <Check class="size-4 text-emerald-400" />
        </Show>
      </button>
      <pre class="overflow-x-auto p-4 text-[13px] leading-relaxed text-neutral-100">
        <code class="font-mono">{props.code}</code>
      </pre>
    </div>
  );
};
