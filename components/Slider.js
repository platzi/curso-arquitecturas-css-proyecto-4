import { useEffect, useState } from "react";
import Image from "next/image";
import styles from '../styles/Slider.module.scss'

export const Slider = ({config}) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const {images, width, height} = config;

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
                width={width}
                height={height}
                alt=""
                className={`${loaded && styles.loaded} ${styles.img}`}
                onLoad={() => setLoaded(true)}
            />
        </div>    
    )
}