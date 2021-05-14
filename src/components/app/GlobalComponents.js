import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ThemesLayer} from "../../style/ThemesLayer";
import {UserDetailsContextProvider} from "@bit/davlac.manage-items.userdetails";

export const GlobalComponents = (props) => {
    return (
        <ThemesLayer>
            <BrowserRouter>
                <UserDetailsContextProvider>
                    {props.children}
                </UserDetailsContextProvider>
            </BrowserRouter>
        </ThemesLayer>
    );
}
