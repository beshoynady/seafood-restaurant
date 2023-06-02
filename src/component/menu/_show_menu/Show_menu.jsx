import React,{useState, useEffect} from 'react';
import './Show_menu.css';
import menu from '../../../menu.json';


const Show_menu = (props) => {
   const [count, setcount] = useState(2)

   const increment =(id) =>{ 
      setcount(count + 1)
      menu_fillter[id].count = menu_fillter[id].count + 1;
   };

   const descrement =(id) =>{
         setcount(count -1)
         menu_fillter[id].count = menu_fillter[id].count - 1;
   } ;


   const [menu_fillter, setmenu_fillter] = useState([])

   const getmenu =()=>{
      const fillter = menu.filter((item)=> item.category === props.categ);
      setmenu_fillter(fillter)
   }
   useEffect(() => {
      getmenu()
   }, [props.categ])
   
   return (
      <div className="products">
         <div className="product">
            {menu_fillter.map((product, index) =>{
            return(
               <div className="menu-card" key={index}>
                  <img src={require(`../../../image/menu/${product.img}`)} alt="" />
                  <div className="detalis">
                     <div className='product-det'>
                        <h2>{product.name}</h2>
                        <p>{product.desc}</p>
                     </div>
                     <div className="price">
                        <p>السعر{product.price}</p>
                        <div className="count">
                           <button className='symb' onClick={()=>descrement(index)}>-</button>
                           <span className='num'>{product.count<1?0:product.count}</span>
                           <button className='symb' onClick={()=>increment(index)}>+</button>
                        </div>
                     </div>
                     <div className='add_cart'>
                        <button>اضف الي طلباتي</button>
                     </div>
                  </div>
               </div>
            )
            })
            }
         </div>
      </div>
   )
}

export default Show_menu