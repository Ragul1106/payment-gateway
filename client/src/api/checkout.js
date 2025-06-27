import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51ReUUHFMjkS9HO8K4pdS2Kuzed53ir0aELXASerYa3pp8sVOLYsV10rS5dpcsfsHC5pR8KJNobwGTaStM2DFFoGO00riAKtIF1');

export const handleCheckout = async (cartItems) => {
  const stripe = await stripePromise;

  const res = await fetch('http://localhost:5000/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartItems }),
  });

  const data = await res.json();
  if (data.url) window.location.href = data.url;
};
