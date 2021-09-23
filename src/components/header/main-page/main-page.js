import React from 'react';
import './main-page.scss'
import {ReactComponent as WebBackground} from "../../../assets/images/web-background.svg";
import {ReactComponent as Description} from "../../../assets/images/description.svg";
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
            <WebBackground className='web-background'/>
            <Description className='description'/>
        </motion.div>
    )
}

export default MainPage;
