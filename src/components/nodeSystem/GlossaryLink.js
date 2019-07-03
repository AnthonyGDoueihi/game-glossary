import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GlossaryLink extends Component{
  render(){
    return(
      <>
        <Link to={`/${ this.props.urlname }/${ this.props.urltitle }`}>{ this.props.title }</Link>
      </>
    )
  }
}

export default GlossaryLink
