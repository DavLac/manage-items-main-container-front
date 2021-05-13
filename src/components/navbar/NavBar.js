import React, {useContext} from 'react';
import {tabDatas} from "./TabDatas";
import {Tab} from "./tab/Tab";
import {NavStyled, StyledNavLink} from "./NavBar.styled"
import {UserDetailsContext} from "../context/UserDetailsContext";
import {findLevelByName} from "../constants/user-constants";

const generateTabs = (userRole) => {
    return tabDatas.map((tab, index) => {
        if (findLevelByName(userRole) <= tab.role.level) {
            return <StyledNavLink key={index} to={tab.path} activeClassName="any">
                <Tab title={tab.title} icon={tab.icon}/>
            </StyledNavLink>
        }
    })
}

export const NavBar = () => {
    const ctxUser = useContext(UserDetailsContext);

    return (
        <NavStyled>
            {generateTabs(ctxUser.userDetails.role)}
        </NavStyled>
    );
}
