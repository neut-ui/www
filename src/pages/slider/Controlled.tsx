import { Label, Slider } from "@neut/ui";
import { createSignal } from "solid-js";

export default () => {
  const [value, setValue] = createSignal([0.3, 0.7]);

  return (
    <div class="mx-auto grid w-full max-w-xs gap-3">
      <div class="flex items-center justify-between gap-2">
        <Label for="slider-demo-temperature">Temperature</Label>
        <span class="text-sm text-muted-foreground">{value().join(", ")}</span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value()}
        onValueChange={(value) => setValue(value)}
        min={0}
        max={1}
        step={0.1}
      />
    </div>
  );
};
