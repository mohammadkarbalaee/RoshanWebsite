import React from 'react';
import CustomersWeb from "../../jsx-svgs/web/customers";
import {ReactComponent as CustomersMobile} from "../../../assets/images/mobile-customers.svg";
import './customers.scss'
import {isMobile} from "react-device-detect";
import useWindowDimensions from "./hook";
import Arrow from "../../arrow";

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

let isClicked = false;

function Customers(props) {

    const {height} = useWindowDimensions();

    // window.addEventListener("wheel", (event) => {
    //     const delta = Math.sign(event.deltaY);
    //     console.info(delta)
    //     if (this.props.scrollQuantity === 5 && delta === 1) {
    //         $('#footer').slideToggle();
    //     }
    // });

    return (
        <div>
            <div id={'customers'}>
                {returnBasedOneDevice(props)}
                <button onClick={() => {
                    if(isClicked){
                        const totalHeight = 5 * height;
                        window.scrollTo({
                            top: totalHeight,
                            behavior: 'smooth',
                        })
                    } else {
                        const totalHeight = 5 * height + height;
                        window.scrollTo({
                            top: totalHeight,
                            behavior: 'smooth',
                        })
                    }
                    isClicked = !isClicked;
                }}>
                    <Arrow id={'toggle'} />
                </button>
            </div>
        </div>
    )
}

export default Customers;
