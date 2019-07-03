import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import PageLayout from "./PageLayout"

import NodeSystem from "./NodeSystem"
import Glossary from "./Glossary"
import Search from "./Search"


class App extends Component{
  render(){
      return(
        <PageLayout urlname={ this.props.match.params.urlname } token={ this.props.token } >
          <Switch>
            <Route exact
              path='/:urlname'
              render={ (routeProps) => (
                <NodeSystem {...routeProps} token={ this.props.token } />
              )}
            />
            <Route
              path='/:urlname/search'
              render={ (routeProps) => (
                <Search {...routeProps} token={ this.props.token }/>
              )}
            />
            <Route
              path='/:urlname/:titlename'
              render={ (routeProps) => (
                <Glossary {...routeProps} token={ this.props.token }/>
              )}
            />
          </Switch>
        </PageLayout>
      )
  }
}

export default App
