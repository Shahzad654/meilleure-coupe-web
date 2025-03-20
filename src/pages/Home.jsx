import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/heroimg3.jpg";
import Cat1 from "../assets/cat.svg";
import Cat2 from "../assets/dog.svg";
import Cat3 from "../assets/birds.svg";
import Cat4 from "../assets/fish.png";
import Cat5 from "../assets/rabit.png";
import Banner from "../assets/accent.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {  

  return (
    <>
    <Navbar/>
    <StyledHome>
      <div className="main_container">
        <div className="right_side">
          <h1>The Best place to but top quality products for your pets</h1>
          <p>Shop by pet, brans or products on sale</p>
          <button className="secondary-btn">Shop Now</button>
        </div>
        <div className="left_side">
          <div className="image_border">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>

      <div className="categories_container">
        <div className="categories_header">
          <h2>Categories</h2>
        </div>

        <div className="card_container">
          <div className="card" >
            <div className="image_wrapper">
              <img src={Cat1} alt="Cat" />
            </div>
            <h4>Cats</h4>
          </div>

          <div className="card">
            <div className="image_wrapper">
              <img src={Cat2} alt="Dog" />
            </div>
            <h4>Dogs</h4>
          </div>

          <div className="card" >
            <div className="image_wrapper">
              <img src={Cat3} alt="Bird" />
            </div>
            <h4>Birds</h4>
          </div>

          <div className="card">
            <div className="image_wrapper">
              <img src={Cat4} alt="fish" />
            </div>
            <h4>Fish</h4>
          </div>

          <div className="card" >
            <div className="image_wrapper">
              <img src={Cat5} alt="Rabbit" />
            </div>
            <h4>Rabbit</h4>
          </div>
        </div>

        <div className="button_container">
          <button className="secondary-btn">See More</button>
        </div>
      </div>

      <div className="banner_container">
        <div className="banner_image">
          <img src={Banner} alt="" />
        </div>

        <div className="banner_content">
          <h2>Welcome to La Meilleure Coupe The perfect pet store website solution</h2>
          <p>We offer a wide range of products for your pets, from food to toys and accessories</p>
          <button>Shop Now</button>
        </div>
      </div>
    </StyledHome>
    <Footer/>
    </>
  );
}

const StyledHome = styled.div`
  width: 90%;
  margin: var(--section-margin) auto;

  .main_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    .right_side {
      flex-basis: 45%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      gap: 1.5rem;
    }

    .left_side {
      flex-basis: 50%;
      .image_border {
        img {
          width: 100%;
          height: auto;
          border-top-left-radius: 500px;
          border-top-right-radius: var(--l-radius);
          border-bottom-right-radius: var(--l-radius);
          border-bottom-left-radius: var(--l-radius);
        }
      }
    }
  }

  .categories_container {
    margin-top: var(--section-margin);

    .categories_header {
      h2 {
        text-align: center;
      }
    }

    .card_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: var(--section-margin);

      .card {
        width: 180px;
        height: 180px;
        border-radius: var(--l-radius);
        background-color: var(--primary-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px;
        transition: transform 0.3s ease;
        cursor: pointer;

        &:hover {
          transform: translateY(-5px);
        }

        .image_wrapper {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        h4 {
          margin: 0;
          color: white;
          font-size: 16px;
          text-align: center;
        }
      }
    }

    .button_container{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: var(--section-margin);
    }
  }

  .banner_container{
    margin-top: var(--section-margin);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    .banner_image{
      flex-basis: 45%;
      img{
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: var(--l-radius);
      }
    }

    .banner_content{
      flex-basis: 45%;  
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.5rem;
      
    }
  }

  @media (max-width: 800px) {
    .main_container {
      .right_side {
        flex-basis: 100%;
        align-items: center;
        h1,
        p {
          text-align: center;
        }
      }

      .left_side {
        flex-basis: 100%;
        .image_border {
          img {
            width: 100%;
            height: auto;
            border-radius: var(--l-radius);
          }
        }
      }
    }

    .categories_container {
      .card_container {
        gap: 1.5rem;
        justify-content: center;

        .card {
          width: 150px;
          height: 150px;

          .image_wrapper {
            width: 70px;
            height: 70px;
          }

          h4 {
            font-size: 14px;
          }
        }
      }
    }

    .banner_container{
      .banner_image{
        flex-basis: 100%;
      }

      .banner_content{
        flex-basis: 100%;
        align-items: center;
        text-align: center;
      }
    }
  }
`;
