export const ThemeColors = {
    LIGHT: 'light',
    DARK: 'dark'
}

const lightThemeColors = {
    background: '#e3e3e3',
    backgroundDarker: '#d9d9d9',
    backgroundDarker2: '#c2c2c2',
    primary: '#2e2e2e',
    secondary: '#4169E1'
};

const darkThemeColors = {
    background: '#4a4a4a',
    backgroundDarker: '#262626',
    backgroundDarker2: '#171717',
    primary: '#97ff82',
    secondary: '#a359a8'
};

export const lightTheme = {
    text: lightThemeColors.primary,
    secondary: lightThemeColors.secondary,
    background: lightThemeColors.background,
    backgroundDarker: lightThemeColors.backgroundDarker,
    backgroundDarker2: lightThemeColors.backgroundDarker2
}
export const darkTheme = {
    text: darkThemeColors.primary,
    secondary: darkThemeColors.secondary,
    background: darkThemeColors.background,
    backgroundDarker: darkThemeColors.backgroundDarker,
    backgroundDarker2: darkThemeColors.backgroundDarker2
}
