import React, { Component } from 'react'

import GlossContent from './GlossContent'

const axios = require('axios');
const SERVER_URL = "http://localhost:4000/glossaryPage/"

class Glossary extends Component{
  constructor(props){
    super(props);

    this.state = {
      title: "",
      content: []
    }

    axios.get( SERVER_URL + this.props.match.params.urlname + '/' + this.props.match.params.titlename ).then( (result) => {

      this.setState({
        title: result.data.title,
        content: result.data.content
      })
    })
  }

  render(){

    const contentRender = [];
    this.state.content.forEach( content => {

      contentRender.push(<GlossContent key={ content.header } style={ content.style } content={ content.content } header={ content.header }/>)
    })

    return(
      <div>
        { this.state.title }
        { contentRender }
      </div>
    )
  }
}

export default Glossary
