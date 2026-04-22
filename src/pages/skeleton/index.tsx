import { Card, CardContent, CardHeader, Skeleton } from "@neut/ui";

export default () => {
  return (
    <>
      <div class="flex items-center gap-4">
        <Skeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-62.5" />
          <Skeleton class="h-4 w-50" />
        </div>
      </div>

      <div class="flex w-fit items-center gap-4">
        <Skeleton class="size-10 shrink-0 rounded-full" />
        <div class="grid gap-2">
          <Skeleton class="h-4 w-37.5" />
          <Skeleton class="h-4 w-25" />
        </div>
      </div>

      <Card class="w-full max-w-xs">
        <CardHeader>
          <Skeleton class="h-4 w-2/3" />
          <Skeleton class="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton class="aspect-video w-full" />
        </CardContent>
      </Card>

      <div class="flex w-full max-w-xs flex-col gap-2">
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-3/4" />
      </div>

      <div class="flex w-full max-w-xs flex-col gap-7">
        <div class="flex flex-col gap-3">
          <Skeleton class="h-4 w-20" />
          <Skeleton class="h-8 w-full" />
        </div>
        <div class="flex flex-col gap-3">
          <Skeleton class="h-4 w-24" />
          <Skeleton class="h-8 w-full" />
        </div>
        <Skeleton class="h-8 w-24" />
      </div>

      <div class="flex w-full max-w-sm flex-col gap-2">
        {Array.from({ length: 5 }).map(() => (
          <div class="flex gap-4">
            <Skeleton class="h-4 flex-1" />
            <Skeleton class="h-4 w-24" />
            <Skeleton class="h-4 w-20" />
          </div>
        ))}
      </div>
    </>
  );
};
