import './Header.css';
import React from 'react';
import ToggleThemeColor from "../elements/ToggleThemeColor";
import {HeaderStyled} from "./Header.styled";
import "./Header.css";

export const Header = (props) => {
    return (
        <HeaderStyled>
            <ToggleThemeColor theme={props.theme} toggleTheme={props.toggleTheme}/>
            <h1>Manage items</h1>
        </HeaderStyled>
    );
}
