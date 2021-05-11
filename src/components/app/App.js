import './App.css';
import React from 'react';
import CustomTabs from "../elements/tabs/CustomTabs";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import User from "@bit/davlac.manage-items.user";
import AddIcon from "@material-ui/icons/Add";
import Items from "@bit/davlac.manage-items.items";
import SearchIcon from "@material-ui/icons/Search";
import Search from "@bit/davlac.manage-items.search";
import {Header} from "../header/Header";

const tabData = [
    {title: "Users", icon: <AccountCircleIcon/>, content: <User/>},
    {title: "Create item", icon: <AddIcon/>, content: <Items/>},
    {title: "Search items", icon: <SearchIcon/>, content: <Search/>}
]

export default function App() {
    return (
        <React.Fragment>
            <Header />
            <CustomTabs tabs={tabData} />
        </React.Fragment>
    );
}
