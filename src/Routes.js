import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Global, css } from '@emotion/core'
import GoogleFontLoader from 'react-google-font-loader';

import App from "./components/App"
import Home from "./components/Home"

const Routes = (
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
      <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Open Sans', sans-serif;
        }
      `}
      />

      <Route exact path='/' component={ Home } />
      <Route path='/:username' component={ App } />
    </Router>
);

// font-family: 'Kalam', cursive;
// font-family: 'Open Sans', sans-serif;

export default Routes;
