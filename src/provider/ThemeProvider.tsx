import React, { FC, ReactNode, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ChangeCssRootVariables } from '../model/ChangeCssRootVariables';
import { Storage } from '../model/Storage';
import { themeChange, TypeTheme } from '../types/types';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
    const [theme, setTheme] = useState<TypeTheme>(Storage.getItem('theme') || themeChange.LIGHT);
    ChangeCssRootVariables(theme)
    const changeTheme = (theme: TypeTheme) => {
        Storage.setItem('theme', theme)
        setTheme(theme);
        ChangeCssRootVariables(theme)
    };

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                changeTheme
            }}
            {...props}
            >
            {children}
        </ThemeContext.Provider>
    );
};
