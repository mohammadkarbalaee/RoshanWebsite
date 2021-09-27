import React from 'react';
import './main-page.scss'
import WebBackground from "../../jsx-svgs/web/background";
import MobileBackground from "../../jsx-svgs/mobile/background";

function MainPage(props) {
    return (
        <div className='all'>
            <WebBackground className='web-background' status={props.scrollQuantity}/>
            <MobileBackground className='mobile-background' status={props.scrollQuantity}/>
        </div>
    )
}

export default MainPage;
