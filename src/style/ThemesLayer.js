import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./GlobalStyles";
import {darkTheme, lightTheme, ThemeColors} from "./Themes"
import ToggleThemeColorButton from "../components/elements/themebutton/ToggleThemeColorButton";

const themeLocalStorageKey = 'theme';

export const ThemesLayer = (props) => {
    const initialThemeState = localStorage.getItem(themeLocalStorageKey) === null
        ? ThemeColors.LIGHT
        : localStorage.getItem(themeLocalStorageKey)
    const [theme, setTheme] = useState(initialThemeState);

    const toggleTheme = () => {
        if (theme === ThemeColors.LIGHT) {
            setTheme(ThemeColors.DARK);
            localStorage.setItem(themeLocalStorageKey, ThemeColors.DARK);
        } else {
            setTheme(ThemeColors.LIGHT);
            localStorage.setItem(themeLocalStorageKey, ThemeColors.LIGHT);
        }
    }

    return (
        <ThemeProvider theme={theme === ThemeColors.LIGHT ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
                <ToggleThemeColorButton theme={theme} toggleTheme={toggleTheme}/>
                {props.children}
            </>
        </ThemeProvider>
    );
}

