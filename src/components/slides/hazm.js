import HazmMobile from "../jsx-svgs/mobile/hazm";
import './slides-style.scss'
import HazmWebImage from "../jsx-svgs/web/hazm-image";
import HazmWebText from "../jsx-svgs/web/hazm-text";
import {isFirefox, isMobile} from "react-device-detect";

const returnBasedOneDevice = (props) => {
    if(isMobile){
        return(
            <div id={'mobile'}>
                <HazmMobile status={props.scrollQuantity}/>
            </div>
        )
    } else if(isFirefox){
        return(
            <div id={'web-firefox'}>
                <div id={'text'}>
                    <HazmWebText status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'image'}>
                    <HazmWebImage status={props.scrollQuantity}/>
                </div>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <HazmWebText id={'text'} status={props.scrollQuantity}/>
                <div id={'space-between'}/>
                <div id={'image'}>
                    <HazmWebImage status={props.scrollQuantity}/>
                </div>
            </div>
        )
    }
};


function Hazm(props) {
    return (
        <div>
            <div id={'hazm'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Hazm;
