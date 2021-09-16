import React from 'react';
import {Component} from 'react';
import { FullPage, Slide } from 'react-full-page';
import './App.css'
import Header from "./components/header/header-wrapper";
import Kashf from "./components/body/kashf/kashf";
import Alefba from "./components/body/alefba/alefba";
import Harf from "./components/body/harf/harf";
import Hazm from "./components/body/hazm/hazm";
import Moshtarian from "./components/clients/moshtarian";

class RoshanWebsite extends Component {

  render() {

    return(
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
    )
  }
}

export default RoshanWebsite;
