import React from "react"
import Hoocks from "./Hoocks"
import Tour from "./tr.i/tr/Tour"

export default function HoockProfil() {
    const {
        setVlad, vlad, imgTour
    } = Hoocks();


    var vladimir 


    let storageBtne = JSON.parse(localStorage.getItem("fd"));
    const [fd, setFd] =React.useState(storageBtne|| 0)
    localStorage.setItem("fd", JSON.stringify(fd));

    let storageBtn = JSON.parse(localStorage.getItem("numT"));
    const [numT, setNumT] = React.useState(storageBtn || '');
    localStorage.setItem("numT", JSON.stringify(numT));

    if(numT === vlad && fd === 1 ) {

        vladimir = <Tour 
            imgTour={imgTour}
            opr='' 
            link='/tour'
            title={vlad} 
            time="28" 
            routes="4 тура"
        />
    }



    return{
        vladimir,
        numT, setNumT, setFd
    }
}