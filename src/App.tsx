import type { Component, ParentProps } from "solid-js";
import { useTheme } from "./hooks/useTheme";
import { AppProvider, useAppContext } from "./contexts/App.context";
import { Button, SidebarProvider, useFontLoader } from "@neut/ui";
import AppSidebar from "./components/AppSidebar";
import { Moon, Sun } from "lucide-solid";

const Layout = (props: ParentProps) => {
  const { theme, setTheme } = useAppContext();

  return (
    <SidebarProvider
      class="max-h-screen"
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--sidebar-width-icon": "3rem",
      }}
    >
      <AppSidebar />
      <main class="py-4 w-full overflow-y-auto">
        <Button
          class="fixed right-4 top-4"
          icon={theme() === "light" ? <Moon /> : <Sun />}
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
        />

        <div class="flex flex-col items-center justify-center gap-6 min-h-full">
          {props.children}
        </div>
      </main>
    </SidebarProvider>
  );
};

const App: Component = (props: ParentProps) => {
  const { theme, setTheme } = useTheme();
  useFontLoader();

  return (
    <AppProvider value={{ theme, setTheme }}>
      <Layout>{props.children}</Layout>
    </AppProvider>
  );
};

export default App;
