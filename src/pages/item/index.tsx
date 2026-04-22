import {
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
import {
  BadgeCheck,
  ChevronRight,
  Inbox,
  Plus,
  ShieldAlert,
} from "lucide-solid";

export default () => {
  return (
    <>
      <div class="flex w-full max-w-md flex-col gap-6">
        <Item>
          <ItemMedia variant="icon">
            <Inbox />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Default Variant</ItemTitle>
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
            <ItemTitle>Outline Variant</ItemTitle>
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
            <ItemTitle>Muted Variant</ItemTitle>
            <ItemDescription>
              Muted background for secondary content.
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>

      <div class="flex w-full max-w-md flex-col gap-6">
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Basic Item</ItemTitle>
            <ItemDescription>
              A simple item with title and description.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Action
            </Button>
          </ItemActions>
        </Item>

        <Item as="a" href="#" variant="outline" size="sm">
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

      <div class="flex w-full max-w-lg flex-col gap-6">
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
        <Item variant="outline">
          <ItemMedia>
            <div class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-white dark:*:data-[slot=avatar]:ring-neutral-950 *:data-[slot=avatar]:grayscale">
              <Avatar class="hidden sm:flex">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar class="hidden sm:flex">
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>No Team Members</ItemTitle>
            <ItemDescription>
              Invite your team to collaborate on this project.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">
              Invite
            </Button>
          </ItemActions>
        </Item>
      </div>
    </>
  );
};
