import React, { Component } from 'react'
import { getCookie } from '../helper/cookie'
import styled from '@emotion/styled'

import Signup from './Signup'
import Login from './Login'
import Header from "./Header"

const Background = styled.div`
  background-image: linear-gradient(to bottom, #E4E4E4, #3B3B3B);
  min-height: 100vh;
  font-size: 20px;
  color: white;

`

const Container = styled.div`
  margin: 0 2.5em;
  background-color: #1B1B1B;
  text-align: center;
  box-shadow: 0 0.4em 0.8em #F7B500;
  min-height: 89vh;
`

class Home extends Component{
  constructor(){
    super();
    this.state = {
      token: getCookie()
    }
  }

  render(){
      return(
        <div>
          <Background>
            <Header urlname="" token={ this.state.token }/>
            <Container/>
          </Background>
        </div>
      )
  }
}

export default Home
