import React from 'react';
import Aleks from './assets/img/Александров/1.jpg';
import './infoTour.scss';
function WrapperTour() {
    return (
        <div className='popopo'>
            <img alt='' src={Aleks}/>
            <div>
                <h4>Семейный тур</h4>
                <h5>Александров</h5>
            </div>
            <div style={{display:'flex', marginLeft:'160px', alignItems:'center'}}>
                <p className='star_'>
                    <span>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99998 0L9.16285 4.8856L14 5.66901L10.5 9.47191L11.326 14.8418L6.99998 12.3065L2.67372 14.8418L3.50001 9.47191L0 5.66901L4.83685 4.8856L6.99998 0Z" fill="#FAC917"/>
                        </svg>
                    </span>
                    4.9
                </p>
                <p className='__nopius'>7 маршрутов</p>
                <p className='__nopius'>43 мин</p>
                <p className='__nopius'>799 р</p>
            </div>
        </div>
    );
}

export default WrapperTour;
