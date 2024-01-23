import React, { useState, useEffect } from "react";
import styles from '../../styles/website/rendingPage.module.css';
import e_waste1 from '../../assets/images/e_waste1.jpeg';
import e_waste2 from '../../assets/images/e_waste2.jpg';
import e_waste3 from '../../assets/images/e_waste3.jpeg';
import Image from "next/image";

const RendingPage = () => {
    const imgText = [
        { img: e_waste1, text: 'E-waste ReImagined' },
        { img: e_waste2, text: 'No e-waste' },
        { img: e_waste3, text: 'Re-cycle, Re-Use' },
    ];
    
    const [currentImage, setCurrentImage] = useState(0);
    
    useEffect(() => {
        // Automatically move to the next image every 5 seconds
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % imgText.length);
        }, 5000);
        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    
    const goToNextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % imgText.length);
    };
    
    const goToPrevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + imgText.length) % imgText.length);
    };
    
    return (
    <section className={styles.rendingPage} id='#'>
        <div className={styles.slideshowContainer}>
            <Image src={imgText[currentImage].img} alt={imgText[currentImage].text} width={200} height={50} className={styles.img} />
            <div className={styles.text}>
                {imgText[currentImage].text}
            </div>
            <button className={styles.prevButton} onClick={goToPrevImage}>{'<'}</button>
            <button className={styles.nextButton} onClick={goToNextImage}>{'>'}</button>
        </div>
    </section>
    );
};

export default RendingPage;
