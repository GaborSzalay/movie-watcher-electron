import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from '../views/app.jsx';

window.onload = function () {
    ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>,
        document.getElementById('root')
    );
}