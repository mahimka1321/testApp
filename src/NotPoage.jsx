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
            <div style={{color:'#616161', marginLeft:'20px', height:'auto'}}>
                <h1>Страница не найдена или была неправильно загруженна</h1>
                <h3>Найдите страницу вручную</h3>
                <Link style={{display:'block', textDecoration:'none', marginTop:'10px'}} to='/'>{`<`} Вернуться на главную страницу</Link>
            </div>
        </div>
    );
}

export default NotPoage;
