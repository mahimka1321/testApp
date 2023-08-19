import React from 'react';
import { Link } from 'react-router-dom';


function NotPoage() {

    
    return (
        <div style={{

            display: 'flex',
            width: '100%',
            height: '100svh',
            justifyContent: 'center',
            alignItems: 'center'
        
        }}>
            <div style={{color:'#616161', marginLeft:'20px'}}>
                <h1>Страница не найдена или была неправильно загруженна</h1>
                <p>Найдите страницу в ручную</p>
                <Link style={{textDecoration:'none'}} to='/'>Вернуться на главную страницу</Link>
            </div>
        </div>
    );
}

export default NotPoage;
