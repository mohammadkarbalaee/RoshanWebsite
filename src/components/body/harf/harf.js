import React, {Component} from 'react';
import {ReactComponent as HarfMobile} from "../../../assets/images/mobile-harf.svg";
import './harf.scss'
import {ReactComponent as HarfWebImage} from "../../../assets/images/web-harf-image.svg";
import HarfWebText from "../../jsx-svgs/web-harf-text";

class Harf extends Component{
    render() {
        return(
            <div>
                <div id={'harf'}>
                    <HarfMobile id={'mobile'}/>
                    <div id={'web'}>
                        <HarfWebImage id={'image'}/>
                        <div id={'space'}/>
                        <HarfWebText id={'text'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Harf;
