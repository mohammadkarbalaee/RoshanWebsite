import React from 'react';
import './contact-us-page.scss';
import {ReactComponent as ContactUsMobile} from "../../../assets/images/mobile-contact-us.svg";
import {ReactComponent as ContactUsWeb} from "../../../assets/images/web-contact-us.svg";

class ContactUsPage extends React.Component {
    render() {
        return (
            <div className={'contact-us-page'}>
                <ContactUsMobile id={'mobile'}/>
                <ContactUsWeb id={'web'}/>
            </div>
        )
    }
}

export default ContactUsPage;
