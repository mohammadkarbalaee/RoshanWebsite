import React from 'react';
import {Component} from 'react';
import './header-wrapper.scss'
import Navbar from "./navigation-bar/navbar";
import RoshanEarthBackground from "./roshan-earth-background/roshan-earth-background";
import WorkWithUs from "./navigation-bar/left-text-group/work-with-us/work-with-us";
import ContactUs from "./navigation-bar/left-text-group/contact-us/contact-us";
import HamakariBama from "./navigation-bar/hamkari-bama/hamkari-bama";
import TamasBama from "./navigation-bar/tamas-bama/tamas-bama"
import {ReactComponent as BackgroundGradient} from "../../assets/images/background-gradient.svg";

class Header extends Component {
    state = {
        isOpen:false,
        isHamkariClicked: false,
        isTamasBamaClicked: false,
        isFirstRender:true,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    toggleHamkariBama = () => {
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
        let clicked = this.state.isHamkariClicked || this.state.isTamasBamaClicked;

        if(this.state.isFirstRender){

            if(this.state.isTamasBamaClicked){
                this.state.isFirstRender = !this.state.isFirstRender;
                this.state.isTamasBamaClicked = !this.state.isTamasBamaClicked;
                return(
                    <TamasBama/>
                )
            } else if(this.state.isHamkariClicked) {
                this.state.isFirstRender = !this.state.isFirstRender;
                this.state.isHamkariClicked = !this.state.isHamkariClicked;
                return(
                    <HamakariBama/>
                )
            } else if (this.state.isOpen) {
                return(
                    <div id={'compact-menu'}>
                        <ContactUs onClick={this.toggleTamasBama}/>
                        <WorkWithUs onClick={this.toggleHamkariBama}/>
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
                    <ContactUs onClick={this.toggleTamasBama}/>
                    <WorkWithUs onClick={this.toggleHamkariBama}/>
                </div>
            )
        }
    }

    render() {
        return(
            <div id={'all'}>
                {/*<BackgroundGradient id={'background'}/>*/}
                <div className="header-wrapper">
                    <Navbar
                        toggle={this.toggle}
                        isOpen={this.state.isOpen}
                        onHamkariClick={this.toggleHamkariBama}
                        onTamasBamaClick={this.toggleTamasBama}
                    />
                    {this.reactToToggles()}
                </div>
            </div>
        )
    }
}

export default Header;
