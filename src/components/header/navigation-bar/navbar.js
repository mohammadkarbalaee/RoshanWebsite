import DoubleTextGroup from "./links-group/links-group";
import IconTextGroup from "./roshan-icon-group/roshan-icon-group";
import './navbar.scss'
import MenuButtons from "./menu-buttons/menu-buttons";
import {motion} from 'framer-motion';
import navbarAnimation from "../../../animations/navbar";

function Navbar(props) {
    return (
        <motion.div
            className='navbar'
            initial={navbarAnimation.initial}
            animate={navbarAnimation.animate}
            transition={navbarAnimation.transition}
        >
            <DoubleTextGroup />
            <IconTextGroup/>
            <MenuButtons toggle={props.toggle} isOpen={props.isOpen}/>
        </motion.div>
    )
}

export default Navbar;
