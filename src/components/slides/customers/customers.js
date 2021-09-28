import React from 'react';
import {ReactComponent as CustomersWeb} from "../../../assets/images/web-customers.svg";
import {ReactComponent as CustomersMobile} from "../../../assets/images/mobile-customers.svg";
import {ReactComponent as FooterWeb} from "../../../assets/images/web-footer.svg";
import './customers.scss'
import {isMobile} from "react-device-detect";

const returnBasedOneDevice = () => {
    if(isMobile){
        return(
            <CustomersMobile id={'mobile'}/>
        )
    } else {
        return(
            <div id={'web-all'}>
                <CustomersWeb id={'web'}/>
                <div id={'space'}/>
                <div>
                    <FooterWeb id={'footer'}/>
                </div>
            </div>
        )
    }
};
function Customers() {
    return (
        <div>
            <div id={'customers'}>
                {returnBasedOneDevice()}
            </div>
        </div>
    )
}

export default Customers;
