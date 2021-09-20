import React from 'react';
import './tamas-bama-button.scss'

function TamasBamaButton(props) {
    return (
        <div className='contact-us'>
            <button onClick={props.onClick}>
                تماس با ما
            </button>
        </div>
    )
}

export default TamasBamaButton;
