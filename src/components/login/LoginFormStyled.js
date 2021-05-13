import styled from "styled-components";
import {Link} from "react-router-dom";

export const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 30px auto;
    width: 400px;
    box-shadow: 3px 3px 3px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.backgroundDarker};
`;

export const LoginInputText = styled.input`
    margin-top: 15px;
    height: 30px;
    font-size: 15px;
    padding-left: 5px;
    
    background-color: white;
    border-radius: 3px;
    border: 3px solid ${({theme}) => theme.secondary};
`;

export const LoginButton = styled.button`
    margin: auto;
    margin-top: 30px;
    height: 30px;
    font-size: 15px;
    padding-left: 5px;
    width: 200px;
   
    background-color: ${({theme}) => theme.secondary};
    border-radius: 5px;
    
    &:disabled {
        background-color: ${({theme}) => theme.background};
    }
`;

export const LogoutButtonStyled = styled.button`
    position: absolute;
    left: 15px;
    top: 15px;
    width: 200px;
    height: 30px;
    font-size: 15px;
    padding-left: 5px;
    width: 100px;
   
    background-color: ${({theme}) => theme.secondary};
    border-radius: 5px;
`;
