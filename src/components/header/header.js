import React from 'react';
import {Component} from 'react';
import './header.scss'
import Navbar from "./navigation-bar/navbar";
import MainPage from "./main-page/main-page";
import JoinUsButton from "./navigation-bar/left-text-group/join-us-button/join-us-button";
import ContactUsButton from "./navigation-bar/left-text-group/contact-us-button/contact-us-button";
import JoinusPage from "./join-us-page/joinus-page";
import ContactUsPage from "./contact-us-page/contact-us-page";

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
                    <ContactUsButton />
                    <JoinUsButton />
                </div>
            )
        } else {
            switch (this.props.type){
                case 'main': return (<MainPage/>);
                case 'contact-us': return (<ContactUsPage/>);
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
