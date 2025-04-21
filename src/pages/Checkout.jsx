import React, {useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { CircularProgress } from "@mui/material";
import axios from "axios";


export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { selectedItems } = location.state || {};
  const userInfo = useSelector((state) => state.user.userInfo);

  const stripePromise = loadStripe(
    "pk_test_51R7wE3R3krjsKrAQKqN32brLQYPr1nMsqRuPm5GhUNsdZBR6yTPzfzRAbSFgQXG9t4sbLZX40Lmf4xjLKYdix3Ry00zngHiwy4"
  );
  
  
  console.log("Selected items in checkout:", selectedItems);

  const subtotal = selectedItems
  ? Object.values(selectedItems).reduce((sum, item) => {
      const price = parseFloat(item.price) || 0;  
      const quantity = parseInt(item.quantity) || 1; 
      return sum + (price * quantity);
    }, 0)
  : 0;

  const deliveryFee = 10;
  const total = subtotal + deliveryFee;


  const handleCheckout = async () => {
    setLoading(true);
    console.log("Total being sent:", total); 
    try {
      const response = await axios.post(
        "http://localhost:5000/shopping-payment",
        { total,  items: Object.values(selectedItems), deliveryFee }
      );
      const sessionId = response.data.id;
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        alert(error.message);
      }
    } catch (error) {
      console.error("Error creating Checkout Session:", error.message);
      alert("An error occurred while redirecting to payment.");
    } finally {
      setLoading(false);
    }
  };


  

  return (
    <>
      <Navbar />
      <StyledCheckout>
        <h3>Checkout</h3>
        <div className="main_container">
          <div className="left_side">
            {selectedItems ? (
              <>
                <div className="items-list">
                  {Object.values(selectedItems).map((item, index, array) => (
                    <>
                    <div key={item.name} className="checkout-item">
                      <div className="item_image">
                        <img src={item.image} alt={item.name} width={100} />
                        <h5>{item.name}</h5>
                      </div>

                      <div className="item_details">
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity || 1}</p>
                      </div>
                      
                    </div>
                    {index !== array.length - 1 && (
                      <hr style={{ width: "100%" }} />
                    )}
                    </>
                   
                  ))}
                  
                </div>
              </>
            ) : (
              <div className="no-items">
                <h2>No items selected for checkout</h2>
                <p>Please go back to your cart and select items to purchase</p>
              </div>
            )}
          </div>

          {selectedItems ? (
            <>
            <div className="right_side">
            <div className="order-summary">
              <h4>Order Summary</h4>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>€{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="address-section">
              <h4>Shipping Address</h4>
              <p>
                {userInfo.streetAddress}, {userInfo.city}, {userInfo.state},{" "}
                {userInfo.zipCode}
              </p>
            </div>

            {/* <button className="place-order-btn">Place Order</button> */}

            <button onClick={handleCheckout}>
                {loading ? (
                  <CircularProgress size={20} sx={{ color: "white" }} />
                ) : (
                  "Place Order"
                )}
              </button>
           
          </div>
            </>
          ): null}

          
        </div>
      </StyledCheckout>
      <Footer />
    </>
  );
}

const StyledCheckout = styled.div`
  width: 90%;
  margin: var(--section-margin) auto;

  .main_container {
    display: flex;
    gap: 2rem;
    margin: var(--heading-margin) auto;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 1.5rem;
    }

    .left_side {
      flex: 1;

      .items-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        border: 1px solid var(--primary-color);
        border-radius: var(--l-radius);
        padding: 1rem;

        .checkout-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;

          .item_image {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex: 1;

            img {
              width: 80px;
              height: 80px;
              object-fit: cover;
              border-radius: var(--m-radius);
              flex-shrink: 0;
            }
          }

          .item_details {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.5rem;
            flex-shrink: 0;
          }
        }
      }

      .no-items {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
      }
    }

    .right_side {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .order-summary {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--primary-color);
        border-radius: var(--l-radius);
        padding: 1.5rem;
        h4 {
          margin-bottom: 2%;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;

          &.total {
            margin-top: 1rem;
            padding-top: 0.5rem;
            border-top: 1px solid #ddd;
          }
        }
      }

      .address-section {
        border: 1px solid var(--primary-color);
        border-radius: var(--l-radius);
        padding: 1.5rem;
        h4 {
          margin-bottom: 2%;
        }
      }
    }
  }
`;
