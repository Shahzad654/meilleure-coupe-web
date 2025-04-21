import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import User from '../assets/user.svg'
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const user = useSelector((state) => state.user.userInfo);
  const orders = useSelector((state) => state.user.orders);
  const navigate = useNavigate();
  console.log(orders);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  console.log(user);

  return (
    <>
      <Navbar />
      <StyledProfilePage>
        <>
        <div className="header">
        <h3>Your Profile</h3>
        <div className="action-btn">
        <button className="outline-btn" onClick={()=> navigate("/my-orders")}>My Orders</button>
        <button  onClick={()=> navigate("/my-bookings")}>My bookings</button>
        </div>
        
        </div>
          

          <div className="main_container">
            <div className="image_container">
              <img src={User} alt="" />
            </div>
            <div className="info_container">
              <h5>{user.firstName} {user.lastName}</h5>
              <div className="email">
                <MdEmail style={{width: '22px', height: '22px'}}/>
              <h5>{user.email}</h5>
              </div>

              <div className="email">
                <IoMdCall style={{width: '22px', height: '22px'}}/>
              <h5>{user.phoneNumber}</h5>
              </div>

              <div className="email">
                <FaLocationDot style={{width: '22px', height: '22px'}}/>
              <h5 style={{textAlign:'center'}}>{user.streetAddress} {user.city} {user.state}</h5>
              </div>
              
            </div>

            <div className="edit_profile">
              <button onClick={()=> navigate('/edit-profile')}>Edit Profile</button>
            </div>

          </div>
         
        </>
      </StyledProfilePage>

      <Footer />
    </>
  );
}

const StyledProfilePage = styled.div`
  width: 90%;
  margin: auto;
  height: 100vh;
  margin-top: var(--section-margin);

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    .action-btn{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
  }

  .main_container{
    margin-top: var(--heading-margin);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    .image_container{
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        max-width: 150px;
        height: auto;
      }
    }
    .info_container{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      .email{
        display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      }
    }
    
  }
  
  @media (max-width: 640px) {
    .header{
      justify-content: center;
      flex-direction: column;
    }
  }
`;
