import React from "react";
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Home from './Home';
import InfoTour from './InfoTour';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/info-tour" element={<InfoTour />}/>
            </Routes>
        </>
    );
}

export default App;