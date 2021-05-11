import React from 'react'
import {func, string} from 'prop-types';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import {ThemeColors} from "../../style/Themes";
import {ToggleTheme} from "./ToggleTheme.styled";

const ToggleThemeColor = ({theme, toggleTheme}) => {
    return (
        <ToggleTheme onClick={toggleTheme} className={"toggle-color-button"}>
            {(theme === ThemeColors.LIGHT)
                ? <Brightness4Icon fontSize="large"/>
                : <Brightness5Icon fontSize="large"/>}
        </ToggleTheme>
    );
};

ToggleThemeColor.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default ToggleThemeColor;
