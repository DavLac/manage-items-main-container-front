import React, {useContext, useEffect, useState} from 'react';
import './Login.css';
import {LoginForm} from "./LoginForm";
import {LogoutButton} from "./LogoutButton";
import {loginLocalStorageKey, loginConstants, userLocalStorageKey} from "./LoginConstants";
import AuthContext from "../context/AuthContext";
import {SnakeBarLevel} from "@bit/davlac.manage-items.snakebar";
import {CustomSnackBar} from "@bit/davlac.manage-items.snakebar";
import {SnakeBarContext} from "@bit/davlac.manage-items.snakebar";
import {UserDetailsContext} from "@bit/davlac.manage-items.userdetails";
import {useHistory} from 'react-router-dom';

export default function Login(props) {
    const initialLoginState = localStorage.getItem(loginLocalStorageKey) === null
        ? loginConstants.NOT_LOGGED
        : localStorage.getItem(loginLocalStorageKey)
    const [isLogged, setLogin] = useState(initialLoginState);
    const [displayLoggedIn, setDisplayLoggedIn] = useState(false);
    const ctxSnakeBar = useContext(SnakeBarContext);
    const ctxUser = useContext(UserDetailsContext);

    useEffect(() => {
        setDisplayLoggedIn(true);
    }, [isLogged])

    const displayAuthenticatedSnakeBar = () => {
        if (isLogged === loginConstants.LOGGED) {
            return <CustomSnackBar level={SnakeBarLevel.SUCCESS}
                                   message={'Authenticated'}
                                   openSnakeBar={ctxSnakeBar.openSnakeBar}
                                   handleClose={ctxSnakeBar.handleClose}/>
        }
    }

    const history = useHistory();

    const logoutOnclickHandler = (event) => {
        event.preventDefault();
        localStorage.removeItem(loginLocalStorageKey);
        localStorage.removeItem(userLocalStorageKey);
        setLogin(loginConstants.NOT_LOGGED);
        history.push('/');
    }

    // load user details if reload a page when user is logged in
    if(isLogged === loginConstants.LOGGED &&
        ctxUser.userDetails.name === undefined) {
        const userLocalStorage = localStorage.getItem(userLocalStorageKey);
        ctxUser.setUserDetails(JSON.parse(userLocalStorage));
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLogged,
            setIsLoggedIn: setLogin
        }}>
            {(isLogged === loginConstants.NOT_LOGGED) && <LoginForm/>}
            {isLogged === loginConstants.LOGGED && <LogoutButton onClickHandler={logoutOnclickHandler}/>}
            {isLogged === loginConstants.LOGGED && props.children}
            {displayLoggedIn && displayAuthenticatedSnakeBar()}
        </AuthContext.Provider>
    );
}
