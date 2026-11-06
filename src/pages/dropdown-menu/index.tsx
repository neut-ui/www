import { ComponentPage, Example } from "../../components/component-page";
import { For, createSignal } from "solid-js";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@neut/ui";
import {
  BadgeCheck,
  Bell,
  Building,
  CircleQuestionMark,
  CreditCard,
  Ellipsis,
  Eye,
  File,
  FileText,
  Folder,
  FolderOpen,
  FolderSearch,
  Keyboard,
  Languages,
  LayoutDashboard,
  LogOut,
  Mail,
  MessageSquare,
  Monitor,
  Moon,
  Palette,
  Settings,
  Sun,
  Trash2,
  User,
  Wallet,
} from "lucide-solid";

const basicCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@neut/ui";

export default () => (
  <DropdownMenu>
    <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>GitHub</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuItem disabled>API</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);`;

const submenuCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@neut/ui";

export default () => (
  <DropdownMenu>
    <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Message</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>More...</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuItem>New Team</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);`;

const shortcutsCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@neut/ui";

export default () => (
  <DropdownMenu>
    <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        Log out
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);`;

const checkboxesCode = `import { createSignal } from "solid-js";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@neut/ui";

export default () => {
  const [statusBar, setStatusBar] = createSignal(true);
  const [panel, setPanel] = createSignal(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant="outline">Checkboxes</DropdownMenuTrigger>
      <DropdownMenuContent class="min-w-40">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={statusBar()}
            onCheckedChange={setStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={panel()}
            onCheckedChange={setPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};`;

const radioCode = `import { createSignal } from "solid-js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@neut/ui";

export default () => {
  const [position, setPosition] = createSignal("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant="outline">Radio Group</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position()} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right" disabled>
              Right
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};`;

const destructiveCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@neut/ui";
import { Trash2 } from "lucide-solid";

export default () => (
  <DropdownMenu>
    <DropdownMenuTrigger variant="outline">Actions</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Share</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Archive</DropdownMenuItem>
      <DropdownMenuItem variant="destructive">
        <Trash2 />
        Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);`;

const sidesCode = `import { For } from "solid-js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@neut/ui";

const sides = ["top", "right", "bottom", "left"] as const;

export default () => (
  <div class="flex flex-wrap justify-center gap-2">
    <For each={sides}>
      {(side) => (
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline" class="capitalize">
            {side}
          </DropdownMenuTrigger>
          <DropdownMenuContent side={side}>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </For>
  </div>
);`;

const iconsCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@neut/ui";
import { CreditCard, LogOut, Settings, User } from "lucide-solid";

export default () => (
  <DropdownMenu>
    <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
        <User />
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CreditCard />
        Billing
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings />
        Settings
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <LogOut />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);`;

const insetCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@neut/ui";

export default () => (
  <DropdownMenu>
    <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
    <DropdownMenuContent class="w-48">
      <DropdownMenuLabel inset>Account</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem inset>Profile</DropdownMenuItem>
        <DropdownMenuItem inset>Billing</DropdownMenuItem>
        <DropdownMenuItem inset>Settings</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem inset>Log out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);`;

const nestedCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@neut/ui";

export default () => (
  <DropdownMenu>
    <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Message</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More options</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Copy link</DropdownMenuItem>
                <DropdownMenuItem>Share via SMS</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>
);`;

const checkboxesIconsCode = `import { createSignal } from "solid-js";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@neut/ui";
import { Bell, Mail, MessageSquare } from "lucide-solid";

export default () => {
  const [email, setEmail] = createSignal(true);
  const [sms, setSms] = createSignal(false);
  const [push, setPush] = createSignal(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant="outline">Notifications</DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Notification Preferences</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={email()}
            onCheckedChange={setEmail}
          >
            <Mail />
            Email notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={sms()} onCheckedChange={setSms}>
            <MessageSquare />
            SMS notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={push()} onCheckedChange={setPush}>
            <Bell />
            Push notifications
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};`;

const radioIconsCode = `import { createSignal } from "solid-js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@neut/ui";
import { Building, CreditCard, Wallet } from "lucide-solid";

export default () => {
  const [paymentMethod, setPaymentMethod] = createSignal("card");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant="outline">Payment Method</DropdownMenuTrigger>
      <DropdownMenuContent class="min-w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Select Payment Method</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={paymentMethod()}
            onValueChange={setPaymentMethod}
          >
            <DropdownMenuRadioItem value="card">
              <CreditCard />
              Credit Card
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="paypal">
              <Wallet />
              PayPal
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bank">
              <Building />
              Bank Transfer
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};`;

const avatarCode = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@neut/ui";
import { BadgeCheck, Bell, CreditCard, LogOut } from "lucide-solid";

export default () => (
  <DropdownMenu>
    <DropdownMenuTrigger variant="ghost" class="size-9 rounded-full p-0">
      <Avatar class="size-9">
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <BadgeCheck />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut />
        Sign Out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);`;

const complexCode = `import { createSignal } from "solid-js";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@neut/ui";
import {
  CircleQuestionMark,
  CreditCard,
  Ellipsis,
  Eye,
  File,
  FileText,
  Folder,
  FolderOpen,
  FolderSearch,
  Keyboard,
  Languages,
  LayoutDashboard,
  LogOut,
  Monitor,
  Moon,
  Palette,
  Settings,
  Sun,
  User,
} from "lucide-solid";

export default () => {
  const [sidebarOpen, setSidebarOpen] = createSignal(true);
  const [statusBarVisible, setStatusBarVisible] = createSignal(true);
  const [theme, setTheme] = createSignal("light");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger variant="outline">Complex Menu</DropdownMenuTrigger>
      <DropdownMenuContent class="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>File</DropdownMenuLabel>
          <DropdownMenuItem>
            <File />
            New File
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Folder />
            New Folder
            <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <FolderOpen />
              Open Recent
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Recent Projects</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <File />
                    Project Alpha
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <File />
                    Project Beta
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Ellipsis />
                      More Projects
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Project Gamma</DropdownMenuItem>
                        <DropdownMenuItem>Project Delta</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <FolderSearch />
                  Browse...
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>View</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={sidebarOpen()}
            onCheckedChange={setSidebarOpen}
          >
            <Eye />
            Show Sidebar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={statusBarVisible()}
            onCheckedChange={setStatusBarVisible}
          >
            <LayoutDashboard />
            Show Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Palette />
              Theme
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={theme()}
                    onValueChange={setTheme}
                  >
                    <DropdownMenuRadioItem value="light">
                      <Sun />
                      Light
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dark">
                      <Moon />
                      Dark
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="system">
                      <Monitor />
                      System
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <User />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Settings />
              Settings
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Keyboard />
                    Keyboard Shortcuts
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Languages />
                    Language
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CircleQuestionMark />
            Help & Support
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText />
            Documentation
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut />
          Sign Out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};`;

export default () => {
  const [statusBar, setStatusBar] = createSignal(true);
  const [panel, setPanel] = createSignal(false);
  const [position, setPosition] = createSignal("bottom");
  const [email, setEmail] = createSignal(true);
  const [sms, setSms] = createSignal(false);
  const [push, setPush] = createSignal(true);
  const [paymentMethod, setPaymentMethod] = createSignal("card");
  const [sidebarOpen, setSidebarOpen] = createSignal(true);
  const [statusBarVisible, setStatusBarVisible] = createSignal(true);
  const [theme, setTheme] = createSignal("light");

  return (
    <ComponentPage
      title="DropdownMenu"
      description="Displays a menu to the user, triggered by a button."
    >
      <Example
        name="Basic"
        description="A simple menu with groups and a separator."
        code={basicCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Submenu"
        description="Use DropdownMenuSub to nest secondary actions."
        code={submenuCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Shortcuts"
        description="Show keyboard shortcuts alongside menu items."
        code={shortcutsCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Checkboxes"
        description="Use DropdownMenuCheckboxItem for toggles."
        code={checkboxesCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">
            Checkboxes
          </DropdownMenuTrigger>
          <DropdownMenuContent class="min-w-40">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={statusBar()}
                onCheckedChange={setStatusBar}
              >
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={panel()}
                onCheckedChange={setPanel}
              >
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Radio"
        description="Use DropdownMenuRadioItem for exclusive choices."
        code={radioCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">
            Radio Group
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={position()}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right" disabled>
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Destructive"
        description='Style dangerous actions with variant="destructive".'
        code={destructiveCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">Actions</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Archive</DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <Trash2 />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>
      <Example
        name="Sides"
        description="Place the menu on any side of the trigger."
        code={sidesCode}
      >
        <div class="flex flex-wrap justify-center gap-2">
          <For each={["top", "right", "bottom", "left"] as const}>
            {(side) => (
              <DropdownMenu>
                <DropdownMenuTrigger variant="outline" class="capitalize">
                  {side}
                </DropdownMenuTrigger>
                <DropdownMenuContent side={side}>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </For>
        </div>
      </Example>

      <Example
        name="With icons"
        description="Combine icons with labels for quick scanning."
        code={iconsCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <User />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Inset"
        description="Use inset to align items with the menu label."
        code={insetCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
          <DropdownMenuContent class="w-48">
            <DropdownMenuLabel inset>Account</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem inset>Profile</DropdownMenuItem>
              <DropdownMenuItem inset>Billing</DropdownMenuItem>
              <DropdownMenuItem inset>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem inset>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Nested submenu"
        description="Nest submenus for deeper action hierarchies."
        code={nestedCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      More options
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Copy link</DropdownMenuItem>
                      <DropdownMenuItem>Share via SMS</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Checkboxes with icons"
        description="Add icons to checkbox items to reinforce each preference."
        code={checkboxesIconsCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">
            Notifications
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Notification Preferences</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={email()}
                onCheckedChange={setEmail}
              >
                <Mail />
                Email notifications
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={sms()}
                onCheckedChange={setSms}
              >
                <MessageSquare />
                SMS notifications
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={push()}
                onCheckedChange={setPush}
              >
                <Bell />
                Push notifications
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Radio with icons"
        description="Show radio options with icons for each payment method."
        code={radioIconsCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">
            Payment Method
          </DropdownMenuTrigger>
          <DropdownMenuContent class="min-w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Select Payment Method</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={paymentMethod()}
                onValueChange={setPaymentMethod}
              >
                <DropdownMenuRadioItem value="card">
                  <CreditCard />
                  Credit Card
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="paypal">
                  <Wallet />
                  PayPal
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bank">
                  <Building />
                  Bank Transfer
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Avatar trigger"
        description="Use an avatar as an account switcher trigger."
        code={avatarCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="ghost" class="size-9 rounded-full p-0">
            <Avatar class="size-9">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>

      <Example
        name="Complex"
        description="Combine groups, icons, shortcuts, checkboxes, radio choices and nested submenus."
        code={complexCode}
      >
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">
            Complex Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-52">
            <DropdownMenuGroup>
              <DropdownMenuLabel>File</DropdownMenuLabel>
              <DropdownMenuItem>
                <File />
                New File
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Folder />
                New Folder
                <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <FolderOpen />
                  Open Recent
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>Recent Projects</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <File />
                        Project Alpha
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <File />
                        Project Beta
                      </DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <Ellipsis />
                          More Projects
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>Project Gamma</DropdownMenuItem>
                            <DropdownMenuItem>Project Delta</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <FolderSearch />
                      Browse...
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>View</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={sidebarOpen()}
                onCheckedChange={setSidebarOpen}
              >
                <Eye />
                Show Sidebar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={statusBarVisible()}
                onCheckedChange={setStatusBarVisible}
              >
                <LayoutDashboard />
                Show Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Palette />
                  Theme
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                      <DropdownMenuRadioGroup
                        value={theme()}
                        onValueChange={setTheme}
                      >
                        <DropdownMenuRadioItem value="light">
                          <Sun />
                          Light
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="dark">
                          <Moon />
                          Dark
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="system">
                          <Monitor />
                          System
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuItem>
                <User />
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Settings />
                  Settings
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Keyboard />
                        Keyboard Shortcuts
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Languages />
                        Language
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <CircleQuestionMark />
                Help & Support
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText />
                Documentation
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOut />
              Sign Out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>
    </ComponentPage>
  );
};
