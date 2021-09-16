import React from 'react';
import {Component} from 'react';
import './contact-us.scss'

class ContactUs extends Component {

    render() {
        return(
            <div className='contact-us'>
                <button onClick={this.props.onClick}>
                    تماس با ما
                </button>
            </div>
        )
    }
}

export default ContactUs;
