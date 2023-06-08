import React,{createContext, useEffect, useState} from 'react'
import Header from './component/header/Header.jsx'
import Home from './component/home/Home.jsx';
import Offers from './component/offers/Offers.jsx';
import Menu from './component/menu/Menu.jsx';
import Location from './component/location/Location.jsx';
import Contact from './component/contact/Contact.jsx';
import Footer from './component/footer/Footer.jsx';
import products from '../src/menu.json'
import Cart from './component/cart/Cart.jsx';

import './App.css';

export const cartcontext = createContext({})



function App() {
  const [count, setcount] = useState(0)
  const products_menu = products
  const increment =(id) =>{ 
    setcount(count + 1)
    const product= products_menu.find(product=>product.id == id)
    product.count = product.count + 1
  };

  const descrement =(id) =>{
    setcount(count -1)
    const product= products_menu.find(product=>product.id == id)
    if(product.count<1){
      product.count = 0
    }else{
        product.count = product.count - 1   
      }  
    } ;
  const [items, setitems] = useState([])

  const getcartitemsdata = (id) =>{
    const cartitem= products_menu.filter(item => item.id === id)
    if (items.length>0) {
      const repeateditem = items.filter(item => item.id === id)
      if(repeateditem.length ==0) {
      setitems([...items, ...cartitem]) 
    }
    }else{
        setitems([...cartitem]) 
    }
  }

  
  const [cost, setcost] = useState(0)
  
  const allcost=()=>{
    if (items.length>0){
      let total = 0;
      items.map((item)=>{
        const itemcost = item.price * item.count;
        total += itemcost
        setcost(total)
      })
    }else{
      setcost(0)
    }
  }

  
  const deleteitems = (id)=>{
    const withotdeleted = items.filter(item=>item.id !== id)
    setitems(withotdeleted);
  }


  useEffect(() => {
    allcost()

}, [items,count])

const [category, setcategory] = useState('اسماك')

const getcategory =(e)=>{
  setcategory(e.target.value)
}
// const [count-menu, setcount-menu] = useState(2)

// const increment =(id) =>{ 
//    setcount-menu(count + 1)
//    menu_fillter[id].count = menu_fillter[id].count + 1;
// };

// const descrement =(id) =>{
//       setcount(count -1)
//       menu_fillter[id].count = menu_fillter[id].count - 1;
// } ;


// const [menu_fillter, setmenu_fillter] = useState([])

// const getmenu =()=>{
//    const fillter = menu.filter((item)=> item.category === props.categ);
//    setmenu_fillter(fillter)
// }
// useEffect(() => {
//    getmenu()
// }, [props.categ])

  return (
    <cartcontext.Provider value={{products_menu,getcategory,deleteitems, category, items, cost, getcartitemsdata, increment, descrement}}>
      <div className='app'>
        <Header/>
        <Home/>
        <Offers/>
        <Menu/>
        <Location/>
        <Contact/>
        <Footer/>
      </div>
    </cartcontext.Provider>
    
  );
}

export default App;
