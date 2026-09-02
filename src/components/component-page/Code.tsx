import { createMemo, createSignal, For, Show } from "solid-js";
import { Check, Copy } from "lucide-solid";
import { tokenize, type TokenType } from "./highlight";

const COLORS: Record<TokenType, string> = {
  keyword: "#c678dd",
  string: "#98c379",
  number: "#d19a66",
  comment: "#5c6370",
  type: "#e5c07b",
  jsx: "#56b6c2",
  attr: "#e06c75",
  punct: "#abb2bf",
  plain: "#abb2bf",
};

interface CodeProps {
  code: string;
}

export const Code = (props: CodeProps) => {
  const [copied, setCopied] = createSignal(false);
  const tokens = createMemo(() => tokenize(props.code));

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
    <div class="overflow-hidden rounded-lg border border-white/10 bg-[#282c34]">
      <div class="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span class="font-mono text-xs text-neutral-400">tsx</span>
        <button
          type="button"
          onClick={copy}
          class="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-neutral-400 transition-colors hover:bg-white/10 hover:text-neutral-200"
          aria-label="Copy code"
        >
          <Show
            when={copied()}
            fallback={
              <>
                <Copy class="size-3.5" />
                Copy
              </>
            }
          >
            <Check class="size-3.5 text-emerald-400" />
            Copied
          </Show>
        </button>
      </div>
      <pre class="overflow-x-auto p-4 text-[13px] leading-relaxed text-[#abb2bf]">
        <code class="font-mono">
          <For each={tokens()}>
            {(token) => (
              <span
                style={{ color: COLORS[token.type] }}
                classList={{ italic: token.type === "comment" }}
              >
                {token.text}
              </span>
            )}
          </For>
        </code>
      </pre>
    </div>
  );
};
