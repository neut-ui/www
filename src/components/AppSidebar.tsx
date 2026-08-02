import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@neut/ui";
import { clsx } from "@neut/ui/utils";
import { For } from "solid-js";
import { routes } from "../route";
import NavLink from "./NavLink";

const AppSidebar = () => {
  return (
    <Sidebar
      collapsible="none"
      class="[--sidebar-menu-width:--spacing(56)] lg:flex sticky bg-transparent top-0 overflow-hidden h-screen"
    >
      <div class="h-9" />
      <div
        class={clsx(
          "absolute top-8 z-10 h-8 w-(--sidebar-menu-width) shrink-0 blur-xs bg-linear-to-b",
          "from-white via-white/80 to-white/50",
          "dark:from-neutral-950 dark:via-neutral-950/80 dark:to-neutral-950/50",
        )}
      />
      <div
        class={clsx(
          "absolute top-12 right-2 bottom-0 lg:flex max-[64rem]:hidden h-full w-px bg-linear-to-b from-transparent via-neutral-200 dark:via-white/10 to-transparent",
        )}
      />
      <SidebarContent
        class={clsx(
          "gap-2 mx-auto no-scrollbar w-(--sidebar-menu-width) overflow-x-hidden px-2",
        )}
      >
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu class="gap-0.5">
              <For each={routes}>
                {({ name, path }) => (
                  <SidebarMenuItem>
                    <NavLink href={typeof path === "string" ? path : path[1]}>
                      {name}
                    </NavLink>
                  </SidebarMenuItem>
                )}
              </For>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
