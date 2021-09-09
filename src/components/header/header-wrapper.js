import React from 'react';
import {Component} from 'react';
import './header-wrapper.scss'
import DoubleTextGroup from "./navigation-bar/left-text-group/left-text-group";
import IconTextGroup from "./navigation-bar/right-icon-group/right-icon-group";

class Header extends Component {

    render() {
        return(
            <div className="header-wrapper">
                <DoubleTextGroup/>
                <IconTextGroup/>
            </div>
        )
    }
}

export default Header;
