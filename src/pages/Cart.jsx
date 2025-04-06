import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { updateDoc, doc, deleteField } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import { useLocation } from "react-router-dom";

export default function Cart() {
  const [quantities, setQuantities] = useState({});
  const cart = useSelector((state) => state.user.cart);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = auth.currentUser?.uid;



  const handleQuantity = (type, name) => {
    setQuantities((prev) => {
      const currentQuantity = prev[name] || 1;
      const newQuantity = type === "increment" ? currentQuantity + 1 : Math.max(1, currentQuantity - 1);
  
      return { ...prev, [name]: newQuantity };
    });
  
   
    setData((prevData) => {
      if (prevData[name]) {
        return { ...prevData, [name]: { ...prevData[name], quantity: type === "increment" ? prevData[name].quantity + 1 : Math.max(1, prevData[name].quantity - 1) } };
      }
      return prevData;
    });
  };
  

  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      const selectedItems = Object.values(cart).reduce((acc, item) => {
        const quantity = quantities[item.name] || 1;
        acc[item.name] = { ...item, checked: true, quantity};
        return acc;
      }, {});
      setData(selectedItems);
    } else {
      setData({});
    }
  };

  const handleItemSelection = (name, isChecked) => {
    setData((prevData) => {
      const item = Object.values(cart).find((item) => item.name === name);

      if (!item) return prevData;

      const quantity = quantities[name] || 1;

      if (isChecked) {
        return { ...prevData, [name]: { ...item, checked: true, quantity } };
      } else {
        const updatedData = { ...prevData };
        delete updatedData[name];
        return updatedData;
      }
    });
  };

  const allChecked =
    Object.keys(data).length === Object.keys(cart).length &&
    Object.keys(cart).length > 0;

  console.log("Selected items", data);

  function Checkout() {
    const location = useLocation();
    const selectedItems = location.state?.selectedItems || {};
    
  }

  return (
    <>
      <Navbar />
      <StyledCart>
        <div className="buy_now">
          <h3>Cart</h3>
          {Object.keys(data).length > 0 && (
            <button className="outline-btn-primary"  onClick={() => navigate('/checkout', { state: { selectedItems: data } })}>Checkout</button>
          )}
        </div>
        <div className="cart_container">
          <div className="cart_header">
            <div className="cart_header_left">
              <input
                type="checkbox"
                name=""
                id=""
                checked={allChecked}
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
              <p>Select All</p>
            </div>

            {Object.keys(data).length > 0 && (
              <div className="delete_item">
                <AiOutlineDelete
                  color="red"
                  size={25}
                  style={{ cursor: "pointer" }}
                  
                />
              </div>
            )}
          </div>
          <hr style={{ width: "100%", marginBottom: "3%", marginTop: "1%" }} />

          {cart && Object.keys(cart).length > 0 ? (
            <div className="cart_items">
              {Object.values(cart)
                .filter((item) => typeof item === "object")
                .map((item, index, array) => (
                  <>
                    <div className="cart_item" key={item.name}>
                      <div className="cart_item_actions">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          style={{ cursor: "pointer" }}
                          checked={data[item.name]?.checked || false}
                          onChange={(e) =>
                            handleItemSelection(item.name, e.target.checked)
                          }
                        />
                        <div className="cart_image">
                          <img
                            src={item.image}
                            alt={item.name}
                            onClick={() =>
                              navigate(`/product-detail/${item.name}`)
                            }
                          />
                        </div>
                        <div className="cart_content">
                          <h4>{item.name}</h4>
                          <p>{item.price}</p>
                        </div>
                      </div>
                      <div className="quantity_actions">
                        <div className="quantity-container">
                          <div
                            className="quantity-btn"
                            onClick={() => handleQuantity("decrement", item.name)}
                          >
                            <p>-</p>
                          </div>
                          <p>{quantities[item.name] || 1}</p>
                          <div
                            className="quantity-btn"
                            onClick={() => handleQuantity("increment", item.name)}
                          >
                            <p>+</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index !== array.length - 1 && (
                      <hr style={{ width: "100%" }} />
                    )}
                  </>
                ))}
            </div>
          ) : (
            <div className="cart_empty">
              <h4>No items in cart</h4>
            </div>
          )}
        </div>
      </StyledCart>
      <Footer />
    </>
  );
}

const StyledCart = styled.div`
  width: 90%;
  margin: var(--section-margin) auto;

  .buy_now {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .cart_container {
    width: 80%;
    margin: var(--heading-margin) auto;
    border: 1px solid var(--border-color);
    padding: 10px;
    border-radius: var(--l-radius);
    .cart_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      .cart_header_left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        input {
          cursor: pointer;
        }
      }
    }
    .cart_items {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .cart_item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        .cart_item_actions {
          display: flex;
          align-items: center;
          gap: 2rem;
          .cart_image {
            img {
              width: 100px;
              height: 100px;
              border-radius: var(--m-radius);
              cursor: pointer;
            }
          }
        }

        .quantity_actions {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .quantity-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            border: 1px solid var(--primary-color);
            border-radius: var(--l-radius);
            padding: 0.5rem 1rem;
            background-color: #f8f8f8;

            p {
              font-weight: bold;
              min-width: 20px;
              text-align: center;
            }

            .quantity-btn {
              cursor: pointer;
              width: 25px;
              height: 25px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              background-color: var(--primary-color);
              color: var(--white-color);
              font-size: 18px;
              font-weight: bold;
              p {
                color: white;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .cart_empty {
      h4 {
        text-align: center;
      }
    }
  }

  @media (max-width: 640px) {
    .cart_container {
      width: 100%;
      .cart_items {
        .cart_item {
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          .cart_item_actions {
            /* flex-direction: column; */
          }
        }
      }
    }
  }
`;
