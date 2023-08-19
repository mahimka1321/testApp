import React, { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import App from './App';

import './main.min.css';
import './repeadCode.css'
import './color.css';


(() => {
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map((item) => {
        const img = new Image();
        img.src = item.dataset.src;
        img.onload = () => {
            item.classList.remove('asyncImage');
            return item.nodeName === 'IMG' ? 
                item.src = item.dataset.src :        
                item.style.backgroundImage = `url(${item.dataset.src})`;
        };
    });
})();

const root = ReactDOMClient.createRoot(
    document.getElementById('root'));
root.render(
    <BrowserRouter basename="/testapp">
        <StrictMode>
           <App />
        </StrictMode>
    </BrowserRouter>
);