import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {tabDatas} from "../navbar/TabDatas";
import './Content.css';
import {NotFound} from "../pagenotfound/NotFound";
import {Welcome} from "../welcome/Welcome";

const generateContentTabs = () => {
    return tabDatas.map((tab, index) =>
        <Route key={index} path={tab.path} exact>
            <section className={"content-container"}>
                {tab.content}
            </section>
        </Route>
    )
}

const routeWelcome = () =>
    <Route path={'/'} exact>
        <Welcome username={"user"}/>
    </Route>

const routeNotFound = () =>
    <Route path={'*'}>
        <NotFound/>
    </Route>

export default function Content() {
    return (
        <Switch>
            {routeWelcome()}
            {generateContentTabs()}
            {routeNotFound()}
        </Switch>
    );
}
