import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
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
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="mobile-login-container">
        <img
          src="https://res.cloudinary.com/dvhmxwjp7/image/upload/v1633589819/login-bg-image.png"
          alt="website login"
          className="login-website-landing"
        />
        <p className="mobile-login-heading">Login</p>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="login-website-logo-heading-container">
            <img
              src="https://res.cloudinary.com/dvhmxwjp7/image/upload/v1633360659/website-logo.png"
              alt="website logo"
              className="login-website-logo"
            />
            <h1 className="login-website-heading">Tasty Kitchens</h1>
            <h1 className="login-website-login-heading">Login</h1>
          </div>
          <div className="input-label-container">
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="input"
              value={username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="password-label-container">
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default Login
