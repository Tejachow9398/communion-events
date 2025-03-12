import {Link} from 'react-router-dom'
import {SiEventstore} from 'react-icons/si'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          className="website-logo"
          src="https://res.cloudinary.com/dov0rmq5b/image/upload/v1741704003/Screenshot_2025-03-11_200755_cxhru6.png"
          alt="website logo"
        />
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Events
          </Link>
        </li>
      </ul>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <Link to="/">
          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-image"
            />
          </li>
        </Link>
        <Link to="/products">
          <li className="nav-menu-item-mobile">
            <SiEventstore className="nav-bar-image" />
          </li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
