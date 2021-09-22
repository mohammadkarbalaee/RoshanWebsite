import React from 'react';
import {ReactComponent as JoinUsMobile} from "../../../assets/images/mobile-join-us.svg";
import {ReactComponent as JoinUsWeb} from "../../../assets/images/web-join-us.svg";
import './joinus-page.scss'
import {motion} from 'framer-motion';
import headerAnimation from "../../../animations/header-animations";

class JoinusPage extends React.Component {
    render() {
        return (
            <motion.div
                className={'join-us-page'}
                initial={headerAnimation.initial}
                animate={headerAnimation.animate}
                transition={headerAnimation.transition}
            >
                <JoinUsMobile id={'mobile'}/>
                <JoinUsWeb id={'web'}/>
            </motion.div>
        )
    }
}

export default JoinusPage;
