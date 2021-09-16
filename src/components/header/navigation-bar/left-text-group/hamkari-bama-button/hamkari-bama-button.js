import React from 'react';
import {Component} from 'react';
import './hamkari-bama-button.scss'

class HamkariBamaButton extends Component {
    render() {
        return(
            <div className="work-with-us">
                <button onClick={this.props.onClick}>
                    همکاری با ما
                </button>
            </div>
        )
    }
}

export default HamkariBamaButton;
