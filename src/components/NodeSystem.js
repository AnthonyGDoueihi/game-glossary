import React, { Component } from 'react'

import AddGlossary from './nodeSystem/AddGlossary'
import AddNode from './nodeSystem/AddNode'
import GlossaryLink from './nodeSystem/GlossaryLink'
import Node from './nodeSystem/Node'

const axios = require('axios');
const SERVER_URL = "http://localhost:4000/nodesystem/"

// TODO get the nodes and glossaries in one request,
// send them through a helper function starting from the root that queues more creation of components and puts and children.
// Maybe Recursion?
// Also add the add node and add glossary components too.
// Decide which props needs to be passed into the child components to keep things under control.

class NodeSystem extends Component{
  constructor(props){
    super(props);
    this.state = {
      nodes: "",
      glossaries: ""
    }

    axios.get( SERVER_URL + this.props.match.params.urlname ).then( (result) => {
      console.log(result);
      this.setState({
        nodes: result.data.nodes,
        glossaries: result.data.glossaries
      })
    })

  }

  spawnChildNodes(childArray){

  }

  spawnChildGlossaries(childArray){

  }

  render(){
    return(
      <div>
        <p>HELLO NODE</p>
      </div>
    )
  }
}

export default NodeSystem
