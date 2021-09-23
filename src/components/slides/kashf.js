import KashfMobile from "../jsx-svgs/mobile/kashf";
import KashfWebText from "../jsx-svgs/web/kashf-text";
import KashfWebImage from "../jsx-svgs/web/kashf-image";
import './slides-style.scss'

function Kashf() {
    return (
        <div>
            <div id={'kashf'}>
                <div id={'mobile'}>
                    <KashfMobile/>
                </div>
                <div id={'web'}>
                    <div id={'image'}>
                        <KashfWebImage />
                    </div>
                    <div id={'space-between'}/>
                    <KashfWebText id={'text'}/>
                </div>
            </div>
        </div>
    )
}

export default Kashf;
