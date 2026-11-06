import { ComponentPage, Example } from "../../components/component-page";
import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  FieldLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  ToggleGroup,
  ToggleGroupItem,
} from "@neut/ui";
import { createSignal } from "solid-js";

const basicCode = `import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@neut/ui";

export default () => (
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>
        Deploy your new project in one click.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">
        Configure your project settings, then deploy it to production.
      </p>
    </CardContent>
    <CardFooter class="justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
);`;

const actionCode = `import {
  Badge,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@neut/ui";

export default () => (
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardAction>
        <Badge variant="secondary">New</Badge>
      </CardAction>
      <CardTitle>Notifications</CardTitle>
      <CardDescription>You have 3 unread messages.</CardDescription>
    </CardHeader>
    <CardContent>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">
        Review your latest notifications and account updates.
      </p>
    </CardContent>
  </Card>
);`;

const featuredCode = `import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@neut/ui";

export default () => (
  <Card class="w-full max-w-sm">
    <img
      src="https://avatar.vercel.sh/shadcn1"
      alt="Event cover"
      class="aspect-video w-full object-cover"
    />
    <CardHeader>
      <CardAction>
        <Badge variant="secondary">Featured</Badge>
      </CardAction>
      <CardTitle>Design systems meetup</CardTitle>
      <CardDescription>
        A practical talk on component APIs, accessibility, and shipping faster.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">
        Join us for an evening of talks and community.
      </p>
    </CardContent>
    <CardFooter>
      <Button class="w-full">View Event</Button>
    </CardFooter>
  </Card>
);`;

const edgeToEdgeCode = `import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@neut/ui";

export default () => (
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Terms of Service</CardTitle>
      <CardDescription>
        Review the terms before accepting the agreement.
      </CardDescription>
    </CardHeader>
    <CardContent class="-mb-(--card-spacing)">
      <div class="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-auto border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
        <p>
          These terms govern your use of the workspace, including access to
          shared documents, project files, and collaboration tools.
        </p>
        <p>
          You are responsible for the content you upload and for ensuring that
          your team has the appropriate permissions to view or edit it.
        </p>
        <p>
          We may update features or limits as the service evolves. When those
          changes materially affect your workflow, we will notify your
          workspace administrators.
        </p>
      </div>
    </CardContent>
    <CardFooter class="justify-end gap-2">
      <Button variant="outline">Decline</Button>
      <Button>Accept</Button>
    </CardFooter>
  </Card>
);`;

const spacingCode = `import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ToggleGroup,
  ToggleGroupItem,
} from "@neut/ui";
import { createSignal } from "solid-js";

export default () => {
  const [spacing, setSpacing] = createSignal(20);

  return (
    <div class="flex w-full max-w-sm flex-col items-center gap-6">
      <ToggleGroup
        value={spacing()}
        onValueChange={(value) => setSpacing(value ?? 20)}
        variant="outline"
        size="sm"
      >
        <ToggleGroupItem value={16}>16px</ToggleGroupItem>
        <ToggleGroupItem value={20}>20px</ToggleGroupItem>
        <ToggleGroupItem value={24}>24px</ToggleGroupItem>
        <ToggleGroupItem value={32}>32px</ToggleGroupItem>
      </ToggleGroup>
      <Card class="w-full" style={{ "--card-spacing": spacing() + "px" }}>
        <CardHeader>
          <CardTitle>Card spacing</CardTitle>
          <CardDescription>
            Every section follows the --card-spacing variable.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">
            Change the spacing above to update the inset of the header, content
            and footer in one place.
          </p>
        </CardContent>
        <CardFooter class="justify-between">
          <span class="text-xs text-muted-foreground">
            Spacing: {spacing()}px
          </span>
          <Button size="sm">Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};`;

const smallCode = `import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@neut/ui";

export default () => (
  <Card size="sm" class="w-full max-w-xs">
    <CardHeader>
      <CardTitle>Scheduled reports</CardTitle>
      <CardDescription>
        Weekly snapshots. No more manual exports.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p class="text-sm text-neutral-600 dark:text-neutral-400">
        Choose a schedule and send to channels or teammates.
      </p>
    </CardContent>
    <CardFooter class="flex-col gap-2">
      <Button size="sm" class="w-full">
        Set up reports
      </Button>
      <Button variant="outline" size="sm" class="w-full">
        Learn more
      </Button>
    </CardFooter>
  </Card>
);`;

const formCode = `import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  FieldLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@neut/ui";

export default () => (
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form class="grid gap-4">
        <Field>
          <FieldLabel for="card-name">Name</FieldLabel>
          <Input id="card-name" placeholder="My project" />
        </Field>
        <Field>
          <FieldLabel for="card-framework">Framework</FieldLabel>
          <Select defaultValue="solid">
            <SelectTrigger id="card-framework" class="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solid">Solid</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </form>
    </CardContent>
    <CardFooter class="justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Create</Button>
    </CardFooter>
  </Card>
);`;

export default () => {
  return (
    <ComponentPage
      title="Card"
      description="A container for grouping related content and actions about a single subject."
    >
      <Example
        name="Basic"
        description="A card composed of a header, body and footer."
        code={basicCode}
      >
        <Card class="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              Configure your project settings, then deploy it to production.
            </p>
          </CardContent>
          <CardFooter class="justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </Example>

      <Example
        name="With action"
        description="CardAction places a control in the header's top-right corner."
        code={actionCode}
      >
        <Card class="w-full max-w-sm">
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">New</Badge>
            </CardAction>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              Review your latest notifications and account updates.
            </p>
          </CardContent>
        </Card>
      </Example>

      <Example
        name="Featured"
        description="A cover image, a featured badge and a full-width footer button."
        code={featuredCode}
      >
        <Card class="w-full max-w-sm">
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Event cover"
            class="aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">Featured</Badge>
            </CardAction>
            <CardTitle>Design systems meetup</CardTitle>
            <CardDescription>
              A practical talk on component APIs, accessibility, and shipping
              faster.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              Join us for an evening of talks and community.
            </p>
          </CardContent>
          <CardFooter>
            <Button class="w-full">View Event</Button>
          </CardFooter>
        </Card>
      </Example>

      <Example
        name="Edge to edge"
        description="Use negative margins based on --card-spacing to let content run to the card edges."
        code={edgeToEdgeCode}
      >
        <Card class="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Terms of Service</CardTitle>
            <CardDescription>
              Review the terms before accepting the agreement.
            </CardDescription>
          </CardHeader>
          <CardContent class="-mb-(--card-spacing)">
            <div class="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-auto border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
              <p>
                These terms govern your use of the workspace, including access
                to shared documents, project files, and collaboration tools.
              </p>
              <p>
                You are responsible for the content you upload and for ensuring
                that your team has the appropriate permissions to view or edit
                it.
              </p>
              <p>
                We may update features or limits as the service evolves. When
                those changes materially affect your workflow, we will notify
                your workspace administrators.
              </p>
            </div>
          </CardContent>
          <CardFooter class="justify-end gap-2">
            <Button variant="outline">Decline</Button>
            <Button>Accept</Button>
          </CardFooter>
        </Card>
      </Example>

      <Example
        name="Spacing"
        description="Drive --card-spacing from a toggle group to adjust every section at once."
        code={spacingCode}
      >
        <SpacingDemo />
      </Example>

      <Example
        name="Small size"
        description="The sm size reduces padding for denser layouts."
        code={smallCode}
      >
        <Card size="sm" class="w-full max-w-xs">
          <CardHeader>
            <CardTitle>Scheduled reports</CardTitle>
            <CardDescription>
              Weekly snapshots. No more manual exports.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              Choose a schedule and send to channels or teammates.
            </p>
          </CardContent>
          <CardFooter class="flex-col gap-2">
            <Button size="sm" class="w-full">
              Set up reports
            </Button>
            <Button variant="outline" size="sm" class="w-full">
              Learn more
            </Button>
          </CardFooter>
        </Card>
      </Example>
      <Example
        name="With form"
        description="Compose a form inside a card with fields and a footer."
        code={formCode}
      >
        <Card class="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form class="grid gap-4">
              <Field>
                <FieldLabel for="card-name">Name</FieldLabel>
                <Input id="card-name" placeholder="My project" />
              </Field>
              <Field>
                <FieldLabel for="card-framework">Framework</FieldLabel>
                <Select defaultValue="solid">
                  <SelectTrigger id="card-framework" class="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solid">Solid</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </form>
          </CardContent>
          <CardFooter class="justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Create</Button>
          </CardFooter>
        </Card>
      </Example>
    </ComponentPage>
  );
};

function SpacingDemo() {
  const [spacing, setSpacing] = createSignal(20);

  return (
    <div class="flex w-full max-w-sm flex-col items-center gap-6">
      <ToggleGroup
        value={spacing()}
        onValueChange={(value) => setSpacing(value ?? 20)}
        variant="outline"
        size="sm"
      >
        <ToggleGroupItem value={16}>16px</ToggleGroupItem>
        <ToggleGroupItem value={20}>20px</ToggleGroupItem>
        <ToggleGroupItem value={24}>24px</ToggleGroupItem>
        <ToggleGroupItem value={32}>32px</ToggleGroupItem>
      </ToggleGroup>
      <Card class="w-full" style={{ "--card-spacing": spacing() + "px" }}>
        <CardHeader>
          <CardTitle>Card spacing</CardTitle>
          <CardDescription>
            Every section follows the --card-spacing variable.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">
            Change the spacing above to update the inset of the header, content
            and footer in one place.
          </p>
        </CardContent>
        <CardFooter class="justify-between">
          <span class="text-xs text-muted-foreground">
            Spacing: {spacing()}px
          </span>
          <Button size="sm">Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
