import './App.css';
import React, {useState} from 'react';
import Content from "../content/Content";
import {Header} from "../header/Header";
import {BrowserRouter} from 'react-router-dom';
import {NavBar} from "../navbar/NavBar";
import Login from "../login/Login";
import {ThemesLayer} from "../../style/ThemesLayer";
import SnakeBarContext from "../context/SnakeBarContext";
import {UserDetailsContext} from "../context/UserDetailsContext";

export default function App() {
    const [userDetails, setUserDetails] = useState({});
    const [openSnakeBar, setOpenSnakeBar] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnakeBar(false);
    };

    return (
        <ThemesLayer>
            <BrowserRouter>
                <UserDetailsContext.Provider value={{
                    userDetails: userDetails,
                    setUserDetails: setUserDetails
                }}>
                    <Header/>
                    <SnakeBarContext.Provider value={{
                        openSnakeBar: openSnakeBar,
                        setOpenSnakeBar: setOpenSnakeBar,
                        handleClose: handleClose
                    }}>
                        <Login>
                            <NavBar/>
                            <Content/>
                        </Login>
                    </SnakeBarContext.Provider>
                </UserDetailsContext.Provider>
            </BrowserRouter>
        </ThemesLayer>
    );
}
