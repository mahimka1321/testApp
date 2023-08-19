import React from "react";
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
        rorp,
        setRoutOP,
        setVlad
        
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
            <div className="opMbox">
                <Menu/>
                <div className='cntainer_content'
                style={{
                    position:'relative',
                    zIndex:'2',
                }}>
                    <div className='container__new_tours cl__container-size'>
                        <h2>Новинки</h2>
                        <div className="container__scroll">
                            {/*  Суздаль  */}
                            <NewTour 
                                imgTour={suzdal_tour_1}
                                opr='/suzdal' 
                                title="Суздаль" 
                                time="16" 
                                routes="4 тура"
                            />
                            {/*  Александров  */}
                            <NewTour 
                                imgTour={aleksandrov_tour_1} 
                                opr='/aleksandrov' 
                                title="Александров" 
                                time="11" 
                                routes="4 тура"
                            />
                            {/*  Владимир  */}
                            <NewTour 
                                imgTour={vladimir_tour_1}
                                opr='/vladimir' 
                                title="Владимир" 
                                time="28" 
                                routes="4 тура"
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
                        <h2>Туры</h2>
                        <div className='menu_controls'>
                            <button className='btn__menu_controls controls__btn_active'>Туры</button>
                            <button className='btn__menu_controls'>Места отдыха</button>
                            <button className='btn__menu_controls'>Кафе</button>
                            <button className='btn__menu_controls'>Гостиницы</button>
                            <button className='btn__menu_controls'>Для детей</button>
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
                                opr='/vladimir' 
                                title="Владимир" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Суздаль  */}
                            <Tour 
                                imgTour={suzdal_tour_1}
                                opr='/suzdal' 
                                title="Суздаль" 
                                time="16" 
                                routes="4 тура"
                            />
                            {/*  Александров  */}
                            <Tour 
                                imgTour={aleksandrov_tour_1} 
                                opr='/aleksandrov' 
                                title="Александров" 
                                time="11" 
                                routes="4 тура"
                            />
                            {/*  Боголюбово  */}
                            <Tour imgTour={bogolubovo_tour_1}
                                opr='/bogolubovo' 
                                title="Боголюбово" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Гороховец  */}
                            <Tour 
                                imgTour={gorohovec_tour_1}
                                opr='/gorohovec' 
                                title="Гороховец" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Гусь Хрустальный  */}
                            <Tour 
                                imgTour={goos_tour_1}
                            opr='/goos'  
                                title="Гусь Хрустальный" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Иваново  */}
                            <Tour 
                                imgTour={ivanovo_tour_1}
                                opr='/ivanovo' 
                                title="Иваново" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Калязин  */}
                            <Tour 
                                imgTour={kaliazin_tour_1}
                                opr='/kaliazin' 
                                title="Калязин" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Кидекша  */}
                            <Tour 
                                imgTour={kidekha_tour_1}
                                opr='/kideksha' 
                                title="Кидекша" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Кострома  */}
                            <Tour 
                                imgTour={kostrama_tour_1}
                                opr='/kostrama' 
                                title="Кострома" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Москва  */}
                            <Tour 
                                imgTour={moskva_tour_1}
                                opr='/moskva' 
                                title="Москва" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Переславль-Залевский  */}
                            <Tour 
                                imgTour={pereslav_tour_1}
                                opr='/pereslav' 
                                title="Переславль Залевский" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Плёс  */}
                            <Tour 
                                imgTour={ples_tour_1}
                            opr='/les'  
                                title="Плёс" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Ростов Великий  */}
                            <Tour 
                                imgTour={rostov_velikii_tour_1}
                                opr='/rostov-velikii' 
                                title="Ростов Великий" 
                                time="28" 
                                routes="4 тура"
                            /> 
                            {/*  Рыбинск  */}
                            <Tour 
                                imgTour={ribinsk_tour_1}
                                opr='/ribinsk' 
                                title="Рыбинск" 
                                time="28" 
                                routes="4 тура"
                            /> 
                            {/*  Сергиев Посад  */}
                            <Tour 
                                imgTour={sergeev_posad_tour_1}
                                opr='/sergeev-posad' 
                                title="Сергиев Посад" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Углич  */}
                            <Tour 
                                imgTour={yglich_tour_1}
                                opr='/yglich' 
                                title="Углич" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Юрьев-Польский  */}
                            <Tour 
                                imgTour={uyriev_polskiy_tour_1}
                                opr='/uyriev-polskiy' 
                                title="Юрьев Польский" 
                                time="28" 
                                routes="4 тура"
                            />
                            {/*  Ярославль  */}
                            <Tour 
                                imgTour={yaroslavl_tour_1}
                                opr='/yaroslavl' 
                                title="Ярославль" 
                                time="28" 
                                routes="4 тура"
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
