import { ComponentPage, Example } from "../../components/component-page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@neut/ui";
import { AppWindowIcon, CodeIcon } from "lucide-solid";

const basicCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@neut/ui";

export default () => (
  <Tabs defaultValue="overview" class="w-full max-w-md">
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            View your key metrics and recent project activity.
          </CardDescription>
        </CardHeader>
        <CardContent class="text-sm text-muted-foreground">
          You have 12 active projects and 3 pending tasks.
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="analytics">
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>
            Track performance and user engagement metrics.
          </CardDescription>
        </CardHeader>
        <CardContent class="text-sm text-muted-foreground">
          Page views are up 25% compared to last month.
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="reports">
      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
          <CardDescription>
            Generate and download your detailed reports.
          </CardDescription>
        </CardHeader>
        <CardContent class="text-sm text-muted-foreground">
          You have 5 reports ready and available to export.
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="settings">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Manage your account preferences and options.
          </CardDescription>
        </CardHeader>
        <CardContent class="text-sm text-muted-foreground">
          Configure notifications, security, and themes.
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
);`;

const lineCode = `import { Tabs, TabsList, TabsTrigger } from "@neut/ui";

export default () => (
  <Tabs defaultValue="overview" class="w-full max-w-md">
    <TabsList variant="line">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
    </TabsList>
  </Tabs>
);`;

const verticalCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@neut/ui";

export default () => (
  <Tabs
    defaultValue="account"
    orientation="vertical"
    class="w-full max-w-md"
  >
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="notifications">Notifications</TabsTrigger>
    </TabsList>
    <TabsContent value="account" class="text-sm text-muted-foreground">
      Update your account settings and profile information.
    </TabsContent>
    <TabsContent value="password" class="text-sm text-muted-foreground">
      Change your password or reset it here.
    </TabsContent>
    <TabsContent value="notifications" class="text-sm text-muted-foreground">
      Configure how and when you get notified.
    </TabsContent>
  </Tabs>
);`;

const disabledCode = `import { Tabs, TabsList, TabsTrigger } from "@neut/ui";

export default () => (
  <Tabs defaultValue="home" class="w-full max-w-md">
    <TabsList>
      <TabsTrigger value="home">Home</TabsTrigger>
      <TabsTrigger value="settings" disabled>
        Disabled
      </TabsTrigger>
    </TabsList>
  </Tabs>
);`;

const iconsCode = `import { Tabs, TabsList, TabsTrigger } from "@neut/ui";
import { AppWindowIcon, CodeIcon } from "lucide-solid";

export default () => (
  <Tabs defaultValue="preview" class="w-full max-w-md">
    <TabsList>
      <TabsTrigger value="preview">
        <AppWindowIcon />
        Preview
      </TabsTrigger>
      <TabsTrigger value="code">
        <CodeIcon />
        Code
      </TabsTrigger>
    </TabsList>
  </Tabs>
);`;

export default () => {
  return (
    <ComponentPage
      title="Tabs"
      description="A set of layered sections of content, displayed one at a time."
    >
      <Example
        name="Basic"
        description="Tabs with cards as content for each panel."
        code={basicCode}
      >
        <Tabs defaultValue="overview" class="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>
                  View your key metrics and recent project activity.
                </CardDescription>
              </CardHeader>
              <CardContent class="text-sm text-muted-foreground">
                You have 12 active projects and 3 pending tasks.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Track performance and user engagement metrics.
                </CardDescription>
              </CardHeader>
              <CardContent class="text-sm text-muted-foreground">
                Page views are up 25% compared to last month.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                  Generate and download your detailed reports.
                </CardDescription>
              </CardHeader>
              <CardContent class="text-sm text-muted-foreground">
                You have 5 reports ready and available to export.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and options.
                </CardDescription>
              </CardHeader>
              <CardContent class="text-sm text-muted-foreground">
                Configure notifications, security, and themes.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Example>

      <Example
        name="Line variant"
        description="Use the line variant for a minimal, underlined tab list."
        code={lineCode}
      >
        <Tabs defaultValue="overview" class="w-full max-w-md">
          <TabsList variant="line">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
        </Tabs>
      </Example>

      <Example
        name="Vertical"
        description="Stack tabs vertically for side navigation layouts."
        code={verticalCode}
      >
        <Tabs
          defaultValue="account"
          orientation="vertical"
          class="w-full max-w-md"
        >
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account" class="text-sm text-muted-foreground">
            Update your account settings and profile information.
          </TabsContent>
          <TabsContent value="password" class="text-sm text-muted-foreground">
            Change your password or reset it here.
          </TabsContent>
          <TabsContent
            value="notifications"
            class="text-sm text-muted-foreground"
          >
            Configure how and when you get notified.
          </TabsContent>
        </Tabs>
      </Example>

      <Example
        name="Disabled trigger"
        description="Disable individual triggers with the disabled prop."
        code={disabledCode}
      >
        <Tabs defaultValue="home" class="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="settings" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </Example>

      <Example
        name="With icons"
        description="Add icons to triggers for a more visual tab list."
        code={iconsCode}
      >
        <Tabs defaultValue="preview" class="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="preview">
              <AppWindowIcon />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code">
              <CodeIcon />
              Code
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </Example>
    </ComponentPage>
  );
};
