import './join-us-button.scss'
import {Link} from 'react-router-dom';
import JoinUsText from "../../../../jsx-svgs/web/join-us-text";

function JoinUsButton() {
    return (
        <div className="join-us">
            <Link to={'/join-us'}>
                <JoinUsText id={'button'}/>
            </Link>
        </div>
    )
}

export default JoinUsButton;
