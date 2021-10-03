import './join-us-button.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Text} from "../../../../../assets/images/join-us-text.svg";

function JoinUsButton() {
    return (
        <div className="join-us">
            <Link to={'/join-us'}>
                <Text id={'button'}/>
            </Link>
        </div>
    )
}

export default JoinUsButton;
