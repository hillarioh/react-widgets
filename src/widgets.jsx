import React from 'react';
import ReactDOM from 'react-dom';
import {Clock} from './clock';

const Root = () => {
        return (
            <Clock />
        );
}


window.addEventListener('DOMContentLoaded', (event) => {
    ReactDOM.render(<Root />,document.getElementById('main'));
});