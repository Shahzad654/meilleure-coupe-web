import React, { useMemo } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { catProducts } from "../utils/cats";
import { CiSearch } from "react-icons/ci";
// import { rabbitProducts } from '../utils/rabbit'
import { birdProducts } from "../utils/birds";
// import { fishProducts } from '../utils/fish'
// import { dogProducts } from '../utils/dogs'

export default function Product() {
  const { category } = useParams();
  const navigate = useNavigate();

//   const catP = useMemo(() => {
//     return category === "Cats"
//       ? catProducts.filter((product) => product.category === category)
//       : [];
//   }, [category]);

  //   const dogP = useMemo(() => {
  //     return category === "Dogs" ? dogProducts.filter((product) => product.category === category) : [];
  //   }, [category]);

  const birdP = useMemo(() => {
    return category === "Birds"
      ? birdProducts.filter((product) => product.category === category)
      : [];
  }, [category]);

  //   const fishP = useMemo(() => {
  //     return category === "Fish" ? fishProducts.filter((product) => product.category === category) : [];
  //   }, [category]);

  //   const rabbitP = useMemo(() => {
  //     return category === "Rabbit" ? rabbitProducts.filter((product) => product.category === category) : [];
  //   }, [category]);

  const handleProductClick = (productName) => {
    navigate(`/product-detail/${productName}`);
  };

  return (
    <>
      <Navbar />
      <StyledProduct>
        <div className="product_container">
          <h3>{category}</h3>
          <div className="searchFilter">
            <input type="text" placeholder="Search Product" />
            <div className="search-btn">
              <CiSearch
                color="white"
                size={20}
                style={{ cursor: "pointer", fontWeight: "bold" }}
              />
            </div>
          </div>
          <div className="main_container">
            <div className="product_card">
              {birdP.map((product) => (
                <div className="card" key={product.id} onClick={() => handleProductClick(product.name)}>
                  <img src={product.image} alt={product.name} />
                  <h5>{product.name}</h5>
                  <p>{product.price}</p>
                  <button>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </StyledProduct>
      <Footer />
    </>
  );
}

const StyledProduct = styled.div`
  .product_container {
    width: 90%;
    margin: var(--section-margin) auto;
    
    .searchFilter {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: var(--heading-margin);
      
      input {
        border-radius: var(--l-radius);
      }
      
      .search-btn {
        background-color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
      }
    }

    .main_container {
      margin-top: var(--heading-margin);

      .product_card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        
      }

      .card {
        width: 220px;
        min-height: 280px;
        border-radius: var(--l-radius);
        overflow: hidden;
        background-color: #f9f9f9; 
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 10px;
        gap: 1rem;
        cursor: pointer;

        img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: var(--l-radius);
        }

        h5{
            font-weight: 600;
        }
        p{
            font-weight: 400;
        }

       
      }
    }
  }

  @media (max-width: 640px) {
    .product_container{
        .main_container{
        .product_card{
            justify-content: center;
        }
    }
      
    }
    
  }
`;

