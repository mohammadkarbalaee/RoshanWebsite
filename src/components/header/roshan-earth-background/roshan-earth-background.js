import React from 'react';
import {Component} from 'react';
import './roshan-earth-background.scss'
import background from "../../../assets/images/background.svg";
import roshanBigTitle from "../../../assets/images/roshan-big-title.svg";
import description from "../../../assets/images/description.svg";
import mouse from "../../../assets/images/mouse.svg";

class RoshanEarthBackground extends Component {
    render() {
        return(
            <div className='earth-background'>
                <img className='background' src={background} alt={'fail'}/>
                <img className='big-title' src={roshanBigTitle} alt={'fail'}/>
                <img className='description' src={description} alt={'fail'}/>
                <img className='mouse' src={mouse} alt={'fail'}/>
            </div>
        )
    }
}

export default RoshanEarthBackground;
