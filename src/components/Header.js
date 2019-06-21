import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from '@emotion/styled'

const Height = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5em;
  color: black;
`

const LeftNav = styled.div`
  padding-left: 2.5em;
`
const RightNav = styled.div`
  padding-right: 2.5em;
`

const MidNav = styled.div`

`

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      token: this.props.token,
      urlname: this.props.urlname
    }

  }

  render(){
    let midNavRenderer;
    let rightNavRender;

    if( this.state.token ){
      rightNavRender = (
          <div>
            <p>TODO Sign Out</p>
          </div>
      )
    }else{
      rightNavRender = (
          <div>
            <p>TODO Sign Up</p>
            <p>TODO Log In</p>
          </div>
      )
    }

    if( this.state.urlname ){
      midNavRenderer = (
          <div>
            <p>TODO Link To {this.state.urlname}</p>
          </div>
      )
    }

      return(
        <Height>
          <LeftNav>
            <Link to="/" />
          </LeftNav>
          <MidNav>
            { midNavRenderer }
          </MidNav>
          <RightNav>
            { rightNavRender }
          </RightNav>
        </Height>
      )
  }
}

export default Header
