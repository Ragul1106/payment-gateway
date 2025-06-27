import React from 'react';
import CheckoutButton from '../components/CheckoutButton';

const sampleCart = [
  { name: 'Product A', price: 30, quantity: 1 },
  { name: 'Product B', price: 50, quantity: 2 },
];

const Cart = () => {
  const total = sampleCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      <ul className="list-group mb-3">
        {sampleCart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {item.name} x {item.quantity}
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between fw-bold">
          Total: <span>${total}</span>
        </li>
      </ul>
      <CheckoutButton cartItems={sampleCart} />
    </div>
  );
};

export default Cart;
