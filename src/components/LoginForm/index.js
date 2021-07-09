import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailureLogin = error => {
    this.setState({
      showErrorMsg: true,
      errorMsg: error,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  onChangeInputField = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="password-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="password-input-field"
          type="password"
          id="password"
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="userInput-field"
          type="text"
          id="username"
          placeholder="Username"
          onChange={this.onChangeInputField}
          value={username}
        />
      </>
    )
  }

  renderLoginForm = () => {
    const {showErrorMsg, errorMsg} = this.state

    return (
      <div className="login-form-container">
        <form onSubmit={this.onSubmitForm} className="form-container">
          <img
            alt="website logo"
            className="nxt-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button className="login-button" type="submit">
            Login
          </button>
          {showErrorMsg && <p className="erormsg">{errorMsg}</p>}
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="login-page-container">
        <img
          alt="website login"
          className="login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        {this.renderLoginForm()}
      </div>
    )
  }
}

export default LoginForm
