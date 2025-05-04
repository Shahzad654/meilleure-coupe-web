import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SimilarProducts({ similarProducts }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <StyledProducts>
      <h4>Similar Products</h4>
      <div className="product_card">
        {similarProducts.map((product) => (
          <div className="card" key={product.id}>
            {/* <span className="badge">{t("SaleBadge")}</span>{" "} */}
            {isLoading && (
              <div className="image-loader">
                <div className="spinner"></div> 
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
            <p className="old-price">{product.cutPrice}</p>{" "}
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </StyledProducts>
  );
}

const StyledProducts = styled.div`
  h4 {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  .product_card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    justify-items: center;
    gap: 2rem;
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
        color: red;
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
`;
