import React from 'react';
import {tabDatas} from "./TabDatas";
import './NavBar.css';
import {Tab} from "./tab/Tab";
import {NavStyled, StyledNavLink} from "./NavBar.styled"

const generateTabs = () => {
    return tabDatas.map((tab, index) =>
        <StyledNavLink key={index} to={tab.path} activeClassName="any">
            <Tab title={tab.title} icon={tab.icon}/>
        </StyledNavLink>)
}

export const NavBar = () => {
    return (
        <NavStyled>
            {generateTabs()}
        </NavStyled>
    );
}
