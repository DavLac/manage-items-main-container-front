import React from 'react';
import {LogoutButtonStyled} from "./LoginFormStyled";
import './Login.css';

export const LogoutButton = (props) => {
    return (
        <LogoutButtonStyled onClick={props.onClickHandler}>
            Logout
        </LogoutButtonStyled>
    );
}
