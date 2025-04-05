// Success.jsx
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const navigate = useNavigate();

  useEffect(() => {
    const confirmOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/checkout-session/${sessionId}`);
        const order = response.data.order;
        
        // Save to localStorage
        const orders = JSON.parse(localStorage.getItem('orders') || []);
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        navigate('/orders');
      } catch (error) {
        console.error('Error confirming order:', error);
        navigate('/checkout/canceled');
      }
    };

    if (sessionId) confirmOrder();
    else navigate('/');
  }, [sessionId, navigate]);

  return <div>Processing your payment...</div>;
};

export default Success;