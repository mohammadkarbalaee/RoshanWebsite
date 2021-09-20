import React from 'react';
import './contactus-page.scss';
import {ReactComponent as TamasMobile} from "../../../assets/images/mobile-tamas.svg";
import {ReactComponent as TamasWeb} from "../../../assets/images/web-tamas.svg";

class ContactusPage extends React.Component {
    render() {
        return (
            <div className={'tamas-bama'}>
                <TamasMobile id={'mobile'}/>
                <TamasWeb id={'web'}/>
            </div>
        )
    }
}

export default ContactusPage;
