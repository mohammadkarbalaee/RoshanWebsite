import './main-page.scss'
import {isMobile} from 'react-device-detect';
import MobileBackground from "../../jsx-svgs/mobile/background";
import WebBackground from "../../jsx-svgs/web/background";

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
