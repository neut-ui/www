import { Progress, Slider } from "@neut/ui";
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
};
