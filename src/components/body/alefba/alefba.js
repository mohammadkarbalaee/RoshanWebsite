import React, {Component} from 'react';
import {ReactComponent as AlefbaMobile} from "../../../assets/images/mobile-alefba.svg";
import './alefba.scss'
import {ReactComponent as AlefbaWebText} from "../../../assets/images/web-alefba-text.svg";
import {ReactComponent as AlefbaWebImage} from "../../../assets/images/web-alefba-image.svg";
import BackgroundGradient from "../../../assets/images/background-gradient.svg";

class Alefba extends Component{
    render() {
        return(
            <div>
                <img src={BackgroundGradient} alt={''} id={'background'}/>
                <div id={'alefba'}>
                    <AlefbaMobile id={'mobile'}/>
                    <div id={'web'}>
                        <AlefbaWebText id={'text'}/>
                        <div id={'space'}/>
                        <AlefbaWebImage id={'image'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Alefba;
