import React from 'react';
import {LogoutButtonStyled, StyledLogoutLink} from "./LoginFormStyled";
import './Login.css';

export const LogoutButton = (props) => {
    return (
        <LogoutButtonStyled onClick={props.onClickHandler}>
            <StyledLogoutLink to={'/'}>
                Logout
            </StyledLogoutLink>
        </LogoutButtonStyled>
    );
}
