import React, { useEffect, useState } from 'react'
import './carousel.css'

const Carousel = (props) => {
    const {children} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < 2) {
            setCurrentIndex( currentIndex + 1)
            if (currentIndex === 2) {
                setCurrentIndex(2)
            }
        }
    }

    if(currentIndex > 2) {
        setCurrentIndex(2)
    }
    if(currentIndex < 0) {
        setCurrentIndex(0)
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            if (currentIndex === 0) {
                setCurrentIndex(0)
            }
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 0) {
            next()
        }

        if (diff < 0) {
            prev()
        }

        setTouchPosition(null)
    }

    const [btnColor_0, setBtnColor_0] = useState("#F4F4FF");
    const [btnColor_1, setBtnColor_1] = useState("#F4F4FF");
    const [btnColor_2, setBtnColor_2] = useState("#F4F4FF");




    useEffect(()=> {
        if(currentIndex === 0){
            setBtnColor_0("#23A6FF")
        } else {
            setBtnColor_0("#F4F4FF")
        }
        if(currentIndex === 1){
            setBtnColor_1("#23A6FF")
        }
        else {
            setBtnColor_1("#F4F4FF")
        }
        if(currentIndex === 2){
            setBtnColor_2("#23A6FF")
        }
        else {
            setBtnColor_2("#F4F4FF")
        }
    },[currentIndex])
    


    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>
                    
                </div>
                <div className='container__wrapper_btn'>
                    <button className='btn_wrapper' 
                    onClick={()=>{
                        setCurrentIndex(0);    
                    }}
                    style={{ 
                        backgroundColor: btnColor_0
                    }}></button>
                    <button className='btn_wrapper' 
                    onClick={()=>{
                        setCurrentIndex(1)
                    }}
                    style={{ 
                        backgroundColor: btnColor_1
                    }}></button>
                    <button className='btn_wrapper' 
                    onClick={()=>{
                        setCurrentIndex(2)
                    }}
                    style={{ 
                        backgroundColor: btnColor_2
                    }}></button>
                </div>
            </div>
        </div>
    )
}

export default Carousel