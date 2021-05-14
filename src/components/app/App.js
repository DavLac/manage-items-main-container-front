import './App.css';
import React from 'react';
import MainSection from "../mainsection/MainSection";
import {Header} from "../header/Header";
import {NavBar} from "../navbar/NavBar";
import Login from "../login/Login";
import {SnakeBarContextProvider} from "@bit/davlac.manage-items.snakebar";
import {GlobalComponents} from "./GlobalComponents";

export default function App() {
    return (
        <GlobalComponents>
            <Header/>
            <SnakeBarContextProvider>
                <Login>
                    <NavBar/>
                    <MainSection/>
                </Login>
            </SnakeBarContextProvider>
        </GlobalComponents>
    );
}
