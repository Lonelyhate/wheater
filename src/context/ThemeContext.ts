import { createContext } from "vm";
import { TypeTheme } from "../types/types";

interface Props {
    theme: TypeTheme,
    changeTheme: (theme: TypeTheme) => void
}

export const ThemeContext = createContext({
    theme: '',
    changeTheme: () => {}
})