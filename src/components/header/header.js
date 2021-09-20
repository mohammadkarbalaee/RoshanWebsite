import React from 'react';
import {Component} from 'react';
import './header.scss'
import Navbar from "./navigation-bar/navbar";
import MainPage from "./main-page/main-page";
import HamkariBamaButton from "./navigation-bar/left-text-group/hamkari-bama-button/hamkari-bama-button";
import TamasBamaButton from "./navigation-bar/left-text-group/tamas-bama-button/tamas-bama-button";
import JoinusPage from "./join-us-page/joinus-page";
import ContactusPage from "./contact-us-page/contactus-page";

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
                    <TamasBamaButton />
                    <HamkariBamaButton />
                </div>
            )
        } else {
            switch (this.props.type){
                case 'main': return (<MainPage/>);
                case 'contact-us': return (<ContactusPage/>);
                case 'join-us': return (<JoinusPage/>);
            }
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
