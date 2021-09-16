import React, {Component} from 'react';
import {ReactComponent as MoshtarianWeb} from "../../assets/images/web-moshtarian.svg";
import {ReactComponent as FooterWeb} from "../../assets/images/web-footer.svg";
import './moshtarian.scss'

class Moshtarian extends Component{
    render() {
        return(
            <div>
                <div id={'moshtarian'}>
                    <MoshtarianWeb id={'web'}/>
                    <div id={'space'}/>
                    <FooterWeb id={'footer'}/>
                </div>
            </div>
        )
    }
}

export default Moshtarian;
