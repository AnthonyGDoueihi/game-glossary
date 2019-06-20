import React, { Component } from 'react'

import { getCookie } from '../helper/cookie'
import Signup from './Signup'
import Login from './Login'

class Home extends Component{
  constructor(){
    super()
    this.state = {
      token: getCookie()
    }

  }

  render(){
    return(
      <div>
        <Login />
      </div>
    )
  }
}

export default Home
