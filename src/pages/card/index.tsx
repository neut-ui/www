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
} from "@neut/ui";

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
    </ComponentPage>
  );
};
