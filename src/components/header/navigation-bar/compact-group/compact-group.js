import React, {Component} from 'react';
import './compact-group.scss';
import { ReactComponent as EqualsIcon } from '../../../../assets/images/equals-icon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/images/close-icon.svg';

class CompactGroup extends Component {

    state = {
        isOpen:false,
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return(
            <div className='compact-group'>
                <button onClick={this.toggle}>
                    <EqualsIcon className='icon' id={this.state.isOpen ? 'hidden' : ''}/>
                    <CloseIcon className='icon' id={this.state.isOpen ? '' : 'hidden'}/>
                </button>
            </div>
        )
    }
}

export default CompactGroup;
