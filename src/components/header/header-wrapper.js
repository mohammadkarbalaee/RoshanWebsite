import React from 'react';
import {Component} from 'react';
import ContactUs from "./navigation-bar/contact-us/contact-us";
import RoshanIcon from "./navigation-bar/roshan-icon/roshan-icon";
import SmallRoshanTitle from "./navigation-bar/small-roshan-title/small-roshan-title";
import WorkWithUs from "./navigation-bar/work-with-us/work-with-us";
import './header-wrapper.scss'

class Header extends Component {

    render() {
        return(
            <div className="header-wrapper">
                <WorkWithUs/>
                <ContactUs/>
                <RoshanIcon/>
                <SmallRoshanTitle/>
            </div>
        )
    }
}

export default Header;
