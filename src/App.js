import {Route, Switch} from 'react-router-dom';
import {Component, lazy, Suspense} from 'react';
import ProgressIndicator from "./components/progress-indicator";
import {Fullpage,Slide} from 'fullpage-react';
import {isMobile} from "react-device-detect";

const Header = lazy(() => import("./components/header/header"));
const Kashf = lazy(() => import("./components/slides/kashf"));
const Alefba = lazy(() => import("./components/slides/alefba"));
const Harf = lazy(() => import("./components/slides/harf"));
const Hazm = lazy(() => import("./components/slides/hazm"));
const Customers = lazy(() => import("./components/slides/customers/customers"));


class RoshanWebsite extends Component {

    state = {
        fake:false,
        scrollsQuantity: 0,
    }

    render() {

        const fullPageOptions = {
            scrollSensitivity: 1,
            touchSensitivity: 0.5,
            scrollSpeed: isMobile ? 100 :700,
            hideScrollBars: true,
            enableArrowKeys: true,
        };

        fullPageOptions.slides = [
            <Slide>
                <Header type={'main'} key={this.state.fake} scrollQuantity={this.state.scrollsQuantity}/>
            </Slide>,
            <Slide>
                <Kashf key={this.state.fake}/>
            </Slide>,
            <Slide>
                <Alefba key={this.state.fake}/>
            </Slide>,
            <Slide>
                <Harf key={this.state.fake}/>
            </Slide>,
            <Slide>
                <Hazm key={this.state.fake}/>
            </Slide>,
            <Slide>c
                <Customers key={this.state.fake}/>
            </Slide>
        ];

        const onSlideChangeStart = () => {
            this.setState({
                fake: !this.state.fake,
                scrollsQuantity: this.state.scrollsQuantity + 1,
            });
        };

        return (
            <div>
                <Suspense fallback={<ProgressIndicator/>}>
                    <Switch>
                        <Route path={'/website'} exact>
                            <Fullpage {...fullPageOptions} onSlideChangeStart={onSlideChangeStart}/>
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
}

export default RoshanWebsite;
