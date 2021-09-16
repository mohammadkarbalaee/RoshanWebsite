import React from 'react';
import {Component} from 'react';
import DoubleTextGroup from "./left-text-group/left-text-group";
import IconTextGroup from "./right-icon-group/right-icon-group";
import './navbar.scss'
import CompactGroup from "./compact-group/compact-group";

class Navbar extends Component {
    render() {
        return(
            <div className='navbar'>
                <DoubleTextGroup/>
                <IconTextGroup/>
                <CompactGroup toggle={this.props.toggle} isOpen={this.props.isOpen}/>
            </div>
        )
    }
}

export default Navbar;
