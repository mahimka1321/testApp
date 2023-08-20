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
            setCurrentIndex(prevState => prevState + 1)
            if(currentIndex > 2) {
                setCurrentIndex(2)
            }
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
            if(currentIndex < 0) {
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
                    <button className='btn_wrapper' onClick={()=>{setCurrentIndex(0)}}></button>
                    <button className='btn_wrapper' onClick={()=>{setCurrentIndex(1)}}></button>
                    <button className='btn_wrapper' onClick={()=>{setCurrentIndex(2)}}></button>
                </div>
            </div>
        </div>
    )
}

export default Carousel