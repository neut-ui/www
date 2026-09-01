import { Show, type ParentProps } from "solid-js";

interface ComponentPageProps extends ParentProps {
  title: string;
  description?: string;
}

export const ComponentPage = (props: ComponentPageProps) => {
  return (
    <div class="mx-auto w-full max-w-4xl px-6 py-10">
      <div class="flex flex-col gap-2 pb-8">
        <h1 class="text-3xl font-bold tracking-tight">{props.title}</h1>
        <Show when={props.description}>
          <p class="text-base text-neutral-500 dark:text-neutral-400">
            {props.description}
          </p>
        </Show>
      </div>
      <div class="flex flex-col gap-10">{props.children}</div>
    </div>
  );
};
