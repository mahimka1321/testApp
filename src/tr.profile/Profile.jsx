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


/*  Суздаль  */
import suzdal_tour_1 from '../assets/img/Суздаль/1.webp';
/*  Владимир  */
import vladimir_tour_1 from '../assets/img/Владимир/1.webp';
/*  Александров  */
import aleksandrov_tour_1 from '../assets/img/Александров/1.webp';
/*  Боголюбово  */
import bogolubovo_tour_1 from '../assets/img/Боголюбово/1.webp';
/*  Гороховец  */
import gorohovec_tour_1 from '../assets/img/Гороховец/1.webp';
/*  Гусь Хрустальный  */
import goos_tour_1 from '../assets/img/Гусь_Хрустальный/1.webp';
/*  Иваново  */
import ivanovo_tour_1 from '../assets/img/Иваново/1.webp';
/*  Калязин  */
import kaliazin_tour_1 from '../assets/img/Калязин/1.webp';
/*  Кидекша  */
import kidekha_tour_1 from '../assets/img/Кидекша/1.webp';   
/*  Кострома  */
import kostrama_tour_1 from '../assets/img/Кострома/1.webp';   
/*  Москва  */
import moskva_tour_1 from '../assets/img/Москва/1.webp';
/*  Переславль-Залевский  */
import pereslav_tour_1 from '../assets/img/Переславль_Залевский/1.webp';


function Profile() {

const {
    numTheme,setNumTheme,search_active, rorp
}= Hoocks();

    return (
        <div className="profile_page" onClick={rorp}>
            <Header setNumTheme={setNumTheme} numTheme={numTheme} search_active={search_active}/>
            <div className="opMbox">
                <Menu/>
                <div className='cntainer_content'
                style={{
                    position:'relative',
                    zIndex:'2',
                }}>
                    <div className='container__profile_name'>
                        <div>
                            <img alt="" src={pereslav_tour_1}/>
                            <div>
                                <input placeholder="Вова"/>
                                <input placeholder="Невова"/>
                                <input placeholder="ВоваНевова@м.нет"/>
                            </div>
                        </div>
                    </div>
                    <div className='containet__profile-tour--content'>
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
                            {/*  Владимир  */}
                            <Tour 
                                imgTour={vladimir_tour_1}
                                title="Владимир" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Суздаль  */}
                            <Tour 
                                imgTour={suzdal_tour_1}
                                title="Суздаль" 
                                time="16" 
                                routes="8 маршрутов"
                            />
                            {/*  Александров  */}
                            <Tour 
                                imgTour={aleksandrov_tour_1} 
                                title="Александров" 
                                time="11" 
                                routes="5 маршрутов"
                            />
                            {/*  Боголюбово  */}
                            <Tour imgTour={bogolubovo_tour_1}
                                title="Боголюбово" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Гороховец  */}
                            <Tour 
                                imgTour={gorohovec_tour_1}
                                title="Гороховец" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Гусь Хрустальный  */}
                            <Tour 
                                imgTour={goos_tour_1}
                                title="Гусь Хрустальный" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Иваново  */}
                            <Tour 
                                imgTour={ivanovo_tour_1}
                                title="Иваново" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Калязин  */}
                            <Tour 
                                imgTour={kaliazin_tour_1}
                                title="Калязин" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Кидекша  */}
                            <Tour 
                                imgTour={kidekha_tour_1}
                                title="Кидекша" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Кострома  */}
                            <Tour 
                                imgTour={kostrama_tour_1}
                                title="Кострома" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Москва  */}
                            <Tour 
                                imgTour={moskva_tour_1}
                                title="Москва" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                            {/*  Переславль-Залевский  */}
                            <Tour 
                                imgTour={pereslav_tour_1}
                                title="Переславль-Залевский" 
                                time="28" 
                                routes="14 маршрутов"
                            />
                        </div>
                    </div>
                </div> 
                <div className="opBox opBoxTwoo"></div>
            </div>
        </div>
    );
}

export default Profile;
