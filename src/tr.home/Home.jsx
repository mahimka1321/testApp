import React, { useRef } from "react";
/*  Шапка  */
import Header from '../tr.all.header/Header';
/*  Меню  */
import Menu from '../tr.all.menu/Menu';
/*  Новые туры  */
import NewTour from '../tr.i/tr.new/NewTour';
/*  Туры  */
import Tour from '../tr.i/tr/Tour';
/*  Хуки  */
import Hoocks from '../Hoocks';
/*  Стили главной страницы  */
import './home.scss';


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
/*  Плёс  */
import ples_tour_1 from '../assets/img/Плёс/1.webp';    
/*  Ростов Великий  */
import rostov_velikii_tour_1 from '../assets/img/Ростов_Великий/1.webp';
/*  Рыбинск  */
import ribinsk_tour_1 from '../assets/img/Рыбинск/1.webp';
/*  Сергиев Посад  */
import sergeev_posad_tour_1 from '../assets/img/Сергиев_Посад/1.webp';
/*  Углич  */
import yglich_tour_1 from '../assets/img/Углич/1.webp';
/*  Юрьев-Польский  */
import uyriev_polskiy_tour_1 from '../assets/img/Юрьев_Польский/1.webp';
/*  Ярославль  */
import yaroslavl_tour_1 from '../assets/img/Ярославль/1.webp';

function Home() {

const {
    numTheme,setNumTheme,search_active, rorp
}= Hoocks();

React.useEffect(()=>{
    function hasTouch() {
        return 'ontouchstart' in document.documentElement
               || navigator.maxTouchPoints > 0
               || navigator.msMaxTouchPoints > 0;
    }
    
    if (hasTouch()) { // remove all :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;
    
                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;
    
                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
},[])

    return (
        <div className="home_page" onClick={rorp}>
            <Header setNumTheme={setNumTheme} numTheme={numTheme} search_active={search_active}/>
            <div className="opMbox">
                <Menu/>
                <div className='cntainer_content'
                style={{
                    position:'relative',
                    zIndex:'2',
                }}>
                    <div className='container__new_tours cl__container-size'>
                        <h2>Новые туры</h2>
                        <div className="container__scroll">
                            {/*  Суздаль  */}
                            <NewTour 
                                imgTour={suzdal_tour_1}
                                tourlink='/info-tour'
                                title="Суздаль" 
                                time="16" 
                                routes="8 туров"
                            />
                            {/*  Александров  */}
                            <NewTour 
                                imgTour={aleksandrov_tour_1} 
                                tourlink='/info-tour'
                                title="Александров" 
                                time="11" 
                                routes="5 туров"
                            />
                            {/*  Владимир  */}
                            <NewTour 
                                imgTour={vladimir_tour_1}
                                tourlink='/info-tour' 
                                title="Владимир" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Боголюбово  */}
                            <NewTour 
                                imgTour={bogolubovo_tour_1}
                                tourlink='/info-tour' 
                                title="Боголюбово" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Гороховец  */}
                            <NewTour 
                                imgTour={gorohovec_tour_1}
                                tourlink='/info-tour' 
                                title="Гороховец" 
                                time="28" 
                                routes="14 туров"
                            />
                        </div>
                    </div>
                    <div className='containet__box_tours cl__container-size'>
                        <h2>Все туры</h2>
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
                                tourlink='/info-tour' 
                                title="Владимир" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Суздаль  */}
                            <Tour 
                                imgTour={suzdal_tour_1}
                                tourlink='/info-tour' 
                                title="Суздаль" 
                                time="16" 
                                routes="8 туров"
                            />
                            {/*  Александров  */}
                            <Tour 
                                imgTour={aleksandrov_tour_1} 
                                tourlink='info-tour'
                                title="Александров" 
                                time="11" 
                                routes="5 туров"
                            />
                            {/*  Боголюбово  */}
                            <Tour imgTour={bogolubovo_tour_1}
                            tourlink='/info-tour' 
                                title="Боголюбово" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Гороховец  */}
                            <Tour 
                                imgTour={gorohovec_tour_1}
                                tourlink='/info-tour' 
                                title="Гороховец" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Гусь Хрустальный  */}
                            <Tour 
                                imgTour={goos_tour_1}
                                tourlink='/info-tour' 
                                title="Гусь Хрустальный" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Иваново  */}
                            <Tour 
                                imgTour={ivanovo_tour_1}
                                tourlink='/info-tour' 
                                title="Иваново" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Калязин  */}
                            <Tour 
                                imgTour={kaliazin_tour_1}
                                tourlink='/info-tour' 
                                title="Калязин" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Кидекша  */}
                            <Tour 
                                imgTour={kidekha_tour_1}
                                tourlink='/info-tour' 
                                title="Кидекша" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Кострома  */}
                            <Tour 
                                imgTour={kostrama_tour_1}
                                tourlink='/info-tour' 
                                title="Кострома" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Москва  */}
                            <Tour 
                                imgTour={moskva_tour_1}
                                tourlink='/info-tour' 
                                title="Москва" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Переславль-Залевский  */}
                            <Tour 
                                imgTour={pereslav_tour_1}
                                tourlink='/info-tour' 
                                title="Переславль-Залевский" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Плёс  */}
                            <Tour 
                                imgTour={ples_tour_1}
                                tourlink='/info-tour' 
                                title="Плёс" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Ростов Великий  */}
                            <Tour 
                                imgTour={rostov_velikii_tour_1}
                                tourlink='/info-tour' 
                                title="Ростов Великий" 
                                time="28" 
                                routes="14 туров"
                            /> 
                            {/*  Рыбинск  */}
                            <Tour 
                                imgTour={ribinsk_tour_1}
                                tourlink='/info-tour' 
                                title="Рыбинск" 
                                time="28" 
                                routes="14 туров"
                            /> 
                            {/*  Сергиев Посад  */}
                            <Tour 
                                imgTour={sergeev_posad_tour_1}
                                tourlink='/info-tour' 
                                title="Сергиев Посад" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Углич  */}
                            <Tour 
                                imgTour={yglich_tour_1}
                                tourlink='/info-tour' 
                                title="Углич" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Юрьев-Польский  */}
                            <Tour 
                                imgTour={uyriev_polskiy_tour_1}
                                tourlink='/info-tour' 
                                title="Юрьев-Польский" 
                                time="28" 
                                routes="14 туров"
                            />
                            {/*  Ярославль  */}
                            <Tour 
                                imgTour={yaroslavl_tour_1}
                                tourlink='/info-tour' 
                                title="Ярославль" 
                                time="28" 
                                routes="14 туров"
                            />
                        </div>
                    </div>
                </div> 
                <div className="opBox opBoxTwoo"></div>
            </div>
        </div>
    );
}

export default Home;
