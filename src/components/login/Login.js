import React, {useState} from 'react';
import './Login.css';
import {LoginForm} from "./LoginForm";
import {LogoutButton} from "./LogoutButton";

const loginLocalStorageKey = 'isLogged';

const loginStatus = {
    NOT_LOGGED: '0',
    LOGGED: '1'
}

export default function Login(props) {
    const initialLoginState = localStorage.getItem(loginLocalStorageKey) === null
        ? loginStatus.NOT_LOGGED
        : localStorage.getItem(loginLocalStorageKey)
    const [isLogged, setLogin] = useState(initialLoginState);

    const loginOnclickHandler = (event) => {
        event.preventDefault();
        localStorage.setItem(loginLocalStorageKey, loginStatus.LOGGED);
        setLogin(loginStatus.LOGGED);
    }

    const logoutOnclickHandler = (event) => {
        event.preventDefault();
        localStorage.removeItem(loginLocalStorageKey);
        setLogin(loginStatus.NOT_LOGGED);
    }

    return (
        <>
            {isLogged === loginStatus.NOT_LOGGED && <LoginForm onClickHandler={loginOnclickHandler}/>}
            {isLogged === loginStatus.LOGGED && <LogoutButton onClickHandler={logoutOnclickHandler}/>}
            {isLogged === loginStatus.LOGGED && props.children}
        </>
    );
}
