import HazmMobile from "../jsx-svgs/mobile/hazm";
import './slides-style.scss'
import HazmWebImage from "../jsx-svgs/web/hazm-image";
import HazmWebText from "../jsx-svgs/web/hazm-text";

function Hazm() {
    return (
        <div>
            <div id={'hazm'}>
                <div id={'mobile'}>
                    <HazmMobile/>
                </div>
                <div id={'web'}>
                    <HazmWebText id={'text'}/>
                    <div id={'space-between'}/>
                    <div id={'image'}>
                        <HazmWebImage/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hazm;
