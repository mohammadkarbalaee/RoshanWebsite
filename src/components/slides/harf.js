import HarfMobile from "../jsx-svgs/mobile/harf";
import './slides-style.scss'
import HarfWebImage from "../jsx-svgs/web/harf-image";
import HarfWebText from "../jsx-svgs/web/harf-text";
import {isMobile} from "react-device-detect";

const returnBasedOneDevice = () => {
    if(isMobile){
        return(
            <div id={'mobile'}>
                <HarfMobile/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'image'}>
                    <HarfWebImage />
                </div>
                <div id={'space-between'}/>
                <HarfWebText id={'text'} />
            </div>
        )
    }
};

function Harf() {
    return (
        <div>
            <div id={'harf'}>
                {returnBasedOneDevice()}
            </div>
        </div>
    )
}

export default Harf;
