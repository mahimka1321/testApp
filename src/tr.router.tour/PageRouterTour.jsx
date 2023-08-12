import React from 'react';
import { Link } from 'react-router-dom';




import {YMaps, Map,ObjectManager} from '@pbe/react-yandex-maps';



import Header from '../tr.all.header/Header';
import Menu from '../tr.all.menu/Menu';
import Comments from '../tr.comments/Comments';
import InfoPageTour from '../tr.top.info.tour/InfoPageTour';

import Hoocks from '../Hoocks';
import './pageRouterTour.scss'

import Aleks from '../assets/img/Александров/1.webp';

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
                                    <img alt='' src={Aleks}/>
                                    <div className='sh_t__'>
                                        <h4>Введение</h4>
                                        <h5>Александров</h5>
                                    </div>
                                    <div className='sh_popo__'>
                                        <p className='__nopius'>6 мин</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='map__info_tour' style={{marginBottom:'80px'}}>
                                <h1>Ваш маршрут</h1>
                                <div>
                                <YMaps>
  <Map
    defaultState={{
      center: [55.751574, 37.573856],
      zoom: 10,
    }}
  >
    <ObjectManager
      options={{
        clusterize: true,
        gridSize: 32,
      }}
      objects={{
        openBalloonOnClick: true,
        preset: "islands#greenDotIcon",
      }}
      clusters={{
        preset: "islands#redClusterIcons",
      }}
      filter={(object) => object.id % 2 === 0}
      defaultFeatures={objectManagerFeatures}
      modules={[
        "objectManager.addon.objectsBalloon",
        "objectManager.addon.objectsHint",
      ]}
    />
  </Map>
</YMaps>
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
