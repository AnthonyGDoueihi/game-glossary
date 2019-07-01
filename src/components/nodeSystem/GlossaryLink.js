import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GlossaryLink extends Component{
  render(){
    return(
      <>
        <Link to={`/${ this.props.userUrlname }/${ this.props.glossUrlname }`}>{ this.props.title }</Link>
      </>
    )
  }
}

export default GlossaryLink
