import React,{useState} from 'react'
import './Menu.css'
import Show_menu from './_show_menu/Show_menu';


const Menu = () => {
  const [category, setcategory] = useState('اسماك')

  const getcategory =(e)=>{
    setcategory(e.target.value)
  }
  return (
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
        <Show_menu categ={category}/>
      </div>
    </section>
  )
}

export default Menu