import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../tr.all.header/Header';
import Menu from '../tr.all.menu/Menu';
import InfoPageTour from '../tr.top.info.tour/InfoPageTour';

import Hoocks from '../Hoocks';
import './pageRouterTour.scss'

import Aleks from '../assets/img/Александров/1.webp';
import dfdfdss from '../assets/1212.mp3';

function PageRouterTour() {
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
                        <div >
                            <InfoPageTour title='Александров - семейный тур' router='4 маршрута' price='Куплено'/>
                            <i className='back_btn'><Link to='/tour'>Назад</Link></i>
                            <div className='containet__wrapper_in-tour' style={{padding:'0'}}>
                                <Link to='' className='popopo' style={{paddingLeft:'20px'}}>
                                    <img style={{filter: 'brightness(0.8)'}} alt='' src={Aleks}/>
                                    <div className='sh_t__ op__sh_t'>
                                        <h4>Маршрут 1 - Александров </h4>
                                    </div>
                                    <div className='sh_popo__'>
                                        <audio controls="controls" className='audio_tour' id='player'>
                                            <source src={dfdfdss} type="audio/mp3" />
                                        </audio>
                                    </div>
                                </Link>
                            </div>
                            <div className='map__info_tour' style={{marginBottom:'80px'}}>
                                <h1>Ваш маршрут</h1>
                                <div>
                                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6a69bc47708634cb92c1e91fb62ff2684e9fe985d94c4b7a6b148210dca3efce&amp;source=constructor" width="400" height="280" frameborder="0"></iframe>
                                    <p><span style={{width:'8px'}}></span>Двигайтесь по кросной линии</p>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="opBox opBoxTwoo"></div>
            </div>
        </div>
    );
}

export default PageRouterTour;
