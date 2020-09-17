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

const styles = {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    
}

const names = ["lewis","Lecrae","fello","safar","elijah","anand","taiwo","abdulaye","joy","chris"];

const Root = () => {
        return (
            <div className="main">
                <div style={styles}><Tab tabs={tabs}/></div>
                <div style={styles}>
                    <div className="middle">
                    <Clock />
                    <Weather />
                    </div>
                </div>
                <div style={styles}>
                    <div className="last"><Autocomplete names={names} /></div>
                    </div>
            </div>
            
        );
}


window.addEventListener('DOMContentLoaded', (event) => {
    ReactDOM.render(<Root />,document.getElementById('main'));
});