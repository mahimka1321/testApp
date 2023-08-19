import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './tr.home/Home';
import InfoTour from './tr.info/InfoTour';
import ShopTour from './tr.shop/ShopTour';
import MobMenu from './tr.all.menu/MobMenu';
import Profile from './tr.profile/Profile';
import PurchasePage from './tr.sh.purchase/PurchasePage';
import PagePurchaseTour from './tr.purchase.tour/PagePurchaseTour';
import PageRouterTour from './tr.router.tour/PageRouterTour';
import ScrollToTop from './ScrollToTop';
import NotPoage from './NotPoage';
import Hoocks from './Hoocks';

import Header from "./tr.all.header/Header";

function App() {

    const {
        routOP
    }= Hoocks();
    
    return (
        <>
            <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/profile" element={<Profile />}/>
                <Route path={`/info-tour${routOP}`} element={<InfoTour />}/>
                <Route path="/shop-tour" element={<ShopTour />}/>
                <Route path="/purchase-tour" element={<PurchasePage />}/>
                <Route path="/tour" element={<PagePurchaseTour />}/>
                <Route path="/router-tour" element={<PageRouterTour />}/>
                <Route path="*" element={<NotPoage />}/>
            </Routes>
            <MobMenu/>
        </>
    );
}

export default App;