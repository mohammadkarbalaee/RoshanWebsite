import React from 'react';
import {ReactComponent as CustomersWeb} from "../../../assets/images/web-customers.svg";
import {ReactComponent as CustomersMobile} from "../../../assets/images/mobile-customers.svg";
import {ReactComponent as FooterWeb} from "../../../assets/images/web-footer.svg";
import './customers.scss'
import {backgroundAnimation} from "../../../animations/main-page";
import {motion} from 'framer-motion';

function Customers() {
    return (
        <motion.div initial={backgroundAnimation.initial}
                    animate={backgroundAnimation.animate}
                    transition={backgroundAnimation.transition}>
            <div id={'customers'}>
                <CustomersMobile id={'mobile'}/>
                <CustomersWeb id={'web'}/>
                <div id={'space'}/>
                <FooterWeb id={'footer'}/>
            </div>
        </motion.div>
    )
}

export default Customers;
