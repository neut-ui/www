import { ComponentPage, Example } from "../../components/component-page";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@neut/ui";
import {
  BadgeCheck,
  ChevronRight,
  Inbox,
  MoreHorizontal,
  Plus,
  ShieldAlert,
} from "lucide-solid";

const variantsCode = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@neut/ui";
import { Inbox } from "lucide-solid";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-4">
    <Item>
      <ItemMedia variant="icon">
        <Inbox />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Default</ItemTitle>
        <ItemDescription>
          Transparent background with no border.
        </ItemDescription>
      </ItemContent>
    </Item>
    <Item variant="outline">
      <ItemMedia variant="icon">
        <Inbox />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Outline</ItemTitle>
        <ItemDescription>Outlined style with a visible border.</ItemDescription>
      </ItemContent>
    </Item>
    <Item variant="muted">
      <ItemMedia variant="icon">
        <Inbox />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Muted</ItemTitle>
        <ItemDescription>Muted background for secondary content.</ItemDescription>
      </ItemContent>
    </Item>
  </div>
);`;

const actionsCode = `import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@neut/ui";
import { Inbox, ShieldAlert } from "lucide-solid";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-4">
    <Item variant="outline">
      <ItemMedia variant="icon">
        <Inbox />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Inbox</ItemTitle>
        <ItemDescription>You have 4 unread messages.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Open
        </Button>
      </ItemActions>
    </Item>
    <Item variant="outline">
      <ItemMedia variant="icon">
        <ShieldAlert />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Security Alert</ItemTitle>
        <ItemDescription>
          New login detected from unknown device.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Review
        </Button>
      </ItemActions>
    </Item>
  </div>
);`;

const linkCode = `import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@neut/ui";
import { BadgeCheck, ChevronRight } from "lucide-solid";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-4">
    <Item component="a" href="#" variant="outline" size="sm">
      <ItemMedia>
        <BadgeCheck class="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Your profile has been verified.</ItemTitle>
      </ItemContent>
      <ItemActions>
        <ChevronRight class="size-4" />
      </ItemActions>
    </Item>
  </div>
);`;

const avatarCode = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@neut/ui";
import { Plus } from "lucide-solid";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-4">
    <Item variant="outline">
      <ItemMedia>
        <Avatar class="size-10">
          <AvatarImage src="https://github.com/evilrabbit.png" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Evil Rabbit</ItemTitle>
        <ItemDescription>Last seen 5 months ago</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          size="sm"
          variant="outline"
          class="rounded-full"
          aria-label="Invite"
          icon={<Plus />}
        />
      </ItemActions>
    </Item>
  </div>
);`;

const groupCode = `import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@neut/ui";
import { Inbox, ShieldAlert } from "lucide-solid";

export default () => (
  <ItemGroup class="w-full max-w-md">
    <ItemHeader>
      <ItemTitle>Notifications</ItemTitle>
    </ItemHeader>
    <Item>
      <ItemMedia variant="icon">
        <Inbox />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Inbox</ItemTitle>
        <ItemDescription>You have 4 unread messages.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Open
        </Button>
      </ItemActions>
    </Item>
    <ItemSeparator />
    <Item>
      <ItemMedia variant="icon">
        <ShieldAlert />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Security Alert</ItemTitle>
        <ItemDescription>New login detected from unknown device.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Review
        </Button>
      </ItemActions>
    </Item>
    <ItemFooter>
      <Button variant="ghost" size="sm">
        View all
      </Button>
    </ItemFooter>
  </ItemGroup>
);`;

const headerCode = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@neut/ui";

export default () => (
  <Item variant="outline" class="w-full max-w-md">
    <ItemHeader>
      <span class="text-xs font-medium text-neutral-500">Today</span>
      <span class="text-xs text-neutral-500">2:30 PM</span>
    </ItemHeader>
    <ItemContent>
      <ItemTitle>Design review</ItemTitle>
      <ItemDescription>
        Review the new dashboard layout with the team.
      </ItemDescription>
    </ItemContent>
  </Item>
);`;

const imageCode = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@neut/ui";

export default () => (
  <Item variant="outline" class="w-full max-w-md">
    <ItemMedia variant="image">
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&auto=format&fit=crop&q=60"
        alt="Workspace"
        class="object-cover"
      />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Workspace setup</ItemTitle>
      <ItemDescription>A guide to setting up your desk.</ItemDescription>
    </ItemContent>
  </Item>
);`;

const sizesCode = `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@neut/ui";
import { Inbox } from "lucide-solid";

export default () => (
  <div class="flex w-full max-w-md flex-col gap-3">
    <Item size="sm">
      <ItemMedia variant="icon">
        <Inbox />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Small item</ItemTitle>
        <ItemDescription>Compact spacing.</ItemDescription>
      </ItemContent>
    </Item>
    <Item size="xs">
      <ItemMedia variant="icon">
        <Inbox />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Extra small item</ItemTitle>
        <ItemDescription>Dense spacing for long lists.</ItemDescription>
      </ItemContent>
    </Item>
  </div>
);`;

const dropdownCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@neut/ui";
import { Inbox, MoreHorizontal } from "lucide-solid";

export default () => (
  <Item variant="outline" class="w-full max-w-md">
    <ItemMedia variant="icon">
      <Inbox />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Project update</ItemTitle>
      <ItemDescription>3 new comments on the design.</ItemDescription>
    </ItemContent>
    <ItemActions>
      <DropdownMenu>
        <DropdownMenuTrigger
          variant="ghost"
          size="xs"
          aria-label="Open menu"
          icon={<MoreHorizontal />}
        />
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Open</DropdownMenuItem>
          <DropdownMenuItem>Mark as read</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ItemActions>
  </Item>
);`;

export default () => {
  return (
    <ComponentPage
      title="Item"
      description="A flexible list row with media, content and actions, composable from several sub-components."
    >
      <Example
        name="Variants"
        description="Items come in ghost, outline and muted variants."
        code={variantsCode}
      >
        <div class="flex w-full max-w-md flex-col gap-4">
          <Item>
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Default</ItemTitle>
              <ItemDescription>
                Transparent background with no border.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Outline</ItemTitle>
              <ItemDescription>
                Outlined style with a visible border.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="muted">
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Muted</ItemTitle>
              <ItemDescription>
                Muted background for secondary content.
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </Example>

      <Example
        name="With actions"
        description="Place buttons in ItemActions to add interactive controls."
        code={actionsCode}
      >
        <div class="flex w-full max-w-md flex-col gap-4">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Inbox</ItemTitle>
              <ItemDescription>You have 4 unread messages.</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <ShieldAlert />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Security Alert</ItemTitle>
              <ItemDescription>
                New login detected from unknown device.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                Review
              </Button>
            </ItemActions>
          </Item>
        </div>
      </Example>

      <Example
        name="As link"
        description="Use the component prop to render an Item as an anchor."
        code={linkCode}
      >
        <div class="flex w-full max-w-md flex-col gap-4">
          <Item component="a" href="#" variant="outline" size="sm">
            <ItemMedia>
              <BadgeCheck class="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Your profile has been verified.</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRight class="size-4" />
            </ItemActions>
          </Item>
        </div>
      </Example>

      <Example
        name="With avatar media"
        description="ItemMedia can wrap an Avatar for user or team lists."
        code={avatarCode}
      >
        <div class="flex w-full max-w-md flex-col gap-4">
          <Item variant="outline">
            <ItemMedia>
              <Avatar class="size-10">
                <AvatarImage src="https://github.com/evilrabbit.png" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Evil Rabbit</ItemTitle>
              <ItemDescription>Last seen 5 months ago</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                size="sm"
                variant="outline"
                class="rounded-full"
                aria-label="Invite"
                icon={<Plus />}
              />
            </ItemActions>
          </Item>
        </div>
      </Example>

      <Example
        name="Grouped list"
        description="Compose ItemGroup with header, footer and separators."
        code={groupCode}
      >
        <ItemGroup class="w-full max-w-md">
          <ItemHeader>
            <ItemTitle>Notifications</ItemTitle>
          </ItemHeader>
          <Item>
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Inbox</ItemTitle>
              <ItemDescription>You have 4 unread messages.</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </ItemActions>
          </Item>
          <ItemSeparator />
          <Item>
            <ItemMedia variant="icon">
              <ShieldAlert />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Security Alert</ItemTitle>
              <ItemDescription>
                New login detected from unknown device.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                Review
              </Button>
            </ItemActions>
          </Item>
          <ItemFooter>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </ItemFooter>
        </ItemGroup>
      </Example>
      <Example
        name="With header"
        description="Use ItemHeader for timestamps or metadata above the content."
        code={headerCode}
      >
        <Item variant="outline" class="w-full max-w-md">
          <ItemHeader>
            <span class="text-xs font-medium text-neutral-500">Today</span>
            <span class="text-xs text-neutral-500">2:30 PM</span>
          </ItemHeader>
          <ItemContent>
            <ItemTitle>Design review</ItemTitle>
            <ItemDescription>
              Review the new dashboard layout with the team.
            </ItemDescription>
          </ItemContent>
        </Item>
      </Example>

      <Example
        name="With image"
        description="Use ItemMedia variant=image for thumbnails."
        code={imageCode}
      >
        <Item variant="outline" class="w-full max-w-md">
          <ItemMedia variant="image">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&auto=format&fit=crop&q=60"
              alt="Workspace"
              class="object-cover"
            />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Workspace setup</ItemTitle>
            <ItemDescription>A guide to setting up your desk.</ItemDescription>
          </ItemContent>
        </Item>
      </Example>

      <Example
        name="Sizes"
        description="Use sm and xs for compact lists."
        code={sizesCode}
      >
        <div class="flex w-full max-w-md flex-col gap-3">
          <Item size="sm">
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Small item</ItemTitle>
              <ItemDescription>Compact spacing.</ItemDescription>
            </ItemContent>
          </Item>
          <Item size="xs">
            <ItemMedia variant="icon">
              <Inbox />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Extra small item</ItemTitle>
              <ItemDescription>Dense spacing for long lists.</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </Example>

      <Example
        name="With dropdown"
        description="Place a DropdownMenu in ItemActions."
        code={dropdownCode}
      >
        <Item variant="outline" class="w-full max-w-md">
          <ItemMedia variant="icon">
            <Inbox />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Project update</ItemTitle>
            <ItemDescription>3 new comments on the design.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <DropdownMenu>
              <DropdownMenuTrigger
                variant="ghost"
                size="xs"
                aria-label="Open menu"
                icon={<MoreHorizontal />}
              />
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Open</DropdownMenuItem>
                <DropdownMenuItem>Mark as read</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ItemActions>
        </Item>
      </Example>
    </ComponentPage>
  );
};
