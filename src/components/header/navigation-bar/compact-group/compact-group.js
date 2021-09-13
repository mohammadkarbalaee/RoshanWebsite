import React, {Component} from 'react';
import './compact-group.scss';
import { ReactComponent as EqualsIcon } from '../../../../assets/images/equals-icon.svg';

class CompactGroup extends Component {
    render() {
        return(
            <div className='compact-group'>
                <EqualsIcon className='icon'/>
            </div>
        )
    }
}

export default CompactGroup;
