import React from 'react';
import {Component} from 'react';
import HamkariBamaButton from "./hamkari-bama-button/hamkari-bama-button";
import TamasBamaButton from "./tamas-bama-button/tamas-bama-button";
import './left-text-group.scss'

class DoubleTextGroup extends Component {

    render() {
        return(
            <div className='left-text-group'>
                <TamasBamaButton onClick={this.props.onTamasClick}/>
                <HamkariBamaButton onClick={this.props.onHamkariClick}/>
            </div>
        )
    }
}

export default DoubleTextGroup;
