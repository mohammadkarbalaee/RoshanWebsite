import {FullPage, Slide} from 'react-full-page';
import { Route, Switch ,useLocation} from 'react-router-dom';
import{ Suspense, lazy } from 'react';
import ProgressIndicator from "./components/progress-indicator";
import {AnimatePresence} from "framer-motion";

const Header = lazy(() => import("./components/header/header"));
const Kashf = lazy(() => import("./components/slides/kashf"));
const Alefba = lazy(() => import("./components/slides/alefba"));
const Harf = lazy(() => import("./components/slides/harf"));
const Hazm = lazy(() => import("./components/slides/hazm"));
const Moshtarian = lazy(() => import("./components/slides/moshtarian/moshtarian"));


function RoshanWebsite() {

    const location = useLocation();

    return (
        <div>
            <Suspense fallback={<ProgressIndicator/>}>
                <AnimatePresence>
                    <Switch location={location} key={location.key}>
                        <Route path={'/website'} exact>
                            <FullPage>
                                {/*<Slide>*/}
                                {/*    <Header type={'main'}/>*/}
                                {/*</Slide>*/}
                                <Slide>
                                    <Kashf/>
                                </Slide>
                                {/*<Slide>*/}
                                {/*    <Alefba/>*/}
                                {/*</Slide>*/}
                                {/*<Slide>*/}
                                {/*    <Harf/>*/}
                                {/*</Slide>*/}
                                {/*<Slide>*/}
                                {/*    <Hazm/>*/}
                                {/*</Slide>*/}
                                {/*<Slide>*/}
                                {/*    <Moshtarian/>*/}
                                {/*</Slide>*/}
                            </FullPage>
                        </Route>
                        <Route path={'/contact-us'}>
                            <Header type={'contact-us'}/>
                        </Route>
                        <Route path={'/join-us'}>
                            <Header type={'join-us'}/>
                        </Route>
                    </Switch>
                </AnimatePresence>
            </Suspense>
        </div>
    )
}

export default RoshanWebsite;
