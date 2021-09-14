import React, {Component} from 'react';
import {ReactComponent as HarfMobile} from "../../assets/images/mobile-harf.svg";
import './harf.scss'

class Harf extends Component{
    render() {
        return(
            <div id={'harf'}>
                <HarfMobile/>
            </div>
        )
    }
}

export default Harf;
