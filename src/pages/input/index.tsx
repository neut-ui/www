import { Input } from "@neut/ui";

export default () => {
  return (
    <div class="flex flex-col gap-3">
      <Input
        type="number"
        onInput={(v) => console.log(v + 1)}
        placeholder="Enter a number"
      />

      <Input onInput={(v) => console.log(v)} placeholder="Enter text" />

      <Input onInput={(v) => console.log(v)} placeholder="Disabled" disabled />
    </div>
  );
};
