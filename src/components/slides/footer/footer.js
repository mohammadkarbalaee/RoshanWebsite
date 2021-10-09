import './footer.scss';
import {ReactComponent as Line} from "../../../assets/images/footer-line.svg";
import {ReactComponent as Email} from "../../../assets/images/email.svg";
import {ReactComponent as Name} from "../../../assets/images/sherkat.svg";
import {ReactComponent as JoinUsText} from "../../../assets/images/join-us-text.svg";
import {ReactComponent as ContactUsText} from "../../../assets/images/contact-us-text.svg";
import {Link} from "react-router-dom";
import {ReactComponent as RoshanSVG} from "../../../assets/images/roshan-icon.svg";
import {ReactComponent as Title} from "../../../assets/images/roshan-title.svg";

export default function FooterWeb() {
    const height = window.innerHeight;

    const scrollToTop = (height) => {
        const totalHeight = 5 * height;
        window.scrollTo({
            top: totalHeight - 1 * height,
            behavior:'smooth',
        });
        setTimeout(() => {
            window.scrollTo({
                top: totalHeight - 2 * height,
                behavior:'smooth',
            });
        }, 500);
        setTimeout(() => {
            window.scrollTo({
                top: totalHeight - 3 * height,
                behavior:'smooth',
            });
        }, 1000);
        setTimeout(() => {
            window.scrollTo({
                top: totalHeight - 4 * height,
                behavior:'smooth',
            });
        }, 1500);
        setTimeout(() => {
            window.scrollTo({
                top: totalHeight - 5 * height,
                behavior:'smooth',
            });
        }, 2000);

        setTimeout(() => {
            window.location.reload();
        }, 2500);
    };

    return (
        <div id={'footer'}>
            <Line id={'line'}/>
            <div id={'body'}>
                <div id={'icons-group'}>
                    <button onClick={() => {
                        scrollToTop(height);
                    }} style={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                    }}>
                        <RoshanSVG id={'icon'}/>
                    </button>
                    <button onClick={() => {
                        scrollToTop(height);
                    }} style={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                    }}>
                        <Title id={'title'}/>
                    </button>
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
