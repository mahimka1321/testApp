import React, { useRef } from "react";
import { Link } from "react-router-dom";
/*  Шапка  */
import Header from '../tr.all.header/Header';
/*  Меню  */
import Menu from '../tr.all.menu/Menu';
/*  Туры  */
import Tour from '../tr.i/tr/Tour';
/*  Хуки  */
import Hoocks from '../Hoocks';
/*  Стили главной страницы  */
import './profile.scss';

import HoockProfil from "../HoockProfil";

/*  Суздаль  */
import suzdal_tour_1 from '../assets/img/Суздаль/1.webp';
/*  Владимир  */
import vladimir_tour_1 from '../assets/img/Владимир/1.webp';
/*  Александров  */
import aleksandrov_tour_1 from '../assets/img/Александров/1.webp';

function Profile() {

const {
    numTheme,setNumTheme,search_active, rorp,

}= Hoocks();

const {
    vladimir
} = HoockProfil();

    return (
        <div className="profile_page" onClick={rorp}>
            <div className="opMbox">
                <Menu/>
                <div className='cntainer_content'
                style={{
                    position:'relative',
                    zIndex:'2',
                }}>
                    <div className='container__profile_name cl__container-size'>
                        <div>
                            <img alt="" src={aleksandrov_tour_1}/>
                            <div>
                                <input placeholder="Вова"/>
                                <input placeholder="Невова"/>
                                <input placeholder="ВоваНевова@м.нет"/>
                            </div>
                        </div>
                    </div>
                    <div className='containet__profile-tour--content cl__container-size'>
                        <div className="btn__profile_controls">
                            <button className="controls__btn_active"><Link to=''>Купленные туры</Link></button>
                            <button><Link to=''>Статистика</Link></button>
                        </div>
                        <div 
                        style={{
                            textAlign:'center',                    
                            paddingBottom: '80px',
                        }} 
                        className="container__control_tour"
                        >
                            {vladimir}
                        </div>
                    </div>
                </div> 
                <div className="opBox opBoxTwoo"></div>
            </div>
        </div>
    );
}

export default Profile;
