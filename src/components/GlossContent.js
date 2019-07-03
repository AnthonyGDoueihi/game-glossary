import React, { Component } from 'react'

class GlossContent extends Component{
  constructor(){
    super()
  }

  render(){
    if ( this.props.style === 'image' ){
      return(
        <>
          <img src={ this.props.content } alt={ this.props.header }/>
          <p>{ this.props.header }</p>
        </>
      )
    }else if ( this.props.style === 'text' ){
      return(
        <>
          <h2>{ this.props.header }</h2>
          <p>{ this.props.content }</p>
        </>
      )
    }else{
      return(
        <>
        </>
      )
    }
  }
}

export default GlossContent;
