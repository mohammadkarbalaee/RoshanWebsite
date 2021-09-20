import React from 'react';
import './menu-buttons.scss';
import {ReactComponent as MenuIcon} from '../../../../assets/images/menu-icon.svg';
import {ReactComponent as CloseIcon} from '../../../../assets/images/close-icon.svg';

function MenuButtons(props) {
    return (
        <div className='menu-buttons'>
            <button onClick={props.toggle}>
                <MenuIcon className='icon' id={props.isOpen ? 'hidden' : ''}/>
                <CloseIcon className='icon' id={props.isOpen ? '' : 'hidden'}/>
            </button>
        </div>
    )
}

export default MenuButtons;
