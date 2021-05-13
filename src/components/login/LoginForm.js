import React, {useContext, useRef, useState} from 'react';
import {LoginButton, LoginFormStyled, LoginInputText} from "./LoginFormStyled";
import './Login.css';
import {CircularProgress} from "@material-ui/core";
import UserService from "../http/UserService";
import AuthContext from "../context/AuthContext";
import {loginConstants, loginLocalStorageKey, userLocalStorageKey} from "./LoginConstants";
import {CustomSnackBar} from "../elements/snackbar/CustomSnakeBar";
import {SnakeBarLevel} from "../elements/snackbar/SnakeBarLevel";
import SnakeBarContext from "../context/SnakeBarContext";
import {UserDetailsContext} from "../context/UserDetailsContext";
import {adminData} from "../constants/user-constants";

const validInput = {
    backgroundColor: 'white',
    borderColor: 'inherit'
}

const notValidInput = {
    backgroundColor: '#ffcfcc',
    borderColor: 'red'
}

const validLabel = {
    color: 'inherit'
}

const notValidLabel = {
    color: 'red'
}

export const LoginForm = () => {
    const ctxLogin = useContext(AuthContext);
    const ctxSnakeBar = useContext(SnakeBarContext);
    const ctxUser = useContext(UserDetailsContext);

    const nameInputRef = useRef();
    const passwordInputRef = useRef();

    const [nameValid, setNameValid] = useState();
    const [passwordValid, setPasswordValid] = useState();
    const [formValid, setFormValid] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const onBlurInputName = () => {
        if (nameInputRef.current.value.length > 0) {
            setNameValid(true);
        } else {
            setNameValid(false);
        }
        checkFormValid();
    }

    const onBlurInputPassword = () => {
        if (passwordInputRef.current.value.length > 0) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
        checkFormValid();
    }

    const checkFormValid = () => {
        if (passwordInputRef.current.value.length > 0 &&
            nameInputRef.current.value.length > 0) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }

    const checkValidity = (object) => object === undefined || object;
    const nameLabelStyle = checkValidity(nameValid) ? validLabel : notValidLabel;
    const nameStyle = checkValidity(nameValid) ? validInput : notValidInput;

    const passwordLabelStyle = checkValidity(passwordValid) ? validLabel : notValidLabel;
    const passwordStyle = checkValidity(passwordValid) ? validInput : notValidInput;

    const onSubmitLogin = (event) => {
        event.preventDefault();
        console.log('onSubmitLogin');

        setIsLoading(true);
        setIsError(false);

        // check 'admin / admin' login
        if (nameInputRef.current.value === 'admin' &&
            passwordInputRef.current.value === 'admin') {
            ctxUser.setUserDetails(adminData);
            handleSuccessLoginResponse(JSON.stringify(adminData));
            return;
        }

        userLoginCall();
    };

    const userLoginCall = () => {
        UserService.login({
            name: nameInputRef.current.value,
            password: passwordInputRef.current.value
        })
            .then(res => {
                const decodedUserDetailsString = atob(res.data.accessToken);
                ctxUser.setUserDetails(JSON.parse(decodedUserDetailsString));
                handleSuccessLoginResponse(decodedUserDetailsString);
            })
            .catch(error => {
                if (error.response) {
                    setErrorMessage(error.response.status + ' - ' + error.response.data.error);
                } else {
                    setErrorMessage(error.message);
                }
                setIsLoading(false);
                setIsError(true);
                ctxSnakeBar.setOpenSnakeBar(true);
            })
    }

    const handleSuccessLoginResponse = (userData) => {
        localStorage.setItem(userLocalStorageKey, userData);
        ctxSnakeBar.setOpenSnakeBar(true);
        ctxLogin.setIsLoggedIn(loginConstants.LOGGED);
        localStorage.setItem(loginLocalStorageKey, loginConstants.LOGGED);
    }

    return (
        <LoginFormStyled onSubmit={onSubmitLogin}>
            {isError &&
            <div className={'auth-failed'}>
                Fail to authenticate : username or password is incorrect
            </div>}

            <label style={nameLabelStyle}>Username</label>
            <LoginInputText onBlur={onBlurInputName} ref={nameInputRef} style={nameStyle}/>
            <br/>
            <label style={passwordLabelStyle}>Password</label>
            <LoginInputText type={'password'} onBlur={onBlurInputPassword} ref={passwordInputRef}
                            style={passwordStyle}/>

            {isLoading
                ? <CircularProgress color={'inherit'} style={{margin: 'auto', marginTop: '30px'}}/>
                : <LoginButton disabled={!formValid}>Login</LoginButton>}

            {isError && <CustomSnackBar level={SnakeBarLevel.ERROR}
                                        message={'ERROR : ' + errorMessage}
                                        openSnakeBar={ctxSnakeBar.openSnakeBar}
                                        handleClose={ctxSnakeBar.handleClose}/>}

            <p className={'admin-login'}>Use "admin/admin" to connect with admin rights</p>
        </LoginFormStyled>
    );
}
