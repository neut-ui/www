import { ComponentPage, Example } from "../../components/component-page";
import { createSignal } from "solid-js";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@neut/ui";
import {
  Copy,
  CreditCard,
  MessageSquare,
  Share,
  Star,
  Trash,
  User,
  Users,
} from "lucide-solid";

const TriggerArea = (props: { children?: any }) => (
  <ContextMenuTrigger class="flex h-36 w-full max-w-72 items-center justify-center rounded-xl border border-dashed text-sm text-neutral-500 dark:text-neutral-400">
    {props.children ?? "Right click here"}
  </ContextMenuTrigger>
);

const basicCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@neut/ui";

export default () => (
  <ContextMenu>
    <ContextMenuTrigger class="flex h-36 w-full max-w-72 items-center justify-center rounded-xl border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Back</ContextMenuItem>
      <ContextMenuItem disabled>Forward</ContextMenuItem>
      <ContextMenuItem>Reload</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);`;

const demoCode = `import { createSignal } from "solid-js";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@neut/ui";

export default () => {
  const [bookmarks, setBookmarks] = createSignal(true);
  const [urls, setUrls] = createSignal(false);
  const [person, setPerson] = createSignal("pedro");

  return (
    <ContextMenu>
      <ContextMenuTrigger class="flex h-36 w-full max-w-72 items-center justify-center rounded-xl border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent class="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent class="w-44">
              <ContextMenuItem>Save Page...</ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem
            checked={bookmarks()}
            onCheckedChange={setBookmarks}
          >
            Show Bookmarks
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={urls()} onCheckedChange={setUrls}>
            Show Full URLs
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioGroup value={person()} onValueChange={setPerson}>
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};`;

const submenuCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@neut/ui";

export default () => (
  <ContextMenu>
    <ContextMenuTrigger class="flex h-36 w-full max-w-72 items-center justify-center rounded-xl border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Back</ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
        <ContextMenuSubContent class="w-48">
          <ContextMenuItem>Save Page As...</ContextMenuItem>
          <ContextMenuItem>Create Shortcut...</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Developer Tools</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem>Reload</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);`;

const shortcutsCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@neut/ui";

export default () => (
  <ContextMenu>
    <ContextMenuTrigger class="flex h-36 w-full max-w-72 items-center justify-center rounded-xl border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>
        Back
        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem disabled>
        Forward
        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        Reload
        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);`;

const checkboxesCode = `import { createSignal } from "solid-js";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@neut/ui";

export default () => {
  const [bookmarks, setBookmarks] = createSignal(true);
  const [urls, setUrls] = createSignal(false);

  return (
    <ContextMenu>
      <ContextMenuTrigger class="flex h-36 w-full max-w-72 items-center justify-center rounded-xl border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuCheckboxItem
          checked={bookmarks()}
          onCheckedChange={setBookmarks}
        >
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={urls()} onCheckedChange={setUrls}>
          Show Full URLs
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};`;

const radioCode = `import { createSignal } from "solid-js";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@neut/ui";

export default () => {
  const [person, setPerson] = createSignal("pedro");
  const [theme, setTheme] = createSignal("light");

  return (
    <ContextMenu>
      <ContextMenuTrigger class="flex h-36 w-full max-w-72 items-center justify-center rounded-xl border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioGroup value={person()} onValueChange={setPerson}>
            <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuRadioGroup value={theme()} onValueChange={setTheme}>
            <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};`;

const iconsCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@neut/ui";
import { Copy, Share, Star } from "lucide-solid";

export default () => (
  <ContextMenu>
    <ContextMenuTrigger class="flex h-36 w-full max-w-72 items-center justify-center rounded-xl border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>
        <Copy />
        Copy
      </ContextMenuItem>
      <ContextMenuItem>
        <Share />
        Share
      </ContextMenuItem>
      <ContextMenuItem>
        <Star />
        Add to Favorites
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);`;

const destructiveCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@neut/ui";
import { Trash } from "lucide-solid";

export default () => (
  <ContextMenu>
    <ContextMenuTrigger class="flex h-36 w-full max-w-72 items-center justify-center rounded-xl border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem variant="destructive">
        <Trash />
        Delete
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Save</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);`;

const groupsCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@neut/ui";
import { CreditCard, MessageSquare, User, Users } from "lucide-solid";

export default () => (
  <ContextMenu>
    <ContextMenuTrigger class="flex h-36 w-full max-w-72 items-center justify-center rounded-xl border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuGroup>
        <ContextMenuLabel>People</ContextMenuLabel>
        <ContextMenuItem>
          <User />
          Profile
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCard />
          Billing
        </ContextMenuItem>
      </ContextMenuGroup>
      <ContextMenuSeparator />
      <ContextMenuGroup>
        <ContextMenuLabel>Team</ContextMenuLabel>
        <ContextMenuItem>
          <Users />
          Team
        </ContextMenuItem>
        <ContextMenuItem>
          <MessageSquare />
          Subscription
        </ContextMenuItem>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
);`;

const customTriggerCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@neut/ui";

export default () => (
  <ContextMenu>
    <ContextMenuTrigger
      component="button"
      type="button"
      class="rounded-xl border bg-white px-4 py-2 text-sm dark:bg-neutral-950"
    >
      Button trigger
    </ContextMenuTrigger>
    <ContextMenuContent class="w-48">
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Billing</ContextMenuItem>
      <ContextMenuItem>Team</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);`;

const sidesCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@neut/ui";

export default () => (
  <div class="grid gap-6 sm:grid-cols-2">
    <ContextMenu>
      <ContextMenuTrigger class="flex h-36 items-center justify-center rounded-xl border border-dashed text-sm">
        side=inline-end
      </ContextMenuTrigger>
      <ContextMenuContent side="inline-end" class="w-48">
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
    <ContextMenu>
      <ContextMenuTrigger class="flex h-36 items-center justify-center rounded-xl border border-dashed text-sm">
        side=bottom align=center
      </ContextMenuTrigger>
      <ContextMenuContent side="bottom" align="center" class="w-48">
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Billing</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  </div>
);`;

export default () => {
  const [bookmarks, setBookmarks] = createSignal(true);
  const [urls, setUrls] = createSignal(false);
  const [person, setPerson] = createSignal("pedro");
  const [theme, setTheme] = createSignal("light");

  return (
    <ComponentPage
      title="ContextMenu"
      description="Displays a menu to the user, triggered by a right click or long press."
    >
      <Example
        name="Basic"
        description="A simple context menu with a few actions."
        code={basicCode}
      >
        <ContextMenu>
          <TriggerArea />
          <ContextMenuContent>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem disabled>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      <Example
        name="Demo"
        description="A full context menu combining shortcuts, a submenu, checkboxes and radio choices."
        code={demoCode}
      >
        <ContextMenu>
          <TriggerArea />
          <ContextMenuContent class="w-48">
            <ContextMenuGroup>
              <ContextMenuItem>
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem disabled>
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent class="w-44">
                  <ContextMenuItem>Save Page...</ContextMenuItem>
                  <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                  <ContextMenuItem>Name Window...</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem variant="destructive">
                    Delete
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuCheckboxItem
                checked={bookmarks()}
                onCheckedChange={setBookmarks}
              >
                Show Bookmarks
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={urls()}
                onCheckedChange={setUrls}
              >
                Show Full URLs
              </ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuRadioGroup value={person()} onValueChange={setPerson}>
                <ContextMenuRadioItem value="pedro">
                  Pedro Duarte
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">
                  Colm Tuite
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      <Example
        name="Submenu"
        description="Use ContextMenuSub to nest secondary actions."
        code={submenuCode}
      >
        <ContextMenu>
          <TriggerArea />
          <ContextMenuContent>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent class="w-48">
                <ContextMenuItem>Save Page As...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      <Example
        name="Shortcuts"
        description="Add ContextMenuShortcut to show keyboard hints."
        code={shortcutsCode}
      >
        <ContextMenu>
          <TriggerArea />
          <ContextMenuContent>
            <ContextMenuItem>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      <Example
        name="Checkboxes"
        description="Use ContextMenuCheckboxItem for toggles."
        code={checkboxesCode}
      >
        <ContextMenu>
          <TriggerArea />
          <ContextMenuContent>
            <ContextMenuCheckboxItem
              checked={bookmarks()}
              onCheckedChange={setBookmarks}
            >
              Show Bookmarks
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked={urls()} onCheckedChange={setUrls}>
              Show Full URLs
            </ContextMenuCheckboxItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      <Example
        name="Radio"
        description="Use ContextMenuRadioItem for exclusive choices."
        code={radioCode}
      >
        <ContextMenu>
          <TriggerArea />
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuRadioGroup value={person()} onValueChange={setPerson}>
                <ContextMenuRadioItem value="pedro">
                  Pedro Duarte
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">
                  Colm Tuite
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel>Theme</ContextMenuLabel>
              <ContextMenuRadioGroup value={theme()} onValueChange={setTheme}>
                <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
                <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
                <ContextMenuRadioItem value="system">
                  System
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      <Example
        name="Icons"
        description="Combine icons with labels for quick scanning."
        code={iconsCode}
      >
        <ContextMenu>
          <TriggerArea />
          <ContextMenuContent>
            <ContextMenuItem>
              <Copy />
              Copy
            </ContextMenuItem>
            <ContextMenuItem>
              <Share />
              Share
            </ContextMenuItem>
            <ContextMenuItem>
              <Star />
              Add to Favorites
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      <Example
        name="Destructive"
        description='Use variant="destructive" for dangerous actions.'
        code={destructiveCode}
      >
        <ContextMenu>
          <TriggerArea />
          <ContextMenuContent>
            <ContextMenuItem variant="destructive">
              <Trash />
              Delete
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Save</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>
      <Example
        name="Groups"
        description="Group related actions and separate them with dividers."
        code={groupsCode}
      >
        <ContextMenu>
          <TriggerArea />
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuItem>
                <User />
                Profile
              </ContextMenuItem>
              <ContextMenuItem>
                <CreditCard />
                Billing
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel>Team</ContextMenuLabel>
              <ContextMenuItem>
                <Users />
                Team
              </ContextMenuItem>
              <ContextMenuItem>
                <MessageSquare />
                Subscription
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      <Example
        name="Custom trigger"
        description="Render the trigger as any element with the component prop."
        code={customTriggerCode}
      >
        <ContextMenu>
          <ContextMenuTrigger
            component="button"
            type="button"
            class="rounded-xl border bg-white px-4 py-2 text-sm dark:bg-neutral-950"
          >
            Button trigger
          </ContextMenuTrigger>
          <ContextMenuContent class="w-48">
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      <Example
        name="Sides"
        description="Control menu placement with side and align props."
        code={sidesCode}
      >
        <div class="grid gap-6 sm:grid-cols-2">
          <ContextMenu>
            <TriggerArea>side=inline-end</TriggerArea>
            <ContextMenuContent side="inline-end" class="w-48">
              <ContextMenuItem>Profile</ContextMenuItem>
              <ContextMenuItem>Billing</ContextMenuItem>
              <ContextMenuItem>Team</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
          <ContextMenu>
            <TriggerArea>side=bottom align=center</TriggerArea>
            <ContextMenuContent side="bottom" align="center" class="w-48">
              <ContextMenuItem>Profile</ContextMenuItem>
              <ContextMenuItem>Billing</ContextMenuItem>
              <ContextMenuItem>Team</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </Example>
    </ComponentPage>
  );
};
