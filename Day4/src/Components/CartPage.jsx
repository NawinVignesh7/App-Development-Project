// src/Components/CartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

function CartPage({ cart, removeFromCart, updateQuantity }) {
  const navigate = useNavigate();

  const proceedToCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="cart-page">
      <h3>Your Cart ({cart.length} items)</h3>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={require(`../../public/images/${item.img}`)} alt={item.name} className="cart-item-image" />
            {console.log(item.img)}
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <div className="cart-item-actions">
                <button onClick={() => removeFromCart(index)}>Remove</button>
                <div className="quantity-selector">
                  <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h4>Price Details</h4>
          <div className="price-row">
            <span>Price ({cart.length} items)</span>
            <span>${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span>Delivery Charges</span>
            <span>Free</span>
          </div>
          <div className="price-row total">
            <span>Total Amount</span>
            <span>${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
          <button className="checkout-button" onClick={proceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
