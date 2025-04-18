import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { birdProducts } from "../utils/birds";
import { fishProducts } from "../utils/fish";
import { catProducts } from "../utils/cats";
import { rabbitProducts } from "../utils/rabbit";
import { dogProducts } from "../utils/dogs";
import { useTranslation } from "react-i18next";

export default function Product() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation()

  // const birdP = useMemo(() => {
  //   return category === "Birds"
  //     ? birdProducts.filter((product) => product.category === category)
  //     : [];
  // }, [category]);

  const productsByCategory = useMemo(() => {
    if (category === "Birds") {
      return birdProducts;
    } else if (category === "Fish") {
      return fishProducts;
    }
    else if (category === "Cats") {
      return catProducts;
    }
    else if (category === "Rabbits") {
      return rabbitProducts;
    }
    else if (category === "Dogs") {
      return dogProducts;
    }
     else {
      return [];
    }
  }, [category]);

  const filteredProducts = useMemo(() => {
    return productsByCategory.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [productsByCategory, searchQuery]);

  return (
    <>
      <Navbar />
      <StyledProduct>
        <div className="product_container">
          <h3>{category}</h3>
          <div className="searchFilter">
            <input
              type="text"
              placeholder="Search any product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* <button>Search</button> */}
          </div>
          <div className="main_container">
            <div className="product_card">
              {/* {birdP.map((product) => (
                <div className="card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => navigate(`/product-detail/${product.name}`)}
                  />
                  <h5>{product.name}</h5>
                  <p>{product.price}</p>
                  
                </div>
              ))} */}

              {filteredProducts.map((product) => (
                <div className="card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => navigate(`/product-detail/${product.name}`)}
                  />
                  {/* <h5>{product.name}</h5> */}
                  <h5>{t(product.name)}</h5>
                  <p>{product.price}</p>
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

        h5 {
          font-weight: 600;
        }
        p {
          font-weight: 400;
        }
      }
    }
  }

  @media (max-width: 640px) {
    .product_container {
      .main_container {
        .product_card {
          justify-content: center;
        }
      }
    }
  }
`;
