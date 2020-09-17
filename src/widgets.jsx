import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from './clock';
import {Tab} from './tabs';
import {Weather} from './weather';

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

const Root = () => {
        return (
            <div className="main">
                
                <Tab style={{flexGrow:1}}  tabs={tabs}/>
                <div style={{flexGrow:1}}>
                    <Clock />
                    <Weather />
                </div>
                
            </div>
            
        );
}


window.addEventListener('DOMContentLoaded', (event) => {
    ReactDOM.render(<Root />,document.getElementById('main'));
});