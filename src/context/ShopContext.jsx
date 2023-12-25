import React, { createContext, useState, useEffect } from 'react';
import all_product from '../Components/Assets/all_product';
import Swal from 'sweetalert2';
import './shopcontext.css'
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    Swal.fire({
      icon: 'success',
      title: 'Item added successfully!',
      showConfirmButton: true,
      confirmButtonClass: 'swal-button',
      customClass: {
        popup: 'swal-wide swal-custom',
        title: 'swal-custom-title',
        content: 'swal-custom-text',
      },
    });
  };
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(0, prev[itemId] - 1) }));
    Swal.fire({
      icon: 'success',
      title: 'Item removed successfully!',
      showConfirmButton: true,
      confirmButtonClass: 'swal-button',
      customClass: {
        popup: 'swal-wide swal-custom',
        title: 'swal-custom-title',
        content: 'swal-custom-text',
      },
    });
  };
  
  

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((Product) => Product.id === parseInt(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log('Updated Cart Items:', cartItems);
  }, [cartItems]);

  const contextValue = {
    all_products: all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
