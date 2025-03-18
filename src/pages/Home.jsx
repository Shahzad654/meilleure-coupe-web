import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/heroimg2.jpg";

export default function Home() {
  return (
    <StyledHome>
      <div className="main_container">
        <div className="image_container">
          <div className="overlay"></div>
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero_content">
       
          <h1>
            Healthy Pets <span>Happy Homes</span>
          </h1>
          <p>Give Your Pets the Love They Deserve with Premium Organic Food & Supplies – Because Their Health and Happiness Matter!</p>
          <button className="outline-btn">Shop Now</button>
        </div>
      </div>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  margin-top: 2%;
  height: calc(100vh - var(--nav-height));
  .main_container {
    height: 100%;
    position: relative;
    .image_container {
      height: 100%;
      position: relative;
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.9;
      }
    }
    .hero_content {
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;
      z-index: 2;
      h1 {
        max-width: 15ch;
        color: white;
        font-size: var(--xl-heading);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        span {
          font-size: var(--xl-heading);
          font-weight: 600;
          color: var(--primary-color);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
      }
      p {
        color: white;
        max-width: 40ch;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }
    }
  }

  @media (max-width: 950px) {
    .main_container {
      .hero_content {
        left: 50%;
        transform: translate(-50%, -50%);
        
      }
    }
  }
`;
