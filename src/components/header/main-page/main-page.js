import React from 'react';
import './main-page.scss'
import WebBackground from "../../../assets/images/web-background.svg";
import MobileBackground from "../../../assets/images/mobile-background.svg";
import {motion} from 'framer-motion';
import {backgroundAnimation,descriptionAnimation} from "../../../animations/main-page";

function MainPage() {
    return (
        <div className='all'>
            <motion.img
                src={WebBackground}
                alt={'failed'}
                className='web-background'
                initial={backgroundAnimation.initial}
                animate={backgroundAnimation.animate}
                transition={backgroundAnimation.transition}
            />
            <motion.img
                src={MobileBackground}
                 alt={'failed'}
                 className='mobile-background'
                initial={descriptionAnimation.initial}
                animate={descriptionAnimation.animate}
                transition={descriptionAnimation.transition}
            />
        </div>
    )
}

export default MainPage;
