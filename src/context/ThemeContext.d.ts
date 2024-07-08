import { ReactNode } from "react";

export type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export declare const ThemeProvider: ({
  children,
}: {
  children: ReactNode;
}) => JSX.Element;

export declare const useThemeContext: () => ThemeContextType;
