import React from 'react';
import {Component} from 'react';
import './main-background.scss'
import background from "../../../assets/images/background.svg";

class MainBackround extends Component {
    render() {
        return(
            <div className='main-background'>
                <img src={background} alt={'fail'}/>
            </div>
        )
    }
}

export default MainBackround;
