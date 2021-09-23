import KashfMobile from "../jsx-svgs/mobile/kashf";
import KashfWebText from "../jsx-svgs/web/kashf-text";
import {ReactComponent as KashfWebImage} from "../../assets/images/web-kashf-image.svg";
import './slides-style.scss'

function Kashf() {
    return (
        <div>
            <div id={'kashf'}>
                <div id={'mobile'}>
                    <KashfMobile/>
                </div>
                <div id={'web'}>
                    <KashfWebImage id={'image'}/>
                    <div id={'space-between'}/>
                    <KashfWebText id={'text'}/>
                </div>
            </div>
        </div>
    )
}

export default Kashf;
