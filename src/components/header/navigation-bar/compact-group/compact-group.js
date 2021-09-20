import React from 'react';
import './compact-group.scss';
import {ReactComponent as EqualsIcon} from '../../../../assets/images/equals-icon.svg';
import {ReactComponent as CloseIcon} from '../../../../assets/images/close-icon.svg';

function CompactGroup(props) {
    return (
        <div className='compact-group'>
            <button onClick={props.toggle}>
                <EqualsIcon className='icon' id={props.isOpen ? 'hidden' : ''}/>
                <CloseIcon className='icon' id={props.isOpen ? '' : 'hidden'}/>
            </button>
        </div>
    )
}

export default CompactGroup;
