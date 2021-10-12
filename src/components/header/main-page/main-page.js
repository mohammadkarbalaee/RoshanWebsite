import './main-page.scss'
import {isMobile} from 'react-device-detect';
import {ReactComponent as MobileBackground} from "../../../assets/images/mobile-background.svg";
import {ReactComponent as WebBackground} from "../../../assets/images/web-background.svg";
import {motion} from "framer-motion";
import {
    imageScrollDownAnimation,
    noneAnimation,
    startingAnimation,
} from "../../../animations/main-page";
import {useEffect} from "react";


const imageAnimationChooser = (scrollQuantity) => {
    switch (scrollQuantity) {
        case 1:
            return imageScrollDownAnimation;
        case 0:
            return startingAnimation;
        default:
            return noneAnimation;
    }
};

const returnBasedOneDevice = (props) => {
  if(isMobile){
      return(
          <MobileBackground className='mobile-background'/>
      )
  } else {
      return(
            <WebBackground className='web-background'/>
      )
  }
};

function MainPage(props) {

    useEffect(() => {
        window.addEventListener("beforeunload", scrollToTop);
        return () => {
            window.removeEventListener("beforeunload", scrollToTop);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <motion.div
            className='all'
            initial={imageAnimationChooser(props.scrollQuantity).initial}
            animate={imageAnimationChooser(props.scrollQuantity).animate}
            transition={imageAnimationChooser(props.scrollQuantity).transition}
        >
            {returnBasedOneDevice()}
        </motion.div>
    )
}

export default MainPage;
