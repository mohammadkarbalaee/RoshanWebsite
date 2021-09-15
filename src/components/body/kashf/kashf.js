import React, {Component} from 'react';
import {ReactComponent as KashfMobile} from "../../../assets/images/mobile-kashf.svg";
import {ReactComponent as KashfWebText} from "../../../assets/images/web-kashf-text.svg";
import {ReactComponent as KashfWebImage} from "../../../assets/images/web-kashf-image.svg";
import './kashf.scss'

class Kashf extends Component{
    render() {
        return(
            <div id={'kashf'}>
                <KashfMobile id={'mobile'}/>
                <div id={'web'}>
                    <KashfWebImage id={'image'}/>
                    <div id={'space'}/>
                    <KashfWebText id={'text'}/>
                </div>
            </div>
        )
    }
}

export default Kashf;
