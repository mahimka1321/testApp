import React, { useState ,useRef } from "react";
import { Link } from "react-router-dom";

import Header from "../tr.all.header/Header";
import Hoocks from "../Hoocks";

import './purchasePage.scss';

import Aleks_1 from "../assets/img/Александров/1.webp";
function PurchasePage() {

    const [priceTout, usePriceTour] = useState(799);

    const [quantityTours, setQuantityTours] = useState(1)

    const [styleTour, setStyleTour] = useState('flex')



    function rem() {

        setQuantityTours(quantityTours - 1)
        setStyleTour('none')
        if(quantityTours === 0) {
            setQuantityTours(0)
        }
    }



    console.log(quantityTours)

    const styleControlTour =  {
        display: `${styleTour}`
    }

    let allPrice = quantityTours*priceTout

    const {
        numTheme,setNumTheme,search_active
    }= Hoocks();
    


    return (
        <>
            <Header setNumTheme={setNumTheme} numTheme={numTheme} search_active={search_active}/>
            <div className="purchase_page">
                <div className="bax__purchase">
                    <div className="purchase_info_check">
                        <h3>К оплате:</h3>
                        <p>{allPrice}</p>
                    </div>
                    <div className="purchase_info_tr">
                        <div className="container__i__tr" style={styleControlTour}>
                            <img alt="" src={Aleks_1}/>
                            <div>
                                <h4>Семейный тур</h4>
                                <h5>Александров</h5>
                            </div>
                            <h2 onClick={rem}>X</h2>
                        </div>
                    </div>
                    <ul>
                        <div>
                            <Link to='/shop-tour'>Назад</Link>
                            <Link to='/' style={styleControlTour}>Оплатить</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PurchasePage;
