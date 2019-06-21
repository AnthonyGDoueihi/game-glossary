import React, { Component } from 'react'
import styled from '@emotion/styled'

import PageLayout from "./PageLayout"

class Home extends Component{
  render(){
      return(
        <PageLayout token={ this.props.token }>
          <p>HELLO HOME</p>
        </PageLayout>
      )
  }
}

export default Home
