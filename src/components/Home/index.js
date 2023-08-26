import {Component} from 'react'

import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

class Home extends Component {
  render() {
    return (
      <div className="center1">
        <Header />
        <h1 className="heading">Home Route</h1>
        <LogoutButton />
      </div>
    )
  }
}

export default Home
