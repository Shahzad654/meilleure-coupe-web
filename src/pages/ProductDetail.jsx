import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { birdProducts } from "../utils/birds";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { name } = useParams();

  const product = birdProducts.find((product) => product.name === name);

  const handleQuantity = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  };
  

  return (
    <>
      <Navbar />
      <StyledDetail>
        <div className="product-detail">
          <div className="left-side">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="right-side">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h5>{product.price}</h5>
            <div className="action-container">
              <div className="quantity-container">
                <div className="quantity-btn" onClick={() => handleQuantity("decrement")}   >
                  <p>-</p>
                </div>
                <p>{quantity}</p>
                <div className="quantity-btn" onClick={() => handleQuantity("increment")}>
                  <p>+</p>
                </div>
              </div>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </StyledDetail>
      <Footer />
    </>
  );
}

const StyledDetail = styled.div`
  width: 90%;
  margin: var(--section-margin) auto;

  .product-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    .left-side {
      flex-basis: 45%;
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: var(--l-radius);
      }
    }
    .right-side {
      flex-basis: 45%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
      .action-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
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
            p{
                color: white;
                cursor: pointer;
            }
          }
        }
      }
      h5{
        font-weight: bold;
      }
      p {
        max-width: 45ch;
      }
     
    }
  }

  @media (max-width: 640px) {
    .product-detail {
      justify-content: center;
      .left-side {
        flex-basis: 100%;
      }
      .right-side {
        flex-basis: 100%;
        justify-content: center;
        align-items: center;

        h2,
        p {
          text-align: center;
        }

        .action-container{
            justify-content: center;
            flex-direction: column;
        }
      }
    }
  }
`;
