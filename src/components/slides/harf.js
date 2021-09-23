import HarfMobile from "../jsx-svgs/mobile/harf";
import './slides-style.scss'
import HarfWebImage from "../jsx-svgs/web/harf-image";
import HarfWebText from "../jsx-svgs/web/harf-text";

function Harf() {
    return (
        <div>
            <div id={'harf'}>
                <div id={'mobile'}>
                    <HarfMobile/>
                </div>
                <div id={'web'}>
                    <div id={'image'}>
                        <HarfWebImage />
                    </div>
                    <div id={'space-between'}/>
                    <HarfWebText id={'text'} />
                </div>
            </div>
        </div>
    )
}

export default Harf;
