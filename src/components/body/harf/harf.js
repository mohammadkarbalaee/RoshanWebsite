import React, {Component} from 'react';
import {ReactComponent as HarfMobile} from "../../../assets/images/mobile-harf.svg";
import './harf.scss'
import {ReactComponent as HarfWebImage} from "../../../assets/images/web-harf-image.svg";
import {ReactComponent as HarfWebText} from "../../../assets/images/web-harf-text.svg";

class Harf extends Component{
    render() {
        return(
            <div id={'harf'}>
                <HarfMobile id={'mobile'}/>
                <div id={'web'}>
                    <HarfWebImage id={'image'}/>
                    <div id={'space'}/>
                    <HarfWebText id={'text'}/>
                </div>
            </div>
        )
    }
}

export default Harf;
