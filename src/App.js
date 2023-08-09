import React from "react";
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Home from './tr.home/Home';
import InfoTour from './tr.info/InfoTour';
import ShopTour from './tr.shop/ShopTour';
import MobMenu from './tr.all.menu/MobMenu';
import Profile from './tr.profile/Profile';
import PurchasePage from './tr.sh.purchase/PurchasePage';
import ScrollToTop from './ScrollToTop';

import './repeadCode.css'

function App() {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/profile" element={<Profile />}/>
                <Route path="/info-tour" element={<InfoTour />}/>
                <Route path="/shop-tour" element={<ShopTour />}/>
                <Route path="/purchase-tour" element={<PurchasePage />}/>
            </Routes>
            <MobMenu/>
        </>
    );
}

export default App;