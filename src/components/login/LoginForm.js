import React, {useRef, useState} from 'react';
import {LoginButton, LoginFormStyled, LoginInputText} from "./LoginFormStyled";
import './Login.css';

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

export const LoginForm = (props) => {
    const nameInputRef = useRef();
    const passwordInputRef = useRef();
    const [nameValid, setNameValid] = useState();
    const [passwordValid, setPasswordValid] = useState();
    const [formValid, setFormValid] = useState();

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

    return (
        <LoginFormStyled>
            <label style={nameLabelStyle}>Username</label>
            <LoginInputText onBlur={onBlurInputName} ref={nameInputRef} style={nameStyle}/>
            <br/>
            <label style={passwordLabelStyle}>Password</label>
            <LoginInputText onBlur={onBlurInputPassword} ref={passwordInputRef} style={passwordStyle}/>

            <LoginButton onClick={props.onClickHandler} disabled={!formValid}>
                Login
            </LoginButton>
        </LoginFormStyled>
    );
}
