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
      this.setState({
        nodes: result.data.nodes,
        glossaries: result.data.glossaries
      })
    })

  }

  drawNode(id){
    if (!this.state.nodes){
      return "";
    }

    const node = this.state.nodes.find( element => element._id === id );
    const returnNodes = [];

    node.childrenId.forEach( id => {
      if ( id ){
        const test = this.drawNode(id);
        returnNodes.push(test);
    }})

    node.childGlossaryId.forEach( id => {
      if ( id ){
        const test = this.drawGloss(id);
        returnNodes.push(test);
    }})

    return <Node key={node._id} name={node.name}>{ returnNodes }</Node>
  }

  drawGloss(id){
    if (!this.state.glossaries){
      return "";
    }

    const gloss = this.state.glossaries.find( element => element._id === id );

    return <GlossaryLink key={ gloss._id } title={ gloss.title } urlname={ this.props.match.params.urlname } urltitle={ gloss.urltitle }/>
  }

  render(){
    let rootid = "";

    if (this.state.nodes){
      rootid = this.state.nodes.find( element => element.isRoot === true )._id;
    }

    return(
      <div>
        { this.drawNode(rootid) }
      </div>
    )
  }
}

export default NodeSystem
