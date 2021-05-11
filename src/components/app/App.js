import './App.css';
import React, {useState} from 'react';
import Content from "../content/Content";
import {Header} from "../header/Header";
import {BrowserRouter} from 'react-router-dom';
import {NavBar} from "../navbar/NavBar";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "../../style/GlobalStyles";
import {darkTheme, lightTheme, ThemeColors} from "../../style/Themes"

export default function App() {
    const [theme, setTheme] = useState(ThemeColors.DARK);

    const toggleTheme = () => {
        if (theme === ThemeColors.LIGHT) {
            setTheme(ThemeColors.DARK);
        } else {
            setTheme(ThemeColors.LIGHT);
        }
    }

    return (
        <ThemeProvider theme={theme === ThemeColors.LIGHT ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
                <BrowserRouter>
                    <Header theme={theme} toggleTheme={toggleTheme}/>
                    <NavBar/>
                    <Content/>
                </BrowserRouter>
            </>
        </ThemeProvider>
    );
}
