import React, {Component} from 'react';
import {ReactComponent as ClientsMobile} from "../../assets/images/clients.svg";
import {ReactComponent as FooterMobile} from "../../assets/images/mobile-footer.svg";
import './clients.scss'

class Clients extends Component{
    render() {
        return(
            <div id={'clients'}>
                <ClientsMobile/>
                <div id={'space'}/>
                <div className={'footer'}>
                    <FooterMobile/>
                    <div id={'space-row'}/>
                </div>
                <div id={'space-bottom'}/>
            </div>
        )
    }
}

export default Clients;
