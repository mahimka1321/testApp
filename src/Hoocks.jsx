import React from "react"

export default function Hoocks() {
    let storageTheme = JSON.parse(localStorage.getItem("numTheme"));
    const [numTheme, setNumTheme] = React.useState(storageTheme || false)
    localStorage.setItem("numTheme", JSON.stringify(numTheme));

    
    if(numTheme === false) 
    {
        document.documentElement.style.setProperty('--colWhite_400', '#F4F4FF');
        document.documentElement.style.setProperty('--BH', 'rgba(0, 0, 0, 0.25)');
        document.documentElement.style.setProperty('--colDarck', '#000');
        document.documentElement.style.setProperty('--colBlueBtn', '#23A6FF');
    }

    if(numTheme === true) 
    {
        document.documentElement.style.setProperty('--colWhite_400', '#1d1f23');
        document.documentElement.style.setProperty('--BH', 'rgba(0, 0, 0, 0.60)');
        document.documentElement.style.setProperty('--colDarck', '#F4F4FF');
        document.documentElement.style.setProperty('--colBlueBtn', 'rgba(0, 0, 0, 0)');
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
    return{
        numTheme,setNumTheme,search_active, rorp
    }
}