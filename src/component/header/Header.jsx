import React from 'react'
import logo from '../../image/logo.jpg';
import clock from '../../image/clock_white_24dp.svg'
import cart from '../../image/shopping_cart_black_24dp.svg'

import './Header.css'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className='logo'>
          <a href="#">CAVIAR</a>
        </div>
        <nav>
          <ul className='navigator'>
            <li><a href="#">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#offer">offers</a></li>
            <li><a href="#reserved">Reservation</a></li>
            <li><a href="#location">Location</a></li>
          </ul>
        </nav>
        <div className="right">
          <div className='time'>
            <img src={clock} alt="time" />
            <div className='detalis'>
              <span>opening time</span>
              <p>7 daye for weike from 9 am to 12am</p>
            </div>
          </div>
          <div className='cart'>
            <a href="#"><img src={cart}/></a>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header