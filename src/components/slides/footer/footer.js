import './footer.scss';
import {ReactComponent as Line} from "../../../assets/images/footer-line.svg";
import {ReactComponent as Email} from "../../../assets/images/email.svg";
import {ReactComponent as Name} from "../../../assets/images/sherkat.svg";
import {ReactComponent as JoinUsText} from "../../../assets/images/join-us-text.svg";
import {ReactComponent as ContactUsText} from "../../../assets/images/contact-us-text.svg";
import {Link} from "react-router-dom";
import {ReactComponent as RoshanSVG} from "../../../assets/images/roshan-icon.svg";
import {ReactComponent as Title} from "../../../assets/images/roshan-title.svg";


export default function FooterWeb(){
    return(
        <div id={'footer'}>
            <Line id={'line'}/>
            <div id={'body'}>
                <div id={'icons-group'}>
                    <Link to={'/website'}>
                        <RoshanSVG id={'icon'}/>
                    </Link>
                    <Link to={'website'}>
                        <Title id={'title'}/>
                    </Link>
                </div>
                <div id={'left'}>
                    <div id={'links'}>
                        <Link to={'/contact-us'}>
                            <ContactUsText id={'contact-us'}/>
                        </Link>
                        <Link to={'/join-us'}>
                            <JoinUsText id={'join-us'}/>
                        </Link>
                    </div>
                    <div id={'email-name'}>
                        <Email id={'email'}/>
                        <Name id={'name'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
