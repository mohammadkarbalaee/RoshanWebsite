import './contact-us-button.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Text} from "../../../../../assets/images/contact-us-text.svg";

function ContactUsButton() {
    return (
        <div className='contact-us'>
            <Link to={'/contact-us'}>
                <Text id={'button'}/>
            </Link>
        </div>
    )
}

export default ContactUsButton;
