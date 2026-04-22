import {
  createContext,
  useContext,
  type Accessor,
  type Setter,
} from "solid-js";
import type { Theme } from "../types/theme";

interface AppContextValue {
  theme: Accessor<Theme>;
  setTheme: Setter<Theme>;
}

const AppContext = createContext<AppContextValue>();

export const AppProvider = AppContext.Provider;

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return ctx;
};
