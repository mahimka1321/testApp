import React, { useState } from "react";
import { Link } from "react-router-dom";

import Hoocks from "../Hoocks";

import './purchasePage.scss';

import Aleks_1 from "../assets/img/Александров/1.webp";
import HoockProfil from "../HoockProfil";
function PurchasePage() {
    const {
        vlad, priceTour,infoTourTitle,imgTour
    }= Hoocks();

    const {
        numT, setNumT, setFd
    } = HoockProfil();


    const [styleTour, setStyleTour] = useState('flex')

    const [finPrice, setFinPrice] = useState(priceTour)

    function rem() {
        setStyleTour('none')
        setFinPrice(0)
    }

    const styleControlTour =  {
        display: `${styleTour}`
    }

    return (
        <>
            <div className="purchase_page">
                <div className="bax__purchase">
                    <div className="purchase_info_check">
                        <h3>К оплате:</h3>
                        <p>{finPrice}</p>
                    </div>
                    <div className="purchase_info_tr">
                        <div className="container__i__tr" style={styleControlTour}>
                            <img alt="" src={imgTour}/>
                            <div>
                                <h4>{infoTourTitle}</h4>
                                <h5>{vlad}</h5>
                            </div>
                            <h2 onClick={rem}>X</h2>
                        </div>
                    </div>
                    <ul>
                        <div>
                            <Link to='/shop-tour'>Назад</Link>
                            <Link  to='' onClick={()=>{setNumT(vlad); setFd(1); window.location.href = '/testapp/profile'}} style={styleControlTour}>Оплатить</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PurchasePage;
