import './App.css';
import React from 'react';
import Content from "../content/Content";
import {Header} from "../header/Header";
import {BrowserRouter} from 'react-router-dom';
import {NavBar} from "../navbar/NavBar";
import Login from "../login/Login";
import {ThemesLayer} from "../../style/ThemesLayer";

export default function App() {
    return (
        <ThemesLayer>
            <BrowserRouter>
                <Header/>
                <Login>
                    <NavBar/>
                    <Content/>
                </Login>
            </BrowserRouter>
        </ThemesLayer>
    );
}
