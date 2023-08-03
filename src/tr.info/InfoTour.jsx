import React from 'react';

import Header from '../tr.all.header/Header';

import WrapperTour from '../tr.i/WrapperTour';

import Hoocks from '../Hoocks';

import Menu from '../tr.all.menu/Menu';

import InfoPageTour from '../tr.top.info.tour/InfoPageTour';

import '../tr.info/infoTour.scss'

function InfoTour() {

    const {
        numTheme,setNumTheme,search_active, rorp
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
                }}>
                    <InfoPageTour />
                    <div className='menu_controls'>
                        <button className='btn__menu_controls controls__btn_active'>по цене 🠝</button>
                        <button className='btn__menu_controls'>по цене 🠟</button>
                        <button className='btn__menu_controls'>по кол-во 🠝</button>
                        <button className='btn__menu_controls'>по кол-во 🠟</button>
                        <button className='btn__menu_controls'>по рейтингу 🠝</button>
                        <button className='btn__menu_controls'>по рейтингу 🠟</button>
                    </div>
                    <div className='containet__wrapper_in-tour' style={{marginTop:'-0px'}}>
                        <WrapperTour title='Семейный тур' tourlink='/shop-tour'/>
                        <WrapperTour title='Семейный тур' tourlink='/shop-tour'/>
                        <WrapperTour title='Семейный тур' tourlink='/shop-tour'/>
                        <WrapperTour title='Семейный тур' tourlink='/shop-tour'/>
                        <WrapperTour title='Семейный тур' tourlink='/shop-tour'/>
                        <WrapperTour title='Семейный тур' tourlink='/shop-tour'/>
                        <WrapperTour title='Семейный тур' tourlink='/shop-tour'/>
                    </div>
                </div>
                <div className="opBox opBoxTwoo"></div>
            </div>
        </div>
    );
}

export default InfoTour;
