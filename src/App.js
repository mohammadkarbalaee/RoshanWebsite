// import {FullPage, Slide} from 'react-full-page';
import {Route, Switch} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import ProgressIndicator from "./components/progress-indicator";
import {Fullpage, Slide,} from 'fullpage-react';

const Header = lazy(() => import("./components/header/header"));
const Kashf = lazy(() => import("./components/slides/kashf"));
const Alefba = lazy(() => import("./components/slides/alefba"));
const Harf = lazy(() => import("./components/slides/harf"));
const Hazm = lazy(() => import("./components/slides/hazm"));
const Moshtarian = lazy(() => import("./components/slides/moshtarian/moshtarian"));


function RoshanWebsite() {

    const fullPageOptions = {
        scrollSensitivity: 1,
        touchSensitivity: 1,
        scrollSpeed: 600,
        hideScrollBars: true,
        enableArrowKeys: true,
    };

    fullPageOptions.slides = [
            <Slide>
                <Header type={'main'}/>
            </Slide>,
            <Slide>
                <Kashf/>
            </Slide>,
            <Slide>
                <Alefba/>
            </Slide>,
            <Slide>
                <Harf/>
            </Slide>,
            <Slide>
                <Hazm/>
            </Slide>,
            <Slide>
                <Moshtarian/>
            </Slide>
    ];

    const onSlideChangeStart = () => {
        console.log('yep');
    };

    return (
        <div>
            <Suspense fallback={<ProgressIndicator/>}>
                <Switch>
                    <Route path={'/website'} exact>
                        <Fullpage {...fullPageOptions} onSlideChangeStart={this.onSlideChangeStart}/>
                        {/*<FullPage>*/}
                        {/*    <Slide>*/}
                        {/*        <Header type={'main'}/>*/}
                        {/*    </Slide>*/}
                        {/*    <Slide>*/}
                        {/*        <Kashf/>*/}
                        {/*    </Slide>*/}
                        {/*    <Slide>*/}
                        {/*        <Alefba/>*/}
                        {/*    </Slide>*/}
                        {/*    <Slide>*/}
                        {/*        <Harf/>*/}
                        {/*    </Slide>*/}
                        {/*    <Slide>*/}
                        {/*        <Hazm/>*/}
                        {/*    </Slide>*/}
                        {/*    <Slide>*/}
                        {/*        <Moshtarian/>*/}
                        {/*    </Slide>*/}
                        {/*</FullPage>*/}
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
