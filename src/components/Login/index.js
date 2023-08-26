import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onsubmitSuccess = JwtToken => {
    Cookies.set('jwt_token', JwtToken, {expires: 45})
    const {history} = this.props
    history.replace('/')
  }

  onclick = async () => {
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
      this.onsubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="Container">
        <h1 className="heading">Please Login</h1>
        <button className="button" type="button" onClick={this.onclick}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
