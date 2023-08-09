import React, { useRef } from "react";
import { Link } from "react-router-dom";

import './purchasePage.scss';

import Aleks_1 from "../assets/img/Александров/1.jpg";
function PurchasePage() {

    return (
        <div className="purchase_page">
            <div className="bax__purchase">
                <div className="purchase_info_check">
                    <h3>К оплате:</h3>
                    <p>799p</p>
                </div>
                <div className="purchase_info_tr">
                    <div className="container__i__tr">
                        <img alt="" src={Aleks_1}/>
                        <div>
                            <h4>Семейный тур</h4>
                            <h5>Александров</h5>
                        </div>
                        <h2>X</h2>
                    </div>
                    <div className="container__i__tr">
                        <img alt="" src={Aleks_1}/>
                        <div>
                            <h4>Семейный тур</h4>
                            <h5>Александров</h5>
                        </div>
                        <h2>X</h2>
                    </div>
                    <div className="container__i__tr">
                        <img alt="" src={Aleks_1}/>
                        <div>
                            <h4>Семейный тур</h4>
                            <h5>Александров</h5>
                        </div>
                        <h2>X</h2>
                    </div>
                </div>
                <Link to='/'>Оплатить</Link>
            </div>
        </div>
    );
}

export default PurchasePage;
