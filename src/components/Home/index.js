import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
          Connecting People Across Faiths & Interests
        </h1>
        <img
          src="https://internationalwomensday.s3.us-west-2.amazonaws.com/images/EventDirectory-IWD2025.jpg"
          alt="clothes to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Join us to be part of a community where spirituality meets innovation.
          Together, we'll build a world that's more inclusive, engaging, and
          connected than ever before!
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Explore Events
          </button>
        </Link>
      </div>
      <img
        src="https://internationalwomensday.s3.us-west-2.amazonaws.com/images/EventDirectory-IWD2025.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
