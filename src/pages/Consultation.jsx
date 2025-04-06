import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaRegCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Consultation() {
    const {t} = useTranslation();
  return (
    <>
      <Navbar />
      <StyledConsult>
        <div className="main_container">
          <h3>{t("consultHeading")}</h3>
          <div className="consult_pricing">
            <div className="left_side">
              <h4>{t("consultBanner")}</h4>
              <p>
                {t("consultPara")}
              </p>
            </div>

            <div className="right_side">
              <div className="heading">
                <h2 style={{color: 'var(--primary-color)'}}>€5</h2>
                <p className="booking">{t("booking")}</p>
                <h5 className="old-price">€10</h5>
              </div>

              <div className="list_container">
                <div className="list">
                  <FaRegCheckCircle
                    style={{ color: "#002a6a", width: "30px", height: "30px" }}
                  />
                  <h5>{t("l1")}</h5>
                </div>
                <div className="list">
                  <FaRegCheckCircle
                    style={{ color: "#002a6a", width: "30px", height: "30px" }}
                  />
                  <h5>{t("l2")}</h5>
                </div>
                <div className="list">
                  <FaRegCheckCircle
                    style={{ color: "#002a6a", width: "30px", height: "30px" }}
                  />
                  <h5>{t("l3")}</h5>
                </div>
                <div className="list">
                  <FaRegCheckCircle
                    style={{ color: "#002a6a", width: "30px", height: "30px" }}
                  />
                  <h5>{t("l4")}</h5>
                </div>
              </div>
              <div>
              <button>{t("bookBtn")}</button>
              </div>
            </div>
            
          </div>
        </div>
      </StyledConsult>
      <Footer />
    </>
  );
}

const StyledConsult = styled.div`
  .main_container {
    width: 90%;
    margin: var(--section-margin) auto;
   

    .consult_pricing {
      margin-top: var(--heading-margin);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;

      .left_side {
        flex-basis: 35%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        p {
          max-width: 40ch;
        }
       
      }

      .right_side {
        flex-basis: 55%;
        background-color: rgba(61, 112, 192, 0.3);
        border: 2px solid var(--primary-color);
        border-radius: var(--l-radius);
        width: 100%;
        height: 350px;
        padding-top: 15px;
        padding-left: 15px;
        padding-bottom: 15px;
        padding-right: 15px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .heading {
          display: flex;
          gap: 1rem;
          .booking{
            margin-top: 15px;
            color: black;
          }
          .old-price {
            text-decoration: line-through;
            color: red;
          }
        }
        .list_container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          .list {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    .main_container{
        .consult_pricing{
            flex-direction: column;
            align-items: flex-start;
            .left_side{
                flex-basis: 100%;
            }
            .right_side{
                flex-basis: 100%;
            }
        }
    }
  }
`;
