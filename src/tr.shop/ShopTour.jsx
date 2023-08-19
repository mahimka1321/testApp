import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../tr.all.header/Header';
import Menu from '../tr.all.menu/Menu';
import Comments from '../tr.comments/Comments';
import InfoPageTour from '../tr.top.info.tour/InfoPageTour';

import Hoocks from '../Hoocks';
import './shopTour.scss'

import Aleks from '../assets/img/Александров/1.webp';

function ShopTour() {

    const {
        numTheme,setNumTheme,search_active, routOP, vlad, priceTour,infoTourTitle,imgTour
    }= Hoocks();

    

    return (
        <div className='bgb'>
            <div className="opMbox">
                <Menu/>
                    <div className='info__page_tour cl__container-size'
                        style={{
                            position:'relative',
                            zIndex:'2'
                        }}
                    >
                        <div >
                            <InfoPageTour title={vlad +' - '+ infoTourTitle} router='4 маршрута' price={priceTour}/>
                            <i className='back_btn'><Link to={`/info-tour${routOP}`}>Назад</Link></i>
                            <div className='containet__wrapper_in-tour' style={{padding:'0'}}>
                            <Link to='' className='popopo' style={{paddingLeft:'20px'}}>
                                <img alt='' src={imgTour}/>
                                <div className='sh_t__'>
                                    <h4>Введение</h4>
                                    <h5>{vlad}</h5>
                                </div>
                                <div className='sh_popo__'>
                                    <p className='__nopius'>6 мин</p>
                                </div>
                            </Link>
                            </div>
                            <div className='about__us_tour'>
                            <h1>О туре</h1>
                            <p>Этот тур подойдек каждому, как семье с детьми, так и бабке которая не знает куда слить свои миллиарды и еще какой то текст Конструктор карт Яндекса позволяет создать карту онлайн без навыков программирования. Можно отметить на карте нужные объекты, нарисовать схему проезда, маршрут прогулки или отметить зону доставки. ... Карты для печати в высоком разрешении можно создать только на основе слоя «Схема». Карты для печати в высоком разрешении можно создать только на компьютере в последних версиях браузеров Firefox, Chrome, Яндекс.Браузер, Edge, Safari иммирования. Можно отметить на карте нужные объекты, нарисоват</p>
                            </div>
                            <div className='map__info_tour'>
                            <h1>Область посещения</h1>
                            <div>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af43c6b160edf8bde304bf9f5a2e192689329022d48f6730c86dc07f36d45aceb&amp;source=constructor" width="400" height="280" frameBorder="0"></iframe>
                                <p><span></span>Красным маркером показанна зона которая будет посещена во время прохождения тура</p>
                            </div>
                            </div>
                            <div className="city__info_tour">
                            <h1>Краткое описание города</h1>
                            <p>Этот тур подойдек каждому, как семье с детьми, так и бабке которая не знает куда слить свои миллиарды и еще какой то текст Конструктор карт Яндекса позволяет создать карту онлайн без навыков программирования. Можно отметить на карте нужные объекты, нарисовать схему проезда, маршрут прогулки или отметить зону доставки. ... Карты для печати в высоком разрешении можно создать только</p>
                            <div>
                                <Link to={`/info-tour${routOP}`}>Назад</Link>
                                <Link to='/purchase-tour' >Купить тур</Link>
                                <p>После покупки тур будет в вашем личном кабинете </p>
                                <svg style={{
                                    display:'flex',
                                    height:'35px',
                                    alignItems:'center',
                                    marginLeft:'35px',
                                    cursor:'pointer'
                                }}
                                width="24" height="24" viewBox="0 0 24 24"
                                >
                                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" fill='#23A6FF'/>
                                </svg>
                            </div>
                            </div>
                        </div>
                        <div className='container__comments cl__container-size'
                        style={{
                            paddingBottom: '80px'
                        }}>
                        <h1 className='name__comments_container' style={{
    marginLeft: '20px'}}>Комментарии</h1>
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

export default ShopTour;
