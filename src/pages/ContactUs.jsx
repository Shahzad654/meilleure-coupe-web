import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import i18n from "../locale/i18n";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const {t} = useTranslation();
  return (
    <>
      <Navbar />
      <StyledContact>
        <div className="main_container">
          {/* <h2>Contact Us</h2> */}
          <div className="contact_container">
            <div className="left_side">
              <h3>
                {/* Have Questions? Get in Touch! */}
                {t("contactHeading")}
                </h3>

              <p>
                {/* We're here to help! If you have any questions or concerns,
                please don't hesitate to contact us. */}
                {t("contactPara")}
              </p>
            </div>

            <div className="right_side">
              <form action="">
                <label htmlFor="name">{t("name")}</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t("placeholder1")}
                />

                <label htmlFor="email">{t("email")}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={t("placeholder2")}
                />

                <label htmlFor="message">{t("message")}</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder={t("placeholder3")}
                ></textarea>

                <button type="submit">{t("submitBtn")}</button>
              </form>
            </div>
          </div>
        </div>
      </StyledContact>
      <Footer />
    </>
  );
}

const StyledContact = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;

  .main_container {
    /* margin-top: var(--section-margin); */

    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: var(--primary-color, #333);
      margin-bottom: var(--heading-margin);
    }

    .contact_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      background-color: #fff;
      border-radius: var(--l-radius, 12px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      padding: 3rem;

      .left_side {
        flex-basis: 35%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1.5rem;

        h3 {
          width: 15ch;
          color: var(--primary-color, #333);
          line-height: 1.3;
        }

        p {
          width: 40ch;
          line-height: 1.6;
          color: #666;
        }
      }

      .right_side {
        flex-basis: 55%;

        form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.2rem;
          width: 100%;

          label {
            font-weight: 600;
            margin-bottom: 0.3rem;
            color: #444;
          }

          input,
          textarea {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 1px solid #ddd;
            border-radius: 8px;
           
            transition: border-color 0.3s ease;

            &:focus {
              outline: none;
              border-color: var(--primary-color, #0066ff);
              box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.1);
            }

            &::placeholder {
              color: #aaa;
            }
          }

          textarea {
            min-height: 150px;
            resize: vertical;
          }

          button {
            align-self: flex-start;
          }
        }
      }
    }
  }

  @media (max-width: 1280px) {
    .main_container {
      .contact_container {
        justify-content: center;
        .left_side{
            justify-content: center;
            align-items: center;
        } 
        .right_side{
            justify-content: center;
            form{
                button{
                align-self: center;
            }
            }
           
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;

    .main_container {
      .contact_container {
        padding: 2rem;

        .left_side,
        .right_side {
          flex-basis: 100%;
        }

        .left_side {
          text-align: center;
          align-items: center;

          h3,
          p {
            width: 100%;
          }
        }
      }
    }
  }
`;
