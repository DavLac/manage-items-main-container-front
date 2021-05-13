import React from 'react'
import {loginConstants} from "../login/LoginConstants";

const AuthContext = React.createContext({
    isLoggedIn: loginConstants.NOT_LOGGED
});

export default AuthContext;
