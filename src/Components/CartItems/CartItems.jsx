import React, { useContext, useEffect } from 'react';
import './cartitem.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  useEffect(() => {
    console.log('Cart Items:', cartItems);
  }, [cartItems]);

  if (!Array.isArray(all_products) || all_products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
      <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((product) => {
        const { id, image, name, new_price } = product;

        if (cartItems[id] > 0) {
          return (
            <div key={id}>
              <div className="cartitems-format cartitem-format-main">
                <img src={image} alt="" className='carticon-product-icon' />
                <p>{name}</p>
                <p>${new_price}</p>
                <button className='cartitems-quantity'>{cartItems[id]}</button>
                <p>${new_price * cartItems[id]}</p>
                <img className='carticon-product-remove-icon' src={remove_icon} onClick={() => removeFromCart(id)} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitem-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal </p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee </p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promocode, Enter here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='Promo Code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
