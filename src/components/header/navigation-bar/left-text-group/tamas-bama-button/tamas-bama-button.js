import './tamas-bama-button.scss';
import {Link} from 'react-router-dom';

function TamasBamaButton() {
    return (
        <div className='contact-us'>
            <Link to={'/contact-us'} id={'button'}>
                تماس با ما
            </Link>
        </div>
    )
}

export default TamasBamaButton;
