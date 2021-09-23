import AlefbaMobile from "../jsx-svgs/mobile/alefba";
import './slides-style.scss'
import AlefbaWebText from "../jsx-svgs/web/alefba-text";
import {ReactComponent as AlefbaWebImage} from "../../assets/images/web-alefba-image.svg";

function Alefba() {
    return (
        <div>
            <div id={'alefba'}>
                <div id={'mobile'}>
                    <AlefbaMobile/>
                </div>
                <div id={'web'}>
                    <AlefbaWebText id={'text'}/>
                    <div id={'space-between'}/>
                    <AlefbaWebImage id={'image'}/>
                </div>
            </div>
        </div>
    )
}

export default Alefba;