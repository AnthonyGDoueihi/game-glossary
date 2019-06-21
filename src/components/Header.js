import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { setAuthToken } from '../helper/setToken'

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
      urlname: this.props.urlname,
      username: "TODO get username as props"
    }

    this._signOut = this._signOut.bind(this);

  }

  _signOut(e){
    setAuthToken();
    document.cookie = "token="
    this.props.recheckCookie();
  }

  render(){
    let rightNavRender;

    if( this.state.token ){
      rightNavRender = (
          <Link to="/" onClick={this._signOut}>Sign Out</Link>
      )
    }else{
      rightNavRender = (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      )
    }

    let midNavRenderer;

    if( this.state.urlname ){
      midNavRenderer = (
            <Link to={`/${this.state.urlname}`}>{ this.state.username }</Link>
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
