import React from 'react';
import AlefbaMobile from "../../../components/jsx-svgs/mobile/alefba";
import './alefba.scss'
import AlefbaWebText from "../../jsx-svgs/web/web-alefba-text";
import {ReactComponent as AlefbaWebImage} from "../../../assets/images/web-alefba-image.svg";

function Alefba() {
    return (
        <div>
            <div id={'alefba'}>
                <div id={'mobile'}>
                    <AlefbaMobile onClick={() => {
                        console.log('works');
                    }}/>
                </div>
                <div id={'web'}>
                    <AlefbaWebText id={'text'} onClick={() => {
                        console.log('works');
                    }}/>
                    <div id={'space'}/>
                    <AlefbaWebImage id={'image'}/>
                </div>
            </div>
        </div>
    )
}

export default Alefba;
