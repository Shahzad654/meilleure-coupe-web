import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mission from "../assets/mission.png";
import Offer from "../assets/offer.jpg";
import Whyus from "../assets/why-us.webp";
import { FaRegCheckCircle, FaEarlybirds } from "react-icons/fa";
import { MdOutlinePets, MdVerified } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

export default function About() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <StyledAbout>
        <div className="main_container">
          {/* <h1>About Us</h1> */}
          {/* <h5>
            Welcome to La Meilleure Coupe your one-stop destination for pets,
            birds, and premium pet care products. We are passionate about
            helping you find the perfect companion and providing everything you
            need to keep them healthy and happy. With trusted sellers, quality
            products, and an easy shopping experience, we make pet ownership
            simple and joyful.
          </h5> */}

          <div className="sections_container">
            <div className="section1">
              <div className="right">
                <h3>
                  Our Mission: Building a Trusted Pet Community for Every Animal
                  Lover
                </h3>
                <h5>
                  At La Meilleure Coupe, our mission is to bring pets and people
                  together through a platform built on trust, care, and a true
                  passion for animals. We believe every pet deserves a loving
                  home and every owner deserves the best.
                </h5>
                <div className="list">
                  <div className="li">
                    <FaRegCheckCircle
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "var(--primary-color)",
                      }}
                    />
                    <h5>Trust</h5>
                  </div>

                  <div className="li">
                    <FaRegCheckCircle
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "var(--primary-color)",
                      }}
                    />
                    <h5>Care</h5>
                  </div>

                  <div className="li">
                    <FaRegCheckCircle
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "var(--primary-color)",
                      }}
                    />
                    <h5>Simplicity</h5>
                  </div>

                  <div className="li">
                    <FaRegCheckCircle
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "var(--primary-color)",
                      }}
                    />
                    <h5>Joy</h5>
                  </div>
                </div>
              </div>

              <div className="left">
                <img src={Mission} alt="" />
              </div>
            </div>

            <div className="section2">
              <div className="left">
                <img src={Offer} alt="" />
              </div>

              <div className="right">
                <h3>
                  What We Offer: A Complete Range of Pets, Birds, and Premium
                  Pet Products
                </h3>
                <h5>
                  From playful puppies and exotic birds to high-quality food,
                  toys, and accessories, we provide everything you need to
                  welcome, care for, and celebrate your beloved pets — all in
                  one convenient place.
                </h5>

                <div className="list">
                  <div className="li">
                  <MdOutlinePets style={{width: '24px', height: '24px', color:'var(--primary-color)'}}/>
                  <h5>Pets</h5>
                  </div>

                  <div className="li">
                  <FaEarlybirds style={{width: '24px', height: '24px', color:'var(--primary-color)'}}/>
                  <h5>Birds</h5>
                  </div>


                  <div className="li">
                  <AiFillProduct style={{width: '24px', height: '24px', color:'var(--primary-color)'}}/>
                  <h5>Products</h5>
                  </div>

                  <div className="li">
                  <MdVerified style={{width: '24px', height: '24px', color:'var(--primary-color)'}}/>
                  <h5>Quality</h5>
                  </div>
                  <button className="secondary-btn" onClick={()=> navigate('/')}>Shop Now</button>
               
                </div>
              
              </div>
            </div>

            <div className="section3">
              <div className="right">
                <h3>
                  Why Choose La Meilleure Coupe: Quality, Trust, and Convenience
                  You Can Rely On
                </h3>
                <h5>
                  We go beyond just selling we are committed to offering a safe,
                  verified, and affordable platform where your journey to pet
                  ownership is smooth, happy, and worry-free.
                </h5>

                <div className="list">
                  <div className="li">
                    <FaRegCheckCircle
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "var(--primary-color)",
                      }}
                    />
                    <h5>Verified</h5>
                  </div>

                  <div className="li">
                    <FaRegCheckCircle
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "var(--primary-color)",
                      }}
                    />
                    <h5>Reliable</h5>
                  </div>

                  <div className="li">
                    <FaRegCheckCircle
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "var(--primary-color)",
                      }}
                    />
                    <h5>Easy</h5>
                  </div>

                  <div className="li">
                    <FaRegCheckCircle
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "var(--primary-color)",
                      }}
                    />
                    <h5>Affordable</h5>
                  </div>
                </div>
              </div>

              <div className="left">
                <img src={Whyus} alt="" />
              </div>
            </div>
          </div>
        </div>
      </StyledAbout>
      <Footer />
    </>
  );
}

const StyledAbout = styled.div`
  .main_container {
    width: 90%;
    margin: var(--section-margin) auto;

    .sections_container {
      .section1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* flex-wrap: wrap; */
        margin-top: var(--heading-margin);
        gap: 2rem;
        .right {
          flex-basis: 45%;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;

          .list {
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .li {
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              gap: 1rem;
            }
          }
        }

        .left {
          flex-basis: 45%;
          img {
            width: 100%;
            height: auto;
            border-radius: var(--l-radius);
          }
        }
      }
      .section2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* flex-wrap: wrap; */
        margin-top: var(--heading-margin);
        gap: 2rem;
        .right {
          flex-basis: 45%;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;

          .list {
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .li {
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              gap: 1rem;
            }
          }
        }

        .left {
          flex-basis: 45%;
          img {
            width: 100%;
            height: auto;
            border-radius: var(--l-radius);
          }
        }
      }

      .section3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* flex-wrap: wrap; */
        margin-top: var(--heading-margin);
        gap: 2rem;
        .right {
          flex-basis: 45%;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;

          .list {
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .li {
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              gap: 1rem;
            }
          }
        }

        .left {
          flex-basis: 45%;
          img {
            width: 100%;
            height: auto;
            border-radius: var(--l-radius);
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    .main_container{
      h1{
        text-align: center;
        pointer-events: none;
      }
      h5{
        text-align: center;
        pointer-events: none;
      }
      .sections_container{
        .section1, .section3{
          flex-direction: column;
          .right{
            flex-basis: 100%;
            h3{
              text-align: center;
              pointer-events: none;
            }
          }
          .left{
            flex-basis: 100%;
          }
        }

        .section2{
          flex-direction: column-reverse;
          .right{
            flex-basis: 100%;
            h3{
              text-align: center;
              pointer-events: none;
            }
          }
          .left{
            flex-basis: 100%;
          }
        }
        
      }
    }
  }
`;
