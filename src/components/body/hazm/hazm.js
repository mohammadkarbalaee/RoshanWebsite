import React, {Component} from 'react';
import {ReactComponent as HazmMobile} from "../../../assets/images/mobile-hazm.svg";
import './hazm.scss'
import {ReactComponent as HazmWebImage} from "../../../assets/images/web-hazm-image.svg";
import {ReactComponent as HazmWebText} from "../../../assets/images/web-hazm-text.svg";

class Hazm extends Component{
    render() {
        return(
            <div id={'hazm'}>
                <HazmMobile id={'mobile'}/>
                <div id={'web'}>
                    <HazmWebText id={'text'}/>
                    <div id={'space'}/>
                    <HazmWebImage id={'image'}/>
                </div>
            </div>
        )
    }
}

export default Hazm;
