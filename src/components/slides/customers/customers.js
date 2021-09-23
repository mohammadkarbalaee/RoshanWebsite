import React from 'react';
import {ReactComponent as CustomersWeb} from "../../../assets/images/web-customers.svg";
import {ReactComponent as CustomersMobile} from "../../../assets/images/mobile-customers.svg";
import {ReactComponent as FooterWeb} from "../../../assets/images/web-footer.svg";
import './customers.scss'

function Customers() {
    return (
        <div>
            <div id={'customers'}>
                <CustomersMobile id={'mobile'}/>
                <CustomersWeb id={'web'}/>
                <div id={'space'}/>
                <FooterWeb id={'footer'}/>
            </div>
        </div>
    )
}

export default Customers;
