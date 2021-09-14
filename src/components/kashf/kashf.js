import React, {Component} from 'react';
import {ReactComponent as KashfMobile} from "../../assets/images/mobile-kashf.svg";
import './kashf.scss'

class Kashf extends Component{
    render() {
        return(
            <div id={'kashf'}>
                <KashfMobile/>
            </div>
        )
    }
}

export default Kashf;
