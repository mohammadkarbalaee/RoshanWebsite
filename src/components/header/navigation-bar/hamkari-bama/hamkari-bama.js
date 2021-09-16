import React from 'react';
import {Component} from 'react';
import {ReactComponent as HamkariMobile} from "../../../../assets/images/mobile-hamkari.svg";

class HamakariBama extends Component {

    render() {
        return(
            <div className={'hamkari-bama'}>
                <HamkariMobile/>
            </div>
        )
    }
}

export default HamakariBama;
