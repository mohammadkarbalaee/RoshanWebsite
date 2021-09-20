import React from 'react';
import DoubleTextGroup from "./left-text-group/left-text-group";
import IconTextGroup from "./right-icon-group/right-icon-group";
import './navbar.scss'
import CompactGroup from "./compact-group/compact-group";

function Navbar(props) {
    return (
        <div className='navbar'>
            <DoubleTextGroup onHamkariClick={props.onHamkariClick} onTamasClick={props.onTamasBamaClick}/>
            <IconTextGroup/>
            <CompactGroup toggle={props.toggle} isOpen={props.isOpen}/>
        </div>
    )
}

export default Navbar;
