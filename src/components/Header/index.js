import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-content">
      <img
        alt="website logo"
        className="header-nxt-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <ul className="nav-menu">
        <Link className="link-style" to="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link className="link-style" to="/product">
          <li className="nav-item">Products</li>
        </Link>
        <Link className="link-style" to="/cart">
          <li className="nav-item">Cart</li>
        </Link>
        <button className="logout-button" type="button">
          Logout
        </button>
      </ul>
    </div>
  </nav>
)

export default Header
