import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import PortfolioLogo from '../../images/PortfolioLogo.png'
import './nav.css'

const Nav = () => (
  <nav>
    <div className="nav__items">
      <div className="nav__items--left">
        <a className='nav__item--link' href='https://github.com/Kang0' target="_blank" rel="noopener noreferrer">Github</a>
        <a className='nav__item--link' href='https://www.linkedin.com/in/kevinkangg/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className='nav__item--link' href='https://medium.com/@kevinkangg' target="_blank" rel="noopener noreferrer">Blog</a>
      </div>

      <a className="nav__item--center" href='/'><img src={PortfolioLogo} alt='Portfolio Logo' className='nav__item--logo' /></a>

      <div className="nav__items--right">
        <Link className='nav__item--link' to='/projects'>Projects</Link>
        <Link className='nav__item--link' to='/about'>About</Link>
      </div>
    </div>
  </nav>
)

export default Nav
