import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from '@emotion/styled'

import Header from "./Header"

import NodeSystem from "./NodeSystem"
import Glossary from "./Glossary"
import Search from "./Search"

import { getCookie } from '../helper/cookie'


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


class App extends Component{
  constructor(){
    super();
    this.state = {
      token: getCookie()
    }
  }

  render(){
      return(
        <Background>
          <Header urlname={ this.props.match.params.username } token={ this.state.token }/>
          <Container>
            <Route exact path='/' component={ NodeSystem } />
            <Route path='/search' component={ Search } />
            <Route path='/:glossname' component={ Glossary } />
          </Container>
        </Background>
      )
  }
}

export default App
