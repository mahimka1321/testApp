import React from 'react';
import Header from './Header';
import Hoocks from './Hoocks';
import { Link } from 'react-router-dom';


function InfoTour() {

    const {
        numTheme,setNumTheme,search_active, rorp
    }= Hoocks();

    return (
        <div>
            <Header setNumTheme={setNumTheme} numTheme={numTheme} search_active={search_active}/>
        </div>
    );
}

export default InfoTour;
