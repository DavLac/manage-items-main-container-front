import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {TabPanel} from "./TabPanel";

const generateTab = (tabData) => {
    return tabData.map((tab, index) => <Tab key={index} label={tab.title} icon={tab.icon} {...a11yProps(index)} />)
}

const generateContentTab = (tabDataContent, value) => {
    return tabDataContent.map((element, index) => <TabPanel key={index} value={value} index={index}>{element.content}</TabPanel>)
}

const a11yProps = (index) => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function CustomTabs(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {generateTab(props.tabs)}
                </Tabs>
            </AppBar>
            {generateContentTab(props.tabs, value)}
        </div>
    );
}
