import React from 'react';
import './main-page.scss'
import WebBackground from "../../../assets/images/web-background.svg";
import Description from "../../../assets/images/description.svg";
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
                src={Description}
                 alt={'failed'}
                 className='description'
                initial={descriptionAnimation.initial}
                animate={descriptionAnimation.animate}
                transition={descriptionAnimation.transition}
            />
        </div>
    )
}

export default MainPage;
