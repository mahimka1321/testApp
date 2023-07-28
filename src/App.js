import React from "react";
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Home from './Home';
import InfoTour from './InfoTour';
import ShopTour from './ShopTour';

import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/info-tour" element={<InfoTour />}/>
                <Route path="/shop-tour" element={<ShopTour />}/>
            </Routes>
        </>
    );
}

export default App;