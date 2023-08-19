import React from 'react';
import { Link } from 'react-router-dom';
import Hoocks from '../Hoocks';
import './wrapperTour.scss'

import Aleks from '../assets/img/Александров/img.tour/1.webp';


function WrapperTour(props) {

    const {vlad, setVlad, priceTour, setPriceTour, infoTourTitle, setInfoTourTitle,imgTour} = Hoocks()

    return ( 
        <div className='popopo' onClick={()=>{ window.location.href = '/testapp/shop-tour'; setPriceTour(props.price); setInfoTourTitle(props.title);}}>
            <div className='dfdsd'>
            <div style={{display:'flex', minWidth:'200px', maxWidth:'0px', width:'100%'}}>
                <img alt='' src={imgTour}/>
                <div className='name_tour_'>
                    <h4>{props.title}</h4>
                    <h5>{vlad}</h5>
                </div>
            </div>
            <div className='fdfd'>
                <p className='star_'>
                    <span>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99998 0L9.16285 4.8856L14 5.66901L10.5 9.47191L11.326 14.8418L6.99998 12.3065L2.67372 14.8418L3.50001 9.47191L0 5.66901L4.83685 4.8856L6.99998 0Z" fill="#FAC917"/>
                        </svg>
                    </span>
                    4.9
                </p>
                <p className='__nopius'>5 маршрута</p>
                <p className='__nopius'>{props.time}</p>
                <p className='__nopius'>{props.price}</p>
            </div>
            </div>
        </div>
    );
}

export default WrapperTour;
