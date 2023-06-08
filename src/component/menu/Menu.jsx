import React from 'react'
import './Menu.css'
import Show_menu from './_show_menu/Show_menu';
import {cartcontext} from '../../App.jsx'


const Menu = () => {
  return (
    <cartcontext.Consumer>
      {
        ({getcategory})=>{
          return(
            <section className='menu' id='menu'>
              <div className="container">
                <nav>
                  <ul>
                    <li><button value={'اسماك'} onClick={getcategory}>الاسماك</button></li>
                    <li><button value={'جمبري'} onClick={getcategory}>الجمبري</button></li>
                    <li><button value={'طاجن'} onClick={getcategory}>الطواجن</button></li>
                    <li><button value={'ارز'} onClick={getcategory}>الارز و المعجنات</button></li>
                    <li><button value={'شوربه'} onClick={getcategory}>الشوربه</button></li>
                    <li><button value={'سلطة'} onClick={getcategory}>السلطات</button></li>
                  </ul>
                </nav>
                <Show_menu/>
              </div>
            </section>
          )
        }
      }
    </cartcontext.Consumer>
  )
}

export default Menu