import React, { useState } from "react"


export default function Hoocks() {
    let storageTheme = JSON.parse(localStorage.getItem("numTheme"));
    const [numTheme, setNumTheme] = React.useState(storageTheme || false)
    localStorage.setItem("numTheme", JSON.stringify(numTheme));

    
    if(numTheme === false) 
    {
        document.documentElement.style.setProperty('--colWhite_400', '#F4F4FF');
        document.documentElement.style.setProperty('--BH', 'rgba(0, 0, 0, 0.25)');
        document.documentElement.style.setProperty('--colDarck', '#000');
        document.documentElement.style.setProperty('--colWhiteBtn', '#F4F4FF');
    }

    if(numTheme === true) 
    {
        document.documentElement.style.setProperty('--colWhite_400', '#1d1f23');
        document.documentElement.style.setProperty('--BH', 'rgba(0, 0, 0, 0.60)');
        document.documentElement.style.setProperty('--colDarck', '#F4F4FF');
        document.documentElement.style.setProperty('--colWhiteBtn', '#1d1f23');
    }


    const [op, setOp] = React.useState(0)

    function search_active() {
        if(op === 0) {
            let logo = document.getElementById('logo')
            let bntSubmit = document.getElementById('bntSubmit')
            logo.style.display = 'none'
            bntSubmit.style.display = 'block'
            setOp(1)
        }
    }

    function rorp() {
        if(op === 1) {
            let logo = document.getElementById('logo')
            let bntSubmit = document.getElementById('bntSubmit')
            logo.style.display = 'block'
            bntSubmit.style.display = 'none'
            setOp(0)
        }
    }

    let storageControlrouters = JSON.parse(localStorage.getItem("controlrouters"));
    const [controlrouters, setControlRouters] = useState(storageControlrouters || '')
    localStorage.setItem("controlrouters", JSON.stringify(controlrouters));


    let storageVlad = JSON.parse(localStorage.getItem("vlad"));
    const [vlad, setVlad] = useState(storageVlad || '')
    localStorage.setItem("vlad", JSON.stringify(vlad));


    let storageRoutOP = JSON.parse(localStorage.getItem("routOP"));
    const [routOP, setRoutOP] = useState(storageRoutOP || '')
    localStorage.setItem("routOP", JSON.stringify(routOP));

    let storageInfoTourTitle = JSON.parse(localStorage.getItem("infoTourTitle"));
    const [infoTourTitle, setInfoTourTitle] = useState(storageInfoTourTitle || '')
    localStorage.setItem("infoTourTitle", JSON.stringify(infoTourTitle));




    



    let storagePriceTour = JSON.parse(localStorage.getItem("priceTour"));
    const [priceTour, setPriceTour] = useState(storagePriceTour || Number)
    localStorage.setItem("priceTour", JSON.stringify(priceTour));

    let storageImgTour = JSON.parse(localStorage.getItem("imgTour"));
    const [imgTour, setImgTour] = useState(storageImgTour || {})
    localStorage.setItem("imgTour", JSON.stringify(imgTour));


        



    return{
        numTheme,setNumTheme,search_active, rorp, controlrouters, setControlRouters,

        vlad, setVlad, priceTour, setPriceTour, infoTourTitle, setInfoTourTitle,
        imgTour, setImgTour,

        routOP,setRoutOP,

    }
}

