import React, {Component} from 'react';
import './tamas-bama.scss';
import {ReactComponent as TamasMobile} from "../../../../assets/images/mobile-tamas.svg";

class TamasBama extends Component {
    render() {
        return(
            <div className={'tamas-bama'}>
                <TamasMobile id={'image'}/>
            </div>
        )
    }
}

export default TamasBama;
