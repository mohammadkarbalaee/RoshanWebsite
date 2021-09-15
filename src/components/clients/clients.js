import React, {Component} from 'react';
import {ReactComponent as MoshtarianMobile} from "../../assets/images/moshtarian.svg";
import './clients.scss'

class Clients extends Component{
    render() {
        return(
            <div id={'clients'}>
                <MoshtarianMobile/>
            </div>
        )
    }
}

export default Clients;
