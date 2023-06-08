import React, {useState} from 'react'
import clock from '../../image/clock_white_24dp.svg'
import cartIcon from '../../image/shopping_cart_black_24dp.svg'

import './Header.css'
import Cart from '../cart/Cart'
const Header = () => {
  const [opencart, setopencart] = useState(false)
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
            <li><a href="#location">Location</a></li>
            <li><a href="#contact">contact Us</a></li>
          </ul>
          <div className='time'>
            <img src={clock} alt="time" />
            <div className='detalis'>
              <span>opening time</span>
              <p>7 daye for weike from 9 am to 12am</p>
            </div>
          </div>
        </nav>
        <div className="mob-menu">
            <span id='line-1'></span>
            <span id='line-2'></span>
            <span id='line-3'></span>
          </div>
          <div className='cart-icon'>
            <a href="#" onClick={(e)=>{e.preventDefault(); setopencart(!opencart)}}><img src={cartIcon}/></a>
          </div>
        <Cart opencart={opencart}/>
      </div>
    </header>
  )
}

export default Header