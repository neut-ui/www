import { Progress, ProgressLabel, ProgressValue } from "@neut/ui";

export default () => {
  return (
    <Progress value={56} class="w-full max-w-sm">
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
};
