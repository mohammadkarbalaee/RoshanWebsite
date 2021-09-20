import React from 'react';
import './hamkari-bama-button.scss'

function HamkariBamaButton(props) {
    return (
        <div className="work-with-us">
            <button onClick={props.onClick}>
                همکاری با ما
            </button>
        </div>
    )
}

export default HamkariBamaButton;
