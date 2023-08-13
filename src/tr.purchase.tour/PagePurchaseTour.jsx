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
        numTheme,setNumTheme,search_active,controlrouters,setControlRouters
    }= Hoocks();


    const [opofpsdf, setOpofpsdf] = React.useState('')

    function op1() {
        setControlRouters('Вседение')
        setOpofpsdf('/router-tour')
    }
    function op2() {
        setControlRouters('Маршрут 1')
        setOpofpsdf('/router-tour')
    }
    function op3() {
        setControlRouters('Маршрут 2')
        setOpofpsdf('/router-tour')
    }
    function op4() {
        setControlRouters('Маршрут 3')
        setOpofpsdf('/router-tour')
    }
    function op5() {
        setControlRouters('Маршрут 4')
        setOpofpsdf('/router-tour')
    }

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
                        <InfoPageTour title='Александров - семейный тур' router='4 маршрута' price='Куплено'/>
                        <i className='back_btn'><Link to='/profile'>Назад</Link></i>
                        <div className='containet__wrapper_in-tour' style={{padding:'0'}}>
                        <p style={{marginLeft:'20px',padding:'5px', color:'#616161'}}>для перехода на маршрут, сделайте двойной клик</p>
                            <Link onClick={op1} to={opofpsdf} className='popopo' style={{paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Введение</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>3 мин</p>
                                </div>
                            </Link>
                            <Link onClick={op2} to={opofpsdf} className='popopo' style={{paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 1</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>26 мин</p>
                                </div>
                            </Link>
                            <Link onClick={op3} to={opofpsdf} className='popopo' style={{paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 2</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>14 мин</p>
                                </div>
                            </Link>
                            <Link onClick={op4} to={opofpsdf} className='popopo' style={{paddingLeft:'20px'}}>
                                <img alt='' src={Aleks}/>
                                <div className='sh_t__'>
                                    <h4>Маршрут 3</h4>
                                    <h5>Александров</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>21 мин</p>
                                </div>
                            </Link>
                            <Link onClick={op5} to={opofpsdf} className='popopo' style={{paddingLeft:'20px'}}>
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
