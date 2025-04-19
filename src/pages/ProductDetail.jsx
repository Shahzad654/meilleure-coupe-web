import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { birdProducts } from "../utils/birds";
import { fishProducts } from "../utils/fish";
import { catProducts } from "../utils/cats";
import { rabbitProducts } from "../utils/rabbit";
import { dogProducts } from "../utils/dogs";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { userActions } from "../store/userSlice";
import { CircularProgress } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid gray",
  borderRadius: "var(--l-radius)",
  boxShadow: 24,
  p: 4,
};

export default function ProductDetail() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("warning");
  const [loadingId, setLoadingId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loadingEmail, setLoadingEmail] = useState(false);
  const {t} = useTranslation();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const user = useSelector((state) => state.user);
  const currentCart = useSelector((state) => state.user.cart || {});

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleCartData = async (product) => {
    setLoadingId(product.id);
    try {
      if (!user.uid) {
        setAlertType("warning");
        setLoadingId(null);
        setOpen(true);
        return;
      }

      const updatedCart = {
        ...currentCart,
        [product.id]: {
          ...product,
        },
      };

      dispatch(userActions.setCart(updatedCart));

      await setDoc(doc(db, "cart", user.uid), updatedCart, { merge: true });

      setAlertType("success");
      setOpen(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingId(null);
    }
  };

  // const product = birdProducts.find((product) => product.name === name);
  // console.log(product);
  const allProducts = [...birdProducts, ...fishProducts, ...catProducts, ...rabbitProducts, ...dogProducts];
  const product = allProducts.find((product) => product.name === name);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoadingEmail(true);

    emailjs
      .sendForm(
        "service_i2kwo8e",
        "template_6q9nshf",
        e.target,
        "FI1c-kOyhv_3xdHyB"
      )
      .then(
        (result) => {
          setSnackbarMessage("Message Sent Successfully!");
          setSnackbarSeverity("success");
          setOpen(true);
          setOpenModal(false);
        },
        (error) => {
          console.log(error.text);
          setSnackbarMessage("Something went wrong!");
          setSnackbarSeverity("error");
          setOpen(true);
        }
      )
      .finally(() => {
        setLoadingEmail(false);
      });

    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <StyledDetail>
        <div className="product-detail">
          <div className="left-side">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="right-side">
            <h3>{t(product.name)}</h3>
            <p>{product.description}</p>
            <h5>{product.price}</h5>
            <div className="action-container">
              {/* <div className="quantity-container">
                <div className="quantity-btn" onClick={() => handleQuantity("decrement")}   >
                  <p>-</p>
                </div>
                <p>{quantity}</p>
                <div className="quantity-btn" onClick={() => handleQuantity("increment")}>
                  <p>+</p>
                </div>
              </div> */}
              {/* <button>Add to cart</button> */}
              <button onClick={() => handleCartData(product)}>
                {loadingId === product.id ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  "Add to Cart"
                )}
              </button>

              <button className="outline-btn" onClick={handleOpenModal}>
                Request for bulk
              </button>
            </div>
          </div>
        </div>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openModal}
          onClose={handleCloseModal}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openModal}>
            <Box sx={style}>
              <div style={{}}>
                <h5 id="transition-modal-title" variant="h6" component="h2">
                  Request for bulk
                </h5>
              </div>

              <div>
                <form
                  action=""
                  style={{
                    marginTop: "5%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "1rem",
                    marginBottom: "5%",
                  }}
                  onSubmit={handleOnSubmit}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                  <input
                    type="text"
                    name="number"
                    placeholder="Enter your contact number"
                    required
                  />
                  <textarea
                    name="message"
                    id=""
                    placeholder="Write your Message"
                    style={{
                      outline: "none",
                      borderRadius: "var(--s-radius)",
                      color: "var(--text-color)",
                      padding: "6px 16px",
                      border: "2px solid var(--border-color)",
                      height: "120px",
                    }}
                  ></textarea>

                  <button type="submit">
                    {loadingEmail ? (
                      <CircularProgress size={24} sx={{ color: "white" }} />
                    ) : (
                      "Request"
                    )}
                  </button>
                </form>

                <p style={{ color: "orange", textAlign: "center" }}>
                  **Note: We will contact with you shortly**
                </p>
              </div>
            </Box>
          </Fade>
        </Modal>
      </StyledDetail>
      <Footer />
    </>
  );
}

const StyledDetail = styled.div`
  width: 90%;
  margin: var(--section-margin) auto;

  .product-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    .left-side {
      flex-basis: 45%;
      /* img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: var(--l-radius);
      } */

        img {
    max-width: 100%;
    max-height: 400px;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: var(--l-radius);
  }

    }
    .right-side {
      flex-basis: 45%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      gap: 1rem;
      .action-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        .quantity-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          border: 1px solid var(--primary-color);
          border-radius: var(--l-radius);
          padding: 0.5rem 1rem;
          background-color: #f8f8f8;

          p {
            font-weight: bold;
            min-width: 20px;
            text-align: center;
          }

          .quantity-btn {
            cursor: pointer;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: var(--white-color);
            font-size: 18px;
            font-weight: bold;
            p {
              color: white;
              cursor: pointer;
            }
          }
        }
      }
      h5 {
        font-weight: bold;
      }
      p {
        max-width: 45ch;
      }
    }
  }

  @media (max-width: 700px) {
    .product-detail {
      justify-content: center;
      .left-side {
        flex-basis: 100%;
      }
      .right-side {
        flex-basis: 100%;
        justify-content: center;
        align-items: center;

        h2,
        p {
          text-align: center;
        }

        .action-container {
          justify-content: center;
          flex-direction: column;
        }
      }
    }
  }
`;
