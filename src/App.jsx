import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item){
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id );

      if (existingItem){
        return prev.map(cartItem => 
          cartItem.id === item.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
      } else {
        return [...prev, {...item, quantity: 1}]
      }

    })
  }

  function removeFromCart(id){
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id){
          if (item.quantity > 1){
            return { ...item, quantity: item.quantity - 1};
          } else {
            return null;
          }
        }
        return item;
      }).filter(item => item !== null);
    });
  }

  function removeAllFromCart(id){
    setCartItems(prev => prev.filter(item => item.id !== id));
  }


  return (
    <>
      <Home addToCart={addToCart}/>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} />
    </>
  )
}

export default App
