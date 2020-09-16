import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from './clock';
import {Tab} from './tabs';


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
            <div>
                <Clock />
                <Tab tabs={tabs}/>
            </div>
            
        );
}


window.addEventListener('DOMContentLoaded', (event) => {
    ReactDOM.render(<Root />,document.getElementById('main'));
});