import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from './clock';
import {Tab} from './tabs';
import {Weather} from './weather';
import {Autocomplete} from './autocomplete';

const tabs = [{
    title: "jan",
    content: "I am January"
},{
    title: "feb",
    content: "I am february"
},{
    title: "mar",
    content: "I am march"
}];

const names = ["lewis","Lecrae","fello","safar","elijah","anand","taiwo","abdulaye","joy","chris"];

const Root = () => {
        return (
            <div className="main">
                
                <div style={{flexGrow:1}}><Tab tabs={tabs}/></div>
                <div style={{flexGrow:1}}>
                    <Clock />
                    <Weather />
                </div>
                <div style={{flexGrow:1}}><Autocomplete names={names} /></div>
            </div>
            
        );
}


window.addEventListener('DOMContentLoaded', (event) => {
    ReactDOM.render(<Root />,document.getElementById('main'));
});