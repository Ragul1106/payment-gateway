import React from 'react';
import { handleCheckout } from '../api/checkout';

const CheckoutButton = ({ cartItems }) => {
  return (
    <button className="btn btn-success" onClick={() => handleCheckout(cartItems)}>
      Pay with Card (Stripe)
    </button>
  );
};

export default CheckoutButton;
