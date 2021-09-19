import React, {Component} from 'react';
import {ReactComponent as AlefbaMobile} from "../../../assets/images/mobile-alefba.svg";
import './alefba.scss'
import AlefbaWebText from "../../jsx-svgs/web-alefba-text";
import {ReactComponent as AlefbaWebImage} from "../../../assets/images/web-alefba-image.svg";

class Alefba extends Component{
    render() {
        return(
            <div>
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
