import React from 'react';
import './roshan-title.scss'
import {Link} from "react-router-dom";

function RoshanTitle() {
    return (
        <div className='roshan-title'>
            <Link to={'website'}>
                <p>
                    روشن
                </p>
            </Link>
        </div>
    )
}

export default RoshanTitle;
