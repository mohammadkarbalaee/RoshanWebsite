import React from 'react';
import {Component} from 'react';
import './roshan-earth-background.scss'
import background from "../../../assets/images/background.svg";
import roshanBigTitle from "../../../assets/images/roshan-big-title.svg";
import description from "../../../assets/images/description.svg";
import descriptionMobile from "../../../assets/images/description-mobile.svg";
import mouse from "../../../assets/images/mouse.svg";
import backgroundMobile from "../../../assets/images/background-mobile.png";

class RoshanEarthBackground extends Component {
    render() {
        return(
            <div className='earth-background'>
                <img className='background' src={background} alt={'fail'}/>
                <img className='background-mobile' src={backgroundMobile} alt={'fail'}/>
                <img className='big-title' src={roshanBigTitle} alt={'fail'}/>
                <img className='description' src={description} alt={'fail'}/>
                <img className='description-mobile' src={descriptionMobile} alt={'fail'}/>
            </div>
        )
    }
}

export default RoshanEarthBackground;
