import React from 'react';
import {Component} from 'react';
import './header-wrapper.scss'
import Navbar from "./navigation-bar/navbar";
import RoshanEarthBackground from "./roshan-earth-background/roshan-earth-background";
import WorkWithUs from "./navigation-bar/left-text-group/work-with-us/work-with-us";
import ContactUs from "./navigation-bar/left-text-group/contact-us/contact-us";

class Header extends Component {
    state = {
        isOpen:false,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    reactToToggle = () => {
        return this.state.isOpen ? (
            <div id={'compact-menu'}>
                <ContactUs/>
                <WorkWithUs/>
            </div>
            ) : (
            <RoshanEarthBackground/>
        )
    }

    render() {
        return(
            <div className="header-wrapper">
               <Navbar toggle={this.toggle} isOpen={this.state.isOpen}/>
                {this.reactToToggle()}
            </div>
        )
    }
}

export default Header;
