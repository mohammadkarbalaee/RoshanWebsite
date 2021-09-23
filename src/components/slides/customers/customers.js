import React from 'react';
import {ReactComponent as CustomersWeb} from "../../../assets/images/web-customers.svg";
import {ReactComponent as CustomersMobile} from "../../../assets/images/mobile-customers.svg";
import {ReactComponent as FooterWeb} from "../../../assets/images/web-footer.svg";
import './customers.scss'
import {motion} from "framer-motion";
import footbarAnimation from "../../../animations/footbar";

function Customers() {
    return (
        <div>
            <div id={'customers'}>
                <CustomersMobile id={'mobile'}/>
                <CustomersWeb id={'web'}/>
                <div id={'space'}/>
                <motion.div
                    initial={footbarAnimation.initial}
                    animate={footbarAnimation.animate}
                    transition={footbarAnimation.transition}
                >
                    <FooterWeb id={'footer'}/>
                </motion.div>
            </div>
        </div>
    )
}

export default Customers;
