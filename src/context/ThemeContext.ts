import { createContext } from "react";
import { themeChange, TypeTheme } from "../types/types";

interface ThemeContextProps {
    theme: TypeTheme,
    changeTheme: (theme: TypeTheme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: themeChange.LIGHT,
    changeTheme: () => {},
});