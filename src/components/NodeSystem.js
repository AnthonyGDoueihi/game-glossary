import React, { Component } from 'react'

class NodeSystem extends Component{
  render(){
    return(
      <div>
        <p>HELLO NODE</p>
          <p>{this.props.token}</p>
      </div>
    )
  }
}

export default NodeSystem
