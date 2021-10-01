import KashfMobile from "../jsx-svgs/mobile/kashf";
import KashfWebText from "../jsx-svgs/web/kashf-text";
import KashfWebImage from "../jsx-svgs/web/kashf-image";
import './slides-style.scss'
import {isFirefox, isMobile} from "react-device-detect";

const returnBasedOneDevice = (props) => {
    if(isMobile){
        return(
            <div id={'mobile'}>
                <KashfMobile status={props.scrollQuantity}/>
            </div>
        )
    } else if(isFirefox){
        return(
            <div id={'web-firefox'}>
                <div id={'image'}>
                    <KashfWebImage status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <div id={'text'}>
                    <KashfWebText status={props.scrollQuantity}/>
                </div>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'image'}>
                    <KashfWebImage status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'}/>
                <KashfWebText id={'text'} status={props.scrollQuantity}/>
            </div>
        )
    }
};

function Kashf(props) {
    return (
        <div>
            <div id={'kashf'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Kashf;
