import React from 'react';
import './Tab.css';

export const Tab = (props) => {
    return (
        <div className={"Tab"}>
            <div>{props.icon}</div>
            <div>{props.title}</div>
        </div>
    );
}
