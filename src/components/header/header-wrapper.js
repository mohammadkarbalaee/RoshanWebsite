import React from 'react';
import {Component} from 'react';
import './header-wrapper.scss'
import Navbar from "./navigation-bar/navbar";

class Header extends Component {

    render() {
        return(
            <div className="header-wrapper">
               <Navbar/>
            </div>
        )
    }
}

export default Header;
