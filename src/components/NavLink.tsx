import { SidebarMenuButton } from "@neut/ui";
import type { SidebarMenuButtonProps } from "@neut/ui/components/sidebar";
import { A, useMatch } from "@solidjs/router";

type NavLinkProps = SidebarMenuButtonProps<typeof A>;

export default (props: NavLinkProps) => {
  const match = useMatch(() => props.href);

  return (
    <SidebarMenuButton component={A} isActive={Boolean(match())} {...props} />
  );
};
