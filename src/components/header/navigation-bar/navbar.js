import DoubleTextGroup from "./links-group/links-group";
import IconTextGroup from "./roshan-icon-group/roshan-icon-group";
import './navbar.scss'
import MenuButtons from "./menu-buttons/menu-buttons";

function Navbar(props) {
    return (
        <div className='navbar'>
            <DoubleTextGroup />
            <IconTextGroup/>
            <MenuButtons toggle={props.toggle} isOpen={props.isOpen}/>
        </div>
    )
}

export default Navbar;
