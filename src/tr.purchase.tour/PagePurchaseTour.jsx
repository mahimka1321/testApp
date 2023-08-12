import React, { useState ,useRef } from "react";
import { Link } from "react-router-dom";

import Header from "../tr.all.header/Header";
import Menu from "../tr.all.menu/Menu";
import Comments from "../tr.comments/Comments";
import InfoPageTour from "../tr.top.info.tour/InfoPageTour";
import Hoocks from "../Hoocks";

import './pagePurchaseTour.scss';

import Aleks from '../assets/img/Александров/1.webp';

function PagePurchaseTour() {
    const {
        numTheme,setNumTheme,search_active
    }= Hoocks();

    return (
        <div className='bgb'>
        <Header setNumTheme={setNumTheme} numTheme={numTheme} search_active={search_active}/>
        <div className="opMbox">
            <Menu/>
                <div className='info__page_tour cl__container-size'
                    style={{
                        position:'relative',
                        zIndex:'2'
                    }}
                >
                    <div>
                        <InfoPageTour title='Александров - семейный тур' router='4 маршрута' price='799p'/>
                        <i className='back_btn'><Link to='/profile'>Назад</Link></i>
                        <div className='containet__wrapper_in-tour' style={{padding:'0'}}>
                            <Link to='/router-tour' className='popopo' style={{paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Введение</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>3 мин</p>
                                </div>
                            </Link>
                            <Link to='/router-tour' className='popopo' style={{paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 1</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>26 мин</p>
                                </div>
                            </Link>
                            <Link to='/router-tour' className='popopo' style={{paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 2</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>14 мин</p>
                                </div>
                            </Link>
                            <Link to='/router-tour' className='popopo' style={{paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 3</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>21 мин</p>
                                </div>
                            </Link>
                            <Link to='/router-tour' className='popopo' style={{paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 4</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>19 мин</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='container__comments cl__container-size'
                    style={{
                        paddingBottom: '80px'
                    }}>
                        <h1 className='name__comments_container' 
                            style={{
                                marginLeft: '20px'
                            }}
                        >Комментарии</h1>
                        <div className="comments__in_container">
                            <input className="input__field" placeholder="Написать комментарий"/>
                            <input className="comments__in_btn" type="button"/>
                        </div>
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                    </div>
                </div>

            <div className="opBox opBoxTwoo"></div>
        </div>
    </div>
    );
}

export default PagePurchaseTour;
