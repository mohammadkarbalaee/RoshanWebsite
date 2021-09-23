import AlefbaMobile from "../jsx-svgs/mobile/alefba";
import './slides-style.scss'
import AlefbaWebText from "../jsx-svgs/web/alefba-text";
import AlefbaWebImage from "../jsx-svgs/web/alefba-image";

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
                    <div id={'image'}>
                        <AlefbaWebImage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alefba;
