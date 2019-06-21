import React, { Component } from 'react'

class Search extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div>
        <p>HELLO SEARCH</p>
          <p>{this.props.token}</p>
      </div>
    )
  }
}

export default Search
