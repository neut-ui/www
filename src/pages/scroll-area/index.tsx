import { ComponentPage, Example } from "../../components/component-page";
import {
  Card,
  CardContent,
  ScrollArea,
  Separator,
} from "@neut/ui";

const verticalCode = `import { ScrollArea, Separator } from "@neut/ui";

export default () => (
  <ScrollArea class="h-72 w-48 rounded-md border">
    <div class="p-4">
      <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
      {Array.from({ length: 50 }).map((_, idx) => (
        <>
          <div class="text-sm">{"v1.2.0-beta." + (idx + 1)}</div>
          <Separator class="my-2" />
        </>
      ))}
    </div>
  </ScrollArea>
);`;

const horizontalCode = `import { Card, CardContent, ScrollArea } from "@neut/ui";

export default () => (
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
  </ScrollArea>
);`;

export default () => {
  return (
    <ComponentPage
      title="ScrollArea"
      description="Adds custom scrollbars to a region of content, in either orientation."
    >
      <Example
        name="Vertical"
        description="Scroll a long list inside a fixed-height container."
        code={verticalCode}
      >
        <ScrollArea class="h-72 w-48 rounded-md border">
          <div class="p-4">
            <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
            {Array.from({ length: 50 }).map((_, idx) => (
              <>
                <div class="text-sm">{"v1.2.0-beta." + (idx + 1)}</div>
                <Separator class="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
      </Example>

      <Example
        name="Horizontal"
        description="Scroll a row of Cards with horizontal orientation."
        code={horizontalCode}
      >
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
        </ScrollArea>
      </Example>
    </ComponentPage>
  );
};
