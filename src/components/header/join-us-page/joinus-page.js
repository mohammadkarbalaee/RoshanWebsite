import React from 'react';
import {ReactComponent as JoinUsMobile} from "../../../assets/images/mobile-join-us.svg";
import {ReactComponent as JoinUsWeb} from "../../../assets/images/web-join-us.svg";
import './joinus-page.scss'

class JoinusPage extends React.Component {
    render() {
        return (
            <div className={'join-us-page'}>
                <JoinUsMobile id={'mobile'}/>
                <JoinUsWeb id={'web'}/>
            </div>
        )
    }
}

export default JoinusPage;
