import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  state = {displayItems: false}

  onClickHamburgerIcon = () => {
    this.setState(prevState => ({displayItems: !prevState.displayItems}))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {displayItems} = this.state
    const {isCartActive, isHomeActive} = this.props
    const homeLinkClassName = isHomeActive === 'true' ? 'active' : null
    const cartLinkClassName = isCartActive === 'true' ? 'active' : null
    return (
      <>
        <nav className="header-container">
          <div className="header-content">
            <Link to="/" className="nav-link ">
              <div className="website-logo-container">
                <img
                  src="https://res.cloudinary.com/dvhmxwjp7/image/upload/v1633360659/website-logo.png"
                  alt="website logo"
                  className="website-logo"
                />
                <h1 className="header-website-name">Tasty Kitchens</h1>
              </div>
            </Link>
            <ul className="nav-item-website-view">
              <Link
                to="/"
                className={`nav-link home-nav-item ${homeLinkClassName}`}
              >
                <li>Home</li>
              </Link>

              <Link
                to="/cart"
                className={`nav-link cart-nav-link ${cartLinkClassName}`}
              >
                <li>Cart</li>
              </Link>

              <li>
                <button
                  type="button"
                  className="logout-nav-item"
                  onClick={this.onClickLogout}
                >
                  Logout
                </button>
              </li>
            </ul>

            <button
              type="button"
              className="nav-menu-button"
              onClick={this.onClickHamburgerIcon}
            >
              <GiHamburgerMenu className="nav-menu-icon" />
            </button>
          </div>
        </nav>
        {displayItems ? (
          <div className="nav-items-mobile-view">
            <ul className="nav-item-mobile-view">
              <Link
                to="/"
                className={`nav-link home-nav-item ${homeLinkClassName}`}
              >
                <li>Home</li>
              </Link>

              <Link
                to="/cart"
                className={`nav-link cart-nav-item ${cartLinkClassName}`}
              >
                <li>Cart</li>
              </Link>

              <li>
                <button
                  type="button"
                  className="logout-nav-item"
                  onClick={this.onClickLogout}
                >
                  Logout
                </button>
              </li>
            </ul>

            <button
              type="button"
              className="header-close-icon"
              onClick={this.onClickHamburgerIcon}
            >
              <AiFillCloseCircle className="close-icon" />
            </button>
          </div>
        ) : null}
      </>
    )
  }
}
export default withRouter(Header)
