import React from 'react';
import {Component} from 'react';
import './header-wrapper.scss'
import Navbar from "./navigation-bar/navbar";
import RoshanEarthBackground from "./roshan-earth-background/roshan-earth-background";

class Header extends Component {

    render() {
        return(
            <div className="header-wrapper">
               <Navbar/>
                <RoshanEarthBackground/>
            </div>
        )
    }
}

export default Header;
