import React, { Component } from 'react'

class Glossary extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div>
        <p>HELLO GLOSSARY</p>
        <p>{this.props.token}</p>
      </div>
    )
  }
}

export default Glossary
