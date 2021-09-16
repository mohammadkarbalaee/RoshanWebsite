import React from 'react';
import {Component} from 'react';
import './header-wrapper.scss'
import Navbar from "./navigation-bar/navbar";
import RoshanEarthBackground from "./roshan-earth-background/roshan-earth-background";
import HamkariBamaButton from "./navigation-bar/left-text-group/hamkari-bama-button/hamkari-bama-button";
import TamasBamaButton from "./navigation-bar/left-text-group/tamas-bama-button/tamas-bama-button";
import HamakariBamaPage from "./navigation-bar/hamkari-bama-page/hamkari-bama-page";
import TamasBamaPage from "./navigation-bar/tamas-bama-page/tamas-bama-page"

class Header extends Component {
    state = {
        isOpen:false,
        isHamkariClickedMobile: false,
        isTamasBamaClickedMobile: false,
        isHamkariClickedWeb: false,
        isTamasBamaClickedWeb: false,
        isFirstRender:true,

    }

    onTamasClickWeb = () => {
        this.setState({
           isTamasBamaClickedWeb: !this.state.isTamasBamaClickedWeb
        });
    };

    onHamkariClickWeb = () => {
        this.setState({
           isHamkariClickedWeb: !this.state.isHamkariClickedWeb
        });
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    toggleHamkariBama = () => {
        this.toggle();

        this.setState({
            isHamkariClickedMobile: !this.state.isHamkariClickedMobile
        })
    };

    toggleTamasBama = () => {
        this.toggle();

        this.setState({
            isTamasBamaClickedMobile: !this.state.isTamasBamaClickedMobile
        })
    };

    reactToToggles = () => {
        if(this.state.isHamkariClickedWeb || this.state.isTamasBamaClickedWeb){
            if(this.state.isHamkariClickedWeb){
                this.state.isHamkariClickedWeb = !this.state.isHamkariClickedWeb;

                return (
                    <HamakariBamaPage/>
                )
            } else {
                this.state.isTamasBamaClickedWeb = !this.state.isTamasBamaClickedWeb;
                return(
                    <TamasBamaPage/>
                )
            }
        } else {
            if(this.state.isFirstRender){

                if(this.state.isTamasBamaClickedMobile){
                    this.state.isFirstRender = !this.state.isFirstRender;
                    this.state.isTamasBamaClickedMobile = !this.state.isTamasBamaClickedMobile;
                    return(
                        <TamasBamaPage/>
                    )
                } else if(this.state.isHamkariClickedMobile) {
                    this.state.isFirstRender = !this.state.isFirstRender;
                    this.state.isHamkariClickedMobile = !this.state.isHamkariClickedMobile;
                    return(
                        <HamakariBamaPage/>
                    )
                } else if (this.state.isOpen) {
                    return(
                        <div id={'compact-menu'}>
                            <TamasBamaButton onClick={this.toggleTamasBama}/>
                            <HamkariBamaButton onClick={this.toggleHamkariBama}/>
                        </div>
                    )
                } else {
                    return(
                        <RoshanEarthBackground/>
                    )
                }
            } else {
                this.state.isFirstRender = !this.state.isFirstRender;
                return(
                    <div id={'compact-menu'}>
                        <TamasBamaButton onClick={this.toggleTamasBama}/>
                        <HamkariBamaButton onClick={this.toggleHamkariBama}/>
                    </div>
                )
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
                        onHamkariClick={this.onHamkariClickWeb}
                        onTamasBamaClick={this.onTamasClickWeb}
                    />
                    {this.reactToToggles()}
                </div>
            </div>
        )
    }
}

export default Header;
