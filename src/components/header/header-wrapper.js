import React from 'react';
import {Component} from 'react';
import './header-wrapper.scss'
import Navbar from "./navigation-bar/navbar";
import RoshanEarthBackground from "./roshan-earth-background/roshan-earth-background";
import HamkariBamaButton from "./navigation-bar/left-text-group/hamkari-bama-button/hamkari-bama-button";
import TamasBamaButton from "./navigation-bar/left-text-group/tamas-bama-button/tamas-bama-button";

class Header extends Component {
    state = {
        isOpen:false,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    reactToToggles = () => {
        if (this.state.isOpen) {
            return (
                <div id={'compact-menu'}>
                    <TamasBamaButton onClick={this.toggleTamasBama}/>
                    <HamkariBamaButton onClick={this.toggleHamkariBama}/>
                </div>
            )
        } else {
            return (
                <RoshanEarthBackground/>
            )
        }
    }


    render() {
        return(
            <div id={'all'}>
                <div className="header-wrapper">
                    <Navbar
                        toggle={this.toggle}
                        isOpen={this.state.isOpen}
                    />
                    {this.reactToToggles()}
                </div>
            </div>
        )
    }
}

export default Header;
