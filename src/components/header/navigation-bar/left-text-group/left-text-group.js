import React from 'react';
import {Component} from 'react';
import WorkWithUs from "./work-with-us/work-with-us";
import ContactUs from "./contact-us/contact-us";
import './left-text-group.scss'

class DoubleTextGroup extends Component {

    render() {
        return(
            <div className='left-text-group'>
                <ContactUs/>
                <WorkWithUs onClick={this.props.onHamkariClick}/>
            </div>
        )
    }
}

export default DoubleTextGroup;
