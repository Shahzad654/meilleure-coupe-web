import React, { useEffect } from "react";
import styled from "styled-components";
import HeroImg from "../assets/heroimg7.jpg";
import Cat1 from "../assets/cat.svg";
import Cat2 from "../assets/dog.svg";
import Cat3 from "../assets/birds.svg";
import Cat4 from "../assets/fish.png";
import Cat5 from "../assets/rabit.png";
import Banner from "../assets/accent.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchImg from "../assets/search.png";
import CartImg from "../assets/cart.png";
import CheckoutImg from "../assets/checkout.png";
import Leaf from "../assets/leaf5.jpg";
import Leaf2 from "../assets/leaf3.jpg";

export default function Home() {

  
  return (
    <>
     
      <Navbar />
      <LeafContainer>
        <div className="leaf1">
        <img src={Leaf} alt="" />
        </div>

        <div className="leaf2">
        <img src={Leaf2} alt="" />
        </div>
       
      </LeafContainer>
      <StyledHome>
        
        <div className="main_container">
          <div className="right_side">
            <h1>The Best place to but top quality products for your pets</h1>
            <p>Shop by pet, brans or products on sale</p>
            <button className="secondary-btn">Shop Now</button>
          </div>
          <div className="left_side">
            <div className="image_border">
              <img loading="lazy" src={HeroImg} alt="" />
            </div>
          </div>
        </div>

        <div className="working_container">
          <h2>How it works?</h2>

          <div className="content_container">
            <div className="card">
              <div className="card_image">
                <img src={SearchImg} alt="" />
              </div>

              <div className="card_content">
                <div className="step">
                  <div className="step_border">
                    <h4>1</h4>
                  </div>
                  <h4>Search for products</h4>
                </div>

                <p>
                  Browse our extensive catalog of pet products using our easy
                  search feature.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card_image">
                <img src={CartImg} alt="" />
              </div>

              <div className="card_content">
                <div className="step">
                  <div className="step_border">
                    <h4>2</h4>
                  </div>
                  <h4>Select your products</h4>
                </div>
                <p>
                  Add your favorite pet items to your cart with just one click.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card_image">
                <img src={CheckoutImg} alt="" />
              </div>

              <div className="card_content">
                <div className="step">
                  <div className="step_border">
                    <h4>3</h4>
                  </div>
                  <h4>Checkout and pay</h4>
                </div>
                <p>
                  Complete your purchase securely and wait for your delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="categories_container">
          <div className="categories_header">
            <h2>Categories</h2>
          </div>

          <div className="card_container">
            <div className="card">
              <div className="image_wrapper">
                <img loading="lazy" src={Cat1} alt="Cat" />
              </div>
              <h4>Cats</h4>
            </div>

            <div className="card">
              <div className="image_wrapper">
                <img loading="lazy" src={Cat2} alt="Dog" />
              </div>
              <h4>Dogs</h4>
            </div>

            <div className="card">
              <div className="image_wrapper">
                <img loading="lazy" src={Cat3} alt="Bird" />
              </div>
              <h4>Birds</h4>
            </div>

            <div className="card">
              <div className="image_wrapper">
                <img loading="lazy" src={Cat4} alt="fish" />
              </div>
              <h4>Fish</h4>
            </div>

            <div className="card">
              <div className="image_wrapper">
                <img loading="lazy" src={Cat5} alt="Rabbit" />
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
            <img loading="lazy" src={Banner} alt="" />
          </div>

          <div className="banner_content">
            <h2>
              Welcome to La Meilleure Coupe The perfect pet store website
              solution
            </h2>
            <p>
              We offer a wide range of products for your pets, from food to toys
              and accessories
            </p>
            <button>Shop Now</button>
          </div>
        </div>

        <div className="faq_container">
          <div className="faq_header">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq_content">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h5 component="span">
                  How do I choose the right food for my pet?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Choosing the right food depends on your pet's age, size,
                  breed, and health needs. Look for products that meet AAFCO
                  standards and contain high-quality ingredients. Puppies and
                  kittens need food formulated for growth, while senior pets
                  benefit from formulas that support aging joints and organs. If
                  your pet has specific health concerns, consult with your
                  veterinarian for personalized recommendations.
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
                  What is your return and exchange policy?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  We accept returns and exchanges within 30 days of purchase
                  with a valid receipt. Unopened food and treats can be returned
                  for a full refund. Opened consumables cannot be returned for
                  health and safety reasons. For toys and accessories, items
                  must be in original condition with packaging. Defective
                  products can be exchanged or refunded at any time. Please
                  contact our customer service team for assistance with returns.
                </p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <h5 component="span">Do you offer pet adoption services?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  While we don't directly handle pet adoptions, we partner with
                  local animal shelters and rescue organizations to host
                  adoption events throughout the year. We can provide
                  information about reputable adoption centers in your area and
                  offer starter kits for new pet parents. We believe in
                  supporting rescue efforts and encourage adoption over
                  purchasing from breeders whenever possible.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </StyledHome>

    
      <Footer />
    </>
  );
}

const LeafContainer = styled.div`

.leaf1{
  position: absolute;
  left: 77%;
  top: 11%;
  img {
    max-width: 300px;
    height: auto;
  }
}

.leaf2{
  position: absolute;
  right: 79%;
  bottom: 0;
  img {
    max-width: 300px;
    height: auto;
  }
}

 
`;

const StyledHome = styled.div`
  width: 90%;
  margin: var(--section-margin) auto;
  position: relative;
  overflow-x: hidden;

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
        }
      }
    }
  }

  .working_container {
    margin-top: var(--section-margin);
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

    .button_container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: var(--section-margin);
    }
  }

  .banner_container {
    margin-top: var(--section-margin);
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
    margin: var(--section-margin) auto 0 auto;

    .faq_header {
      h2 {
        text-align: center;
        margin-bottom: var(--heading-margin);
      }
    }
  }

  @media (max-width: 715px) {
    .working_container {
      .content_container {
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
      width: 100%;
    }
  }
`;
