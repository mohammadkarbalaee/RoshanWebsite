import {FullPage, Slide} from 'react-full-page';
import Header from "./components/header/header-wrapper";
import Kashf from "./components/body/kashf/kashf";
import Alefba from "./components/body/alefba/alefba";
import Harf from "./components/body/harf/harf";
import Hazm from "./components/body/hazm/hazm";
import Moshtarian from "./components/moshtarian/moshtarian";
import { Route, Switch } from 'react-router-dom';
import HamakariBamaPage from "./components/header/navigation-bar/hamkari-bama-page/hamkari-bama-page";
import TamasBamaPage from "./components/header/navigation-bar/tamas-bama-page/tamas-bama-page";


function RoshanWebsite() {

    return (
        <div>
            <Switch>
                <Route path={'/'} exact>
                    <FullPage>
                        <Slide>
                            <div className='roshan-website'>
                                <Header/>
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
                    <TamasBamaPage/>
                </Route>
                <Route path={'/join-us'}>
                    <HamakariBamaPage/>
                </Route>
            </Switch>
        </div>
    )
}

export default RoshanWebsite;
