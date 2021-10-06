import React from 'react';
import CustomersWeb from "../../jsx-svgs/web/customers";
import {ReactComponent as CustomersMobile} from "../../../assets/images/mobile-customers.svg";
import './customers.scss'
import {isMobile} from "react-device-detect";
import FooterWeb from "../footer/footer";
import $ from "jquery";

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

class Customers extends React.Component {

    render() {

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
                    {returnBasedOneDevice(this.props)}
                    <div id={'footer'}>
                        <FooterWeb/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Customers;
