import React from 'react';
import {Component} from 'react';
import './roshan-icon.scss'
import { ReactComponent as RoshanSVG } from '../../../../assets/images/roshan-icon.svg';

class RoshanIcon extends Component {

    render() {
        return(
            <RoshanSVG className='roshan-icon'/>
        )
    }
}

export default RoshanIcon;
