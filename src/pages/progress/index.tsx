import { ComponentPage, Example } from "../../components/component-page";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
  Slider,
} from "@neut/ui";
import { createSignal, onCleanup, onMount } from "solid-js";

const basicCode = `import { Progress } from "@neut/ui";

export default () => <Progress value={13} class="w-full max-w-sm" />;`;

const labelCode = `import { Progress, ProgressLabel, ProgressValue } from "@neut/ui";

export default () => (
  <Progress value={56} class="w-full max-w-sm">
    <ProgressLabel>Upload progress</ProgressLabel>
    <ProgressValue />
  </Progress>
);`;

const animatedCode = `import { Progress } from "@neut/ui";
import { createSignal, onCleanup, onMount } from "solid-js";

export default () => {
  const [progress, setProgress] = createSignal(13);

  onMount(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    onCleanup(() => clearTimeout(timer));
  });

  return <Progress value={progress()} class="w-full max-w-sm" />;
};`;

const sliderCode = `import { Progress, Slider } from "@neut/ui";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal(50);

  return (
    <div class="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value()} class="w-full" />
      <Slider
        value={value()}
        onValueChange={(value) => setValue(value)}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
};`;

export default () => {
  return (
    <ComponentPage
      title="Progress"
      description="Displays a value as a horizontal indicator, with optional label and value text."
    >
      <Example
        name="Basic"
        description="A static progress bar driven by the value prop."
        code={basicCode}
      >
        <Progress value={13} class="w-full max-w-sm" />
      </Example>

      <Example
        name="With label"
        description="Use ProgressLabel and ProgressValue to add context."
        code={labelCode}
      >
        <Progress value={56} class="w-full max-w-sm">
          <ProgressLabel>Upload progress</ProgressLabel>
          <ProgressValue />
        </Progress>
      </Example>

      <Example
        name="Animated"
        description="Update the value on mount to animate the indicator."
        code={animatedCode}
      >
        <AnimatedDemo />
      </Example>

      <Example
        name="Controlled by slider"
        description="Tie the Progress value to a Slider for interactive control."
        code={sliderCode}
      >
        <SliderDemo />
      </Example>
    </ComponentPage>
  );
};

function AnimatedDemo() {
  const [progress, setProgress] = createSignal(13);

  onMount(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    onCleanup(() => clearTimeout(timer));
  });

  return <Progress value={progress()} class="w-full max-w-sm" />;
}

function SliderDemo() {
  const [value, setValue] = createSignal(50);

  return (
    <div class="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value()} class="w-full" />
      <Slider
        value={value()}
        onValueChange={(value) => setValue(value)}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
}
