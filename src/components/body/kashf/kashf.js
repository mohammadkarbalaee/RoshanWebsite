import React, {Component} from 'react';
import KashfMobile from "../../../components/jsx-svgs/mobile/kashf";
import KashfWebText from "../../jsx-svgs/web/web-kashf-text";
import {ReactComponent as KashfWebImage} from "../../../assets/images/web-kashf-image.svg";
import './kashf.scss'

class Kashf extends Component{
    render() {
        return(
            <div>
                <div id={'kashf'}>
                    <div id={'mobile'}>
                        <KashfMobile/>
                    </div>
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
