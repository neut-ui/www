import { createEffect, createSignal } from "solid-js";
import type { Theme } from "../types/theme";

export const useTheme = () => {
  const [theme, setTheme] = createSignal<Theme>("light");

  createEffect(() => {
    document.documentElement.setAttribute("data-theme", theme());
  });

  return { theme, setTheme };
};
