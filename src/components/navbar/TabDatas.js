import React from 'react';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import User from "@bit/davlac.manage-items.user";
import AddIcon from "@material-ui/icons/Add";
import Items from "@bit/davlac.manage-items.items";
import SearchIcon from "@material-ui/icons/Search";
import Search from "@bit/davlac.manage-items.search";
import {UserScopes} from "../constants/user-constants";

export const tabDatas = [
    {title: "Users", icon: <AccountCircleIcon/>, content: <User/>, path: '/users', role: UserScopes.ADMIN},
    {title: "Create item", icon: <AddIcon/>, content: <Items/>, path: '/items/create', role: UserScopes.ADMIN},
    {title: "Search items", icon: <SearchIcon/>, content: <Search/>, path: '/items/search', role: UserScopes.CLIENT}
]

