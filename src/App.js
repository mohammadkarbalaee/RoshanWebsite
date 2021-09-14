import React from 'react';
import {Component} from 'react';
import { FullPage, Slide } from 'react-full-page';
import './App.css'
import Header from "./components/header/header-wrapper";
import Kashf from "./components/kashf/kashf";
import Alefba from "./components/alefba/alefba";
import Harf from "./components/harf/harf";
import Hazm from "./components/hazm/hazm";
import Clients from "./components/clients/clients";

class RoshanWebsite extends Component {

  render() {

    return(
        <FullPage>
            //header
            <Slide>
                <div className='roshan-website'>
                    <Header/>
                </div>
            </Slide>
            //kashf
            <Slide>
                <div className='roshan-website'>
                    <Kashf/>
                </div>
            </Slide>
            //alefba
            <Slide>
                <div className='roshan-website'>
                    <Alefba/>
                </div>
            </Slide>
            //harf
            <Slide>
                <div className='roshan-website'>
                    <Harf/>
                </div>
            </Slide>
            //hazm
            <Slide>
                <div className='roshan-website'>
                    <Hazm/>
                </div>
            </Slide>
            //clients
            <Slide>
                <div className='roshan-website'>
                    <Clients/>
                </div>
            </Slide>
        </FullPage>
    )
  }
}

export default RoshanWebsite;
