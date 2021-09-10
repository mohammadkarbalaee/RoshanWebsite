import React from 'react';
import {Component} from 'react';
import './roshan-icon.scss'
import { ReactComponent as RoshanSVG } from '../../../../../assets/images/roshan-icon.svg';

class RoshanIcon extends Component {

    render() {
        return(
            <div className='roshan-icon'>
                <RoshanSVG />
            </div>
        )
    }
}

export default RoshanIcon;
