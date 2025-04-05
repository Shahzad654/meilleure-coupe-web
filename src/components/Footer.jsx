import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import i18n from "../locale/i18n";

export default function Footer() {
  const {t} = useTranslation();
  return (
    <StyledFooter>
      <div className="footer_container">
        <div className="upper_section">
          <div className="left_side">
            <img src={Logo} alt="logo" />
            <p className="description">
              {/* Your one-stop shop for all pet supplies. We offer high-quality
              products for your beloved pets at competitive prices. */}
              {t("footerHeading")}
            </p>
            <div className="icon_container">
              <div className="contact_item">
                <FaEnvelope style={{ width: "20px", height: "20px" }} />
                <p>ilio@gmail.com</p>
              </div>
              <div className="contact_item">
                <BiPhoneCall style={{ width: "20px", height: "20px" }} />
                <p>+92-314-3313739</p>
              </div>
              <div className="contact_item">
                <FaMapMarkerAlt style={{ width: "20px", height: "20px" }} />
                <p>123 Pet Street, City, Country</p>
              </div>
            </div>
          </div>

          <div className="mid_side">
            <h3>
              {/* Quick Links */}
              {t("quickLinks")}
            </h3>
            <ul>
              <li>
                <a href="/">
                
                {t("homeLink")}
                </a>
              </li>
              <li>
                <a href="/categories">{t("catLink")}</a>
              </li>
              <li>
                <a href="/about">{t("aboutLink")}</a>
              </li>
              <li>
                <a href="/contact">{t("contactLink")}</a>
              </li>
            </ul>
          </div>

          <div className="right_side">
            <h3>{t("follow")}</h3>
            <div className="social_links">
              <a href="#" className="social_icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social_icon">
                <FaInstagram />
              </a>
              <a href="#" className="social_icon">
                <FaTwitter />
              </a>
              <a href="#" className="social_icon">
                <FaYoutube />
              </a>
            </div>
            <div className="newsletter">
              <h3>{t("newsletter")}</h3>
              <p>
                {t("newletterPara")}
              </p>
              <div className="subscribe_form">
                <input type="email" placeholder="Enter your email" />
                <button>{t("subscribeBtn")}</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom_section">
          <p>&copy; 2025 {t("copyright")}</p>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
  margin-top: 4rem;

  .footer_container {
    width: 90%;
    margin: 0 auto;

    .upper_section {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 4rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;

      .left_side {
        flex: 1;
        min-width: 300px;

        img {
          max-width: 120px;
          height: auto;
          margin-bottom: 1.5rem;
        }

        .description {
          color: #b3b3b3;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .icon_container {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          .contact_item {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #b3b3b3;
          }
        }
      }

      .mid_side {
        flex: 1;
        min-width: 200px;

        h3 {
          margin-bottom: 1.5rem;

          color: #ffffff;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            margin-bottom: 0.8rem;

            a {
              color: #b3b3b3;
              text-decoration: none;
              transition: color 0.3s ease;

              &:hover {
                color: #ffffff;
              }
            }
          }
        }
      }

      .right_side {
        flex: 1;
        min-width: 300px;

        h3 {
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .social_links {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;

          .social_icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #333333;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;

            &:hover {
              background-color: #4a4a4a;
              transform: translateY(-3px);
            }
          }
        }

        .newsletter {
          p {
            color: #b3b3b3;
            margin-bottom: 1rem;
          }

          .subscribe_form {
            display: flex;
            gap: 0.5rem;
          }
        }
      }
    }

    .bottom_section {
      padding-top: 2rem;
      border-top: 1px solid #333333;
      text-align: center;
      color: #808080;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem;

    .footer_container {
      .upper_section {
        gap: 2rem;

        .left_side,
        .mid_side,
        .right_side {
          flex: 100%;
          min-width: 100%;
        }

        .right_side {
          .subscribe_form {
            flex-direction: column;
          }
        }
      }
    }
  }
`;
