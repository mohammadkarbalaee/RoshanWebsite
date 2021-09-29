import AlefbaMobile from "../jsx-svgs/mobile/alefba";
import './slides-style.scss'
import AlefbaWebText from "../jsx-svgs/web/alefba-text";
import AlefbaWebImage from "../jsx-svgs/web/alefba-image";
import {isMobile} from "react-device-detect";

const returnBasedOneDevice = (props) => {
    if(isMobile){
        return(
            <div id={'mobile'}>
                <AlefbaMobile status={props.scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <AlefbaWebText id={'text'} status={props.scrollQuantity}/>
                <div id={'space-between'}/>
                <div id={'image'}>
                    <AlefbaWebImage status={props.scrollQuantity}/>
                </div>
            </div>
        )
    }
};
function Alefba(props) {
    return (
        <div>
            <div id={'alefba'}>
                {returnBasedOneDevice(props)}
            </div>
        </div>
    )
}

export default Alefba;
