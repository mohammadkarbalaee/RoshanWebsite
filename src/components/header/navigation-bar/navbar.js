import React from 'react';
import {Component} from 'react';
import DoubleTextGroup from "./left-text-group/left-text-group";
import IconTextGroup from "./right-icon-group/right-icon-group";
import './navbar.scss'

class Navbar extends Component {
    render() {
        return(
            <div className='navbar'>
                <DoubleTextGroup/>
                <IconTextGroup/>
            </div>
        )
    }
}

export default Navbar;
