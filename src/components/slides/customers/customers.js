import CustomersWeb from "../../jsx-svgs/web/customers";
import {ReactComponent as CustomersMobile} from "../../../assets/images/mobile-customers.svg";
import './customers.scss'
import {isMobile} from "react-device-detect";
import {Component} from "react";
import {findDOMNode} from "react-dom";

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

class Customers extends Component {

    componentDidMount() {
        const height = window.innerHeight;
        findDOMNode(this).addEventListener("wheel", (event) => {
            const delta = Math.sign(event.deltaY);
            console.info(delta)
            if (delta === 1) {
                const totalHeight = 5 * height + height;
                window.scrollTo({
                    top: totalHeight,
                    behavior: 'smooth',
                })
            } else if (delta === -1) {
                const totalHeight = 5 * height;
                window.scrollTo({
                    top: totalHeight,
                    behavior: 'smooth',
                })
            }
        });
    }

    render() {
        return (
            <div>
                <div id={'customers'}>
                    {returnBasedOneDevice(this.props)}
                </div>
            </div>
        )
    }
}

export default Customers;
