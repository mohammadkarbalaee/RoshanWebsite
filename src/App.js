import {FullPage, Slide} from 'react-full-page';
import { Route, Switch } from 'react-router-dom';
import{ Suspense, lazy } from 'react';

const Header = lazy(() => import("./components/header/header"));
const Kashf = lazy(() => import("./components/slides/kashf"));
const Alefba = lazy(() => import("./components/slides/alefba"));
const Harf = lazy(() => import("./components/slides/harf"));
const Hazm = lazy(() => import("./components/slides/hazm"));
const Moshtarian = lazy(() => import("./components/slides/moshtarian/moshtarian"));

function RoshanWebsite() {

    return (
        <div>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route path={'/website'} exact>
                        <FullPage>
                            <Slide>
                                <Header type={'main'}/>
                            </Slide>
                            <Slide>
                                <Kashf/>
                            </Slide>
                            <Slide>
                                <Alefba/>
                            </Slide>
                            <Slide>
                                <Harf/>
                            </Slide>
                            <Slide>
                                <Hazm/>
                            </Slide>
                            <Slide>
                                <Moshtarian/>
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
            </Suspense>
        </div>
    )
}

export default RoshanWebsite;
