import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dvhmxwjp7/image/upload/v1633342950/not-found.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        we are sorry, the page you requested could not be found
      </p>
      <span className="not-found-description">
        Please go back to the homepage
      </span>
      <Link to="/" className="not-found-link">
        <button type="button" className="not-found-button">
          Home Page
        </button>
      </Link>
    </div>
    <Footer />
  </>
)
export default NotFound
