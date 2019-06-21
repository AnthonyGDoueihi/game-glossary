import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from '@emotion/styled'

import PageLayout from "./PageLayout"

import NodeSystem from "./NodeSystem"
import Glossary from "./Glossary"
import Search from "./Search"

import { getCookie } from '../helper/cookie'


class App extends Component{
  constructor(){
    super();
    this.state = {
      token: getCookie()
    }
  }

  render(){
      return(
        <PageLayout urlname={ this.props.match.params.username } token={ this.state.token } >
          <Switch>
            <Route exact
              path='/:urlname'
              render={ (routeProps) => (
                <NodeSystem {...routeProps} token={ this.state.token }/>
              )}
            />
            <Route
              path='/:urlname/search'
              render={ (routeProps) => (
                <Search {...routeProps} token={ this.state.token }/>
              )}
            />
            <Route
              path='/:urlname/:glossname'
              render={ (routeProps) => (
                <Glossary {...routeProps} token={ this.state.token }/>
              )}
            />
          </Switch>
        </PageLayout>
      )
  }
}

export default App
