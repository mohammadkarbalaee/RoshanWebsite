import JoinUsButton from "./join-us-button/join-us-button";
import ContactUsButton from "./contact-us-button/contact-us-button";
import './links-group.scss'

function DoubleTextGroup() {
    return (
        <div className='links-group'>
            <ContactUsButton/>
            <JoinUsButton/>
        </div>
    )
}

export default DoubleTextGroup;
