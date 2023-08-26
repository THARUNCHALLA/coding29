import {Component} from 'react'

import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

class About extends Component {
  render() {
    return (
      <div className="center1">
        <Header />
        <h1 className="heading">About Route</h1>
        <LogoutButton />
      </div>
    )
  }
}

export default About
