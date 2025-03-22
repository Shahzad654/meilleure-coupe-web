import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProfileImg from "../assets/profile.png";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProfilePage() {
    const user = useSelector((state) => state.user.userInfo);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }, []);
    
    console.log(user);
    
  return (
    <>
      <Navbar />
      <StyledProfilePage>
        {loading ? (
          <div className="loader_container">
            <CircularProgress size={40} color="#ff0000"/>
          </div>
        ) : (
          <>
            {/* <h1>Profile</h1> */}
            <div className="main_container">
              <div className="profile_container">
                <div className="left_container">
                  <div className="image">
                    <img src={ProfileImg} alt="" />
                  </div>
                  <div className="user_info">
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p>{user.email}</p>
                    <p>{user.phoneNumber}</p>
                    <p>{user.streetAddress}, {user.city}, {user.state}, {user.zipCode}</p>
                  </div>
                </div>
                {/* <hr /> */}

                <div className="right_container">
                  <h3>Recent Orders</h3>
                  <div className="orders_list">
                    <div className="order_card">
                      <div className="order_header">
                        <span className="order_id">Order #12345</span>
                        <span className="order_date">March 15, 2024</span>
                      </div>
                      <div className="order_details">
                        <div className="order_items">
                          <span>2x Classic Haircut</span>
                          <span>1x Beard Trim</span>
                        </div>
                        <div className="order_status">
                          <span className="status completed">Completed</span>
                        </div>
                      </div>
                      <div className="order_total">
                        <span>Total: $75.00</span>
                      </div>
                    </div>

                    <div className="order_card">
                      <div className="order_header">
                        <span className="order_id">Order #12344</span>
                        <span className="order_date">March 10, 2024</span>
                      </div>
                      <div className="order_details">
                        <div className="order_items">
                          <span>1x Premium Haircut</span>
                          <span>1x Hair Color</span>
                        </div>
                        <div className="order_status">
                          <span className="status completed">Completed</span>
                        </div>
                      </div>
                      <div className="order_total">
                        <span>Total: $120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </StyledProfilePage>
    </>
  );
}

const StyledProfilePage = styled.div`
  width: 90%;
  margin: auto;
  margin-top: var(--section-margin);
  min-height: 70vh;
  position: relative;
  
  .loader_container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  h1 {
    text-align: center;
  }
  .main_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--section-margin);

    .profile_container {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: flex-start;
      gap: 2rem;
      width: 100%;
      max-width: 1200px;

      .left_container {
        flex: 0 0 300px;
        background: white;
        padding: 2rem;
        border-radius: var(--m-radius);
        box-shadow: 0 2px 8px var(--shadow-light);
        flex-basis: 45%;
        
        .image {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.5rem;
          
          img {
            max-width: 150px;
            height: auto;
            border-radius: 50%;
          }
        }

        .user_info {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
          
          h3 {
            color: var(--text-color);
            margin-bottom: 0.5rem;
          }
        }
      }

      .right_container {
        flex: 1;
        flex-basis: 45%;
        max-width: none;
        padding: 2rem;
        background: white;
        border-radius: var(--m-radius);
        box-shadow: 0 2px 8px var(--shadow-light);

        h3 {
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }

        .orders_list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;

          .order_card {
            padding: 1.25rem;
            border: 1px solid var(--border-color);
            border-radius: var(--s-radius);
            transition: transform 0.2s ease;

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 12px var(--shadow-light);
            }

            .order_header {
              display: flex;
              justify-content: space-between;
              margin-bottom: 1rem;
              color: var(--text-color);

              .order_id {
                font-weight: 600;
              }

              .order_date {
                color: var(--text-light-color);
              }
            }

            .order_details {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              margin-bottom: 1rem;

              .order_items {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                color: var(--text-light-color);
              }

              .order_status {
                .status {
                  display: inline-block;
                  padding: 0.25rem 0.75rem;
                  border-radius: var(--s-radius);
                  font-size: 0.875rem;
                  font-weight: 500;

                  &.completed {
                    background-color: #e8f5e9;
                    color: #2e7d32;
                  }
                }
              }
            }

            .order_total {
              text-align: right;
              font-weight: 600;
              color: var(--text-color);
              margin-top: 1rem;
              padding-top: 1rem;
              border-top: 1px solid var(--border-color);
            }
          }
        }
      }
    }
  }

  @media (max-width: var(--bp-tablet)) {
    .profile_container {
      flex-direction: column;
      align-items: center;
      width: 100%;

      .left_container {
        flex: none;
        width: 100%;
        max-width: 100%;
      }

      .right_container {
        width: 100%;
        max-width: 100%;
        padding: 1rem;

        .orders_list {
          grid-template-columns: 1fr;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .main_container {
      .profile_container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        
        .left_container {
          width: 100%;
          max-width: 100%;
          flex: none;
        }
        
        .right_container {
          width: 100%;
          max-width: 100%;
          flex: none;
        }
      }
    }
  }

`;
