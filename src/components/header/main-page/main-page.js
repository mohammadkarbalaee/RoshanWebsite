import './main-page.scss'
import {isMobile} from 'react-device-detect';
import {lazy} from 'react';

let MobileBackground;
let WebBackground;

if(isMobile){
    MobileBackground = lazy(() => import("../../jsx-svgs/mobile/background"));
} else {
    WebBackground = lazy(() => import("../../jsx-svgs/web/background"));
}


const returnBasedOneDevice = (props) => {
  if(isMobile){
      return(
          <MobileBackground className='mobile-background' status={props.scrollQuantity}/>
      )
  } else {
      return(
            <WebBackground className='web-background' status={props.scrollQuantity}/>
      )
  }
};

function MainPage(props) {
    return (
        <div className='all'>
            {returnBasedOneDevice(props)}
        </div>
    )
}

export default MainPage;
