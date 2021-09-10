import React from 'react';
import {Component} from 'react';
import './roshan-earth-background.scss'
import background from "../../../assets/images/background.svg";
import BigTitle from "./big-title/bit-title";

class RoshanEarthBackground extends Component {
    render() {
        return(
            <div className='earth-background'>
                <img src={background} alt={'fail'}/>
                <BigTitle/>
            </div>
        )
    }
}

export default RoshanEarthBackground;
