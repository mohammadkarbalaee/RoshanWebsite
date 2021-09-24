import React from 'react';
import './main-page.scss'
import WebBackground from "../../../assets/images/web-background.svg";
import MobileBackground from "../../../assets/images/mobile-background.svg";
import {motion} from 'framer-motion';
import {startingAnimation,scrollDownAnimation} from "../../../animations/main-page";

const animationChooser = (scrollQuantity) => {

    if(scrollQuantity === 1){
        return scrollDownAnimation;
    } else {
        return startingAnimation;
    }
};

function MainPage(props) {
    return (
        <div className='all'>
            <motion.img
                src={WebBackground}
                alt={'failed'}
                className='web-background'
                initial={animationChooser(props.scrollQuantity).initial}
                animate={animationChooser(props.scrollQuantity).animate}
                transition={animationChooser(props.scrollQuantity).transition}
            />
            <motion.img
                src={MobileBackground}
                 alt={'failed'}
                 className='mobile-background'
                initial={animationChooser(props.scrollQuantity).initial}
                animate={animationChooser(props.scrollQuantity).animate}
                transition={animationChooser(props.scrollQuantity).transition}
            />
        </div>
    )
}

export default MainPage;
