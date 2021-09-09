import React from 'react';
import {Component} from 'react';
import RoshanIcon from "./roshan-icon/roshan-icon";
import SmallRoshanTitle from "./small-roshan-title/small-roshan-title";
import './right-icon-group.scss'

class IconTextGroup extends Component {

    render() {
        return(
            <div className='right-icon-group'>
                <RoshanIcon/>
                <SmallRoshanTitle/>
            </div>
        )
    }
}

export default IconTextGroup;
