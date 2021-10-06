import React from 'react';
import CustomersWeb from "../../jsx-svgs/web/customers";
import {ReactComponent as CustomersMobile} from "../../../assets/images/mobile-customers.svg";
import './customers.scss'
import {isMobile} from "react-device-detect";
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

    const {height} = useWindowDimensions();

    window.addEventListener("wheel", (event) => {
        const delta = Math.sign(event.deltaY);
        console.info(delta)
        if (props.scrollQuantity === 5 && delta === 1) {
            const totalHeight = 5 * height + height;
            window.scrollTo({
                top: totalHeight,
                behavior: 'smooth',
            })
        } else if (props.scrollQuantity === 5 && delta === -1){
            const totalHeight = 5 * height;
            window.scrollTo({
                top: totalHeight,
                behavior: 'smooth',
            })
        }

    });

    return (
        <div>
            <div id={'customers'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Customers;
