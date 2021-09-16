import React from 'react';
import {Component} from 'react';
import './work-with-us.scss'

class WorkWithUs extends Component {
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

export default WorkWithUs;
