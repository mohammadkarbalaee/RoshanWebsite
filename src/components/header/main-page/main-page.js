import React from 'react';
import './main-page.scss'
import WebBackground from "../../../assets/images/web-background.svg";
import MobileBackground from "../../../assets/images/mobile-background.svg";
import {motion} from 'framer-motion';
import headerAnimation from "../../../animations/header";


function MainPage() {
    return (
        <motion.div
            className='all'
            initial={headerAnimation.initial}
            animate={headerAnimation.animate}
            transition={headerAnimation.transition}
        >
            <img className='web-background' src={WebBackground} alt={'fail'}/>
            <img className='mobile-background' src={MobileBackground} alt={'fail'}/>
        </motion.div>
    )
}

export default MainPage;
