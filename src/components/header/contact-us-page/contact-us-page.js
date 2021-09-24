import React from 'react';
import './contact-us-page.scss';
import {ReactComponent as ContactUsMobile} from "../../../assets/images/mobile-contact-us.svg";
import {ReactComponent as ContactUsWeb} from "../../../assets/images/web-contact-us.svg";
import {motion} from 'framer-motion';
import {startingAnimation} from "../../../animations/main-page";

class ContactUsPage extends React.Component {
    render() {
        return (
            <motion.div
                className={'contact-us-page'}
                initial={startingAnimation.initial}
                animate={startingAnimation.animate}
                transition={startingAnimation.transition}
            >
                <ContactUsMobile id={'mobile'}/>
                <ContactUsWeb id={'web'}/>
            </motion.div>
        )
    }
}

export default ContactUsPage;
