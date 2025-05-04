import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Cat1 from "../assets/cat.svg";
import Cat2 from "../assets/dog.svg";
import Cat3 from "../assets/birds.svg";
import Cat4 from "../assets/fish.png";
import Cat5 from "../assets/rabit.png";
import Banner from "../assets/accent.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchImg from "../assets/search.webp";
import CartImg from "../assets/cart.webp";
import CheckoutImg from "../assets/checkout.webp";
import BgImg from "../assets/bg1.webp";
import { useTranslation } from "react-i18next";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCategoryClick = (category) => {
    console.log("Category clicked:", category);
    navigate(`/products/${category}`);
  };

  return (
    <>
      <marquee
        behavior="scroll" 
        direction="left" 
        scrollamount="10"
        style={{
          backgroundColor: "#ff4d4f",
          color: "white",
          padding: "4px 0",
          fontWeight: "bold",
          letterSpacing: "1px",
          fontFamily: "Arial, sans-serif",
          textTransform: "uppercase",
        }}
      >
        🚚 {t("flashBanner")} 🎉
        &nbsp;&nbsp;&nbsp;&nbsp;
        🚚 {t("flashBanner")}  🎉
        &nbsp;&nbsp;&nbsp;&nbsp;
        🚚 {t("flashBanner")}  🎉
        &nbsp;&nbsp;&nbsp;&nbsp;
        🚚 {t("flashBanner")}  🎉
        &nbsp;&nbsp;&nbsp;&nbsp;
        🚚 {t("flashBanner")}  🎉
        &nbsp;&nbsp;&nbsp;&nbsp;
        🚚 {t("flashBanner")}  🎉
      </marquee>

      

      <Navbar />

      <StyledHome>
        <div className="page_container">
          <div className="main_container">
            <div className="bg_image">
              <img loading="lazy" src={BgImg} alt="" />
            </div>

            <div className="card_container">
              <div className="card">
                <div className="card_content">
                  <h2>
                    {/* Premium Pet Products For Your Furry Friends */}
                    {t("cardHeading")}
                  </h2>
                  <p>
                    {/* Shop by pet, brands or products on sale */}
                    {t("sologan")}
                  </p>
                  <button className="secondary-btn">
                    {/* Exporle Now */}
                    {t("button")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="working_container">
            <h2>
              {t("workingHeading")}
              {/* How it works? */}
            </h2>

            <div className="content_container">
              <div className="card">
                <div className="card_image">
                  <img src={SearchImg} alt="" loading="lazy" />
                </div>

                <div className="card_content">
                  <div className="step">
                    <div className="step_border">
                      <h4>1</h4>
                    </div>
                    <h4>
                      {/* Search for products */}
                      {t("card1Heading")}
                    </h4>
                  </div>

                  <p>
                    {/* Browse our extensive catalog of pet products using our easy
                    search feature. */}
                    {t("card1desc")}
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card_image">
                  <img src={CartImg} alt="" loading="lazy" />
                </div>

                <div className="card_content">
                  <div className="step">
                    <div className="step_border">
                      <h4>2</h4>
                    </div>
                    <h4>
                      {/* Select your products */}
                      {t("card2Heading")}
                    </h4>
                  </div>
                  <p>
                    {/* Add your favorite pet items to your cart with just one
                    click. */}
                    {t("card2desc")}
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card_image">
                  <img src={CheckoutImg} alt="" loading="lazy" />
                </div>

                <div className="card_content">
                  <div className="step">
                    <div className="step_border">
                      <h4>3</h4>
                    </div>
                    <h4>
                      {/* Checkout and pay */}
                      {t("card3Heading")}
                    </h4>
                  </div>
                  <p>
                    {/* Complete your purchase securely and wait for your delivery. */}
                    {t("card3desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="categories_container">
            <div className="categories_header">
              <h2>
                {/* Categories */}
                {t("catHeading")}
              </h2>
            </div>

            <div className="card_container">
              <div className="card" onClick={() => handleCategoryClick("Cats")}>
                <div className="image_wrapper">
                  <img loading="lazy" src={Cat1} alt="Cat" />
                </div>
                <h4>
                  {/* Cats */}
                  {t("cats")}
                </h4>
              </div>

              <div className="card" onClick={() => handleCategoryClick("Dogs")}>
                <div className="image_wrapper">
                  <img loading="lazy" src={Cat2} alt="Dog" />
                </div>
                <h4>
                  {/* Dogs */}
                  {t("dogs")}
                </h4>
              </div>

              <div
                className="card"
                onClick={() => handleCategoryClick("Birds")}
              >
                <div className="image_wrapper">
                  <img loading="lazy" src={Cat3} alt="Bird" />
                </div>
                <h4>
                  {/* Birds */}
                  {t("birds")}
                </h4>
              </div>

              <div className="card" onClick={() => handleCategoryClick("Fish")}>
                <div className="image_wrapper">
                  <img loading="lazy" src={Cat4} alt="fish" />
                </div>
                <h4>
                  {/* Fish */}
                  {t("fish")}
                </h4>
              </div>

              <div
                className="card"
                onClick={() => handleCategoryClick("Rabbits")}
              >
                <div className="image_wrapper">
                  <img loading="lazy" src={Cat5} alt="Rabbit" />
                </div>
                <h4>
                  {/* Rabbit */}
                  {t("rabbits")}
                </h4>
              </div>
            </div>

            {/* <div className="button_container">
              <button className="secondary-btn">See More</button>
            </div> */}
          </div>

          <div className="banner_container">
            <div className="banner_image">
              <img loading="lazy" src={Banner} alt="" />
            </div>

            <div className="banner_content">
              <h2>
                {/* Welcome to La Meilleure Coupe The perfect pet store website
                solution */}
                {t("bannerHeading")}
              </h2>
              <p>
                {/* We offer a wide range of products for your pets, from food to
                toys and accessories */}
                {t("bannerPara")}
              </p>
              <button onClick={() => navigate("/book-consultation")}>
                {/* Shop Now */}
                {t("bannerBtn")}
              </button>
            </div>
          </div>

          {/* <div className="faq_container">
            <div className="faq_header">
              <h2>
               
                {t("faqHeading")}
                </h2>
            </div>

            <div className="faq_content">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h5 component="span" >
                   
                    {t("faq1Q")}
                  </h5>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
               
                    {t("faq1A")}
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <h5 component="span">
                    
                    {t("faq2Q")}
                  </h5>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    
                    {t("faq2A")}
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <h5 component="span">
                    
                    {t("faq3Q")}
                  </h5>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                  
                    {t("faq3A")}
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </div> */}
        </div>
      </StyledHome>

      <Footer />
    </>
  );
}

const StyledHome = styled.div`
  position: relative;
  overflow-x: hidden;

  .page_container {
    .main_container {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      .bg_image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
          transition: transform 0.5s ease;
        }
      }

      .card_container {
        position: relative;
        z-index: 1;
        width: 90%;
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;

        .card {
          background: var(--primary-color);
          border-radius: 20px;
          padding: 3rem 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

          .card_content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            text-align: center;

            h2 {
              color: white;
              margin: 0;
              line-height: 1.2;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            }

            p {
              color: rgba(255, 255, 255, 0.9);
              margin: 0;
              max-width: 80%;
            }
          }
        }
      }
    }

    .working_container {
      width: 90%;
      margin: var(--section-margin) auto;
      /* margin-top: var(--section-margin); */
      h2 {
        text-align: center;
      }

      .content_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;

        .card {
          flex-basis: 30%;
          .card_image {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              max-width: 250px;
              height: auto;
              object-fit: contain;
            }
          }

          .card_content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            p {
              text-align: center;
            }
            .step {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1rem;
              .step_border {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: var(--primary-color);
                display: flex;
                align-items: center;
                justify-content: center;
                h4 {
                  color: white;
                }
              }
            }
          }
        }
      }
    }

    .categories_container {
      width: 90%;
      margin: var(--section-margin) auto;

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
          cursor: pointer;

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

      .button_container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: var(--section-margin);
      }
    }

    .banner_container {
      width: 90%;
      margin: var(--section-margin) auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;

      .banner_image {
        flex-basis: 45%;
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: var(--l-radius);
        }
      }

      .banner_content {
        flex-basis: 45%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1.5rem;
      }
    }

    .faq_container {
      width: 70%;
      margin: var(--section-margin) auto;

      .faq_header {
        h2 {
          text-align: center;
          margin-bottom: var(--heading-margin);
        }
      }
      .faq_content {
        h5 {
          word-wrap: break-word;
        }
      }
    }
  }

  @media (max-width: 715px) {
    .page_container {
      .working_container {
        .content_container {
          justify-content: center;
          .card {
            flex-basis: 100%;
            .card_content {
              p {
                width: 40ch;
              }
              .step {
                .step_border {
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .page_container {
      .main_container {
        min-height: 70vh;

        .card_container {
          padding: 1rem;

          .card {
            padding: 2rem 1.5rem;

            .card_content {
              h2 {
                font-size: 2rem;
              }

              p {
                font-size: 1rem;
                max-width: 90%;
              }

              button {
                padding: 0.8rem 2rem;
                font-size: 1rem;
              }
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

      .banner_container {
        .banner_image {
          flex-basis: 100%;
        }

        .banner_content {
          flex-basis: 100%;
          align-items: center;
          text-align: center;
        }
      }

      .faq_container {
        width: 90%;
      }
    }
  }
`;
