import './contact-us-button.scss';
import {Link} from 'react-router-dom';
import ContactUsText from "../../../../jsx-svgs/web/contact-us-text";


function ContactUsButton() {
    return (
        <div className='contact-us'>
            <Link to={'/contact-us'}>
                <ContactUsText id={'button'}/>
            </Link>
        </div>
    )
}

export default ContactUsButton;
