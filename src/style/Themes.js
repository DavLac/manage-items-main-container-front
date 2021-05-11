export const ThemeColors = {
    LIGHT: 'light',
    DARK: 'dark'
}

const lightThemeColors = {
    background: '#e3e3e3',
    backgroundDarker: '#d9d9d9',
    primary: '#2e2e2e',
    secondary: '#4169E1'
};

const darkThemeColors = {
    background: '#4a4a4a',
    backgroundDarker: '#262626',
    primary: '#97ff82',
    secondary: '#a359a8'
};

export const lightTheme = {
    text: lightThemeColors.primary,
    secondary: lightThemeColors.secondary,
    background: lightThemeColors.background,
    backgroundDarker: lightThemeColors.backgroundDarker
}
export const darkTheme = {
    text: darkThemeColors.primary,
    secondary: darkThemeColors.secondary,
    background: darkThemeColors.background,
    backgroundDarker: darkThemeColors.backgroundDarker
}
