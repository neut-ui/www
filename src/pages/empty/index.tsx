import { ComponentPage, Example } from "../../components/component-page";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
} from "@neut/ui";
import { ArrowUpRight, Bell, Cloud, Folder, RefreshCcw, Search } from "lucide-solid";

const usageCode = `import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@neut/ui";
import { Folder } from "lucide-solid";

export default () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Folder />
      </EmptyMedia>
      <EmptyTitle>No Projects Yet</EmptyTitle>
      <EmptyDescription>
        You haven't created any projects yet. Get started by creating your first
        project.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent class="flex-row justify-center gap-2">
      <Button>Create Project</Button>
      <Button variant="outline">Import Project</Button>
    </EmptyContent>
  </Empty>
);`;

const outlineCode = `import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@neut/ui";
import { Cloud } from "lucide-solid";

export default () => (
  <Empty class="border border-dashed">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Cloud />
      </EmptyMedia>
      <EmptyTitle>Cloud Storage Empty</EmptyTitle>
      <EmptyDescription>
        Upload files to your cloud storage to access them anywhere.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button variant="outline" size="sm">Upload Files</Button>
    </EmptyContent>
  </Empty>
);`;

const mutedCode = `import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@neut/ui";
import { Bell, RefreshCcw } from "lucide-solid";

export default () => (
  <Empty class="bg-muted/30">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Bell />
      </EmptyMedia>
      <EmptyTitle>No Notifications</EmptyTitle>
      <EmptyDescription class="max-w-xs">
        You're all caught up. New notifications will appear here.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button variant="outline" icon={<RefreshCcw />}>Refresh</Button>
    </EmptyContent>
  </Empty>
);`;

const avatarCode = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@neut/ui";

export default () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia>
        <Avatar class="size-12">
          <AvatarImage src="https://github.com/shadcn.png" class="grayscale" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
      </EmptyMedia>
      <EmptyTitle>User Offline</EmptyTitle>
      <EmptyDescription>
        This user is currently offline. You can leave a message to notify them
        or try again later.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button size="sm">Leave Message</Button>
    </EmptyContent>
  </Empty>
);`;

const searchCode = `import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
} from "@neut/ui";
import { Search } from "lucide-solid";

export default () => (
  <Empty>
    <EmptyHeader>
      <EmptyTitle>404 - Not Found</EmptyTitle>
      <EmptyDescription>
        The page you're looking for doesn't exist. Try searching for what you
        need below.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <InputGroup class="sm:w-3/4">
        <InputGroupInput placeholder="Try searching for pages..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>/</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <EmptyDescription>
        Need help? <a href="#">Contact support</a>
      </EmptyDescription>
    </EmptyContent>
  </Empty>
);`;

export default () => {
  return (
    <ComponentPage
      title="Empty"
      description="Displays an empty state placeholder with a title, description, and actions."
    >
      <Example
        name="Usage"
        description="A basic empty state with header, content, and actions."
        code={usageCode}
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Folder />
            </EmptyMedia>
            <EmptyTitle>No Projects Yet</EmptyTitle>
            <EmptyDescription>
              You haven't created any projects yet. Get started by creating your
              first project.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent class="flex-row justify-center gap-2">
            <Button>Create Project</Button>
            <Button variant="outline">Import Project</Button>
          </EmptyContent>
          <Button
            variant="link"
            component="a"
            href="#"
            size="sm"
            class="text-muted-foreground"
          >
            Learn More <ArrowUpRight data-icon="inline-end" />
          </Button>
        </Empty>
      </Example>

      <Example
        name="Outline"
        description="Use a dashed border to create an outlined empty state."
        code={outlineCode}
      >
        <Empty class="border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Cloud />
            </EmptyMedia>
            <EmptyTitle>Cloud Storage Empty</EmptyTitle>
            <EmptyDescription>
              Upload files to your cloud storage to access them anywhere.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" size="sm">
              Upload Files
            </Button>
          </EmptyContent>
        </Empty>
      </Example>

      <Example
        name="Muted background"
        description="A subtle muted background for quieter empty states."
        code={mutedCode}
      >
        <Empty class="bg-muted/30">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Bell />
            </EmptyMedia>
            <EmptyTitle>No Notifications</EmptyTitle>
            <EmptyDescription class="max-w-xs">
              You're all caught up. New notifications will appear here.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" icon={<RefreshCcw />}>
              Refresh
            </Button>
          </EmptyContent>
        </Empty>
      </Example>

      <Example
        name="With avatar"
        description="Use EmptyMedia to display an avatar in the empty state."
        code={avatarCode}
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <Avatar class="size-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  class="grayscale"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </EmptyMedia>
            <EmptyTitle>User Offline</EmptyTitle>
            <EmptyDescription>
              This user is currently offline. You can leave a message to notify
              them or try again later.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">Leave Message</Button>
          </EmptyContent>
        </Empty>
      </Example>

      <Example
        name="With search"
        description="Add an InputGroup to the EmptyContent for search-style empty states."
        code={searchCode}
      >
        <Empty>
          <EmptyHeader>
            <EmptyTitle>404 - Not Found</EmptyTitle>
            <EmptyDescription>
              The page you're looking for doesn't exist. Try searching for what
              you need below.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <InputGroup class="sm:w-3/4">
              <InputGroupInput placeholder="Try searching for pages..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Kbd>/</Kbd>
              </InputGroupAddon>
            </InputGroup>
            <EmptyDescription>
              Need help? <a href="#">Contact support</a>
            </EmptyDescription>
          </EmptyContent>
        </Empty>
      </Example>
    </ComponentPage>
  );
};
