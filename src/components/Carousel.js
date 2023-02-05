import { useState, useEffect } from 'react';
import styles from '../styles/Carousel.module.scss';


export const Carousel = (props) => {
    
    const {children} = props

    const [touchPosition, setTouchPosition] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

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
    
        if (diff > 5) {
            next()
        }
    
        if (diff < -5) {
            prev()
        }
    
        setTouchPosition(null)
    }

    const next = () => {
        
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
            
        }
    }
    
    const prev = () => {
        
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }
    
    const dotsArray = new Array(length).fill(null)

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
                <div 
                    className={styles.carouselContentWrapper} 
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div 
                        className={styles.carouselContent}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>
                </div>
            </div>
            <div className={styles.dots}>
                {
                    dotsArray.length && dotsArray.map((_, idx) => (
                        <div key={idx} className={`${styles.dot} ${idx === currentIndex && styles.active}`}>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}