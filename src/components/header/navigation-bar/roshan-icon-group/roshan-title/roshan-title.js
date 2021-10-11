import './roshan-title.scss'
import {Link} from "react-router-dom";
import RoshanText from "../../../../jsx-svgs/web/roshan-text";

function RoshanTitle() {
    return (
        <div className='roshan-title'>
            <Link to={'website'}>
                <RoshanText id={'title'}/>
            </Link>
        </div>
    )
}

export default RoshanTitle;
