import React from 'react';
import Aleks from './assets/img/Александров/1.jpg';
import './infoTour.scss';

function Comments() {

    return (
        <div className='item__comments'>
            <div>
                <img className='logo__person' alt='' src={Aleks}/>
                <div className='name__person'>
                    <h1>Максим Альбертов</h1>
                    <p>★ ★ ★ ★ ★</p>
                </div>
            </div>
            <p className='comments__person'>
            Типографский знак в виде небольшой, обычно пяти- или шестиконечной звёздочки, расположенной в строке или поднятой над строкой. Был введён во II веке до н. э. в текстах Александрийской библиотеки античным филологом Аристофаном Византийским для обозначения
            </p>
        </div>
    );
}

export default Comments;
