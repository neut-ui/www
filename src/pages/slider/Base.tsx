import { Slider } from "@neut/ui";

export default () => {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      class="mx-auto w-full max-w-xs"
    />
  );
};
