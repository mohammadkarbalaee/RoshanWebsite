import React, {Component} from 'react';
import HazmMobile from "../../../components/jsx-svgs/mobile/hazm";
import './hazm.scss'
import {ReactComponent as HazmWebImage} from "../../../assets/images/web-hazm-image.svg";
import HazmWebText from "../../jsx-svgs/web/web-hazm-text";

class Hazm extends Component{
    render() {
        return(
            <div>
                <div id={'hazm'}>
                    <div id={'mobile'}>
                        <HazmMobile onClick={() => {
                            console.log('works');
                        }}/>
                    </div>
                    <div id={'web'}>
                        <HazmWebText id={'text'} onClick={() => {
                            console.log('works');
                        }}/>
                        <div id={'space'}/>
                        <HazmWebImage id={'image'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hazm;
