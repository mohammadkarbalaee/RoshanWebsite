import React from 'react';
import {Component} from 'react';
import './roshan-earth-background.scss'
import background from "../../../assets/images/background.svg";
import roshanBigTitle from "../../../assets/images/roshan-big-title.svg";
import description from "../../../assets/images/description.svg";
import descriptionMobile from "../../../assets/images/description-mobile.svg";
import backgroundMobile from "../../../assets/images/background-mobile.png";
import Lottie from 'lottie-react';
import mouseAnimation from '../../../assets/lotties/mouse-scrolling.json';


class RoshanEarthBackground extends Component {
    render() {
        const mouseAnimationStyle = {
            height: 500,
            marginTop:600,
            marginRight:530,
            display:'flex',
            position:'absolute',
        };

        return(
            <div className='earth-background'>
                <Lottie
                    animationData={mouseAnimation}
                    style={mouseAnimationStyle}
                    className={'mouse-animation'}
                />
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
