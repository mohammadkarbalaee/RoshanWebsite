import React from 'react';
import {Component} from 'react';
import './header-wrapper.scss'
import Navbar from "./navigation-bar/navbar";
import MainBackround from "./main-background/main-backround";

class Header extends Component {

    render() {
        return(
            <div className="header-wrapper">
               <Navbar/>
                <MainBackround/>
            </div>
        )
    }
}

export default Header;
