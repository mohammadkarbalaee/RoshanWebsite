import React, {Component} from 'react';
import './compact-group.scss';
import { ReactComponent as EqualsIcon } from '../../../../assets/images/equals-icon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/images/close-icon.svg';

class CompactGroup extends Component {

    render() {
        return(
            <div className='compact-group'>
                <button onClick={this.props.toggle}>
                    <EqualsIcon className='icon' id={this.props.isOpen ? 'hidden' : ''}/>
                    <CloseIcon className='icon' id={this.props.isOpen ? '' : 'hidden'}/>
                </button>
            </div>
        )
    }
}

export default CompactGroup;
