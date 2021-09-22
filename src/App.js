import {FullPage, Slide} from 'react-full-page';
import { Route, Switch ,useLocation} from 'react-router-dom';
import{ Suspense, lazy } from 'react';
import ProgressIndicator from "./components/progress-indicator";
import {AnimatePresence} from "framer-motion";
import utils from 'svg-path-reverse';

const Header = lazy(() => import("./components/header/header"));
const Kashf = lazy(() => import("./components/slides/kashf"));
const Alefba = lazy(() => import("./components/slides/alefba"));
const Harf = lazy(() => import("./components/slides/harf"));
const Hazm = lazy(() => import("./components/slides/hazm"));
const Moshtarian = lazy(() => import("./components/slides/moshtarian/moshtarian"));

var path ="M241 310.27H127.572l-20.181 16.427";
var reverse = utils.reverse;
var reversed = reverse(path);
console.log(reversed);

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
