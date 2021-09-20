import React from 'react';
import './roshan-earth-background.scss'
import WebBackground from "../../../assets/images/simple-background.svg";
import MobileBackground from "../../../assets/images/mobile-background.svg";


function RoshanEarthBackground() {
    return (
        <div className='earth-background'>
            <img className='web-background' src={WebBackground} alt={'fail'}/>
            <img className='mobile-background' src={MobileBackground} alt={'fail'}/>
        </div>
    )
}

export default RoshanEarthBackground;
