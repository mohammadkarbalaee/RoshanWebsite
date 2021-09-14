import React, {Component} from 'react';
import {ReactComponent as HazmMobile} from "../../assets/images/mobile-hazm.svg";
import './hazm.scss'

class Hazm extends Component{
    render() {
        return(
            <div id={'hazm'}>
                <HazmMobile/>
            </div>
        )
    }
}

export default Hazm;
