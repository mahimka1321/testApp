import React from 'react';
import { Link } from 'react-router-dom';


function NotPoage(props) {

    
    return (
        <>
            <h1>Страница не найдена или была неправильно загруженна</h1>
            <p>Найдите страницу в ручную</p>
            <Link to='/'>Вернуться на главную страницу</Link>
        </>
    );
}

export default NotPoage;
