import AlefbaMobile from "../jsx-svgs/mobile/alefba";
import './slides-style.scss'
import AlefbaWebText from "../jsx-svgs/web/alefba-text";
import AlefbaWebImage from "../jsx-svgs/web/alefba-image";
import {isMobile} from "react-device-detect";

const returnBasedOneDevice = () => {
    if(isMobile){
        return(
            <div id={'mobile'}>
                <AlefbaMobile/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <AlefbaWebText id={'text'}/>
                <div id={'space-between'}/>
                <div id={'image'}>
                    <AlefbaWebImage />
                </div>
            </div>
        )
    }
};
function Alefba() {
    return (
        <div>
            <div id={'alefba'}>
                {returnBasedOneDevice()}
            </div>
        </div>
    )
}

export default Alefba;
