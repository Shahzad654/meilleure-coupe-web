import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { userActions } from "../store/userSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function CheckoutSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const sessionId = new URLSearchParams(location.search).get("session_id");

  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user.uid);
  const userInfo = useSelector((state)=> state.user.userInfo);
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderSaved, setOrderSaved] = useState(false);



  // useEffect(() => {
  //   const fetchSessionMetadata = async () => {
  //     if (orderSaved || !sessionId || !uid) return;

  //     try {
  //       const res = await axios.get(
  //         `http://localhost:5000/get-session?session_id=${sessionId}`
  //       );
  //       const meta = res.data.metadata;
  //       setMetadata(meta);

  //       const parsedItems = JSON.parse(meta.items);

  //       const docRef = await addDoc(collection(db, "orders"), {
  //         uid,
  //         total: meta.total,
  //         deliveryFee: meta.deliveryFee,
  //         items: parsedItems,
  //         createdAt: serverTimestamp(),
  //         sessionId,
  //       });

  //       dispatch(
  //         userActions.setOrders({
  //           [docRef.id]: {
  //             uid,
  //             total: meta.total,
  //             deliveryFee: meta.deliveryFee,
  //             items: parsedItems,
  //           },
  //         })
  //       );
  //       setOrderSaved(true);
  //     } catch (err) {
  //       console.error("Error saving order:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchSessionMetadata();
  // }, [sessionId, uid, dispatch, orderSaved]);

  useEffect(() => {
    const abortController = new AbortController(); 
  
    const fetchSessionMetadata = async () => {
      if (orderSaved || !sessionId || !uid) return;
  
      try {
        const res = await axios.get(
          `http://localhost:5000/get-session?session_id=${sessionId}`,
          { signal: abortController.signal } 
        );
        const meta = res.data.metadata;
        setMetadata(meta);
  
        const parsedItems = JSON.parse(meta.items);
  
        const order = {
          uid,
          address: userInfo.streetAddress,
          state: userInfo.state,
          phoneNum: userInfo.phoneNumber,
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
          city: userInfo.city,
          country: userInfo.country,
          total: meta.total,
          deliveryFee: meta.deliveryFee,
          items: parsedItems,
          createdAt: serverTimestamp(),
          sessionId,
        };
  
        const docRef = await addDoc(collection(db, "orders"), order);
        // dispatch(userActions.setOrders({ [docRef.id]: order }));
        dispatch(userActions.setOrders({
          ...(state.user.orders || {}), 
          [docRef.id]: order
        }));
        
        setOrderSaved(true);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled:', err.message);
        } else {
          console.error("Error saving order:", err);
        }
      } finally {
        if (!abortController.signal.aborted) { 
          setLoading(false);
        }
      }
    };
  
    fetchSessionMetadata();
  
    return () => {
      abortController.abort(); 
    };
  }, [sessionId, uid, dispatch, orderSaved]);
  

  
  

  if (loading) return <p>Loading...</p>;

  return (
    <>
 
      <Wrapper>
        <div className="main_container">
          <h3>
            Congrats! Your order is placed. We will deliver within 2–3 business
            days.
          </h3>
          {metadata && (
            <>
              <h4>Order Summary:</h4>

              <p>
                <strong>Products:</strong>
              </p>
              <ul>
                {JSON.parse(metadata.items).map((item, i) => (
                  <li key={i}>
                    {item.name} — {item.quantity} x €{item.price}
                  </li>
                ))}
              </ul>
              <p>
                <strong>Total:</strong> €{metadata.total}
              </p>
              <p>
                <strong>Delivery Fee:</strong> €{metadata.deliveryFee}
              </p>
            </>
          )}
          <div className="back-btn">
          <button onClick={()=> navigate('/my-orders')}>Back to Home</button>
          </div>
         
        </div>

      </Wrapper>
      
    </>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .main_container {
    padding: 2rem;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

    h3 {
      color: #2e7d32;
      text-align: center;
      margin-bottom: 1.5rem;
    }

    h4 {
      color: #333;
      margin-top: 2rem;
      border-bottom: 1px solid #ddd;
      padding-bottom: 0.5rem;
    }

    p {
      color: #555;
      margin: 0.5rem 0;
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin-top: 1rem;
    }

    li {
      background: #f5f5f5;
      margin-bottom: 0.5rem;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      color: #333;
    }

    .back-btn{
      margin-top: 2%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
  }

  @media (max-width: 600px) {
    .main_container {
      padding: 1rem;
      margin: 60px 1rem 20px;
    }
  }
`;
