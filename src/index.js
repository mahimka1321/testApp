import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import App from './App';

import './main.min.css';
import './repeadCode.css'
import './color.css';


(() => {
    'use strict';
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

React.useEffect(()=>{
    function hasTouch() {
        return 'ontouchstart' in document.documentElement
               || navigator.maxTouchPoints > 0
               || navigator.msMaxTouchPoints > 0;
    }
    
    if (hasTouch()) { // remove all :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;
    
                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;
    
                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
},[])

const root = ReactDOMClient.createRoot(
    document.getElementById('root'));
root.render(
    <BrowserRouter basename="/testapp">
        <App />
    </BrowserRouter>
);