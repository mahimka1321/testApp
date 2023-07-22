import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import App from './App';

import './on.css';
import './color.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(

        <BrowserRouter>
            <App />
        </BrowserRouter>

);