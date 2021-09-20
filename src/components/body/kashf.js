import KashfMobile from "../jsx-svgs/mobile/kashf";
import KashfWebText from "../jsx-svgs/web/web-kashf-text";
import {ReactComponent as KashfWebImage} from "../../assets/images/web-kashf-image.svg";
import './slides-style.scss'

function Kashf() {
    return (
        <div>
            <div id={'kashf'}>
                <div id={'mobile'}>
                    <KashfMobile onClick={() => {
                        console.log('works');
                    }}/>
                </div>
                <div id={'web'}>
                    <KashfWebImage id={'image'}/>
                    <div id={'space'}/>
                    <KashfWebText id={'text'} onClick={() => {
                        console.log('works');
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Kashf;
