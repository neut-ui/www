import { ComponentPage, Example } from "../../components/component-page";
import { createSignal } from "solid-js";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@neut/ui";
import {
  ChevronRight,
  ChevronsUpDown,
  Command,
  Folder,
  Home,
  Inbox,
  Plus,
  Settings,
  User,
} from "lucide-solid";

const basicCode = `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@neut/ui";
import { Home, Inbox, Settings } from "lucide-solid";

export default () => (
  <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
    <Sidebar collapsible="none" class="border-r">
      <SidebarHeader>
        <div class="px-2 text-sm font-semibold">Acme Inc</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <Home />
                Home
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Inbox />
                Inbox
              </SidebarMenuButton>
              <SidebarMenuBadge>3</SidebarMenuBadge>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings />
                Settings
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset class="p-6">
      <h3 class="text-lg font-semibold">Dashboard</h3>
      <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        SidebarProvider + Sidebar + SidebarInset compose an app shell.
      </p>
    </SidebarInset>
  </SidebarProvider>
);`;

const submenuCode = `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@neut/ui";
import { ChevronRight, Home, Settings } from "lucide-solid";

export default () => (
  <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
    <Sidebar collapsible="none" class="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <Home />
                Home
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings />
                Settings
                <ChevronRight class="ml-auto" />
              </SidebarMenuButton>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>General</SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>Appearance</SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset class="p-6">
      <h3 class="text-lg font-semibold">Settings</h3>
      <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        Use SidebarMenuSub for nested navigation.
      </p>
    </SidebarInset>
  </SidebarProvider>
);`;

const collapsibleCode = `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@neut/ui";
import { Home, Inbox, Settings } from "lucide-solid";

export default () => (
  <SidebarProvider class="relative min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border [&_[data-slot=sidebar-container]]:absolute [&_[data-slot=sidebar-container]]:h-full">
    <Sidebar collapsible="icon" class="border-r">
      <SidebarHeader>
        <SidebarTrigger aria-label="Toggle Sidebar" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Home" isActive>
                <Home />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Inbox">
                <Inbox />
                <span>Inbox</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset class="p-6">
      <h3 class="text-lg font-semibold">Collapsible sidebar</h3>
      <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        Toggle the sidebar with the trigger in the header.
      </p>
    </SidebarInset>
  </SidebarProvider>
);`;

const controlledCode = `import { createSignal } from "solid-js";
import {
  Button,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@neut/ui";
import { Home, Inbox, Settings } from "lucide-solid";

export default () => {
  const [open, setOpen] = createSignal(true);

  return (
    <SidebarProvider
      open={open()}
      onOpenChange={setOpen}
      class="relative min-h-96 w-full max-w-2xl overflow-hidden rounded-lg border [&_[data-slot=sidebar-container]]:absolute [&_[data-slot=sidebar-container]]:h-full"
    >
      <Sidebar collapsible="offcanvas" class="border-r">
        <SidebarHeader>
          <div class="px-2 text-sm font-semibold">Acme Inc</div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <Home />
                  Home
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Inbox />
                  Inbox
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset class="p-6">
        <div class="flex items-center gap-2">
          <SidebarTrigger />
          <Button variant="outline" size="sm" onClick={() => setOpen(!open())}>
            {open() ? "Close sidebar" : "Open sidebar"}
          </Button>
        </div>
        <p class="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
          Sidebar is {open() ? "open" : "closed"}.
        </p>
      </SidebarInset>
    </SidebarProvider>
  );
};`;

const headerCode = `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@neut/ui";
import { ChevronsUpDown, Command, Home, Inbox } from "lucide-solid";

export default () => (
  <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
    <Sidebar collapsible="none" class="border-r">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div class="flex size-8 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900">
                <Command class="size-4" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Acme Inc</span>
                <span class="truncate text-xs text-neutral-500 dark:text-neutral-400">
                  Enterprise
                </span>
              </div>
              <ChevronsUpDown class="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarInput placeholder="Search..." />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <Home />
                Home
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Inbox />
                Inbox
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset class="p-6">
      <h3 class="text-lg font-semibold">Header</h3>
      <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        The header holds the workspace switcher and a search input.
      </p>
    </SidebarInset>
  </SidebarProvider>
);`;

const footerCode = `import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@neut/ui";
import { ChevronsUpDown, Home, Inbox, User } from "lucide-solid";

export default () => (
  <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
    <Sidebar collapsible="none" class="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <Home />
                Home
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Inbox />
                Inbox
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div class="flex size-8 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                <User class="size-4" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">shadcn</span>
                <span class="truncate text-xs text-neutral-500 dark:text-neutral-400">
                  m@example.com
                </span>
              </div>
              <ChevronsUpDown class="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    <SidebarInset class="p-6">
      <h3 class="text-lg font-semibold">Footer</h3>
      <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        Pin the account switcher to the bottom with SidebarFooter.
      </p>
    </SidebarInset>
  </SidebarProvider>
);`;

const groupActionCode = `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@neut/ui";
import { Home, Inbox, Plus, Settings } from "lucide-solid";

export default () => (
  <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
    <Sidebar collapsible="none" class="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction aria-label="Add project">
            <Plus />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <Home />
                  Overview
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Inbox />
                  Activity
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset class="p-6">
      <h3 class="text-lg font-semibold">Group action</h3>
      <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        SidebarGroupAction adds a quick action beside the group label.
      </p>
    </SidebarInset>
  </SidebarProvider>
);`;

const groupCollapsibleCode = `import { createSignal } from "solid-js";
import {
  Collapsible,
  CollapsibleContent,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@neut/ui";
import { ChevronRight, Folder, Home, Inbox, Plus } from "lucide-solid";

export default () => {
  const [open, setOpen] = createSignal(true);

  return (
    <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
      <Sidebar collapsible="none" class="border-r">
        <SidebarContent>
          <Collapsible open={open()} onOpenChange={setOpen}>
            <SidebarGroup>
              <SidebarGroupLabel
                component="button"
                class="w-full cursor-pointer select-none"
                onClick={() => setOpen(!open())}
              >
                <Folder />
                Projects
                <ChevronRight
                  class="ml-auto transition-transform"
                  classList={{ "rotate-90": open() }}
                />
              </SidebarGroupLabel>
              <SidebarGroupAction aria-label="Add project">
                <Plus />
              </SidebarGroupAction>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>
                        <Home />
                        Overview
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Inbox />
                        Activity
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
      <SidebarInset class="p-6">
        <h3 class="text-lg font-semibold">Collapsible group</h3>
        <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Toggle the whole group while keeping its action visible.
        </p>
      </SidebarInset>
    </SidebarProvider>
  );
};`;

const menuCollapsibleCode = `import { createSignal } from "solid-js";
import {
  Collapsible,
  CollapsibleContent,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@neut/ui";
import { ChevronRight, Home, Inbox, Settings } from "lucide-solid";

export default () => {
  const [open, setOpen] = createSignal(true);

  return (
    <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
      <Sidebar collapsible="none" class="border-r">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <Home />
                  Home
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Collapsible open={open()} onOpenChange={setOpen}>
                  <SidebarMenuButton onClick={() => setOpen(!open())}>
                    <Settings />
                    Settings
                    <ChevronRight
                      class="ml-auto transition-transform"
                      classList={{ "rotate-90": open() }}
                    />
                  </SidebarMenuButton>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>General</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>Appearance</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          Notifications
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Inbox />
                  Inbox
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset class="p-6">
        <h3 class="text-lg font-semibold">Collapsible menu</h3>
        <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Rotate the chevron and reveal a submenu for the active item.
        </p>
      </SidebarInset>
    </SidebarProvider>
  );
};`;

export default () => {
  const [controlledOpen, setControlledOpen] = createSignal(true);
  const [groupOpen, setGroupOpen] = createSignal(true);
  const [menuOpen, setMenuOpen] = createSignal(true);

  return (
    <ComponentPage
      title="Sidebar"
      description="A composable, themeable and customizable sidebar for application navigation."
    >
      <Example
        name="Basic"
        description="A sidebar shell with header, menu and content."
        code={basicCode}
      >
        <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
          <Sidebar collapsible="none" class="border-r">
            <SidebarHeader>
              <div class="px-2 text-sm font-semibold">Acme Inc</div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <Home />
                      Home
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Inbox />
                      Inbox
                    </SidebarMenuButton>
                    <SidebarMenuBadge>3</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      Settings
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset class="p-6">
            <h3 class="text-lg font-semibold">Dashboard</h3>
            <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              SidebarProvider + Sidebar + SidebarInset compose an app shell.
            </p>
          </SidebarInset>
        </SidebarProvider>
      </Example>

      <Example
        name="With submenu"
        description="Use SidebarMenuSub for nested navigation."
        code={submenuCode}
      >
        <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
          <Sidebar collapsible="none" class="border-r">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Platform</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <Home />
                      Home
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      Settings
                      <ChevronRight class="ml-auto" />
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>General</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>Appearance</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset class="p-6">
            <h3 class="text-lg font-semibold">Settings</h3>
            <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Use SidebarMenuSub for nested navigation.
            </p>
          </SidebarInset>
        </SidebarProvider>
      </Example>

      <Example
        name="Collapsible icon"
        description="Collapse the sidebar to icons and keep tooltips for each item."
        code={collapsibleCode}
      >
        <SidebarProvider class="relative min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border [&_[data-slot=sidebar-container]]:absolute [&_[data-slot=sidebar-container]]:h-full">
          <Sidebar collapsible="icon" class="border-r">
            <SidebarHeader>
              <SidebarTrigger aria-label="Toggle Sidebar" />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Home" isActive>
                      <Home />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Inbox">
                      <Inbox />
                      <span>Inbox</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Settings">
                      <Settings />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset class="p-6">
            <h3 class="text-lg font-semibold">Collapsible sidebar</h3>
            <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Toggle the sidebar with the trigger in the header.
            </p>
          </SidebarInset>
        </SidebarProvider>
      </Example>

      <Example
        name="Controlled"
        description="Drive the open state from your own signal with open and onOpenChange."
        code={controlledCode}
      >
        <SidebarProvider
          open={controlledOpen()}
          onOpenChange={setControlledOpen}
          class="relative min-h-96 w-full max-w-2xl overflow-hidden rounded-lg border [&_[data-slot=sidebar-container]]:absolute [&_[data-slot=sidebar-container]]:h-full"
        >
          <Sidebar collapsible="offcanvas" class="border-r">
            <SidebarHeader>
              <div class="px-2 text-sm font-semibold">Acme Inc</div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <Home />
                      Home
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Inbox />
                      Inbox
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      Settings
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset class="p-6">
            <div class="flex items-center gap-2">
              <SidebarTrigger />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setControlledOpen(!controlledOpen())}
              >
                {controlledOpen() ? "Close sidebar" : "Open sidebar"}
              </Button>
            </div>
            <p class="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
              Sidebar is {controlledOpen() ? "open" : "closed"}.
            </p>
          </SidebarInset>
        </SidebarProvider>
      </Example>

      <Example
        name="Header"
        description="Group a workspace switcher and search input in SidebarHeader."
        code={headerCode}
      >
        <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
          <Sidebar collapsible="none" class="border-r">
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg">
                    <div class="flex size-8 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900">
                      <Command class="size-4" />
                    </div>
                    <div class="grid flex-1 text-left text-sm leading-tight">
                      <span class="truncate font-semibold">Acme Inc</span>
                      <span class="truncate text-xs text-neutral-500 dark:text-neutral-400">
                        Enterprise
                      </span>
                    </div>
                    <ChevronsUpDown class="ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarInput placeholder="Search..." />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <Home />
                      Home
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Inbox />
                      Inbox
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset class="p-6">
            <h3 class="text-lg font-semibold">Header</h3>
            <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              The header holds the workspace switcher and a search input.
            </p>
          </SidebarInset>
        </SidebarProvider>
      </Example>

      <Example
        name="Footer"
        description="Pin an account switcher to the bottom with SidebarFooter."
        code={footerCode}
      >
        <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
          <Sidebar collapsible="none" class="border-r">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <Home />
                      Home
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Inbox />
                      Inbox
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg">
                    <div class="flex size-8 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                      <User class="size-4" />
                    </div>
                    <div class="grid flex-1 text-left text-sm leading-tight">
                      <span class="truncate font-semibold">shadcn</span>
                      <span class="truncate text-xs text-neutral-500 dark:text-neutral-400">
                        m@example.com
                      </span>
                    </div>
                    <ChevronsUpDown class="ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset class="p-6">
            <h3 class="text-lg font-semibold">Footer</h3>
            <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Pin the account switcher to the bottom with SidebarFooter.
            </p>
          </SidebarInset>
        </SidebarProvider>
      </Example>

      <Example
        name="Group action"
        description="Add a quick action beside a group label with SidebarGroupAction."
        code={groupActionCode}
      >
        <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
          <Sidebar collapsible="none" class="border-r">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupAction aria-label="Add project">
                  <Plus />
                </SidebarGroupAction>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>
                        <Home />
                        Overview
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Inbox />
                        Activity
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings />
                        Settings
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset class="p-6">
            <h3 class="text-lg font-semibold">Group action</h3>
            <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              SidebarGroupAction adds a quick action beside the group label.
            </p>
          </SidebarInset>
        </SidebarProvider>
      </Example>

      <Example
        name="Collapsible group"
        description="Collapse a whole group while keeping its action visible."
        code={groupCollapsibleCode}
      >
        <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
          <Sidebar collapsible="none" class="border-r">
            <SidebarContent>
              <Collapsible open={groupOpen()} onOpenChange={setGroupOpen}>
                <SidebarGroup>
                  <SidebarGroupLabel
                    component="button"
                    class="w-full cursor-pointer select-none"
                    onClick={() => setGroupOpen(!groupOpen())}
                  >
                    <Folder />
                    Projects
                    <ChevronRight
                      class="ml-auto transition-transform"
                      classList={{ "rotate-90": groupOpen() }}
                    />
                  </SidebarGroupLabel>
                  <SidebarGroupAction aria-label="Add project">
                    <Plus />
                  </SidebarGroupAction>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                            <Home />
                            Overview
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Inbox />
                            Activity
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            </SidebarContent>
          </Sidebar>
          <SidebarInset class="p-6">
            <h3 class="text-lg font-semibold">Collapsible group</h3>
            <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Toggle the whole group while keeping its action visible.
            </p>
          </SidebarInset>
        </SidebarProvider>
      </Example>

      <Example
        name="Collapsible menu"
        description="Rotate a chevron and reveal a submenu with Collapsible and SidebarMenuSub."
        code={menuCollapsibleCode}
      >
        <SidebarProvider class="min-h-80 w-full max-w-2xl overflow-hidden rounded-lg border">
          <Sidebar collapsible="none" class="border-r">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <Home />
                      Home
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Collapsible open={menuOpen()} onOpenChange={setMenuOpen}>
                      <SidebarMenuButton
                        onClick={() => setMenuOpen(!menuOpen())}
                      >
                        <Settings />
                        Settings
                        <ChevronRight
                          class="ml-auto transition-transform"
                          classList={{ "rotate-90": menuOpen() }}
                        />
                      </SidebarMenuButton>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>General</SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              Appearance
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              Notifications
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Inbox />
                      Inbox
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset class="p-6">
            <h3 class="text-lg font-semibold">Collapsible menu</h3>
            <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Rotate the chevron and reveal a submenu for the active item.
            </p>
          </SidebarInset>
        </SidebarProvider>
      </Example>
    </ComponentPage>
  );
};
