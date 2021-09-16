import React, {Component} from 'react';
import {ReactComponent as KashfMobile} from "../../../assets/images/mobile-kashf.svg";
import {ReactComponent as KashfWebText} from "../../../assets/images/web-kashf-text.svg";
import {ReactComponent as KashfWebImage} from "../../../assets/images/web-kashf-image.svg";
import './kashf.scss'
import BackgroundGradient from "../../../assets/images/background-gradient.svg";

class Kashf extends Component{
    render() {
        return(
            <div>
                {/*<img src={BackgroundGradient} alt={''} id={'background'}/>*/}
                <div id={'kashf'}>
                    <KashfMobile id={'mobile'}/>
                    <div id={'web'}>
                        <KashfWebImage id={'image'}/>
                        <div id={'space'}/>
                        <KashfWebText id={'text'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Kashf;
