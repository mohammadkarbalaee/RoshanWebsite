import React from 'react';
import './main-page.scss'
import WebBackground from "../../jsx-svgs/web/background";
import MobileBackground from "../../jsx-svgs/mobile/background";

function MainPage(props) {
    return (
        <div className='all'>
            <WebBackground className='web-background'/>
            <MobileBackground className='mobile-background'/>
        </div>
    )
}

export default MainPage;
