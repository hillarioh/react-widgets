import React from 'react';
import ReactDOM from 'react-dom';



const Root = () => {
        return (<h1>Am here</h1>);
}


window.addEventListener('DOMContentLoaded', (event) => {
    ReactDOM.render(<Root />,document.getElementById('main'));
});