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
  margin-left: 2em;
  display: flex;
`
const RightNav = styled.div`
  margin-right: 2em;
  display: flex;
`

const MidNav = styled.div`

`

const StyleLink = styled.p`
  padding: 0 0.5em;
  color: black;
  text-shadow: 0.1em 0.1em #F7B500;
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
          <Link style={{ textDecoration: 'none' }} to="/" onClick={this._signOut}><StyleLink>Sign Out</StyleLink></Link>
      )
    }else{
      rightNavRender = (
        <>
          <Link style={{ textDecoration: 'none' }} to="/signup"><StyleLink>Sign Up</StyleLink></Link>
          <Link style={{ textDecoration: 'none' }} to="/login"><StyleLink>Log In</StyleLink></Link>
        </>
      )
    }

    let midNavRenderer;
    let leftNavRenderer;

    if( this.state.urlname ){
      midNavRenderer = (
        <StyleLink>{ this.state.username }</StyleLink>
      )

      leftNavRenderer = (
        <>
          <Link style={{ textDecoration: 'none' }} to={`/${this.state.urlname}`}><StyleLink>Folders</StyleLink></Link>
          <Link style={{ textDecoration: 'none' }} to={`/${this.state.urlname}/search`}><StyleLink>Search</StyleLink></Link>
        </>
      )
    }

      return(
        <Height>
          <LeftNav>
            { leftNavRenderer }
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
