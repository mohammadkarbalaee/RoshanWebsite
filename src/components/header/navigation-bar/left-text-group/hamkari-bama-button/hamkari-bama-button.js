import './hamkari-bama-button.scss'
import {Link} from 'react-router-dom';

function HamkariBamaButton() {
    return (
        <div className="work-with-us">
            <Link to={'/join-us'} id={'button'}>
                همکاری با ما
            </Link>
        </div>
    )
}

export default HamkariBamaButton;
