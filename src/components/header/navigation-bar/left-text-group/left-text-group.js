import React from 'react';
import HamkariBamaButton from "./hamkari-bama-button/hamkari-bama-button";
import TamasBamaButton from "./tamas-bama-button/tamas-bama-button";
import './left-text-group.scss'

function DoubleTextGroup(props) {
    return (
        <div className='left-text-group'>
            <TamasBamaButton onClick={props.onTamasClick}/>
            <HamkariBamaButton onClick={props.onHamkariClick}/>
        </div>
    )
}

export default DoubleTextGroup;
