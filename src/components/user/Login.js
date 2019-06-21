import React, { Component } from 'react'
import { setAuthToken } from '../../helper/setToken'
import { withRouter } from 'react-router'
import PageLayout from "../PageLayout"

const axios = require('axios');


const SERVER_URL = "http://localhost:4000/login"
//TODO make properly
class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this._handleEmail = this._handleEmail.bind(this);
    this._handlePassword = this._handlePassword.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleEmail(e){
    this.setState({ email: e.target.value })
  }

  _handlePassword(e){
    this.setState({ password: e.target.value })
  }

  _handleSubmit(e){
    e.preventDefault();

    axios.post( SERVER_URL, {
      password: this.state.password,
      email: this.state.email
    }).then( (result) => {

      document.cookie = `token=${result.data.data.token}`

      this.setState({
        email: "",
        password: ""
      })

      //TODO set the state all the way up with token
      this.props.history.push(`/${result.data.data.user.urlname}`);

    })
  }

  render(){
    return(
      <PageLayout token={ this.props.token }>
        <form onSubmit={ this._handleSubmit }>
          <label>
            Email:
              <input type="email" value={ this.state.email } onChange={     this._handleEmail } required />
            </label>

            <label>
              Password:
              <input type="password" value={ this.state.password } onChange={   this._handlePassword } required />
            </label>

            <input type="submit" value="Join" />
          </form>
      </PageLayout>
    )
  }
}

export default withRouter(Login)
