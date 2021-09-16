import React from 'react';
import {Component} from 'react';
import './roshan-earth-background.scss'
import WebBackground from "../../../assets/images/simple-background.svg";
import MobileBackground from "../../../assets/images/mobile-background.svg";


class RoshanEarthBackground extends Component {
    render() {
        return(
            <div className='earth-background'>
                <img className='web-background' src={WebBackground} alt={'fail'}/>
                <img className='mobile-background' src={MobileBackground} alt={'fail'}/>
            </div>
        )
    }
}

export default RoshanEarthBackground;
