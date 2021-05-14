import React, {useContext} from 'react';
import {UserDetailsContext} from "@bit/davlac.manage-items.userdetails";

export const Welcome = () => {
    const ctxUser = useContext(UserDetailsContext);

    return (
        <h1>
            Welcome '{ctxUser.userDetails.name}' !
        </h1>
    );
}
