import { Card, CardContent, ScrollArea, Separator } from "@neut/ui";

export default () => {
  return (
    <>
      <ScrollArea class="h-72 w-48 rounded-md border">
        <div class="p-4">
          <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
          {Array.from({ length: 50 }).map((_, idx) => (
            <>
              <div class="text-sm">{`v1.2.0-beta.${idx + 1}`}</div>
              <Separator class="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>

      <ScrollArea
        orientation="horizontal"
        class="w-96 rounded-md border whitespace-nowrap"
      >
        <div class="flex w-max space-x-4 p-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card>
              <CardContent class="flex w-32 items-center justify-center p-6">
                <span class="text-2xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        {/*<ScrollBar orientation="horizontal" />*/}
      </ScrollArea>
    </>
  );
};
