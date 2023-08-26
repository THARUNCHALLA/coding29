import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="center">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </div>
)

export default Header
