import React, {Component} from 'react';
import {ReactComponent as AlefbaMobile} from "../../assets/images/mobile-alefba.svg";
import './alefba.scss'

class Alefba extends Component{
    render() {
        return(
            <div id={'alefba'}>
                <AlefbaMobile/>
            </div>
        )
    }
}

export default Alefba;
