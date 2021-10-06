import React from 'react';
import CustomersWeb from "../../jsx-svgs/web/customers";
import {ReactComponent as CustomersMobile} from "../../../assets/images/mobile-customers.svg";
import './customers.scss'
import {isMobile} from "react-device-detect";
import FooterWeb from "../footer/footer";
import $ from "jquery";
import useWindowDimensions from "./hook";

function shouldRender(scrollQuantity){
    return scrollQuantity === 5;
}

const returnBasedOneDevice = (props) => {
    if(isMobile){
        return(
            <CustomersMobile id={'mobile'}/>
        )
    } else {
        return(
            <div id={'web-all'}>
                <CustomersWeb id={'web'} status={shouldRender(props.scrollQuantity)}/>
            </div>
        )
    }
};

function Customers(props) {
    window.addEventListener("wheel", (event) => {
        const delta = Math.sign(event.deltaY);
        if (props.scrollQuantity === 5 && delta === 1) {
            $('#footer').slideToggle();
        }
    });

    return (
        <div>
            <div id={'customers'}>
                {returnBasedOneDevice(props)}
                <div id={'footer'}>
                    <FooterWeb/>
                </div>
            </div>
        </div>
    )
}

export default Customers;
