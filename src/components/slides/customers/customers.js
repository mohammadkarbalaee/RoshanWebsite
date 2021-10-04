import React from 'react';
import CustomersWeb from "../../jsx-svgs/web/customers";
import {ReactComponent as CustomersMobile} from "../../../assets/images/mobile-customers.svg";
import './customers.scss'
import {isMobile} from "react-device-detect";
import FooterWeb from "../footer/footer";

const returnBasedOneDevice = () => {
    if(isMobile){
        return(
            <CustomersMobile id={'mobile'}/>
        )
    } else {
        return(
            <div id={'web-all'}>
                <CustomersWeb id={'web'}/>
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
