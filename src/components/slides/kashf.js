import KashfMobile from "../jsx-svgs/mobile/kashf";
import KashfWebText from "../jsx-svgs/web/kashf-text";
import KashfWebImage from "../jsx-svgs/web/kashf-image";
import './slides-style.scss'
import {isMobile} from "react-device-detect";

const returnBasedOneDevice = () => {
    if(isMobile){
        return(
            <div id={'mobile'}>
                <KashfMobile/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'image'}>
                    <KashfWebImage />
                </div>
                <div id={'space-between'}/>
                <KashfWebText id={'text'}/>
            </div>
        )
    }
};

function Kashf() {
    return (
        <div>
            <div id={'kashf'}>
                {returnBasedOneDevice()}
            </div>
        </div>
    )
}

export default Kashf;
