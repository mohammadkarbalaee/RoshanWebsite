import React, {lazy} from 'react';
import {Component} from 'react';
import './header.scss'
import Navbar from "./navigation-bar/navbar";
import MainPage from "./main-page/main-page";
import JoinUsButton from "./navigation-bar/links-group/join-us-button/join-us-button";
import ContactUsButton from "./navigation-bar/links-group/contact-us-button/contact-us-button";

const JoinusPage = lazy(() => import("./join-us-page/joinus-page"));
const ContactUsPage = lazy(() => import("./contact-us-page/contact-us-page"));

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
                case 'main': return (<MainPage scrollQuantity={this.props.scrollQuantity}/>);
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
