import React from 'react';
import {Component} from 'react';
import {ReactComponent as HamkariMobile} from "../../../../assets/images/mobile-hamkari.svg";
import './hamkari-bama.scss'

class HamakariBama extends Component {

    render() {
        return(
            <div className={'hamkari-bama'}>
                <HamkariMobile id={'image'}/>
            </div>
        )
    }
}

export default HamakariBama;
