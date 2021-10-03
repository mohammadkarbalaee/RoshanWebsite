import HarfMobile from "../../jsx-svgs/mobile/harf";
import './harf.scss'
import HarfWebImage from "../../jsx-svgs/web/harf-image";
import HarfWebText from "../../jsx-svgs/web/harf-text";
import {isMobile} from "react-device-detect";

const returnBasedOneDevice = (props) => {
    if(isMobile){
        return(
            <div id={'mobile'}>
                <HarfMobile status={props.scrollQuantity}/>
            </div>
        )
    } else {
        return(
            <div id={'web'}>
                <div id={'image'}>
                    <HarfWebImage status={props.scrollQuantity}/>
                </div>
                <div id={'space-between'} />
                <div id={'text'}>
                    <HarfWebText status={props.scrollQuantity}/>
                </div>
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
