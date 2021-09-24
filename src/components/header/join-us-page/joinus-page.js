import React from 'react';
import {ReactComponent as JoinUsMobile} from "../../../assets/images/mobile-join-us.svg";
import {ReactComponent as JoinUsWeb} from "../../../assets/images/web-join-us.svg";
import './joinus-page.scss'
import {motion} from 'framer-motion';
import {startingAnimation} from "../../../animations/main-page";

class JoinusPage extends React.Component {
    render() {
        return (
            <motion.div
                className={'join-us-page'}
                initial={startingAnimation.initial}
                animate={startingAnimation.animate}
                transition={startingAnimation.transition}
            >
                <JoinUsMobile id={'mobile'}/>
                <JoinUsWeb id={'web'}/>
            </motion.div>
        )
    }
}

export default JoinusPage;
