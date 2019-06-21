import React, { Component } from 'react'
import styled from '@emotion/styled'

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

class PageLayout extends Component{
  render(){
    return(
      <Background>
        <Header urlname={ this.props.urlname } token={  this.props.token }/>
        <Container>
          { this.props.children }
        </Container>
      </Background>
    )
  }
}

export default PageLayout
