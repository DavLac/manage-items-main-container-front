import React, {useContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import {tabDatas} from "../navbar/TabDatas";
import './MainSection.css';
import {NotFound} from "../pagenotfound/NotFound";
import {Welcome} from "../welcome/Welcome";
import {findLevelByName} from "../constants/user-constants";
import {UserDetailsContext} from "@bit/davlac.manage-items.userdetails";

const generateContentTabs = (userRole) => {
    return tabDatas.map((tab, index) => {
        if (findLevelByName(userRole) <= tab.role.level) {
            return <Route key={index} path={tab.path} exact>
                <section className={"content-container"}>
                    {tab.content}
                </section>
            </Route>
        }
    })
}

const routeWelcome = () =>
    <Route path={'/'} exact>
        <Welcome username={"user"}/>
    </Route>

const routeNotFound = () =>
    <Route path={'*'}>
        <NotFound/>
    </Route>

export default function MainSection() {
    const ctxUser = useContext(UserDetailsContext);

    return (
        <Switch>
            {routeWelcome()}
            {generateContentTabs(ctxUser.userDetails.role)}
            {routeNotFound()}
        </Switch>
    );
}
