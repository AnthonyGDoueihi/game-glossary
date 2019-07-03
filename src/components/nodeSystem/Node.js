import React, { Component } from 'react'

class Node extends Component{
  constructor(){
    super();

    this.state = {
      opened: false
    }
  }

  render(){
    return(
      <>
       <p>{ this.props.name }</p>
       { this.props.children }
      </>
    )
  }
}

export default Node
