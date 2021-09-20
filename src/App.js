import {FullPage, Slide} from 'react-full-page';
import Header from "./components/header/header";
import Kashf from "./components/body/kashf";
import Alefba from "./components/body/alefba";
import Harf from "./components/body/harf";
import Hazm from "./components/body/hazm";
import Moshtarian from "./components/body/moshtarian/moshtarian";
import { Route, Switch } from 'react-router-dom';
import JoinusPage from "./components/header/join-us-page/joinus-page";
import ContactusPage from "./components/header/contact-us-page/contactus-page";


function RoshanWebsite() {

    return (
        <div>
            <Switch>
                <Route path={'/'} exact>
                    <FullPage>
                        <Slide>
                            <div className='roshan-website'>
                                <Header type={'main'}/>
                            </div>
                        </Slide>
                        <Slide>
                            <div className='roshan-website'>
                                <Kashf/>
                            </div>
                        </Slide>
                        <Slide>
                            <div className='roshan-website'>
                                <Alefba/>
                            </div>
                        </Slide>
                        <Slide>
                            <div className='roshan-website'>
                                <Harf/>
                            </div>
                        </Slide>
                        <Slide>
                            <div className='roshan-website'>
                                <Hazm/>
                            </div>
                        </Slide>
                        <Slide>
                            <div className='roshan-website'>
                                <Moshtarian/>
                            </div>
                        </Slide>
                    </FullPage>
                </Route>
                <Route path={'/contact-us'}>
                    <Header type={'contact-us'}/>
                </Route>
                <Route path={'/join-us'}>
                    <Header type={'join-us'}/>
                </Route>
            </Switch>
        </div>
    )
}

export default RoshanWebsite;
