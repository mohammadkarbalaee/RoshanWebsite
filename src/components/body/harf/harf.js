import React from 'react';
import HarfMobile from "../../../components/jsx-svgs/mobile/harf";
import './harf.scss'
import {ReactComponent as HarfWebImage} from "../../../assets/images/web-harf-image.svg";
import HarfWebText from "../../jsx-svgs/web/web-harf-text";

function Harf() {
    return (
        <div>
            <div id={'harf'}>
                <div id={'mobile'}>
                    <HarfMobile onClick={() => {
                        console.log('works');
                    }}/>
                </div>
                <div id={'web'}>
                    <HarfWebImage id={'image'}/>
                    <div id={'space'}/>
                    <HarfWebText id={'text'} onClick={() => {
                        console.log('works');
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Harf;
