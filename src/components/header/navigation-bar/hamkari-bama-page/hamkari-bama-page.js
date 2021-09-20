import React from 'react';
import {ReactComponent as HamkariMobile} from "../../../../assets/images/mobile-hamkari.svg";
import {ReactComponent as HamkariWeb} from "../../../../assets/images/web-hamkari.svg";
import './hamkari-bama-page.scss'

function HamakariBamaPage() {
    return (
        <div className={'hamkari-bama'}>
            <HamkariMobile id={'mobile'}/>
            <HamkariWeb id={'web'}/>
        </div>
    )
}

export default HamakariBamaPage;
