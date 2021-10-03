import React from 'react';
import './roshan-title.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Title} from "../../../../../assets/images/roshan-title.svg";

function RoshanTitle() {
    return (
        <div className='roshan-title'>
            <Link to={'website'}>
                <Title id={'title'}/>
            </Link>
        </div>
    )
}

export default RoshanTitle;
