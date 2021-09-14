import React from 'react';
import {Component} from 'react';
import Header from "./components/header/header-wrapper";
import './App.css'
import ScrollableContainer from "react-full-page-scroll";

class RoshanWebsite extends Component {

  render() {

    return(

      <ScrollableContainer animationTime={2000}>
          <div className='roshan-website'>
              <Header/>
          </div>
          <div className='roshan-website'>
              <Header/>
          </div>
      </ScrollableContainer>
    )
  }
}

export default RoshanWebsite;

