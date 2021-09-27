import HazmMobile from "../jsx-svgs/mobile/hazm";
import './slides-style.scss'
import HazmWebImage from "../jsx-svgs/web/hazm-image";
import HazmWebText from "../jsx-svgs/web/hazm-text";
import {isMobile} from "react-device-detect";

const returnBasedOneDevice = () => {
    if(isMobile){
        return(
            <div id={'mobile'}>
                <HazmMobile/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <HazmWebText id={'text'}/>
                <div id={'space-between'}/>
                <div id={'image'}>
                    <HazmWebImage/>
                </div>
            </div>
        )
    }
};


function Hazm() {
    return (
        <div>
            <div id={'hazm'}>
                {returnBasedOneDevice()}
            </div>
        </div>
    )
}

export default Hazm;
