import { useEffect, useState } from "react";
import Image from "next/image";
import styles from '../styles/Slider.module.scss'

export const Slider = () => {
    
    const images = [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80'
    ]

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        const interval = setInterval(() => {
            selectNewImage(selectedIndex);
          }, 4000);
          return () => clearInterval(interval);
    })

    const selectNewImage = (index) => {
        setLoaded(false);
        setTimeout(() => {
          setSelectedIndex(index === 3 ? 0 : index + 1);
        }, 300);
    };

    return (
        <div className={styles.slider}>

            <Image
                src={images[selectedIndex]}
                width={1000}
                height={500}
                alt=""
                className={`${loaded && styles.loaded} ${styles.img}`}
                onLoad={() => setLoaded(true)}
            />
        </div>    
    )
}