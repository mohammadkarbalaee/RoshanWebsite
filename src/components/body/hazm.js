import HazmMobile from "../jsx-svgs/mobile/hazm";
import './slides-style.scss'
import {ReactComponent as HazmWebImage} from "../../assets/images/web-hazm-image.svg";
import HazmWebText from "../jsx-svgs/web/hazm-text";

function Hazm() {
    return (
        <div>
            <div id={'hazm'}>
                <div id={'mobile'}>
                    <HazmMobile onClick={() => {
                        console.log('works');
                    }}/>
                </div>
                <div id={'web'}>
                    <HazmWebText id={'text'} onClick={() => {
                        console.log('works');
                    }}/>
                    <div id={'space'}/>
                    <HazmWebImage id={'image'}/>
                </div>
            </div>
        </div>
    )
}

export default Hazm;
