import React from 'react';
import {Component} from 'react';
import './header-wrapper.scss'
import Navbar from "./navigation-bar/navbar";
import RoshanEarthBackground from "./roshan-earth-background/roshan-earth-background";
import WorkWithUs from "./navigation-bar/left-text-group/work-with-us/work-with-us";
import ContactUs from "./navigation-bar/left-text-group/contact-us/contact-us";
import HamakariBama from "./navigation-bar/hamkari-bama/hamkari-bama";

class Header extends Component {
    state = {
        isOpen:false,
        isHamkariClicked: false,
        isTamasBamaClicked: false,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    toggleHamkariBama = () => {
        console.log(this.state.isHamkariClicked);
        this.toggle();

        this.setState({
            isHamkariClicked: !this.state.isHamkariClicked
        })
    };

    toggleTamasBama = () => {
        this.toggle();

        this.setState({
            isTamasBamaClicked: !this.state.isTamasBamaClicked
        })
    };

    reactToToggles = () => {

        console.log(this.state.isHamkariClicked);

        if(this.state.isHamkariClicked) {
            return(
                <HamakariBama/>
            )
        } else if (this.state.isOpen) {
            return(
                <div id={'compact-menu'}>
                    <ContactUs/>
                    <WorkWithUs/>
                </div>
            )
        } else {
            return(
                <RoshanEarthBackground/>
            )
        }
    }

    render() {
        return(
            <div className="header-wrapper">
               <Navbar
                   toggle={this.toggle}
                   isOpen={this.state.isOpen}
                   onHamkariClick={this.toggleHamkariBama}
                   onTamasBamaClick={this.toggleTamasBama}
               />
                {this.reactToToggles()}
            </div>
        )
    }
}

export default Header;
