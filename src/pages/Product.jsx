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
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false); 
  };


  const productsByCategory = useMemo(() => {
    if (category === "Birds") {
      return birdProducts;
    } else if (category === "Fish") {
      return fishProducts;
    } else if (category === "Cats") {
      return catProducts;
    } else if (category === "Rabbits") {
      return rabbitProducts;
    } else if (category === "Dogs") {
      return dogProducts;
    } else {
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
              {filteredProducts.map((product) => (
                // <div className="card" key={product.id}>
                //   <img
                //     src={product.image}
                //     alt={product.name}
                //     onClick={() => navigate(`/product-detail/${product.name}`)}
                //   />
                //   {/* <h5>{product.name}</h5> */}
                //   <h5>{t(product.name)}</h5>
                //   <p>{product.price}</p>
                // </div>

                <div className="card" key={product.id}>
                  <span className="badge">{t("SaleBadge")}</span>{" "}
                  {isLoading && (
                    <div className="image-loader">
                      <div className="spinner"></div>{" "}
                      {/* This can be any loader */}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    onLoad={handleImageLoad}
                    loading="lazy"
                    onClick={() => navigate(`/product-detail/${product.name}`)}
                  />
                  <h5>{t(product.name)}</h5>
                  <p className="description">Premium quality product</p>
                  <p className="old-price">120.99€</p>{" "}
                  <p className="price">{product.price}</p>
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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        justify-items: center;
        gap: 2rem;
      }

      .card {
        position: relative;
        width: 240px;
        min-height: 320px;
        border-radius: var(--l-radius);
        overflow: hidden;
        background: #fff;
        border: 1px solid #eee;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 16px;
        gap: 0.8rem;
        transition: all 0.3s ease;
        cursor: pointer;

        .image-loader {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .card img {
          filter: blur(8px);
          transition: filter 0.3s ease;
        }

        .card img.loaded {
          filter: none;
        }

        img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: var(--l-radius);
        }

        .badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: var(--secondary-color);
          color: #fff;
          padding: 2px 6px;
          border-radius: 12px;
        }

        h5 {
          font-weight: 600;
          color: #333;
        }

        p.price {
          font-weight: 600;
          color: var(--primary-color);
        }

        p.old-price {
          color: #999;
          text-decoration: line-through;
        }

        .description {
          color: #777;
        }

        .add-to-cart {
          margin-top: auto;
          background-color: var(--primary-color);
          color: white;
          padding: 6px 12px;
          border-radius: var(--s-radius);
          cursor: pointer;
        }

        &:hover {
          border-color: var(--primary-color);
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          background: #fafafa;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .product_container {
      .main_container {
        .product_card {
          grid-template-columns: repeat(3, minmax(240px, 1fr));
        }
      }
    }
  }

  @media (max-width: 900px) {
    .product_container {
      .main_container {
        .product_card {
          grid-template-columns: repeat(2, minmax(240px, 1fr));
        }
      }
    }
  }

  @media (max-width: 640px) {
    .product_container {
      .main_container {
        .product_card {
          grid-template-columns: repeat(1, minmax(240px, 1fr));
        }
      }
    }
  }
`;
