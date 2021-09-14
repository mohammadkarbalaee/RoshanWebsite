import React, {Component} from 'react';
import {ReactComponent as ClientsMobile} from "../../assets/images/clients.svg";
import './clients.scss'

class Clients extends Component{
    render() {
        return(
            <div id={'clients'}>
                <ClientsMobile/>
            </div>
        )
    }
}

export default Clients;
