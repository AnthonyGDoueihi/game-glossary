import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from "./components/Home"
import NodeSystem from "./components/NodeSystem"
import Glossary from "./components/Glossary"
import Search from "./components/Search"

const Routes = (
  <Router>
    <div>
      <Route path='/:username/search' component={ Search } />
      <Route path='/:username/:glossname' component={ Glossary } />
      <Route path='/:username' component={ NodeSystem } />
      <Route exact path='/' component={ Home } />
    </div>
  </Router>
);

export default Routes;
