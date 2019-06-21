import React, { Component } from 'react'
const axios = require('axios');

const SERVER_URL = "http://localhost:4000/signup"
//TODO make properly
class Signup extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordValid: ""
    }

    this._handleUsername = this._handleUsername.bind(this);
    this._handleEmail = this._handleEmail.bind(this);
    this._handlePassword = this._handlePassword.bind(this);
    this._handlePasswordValid = this._handlePasswordValid.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleUsername(e){
    this.setState({ username: e.target.value })
  }

  _handleEmail(e){
    this.setState({ email: e.target.value })
  }

  _handlePassword(e){
    this.setState({ password: e.target.value })
  }

  _handlePasswordValid(e){
    this.setState({ passwordValid: e.target.value })
  }

  _handleSubmit(e){
    e.preventDefault();

    if( this.state.password === this.state.passwordValid ){

      axios.post( SERVER_URL, {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      }).then( (result) => {
        console.log(result);

        this.setState({
          username: "",
          email: "",
          password: "",
          passwordValid: ""
        })
      })

    }else{
      //TODO return error
      console.log("error");
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={ this._handleSubmit }>
          <label>
            Username:
            <input type="text" value={ this.state.username } onChange={ this._handleUsername } required/>
          </label>

          <label>
            Email:
              <input type="email" value={ this.state.email } onChange={   this._handleEmail } required/>
            </label>

          <label>
            Password:
            <input type="password" value={ this.state.password } onChange={ this._handlePassword } required/>
          </label>

          <label>
            Repeat Password:
            <input type="password" value={ this.state.passwordValid } onChange={ this._handlePasswordValid } required/>
          </label>

          <input type="submit" value="Join" />
        </form>
      </div>
    )
  }
}

export default Signup
