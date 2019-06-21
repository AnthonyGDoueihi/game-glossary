import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Global, css } from '@emotion/core'
import GoogleFontLoader from 'react-google-font-loader';

import App from "./components/App"
import Home from "./components/Home"
import Signup from "./components/user/Signup"
import Login from "./components/user/Login"
import PageLayout from "./components/PageLayout"

import { getCookie } from './helper/cookie'


class Routes extends Component{
  constructor(){
    super();
    this.state = {
      token: getCookie()
    }
  }

    render(){
      return(
        <Router>
          <GoogleFontLoader
            fonts={[
              {
                font: 'Kalam',
                weights: [400, 700],
              },
              {
                font: 'Open Sans',
                weights: [300, 400, 600, 700],
              },
            ]}
          />
          <Global styles={css`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: 'Open Sans', sans-serif;
            }
          `}
          />

          <Switch>
            <Route exact
              path='/'
              render={ (routeProps) => (
                <Home {...routeProps} token={ this.state.token }/>
              )}
            />
            <Route exact
              path='/signup'
              render={ (routeProps) => (
                <Signup {...routeProps} token={ this.state.token }/>
              )}
            />
            <Route exact
              path='/login'
              render={ (routeProps) => (
                <Login {...routeProps} token={ this.state.token }/>
              )}
            />
            <Route
              path='/:username'
              render={ (routeProps) => (
                <App {...routeProps} token={ this.state.token }/>
              )}
            />
          </Switch>

        </Router>
      )
    }
}

// font-family: 'Kalam', cursive;
// font-family: 'Open Sans', sans-serif;

export default Routes;
