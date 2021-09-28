import React from 'react';
import {ReactComponent as JoinUsMobile} from "../../../assets/images/mobile-join-us.svg";
import {ReactComponent as JoinUsWeb} from "../../../assets/images/web-join-us.svg";
import './joinus-page.scss'
import {motion} from 'framer-motion';
import {startingAnimation} from "../../../animations/main-page";
import {isMobile} from "react-device-detect";

const returnBasedOneDevice = () => {
    if(isMobile){
        return(
            <JoinUsMobile id={'mobile'}/>
        )
    } else {
        return(
            <JoinUsWeb id={'web'}/>
        )
    }
};

class JoinusPage extends React.Component {
    render() {
        return (
            <motion.div
                className={'join-us-page'}
                initial={startingAnimation.initial}
                animate={startingAnimation.animate}
                transition={startingAnimation.transition}
            >
                {returnBasedOneDevice()}
            </motion.div>
        )
    }
}

export default JoinusPage;
