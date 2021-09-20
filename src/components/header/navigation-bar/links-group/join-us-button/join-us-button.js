import './join-us-button.scss'
import {Link} from 'react-router-dom';

function JoinUsButton() {
    return (
        <div className="join-us">
            <Link to={'/join-us'} id={'button'}>
                همکاری با ما
            </Link>
        </div>
    )
}

export default JoinUsButton;
