import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { userActions } from '../store/userSlice';

const Success = () => {
  const [searchParams] = useSearchParams();
  const uid = useSelector((state)=> state.user.uid);
  console.log(uid)
  const sessionId = searchParams.get('session_id');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const confirmBooking = async () => {
      try {
        const { data } = await axios.post('http://localhost:5000/confirm-booking', { sessionId, uid });
        dispatch(userActions.setBookings(data.booking));
        if (data.success) {
          navigate('/book-consultation');
        } else {
         
          navigate('/');
        }
      } catch (error) {
        console.error('Error confirming booking:', error);
       
      }
    };

    if (sessionId) {
      confirmBooking();
    } else {
      navigate('/');
    }
  }, [sessionId, navigate]);

  return <div>Processing your payment...</div>;
};

export default Success;
