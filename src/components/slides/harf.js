import HarfMobile from "../jsx-svgs/mobile/harf";
import './slides-style.scss'
import HarfWebImage from "../jsx-svgs/web/harf-image";
import HarfWebText from "../jsx-svgs/web/harf-text";
import {isFirefox, isMobile} from "react-device-detect";

const returnBasedOneDevice = (props) => {
    if(isMobile){
        return(
            <div id={'mobile'}>
                <HarfMobile status={props.scrollQuantity}/>
            </div>
        )
    } else if(isFirefox){
        return(
            <div id={'web-firefox'}>
                <div id={'image'}>
                    <HarfWebImage status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'} />
                <div id={'text'}>
                    <HarfWebText  status={props.scrollQuantity}/>
                </div>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'image'}>
                    <HarfWebImage status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'} /><HarfWebText id={'text'} status={props.scrollQuantity}/>
            </div>
        )
    }
};

function Harf(props) {
    return (
        <div>
            <div id={'harf'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Harf;
