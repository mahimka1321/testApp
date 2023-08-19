import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../tr.all.header/Header';

import WrapperTour from '../tr.i/WrapperTour';

import Hoocks from '../Hoocks';

import Menu from '../tr.all.menu/Menu';

import InfoPageTour from '../tr.top.info.tour/InfoPageTour';

import '../tr.info/infoTour.scss'

function InfoTour() {

    const {vlad} = Hoocks()
    return (
        <div className='bgb'>
            <div className="opMbox">
                <Menu/>
                <div className='info__page_tour cl__container-size'
style={{
    marginTop:'-0px',
    textAlign:'center',                    
    paddingBottom: '80px',
    borderRadius: '0px 0px 8px 8px'
}}>
                    <InfoPageTour title={vlad} router='7 туров' price='-'/>
                    <i className='back_btn_'><Link to='/'>Назад</Link></i>
                    <div className='menu_controls'>
                        <button className='btn__menu_controls controls__btn_active'>по цене 🠝</button>
                        <button className='btn__menu_controls'>по цене 🠟</button>
                        <button className='btn__menu_controls'>по кол-во 🠝</button>
                        <button className='btn__menu_controls'>по кол-во 🠟</button>
                        <button className='btn__menu_controls'>по рейтингу 🠝</button>
                        <button className='btn__menu_controls'>по рейтингу 🠟</button>
                    </div>
                    <div className='containet__wrapper_in-tour' style={{marginTop:'-0px'}}>
                        <WrapperTour title='Семейный тур' bottomTitle={vlad}  price={799 +'p'} time='1.4ч'/>
                        <WrapperTour title='Быстрый тур' bottomTitle={vlad}  price={349 +'p'} time='37мин'/>
                        <WrapperTour title='Про тур' bottomTitle={vlad}  price={1299 +'p'} time='2.5ч'/>
                        <WrapperTour title='Спортивный тур' bottomTitle={vlad}  price={499 +'p'} time='58мин'/>
                    </div>
                </div>
                <div className="opBox opBoxTwoo"></div>
            </div>
        </div>
    );
}

export default InfoTour;
