import React from 'react';
import {ReactComponent as HamkariMobile} from "../../../assets/images/mobile-hamkari.svg";
import {ReactComponent as HamkariWeb} from "../../../assets/images/web-hamkari.svg";
import './joinus-page.scss'

class JoinusPage extends React.Component {
    render() {
        return (
            <div className={'hamkari-bama'}>
                <HamkariMobile id={'mobile'}/>
                <HamkariWeb id={'web'}/>
            </div>
        )
    }
}

export default JoinusPage;
