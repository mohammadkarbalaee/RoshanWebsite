import React from 'react';
import './tamas-bama-page.scss';
import {ReactComponent as TamasMobile} from "../../../../assets/images/mobile-tamas.svg";
import {ReactComponent as TamasWeb} from "../../../../assets/images/web-tamas.svg";

function TamasBamaPage() {
    return (
        <div className={'tamas-bama'}>
            <TamasMobile id={'mobile'}/>
            <TamasWeb id={'web'}/>
        </div>
    )
}

export default TamasBamaPage;
