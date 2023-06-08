// import { createContext, useContext, useState } from "react";
// import products from '../products.json'


// const CartContext = createContext({});


// const CartProvider = ({ children }) => {
//     const [count, setcount] = useState(0)
//     const [offerproducts, setofferproducts] = useState(products)
  
//     const increment =(id) =>{ 
//       setcount(count + 1)
//       offerproducts[id].count = offerproducts[id].count + 1;
//     };
  
//     const descrement =(id) =>{
//       setcount(count -1)
//       offerproducts[id].count = offerproducts[id].count - 1;
//     } ;

//   return (
//     <CartContext.Provider
//       value={{
//         offerproducts,
//         increment,
//         descrement,
//         count,
//         }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
// export const useCart = () => {
//   return useContext(CartContext);
// };