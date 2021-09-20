import './contact-us-button.scss';
import {Link} from 'react-router-dom';

function ContactUsButton() {
    return (
        <div className='contact-us'>
            <Link to={'/contact-us'} id={'button'}>
                تماس با ما
            </Link>
        </div>
    )
}

export default ContactUsButton;
