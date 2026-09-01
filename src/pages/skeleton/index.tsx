import { ComponentPage, Example } from "../../components/component-page";
import { Card, CardContent, CardHeader, Skeleton } from "@neut/ui";

const avatarCode = `import { Skeleton } from "@neut/ui";

export default () => (
  <div class="flex items-center gap-4">
    <Skeleton class="h-12 w-12 rounded-full" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-40" />
      <Skeleton class="h-4 w-32" />
    </div>
  </div>
);`;

const cardCode = `import { Card, CardContent, CardHeader, Skeleton } from "@neut/ui";

export default () => (
  <Card class="w-full max-w-xs">
    <CardHeader>
      <Skeleton class="h-4 w-2/3" />
      <Skeleton class="h-4 w-1/2" />
    </CardHeader>
    <CardContent>
      <Skeleton class="aspect-video w-full" />
    </CardContent>
  </Card>
);`;

const formCode = `import { Skeleton } from "@neut/ui";

export default () => (
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
);`;

const listCode = `import { Skeleton } from "@neut/ui";

export default () => (
  <div class="flex w-full max-w-sm flex-col gap-2">
    {Array.from({ length: 5 }).map(() => (
      <div class="flex gap-4">
        <Skeleton class="h-4 flex-1" />
        <Skeleton class="h-4 w-24" />
        <Skeleton class="h-4 w-20" />
      </div>
    ))}
  </div>
);`;

export default () => {
  return (
    <ComponentPage
      title="Skeleton"
      description="Use to show a placeholder while content is loading."
    >
      <Example
        name="Avatar + lines"
        description="A common profile placeholder: avatar and two text lines."
        code={avatarCode}
      >
        <div class="flex items-center gap-4">
          <Skeleton class="h-12 w-12 rounded-full" />
          <div class="space-y-2">
            <Skeleton class="h-4 w-40" />
            <Skeleton class="h-4 w-32" />
          </div>
        </div>
      </Example>

      <Example
        name="Card skeleton"
        description="Skeleton placeholders inside a card header and content."
        code={cardCode}
      >
        <Card class="w-full max-w-xs">
          <CardHeader>
            <Skeleton class="h-4 w-2/3" />
            <Skeleton class="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton class="aspect-video w-full" />
          </CardContent>
        </Card>
      </Example>

      <Example
        name="Form skeleton"
        description="Placeholders for labels, inputs and a submit button."
        code={formCode}
      >
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
      </Example>

      <Example
        name="List rows"
        description="Repeated row placeholders for a table or feed."
        code={listCode}
      >
        <div class="flex w-full max-w-sm flex-col gap-2">
          {Array.from({ length: 5 }).map(() => (
            <div class="flex gap-4">
              <Skeleton class="h-4 flex-1" />
              <Skeleton class="h-4 w-24" />
              <Skeleton class="h-4 w-20" />
            </div>
          ))}
        </div>
      </Example>
    </ComponentPage>
  );
};
