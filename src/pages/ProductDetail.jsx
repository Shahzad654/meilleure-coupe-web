import React, { useState, useEffect } from "react";
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
import SimilarProducts from "./SimilarProducts";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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
  const [snackbarMessage, setSnackbarMessage] = useState(
    "Added to cart successfully"
  );
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loadingEmail, setLoadingEmail] = useState(false);
  const { t } = useTranslation();
  const [selectedWeight, setSelectedWeight] = useState("1kg");
  const [alignment, setAlignment] = useState("left");
  const [selectedVariant, setSelectedVariant] = useState(null);

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

  // const handleCartData = async (product) => {
  //   if (!product?.id) return;
  //   setLoadingId(product.id);
  //   try {
  //     if (!user.uid) {
  //       setAlertType("warning");
  //       setLoadingId(null);
  //       setOpen(true);
  //       return;
  //     }

  //     const updatedCart = {
  //       ...currentCart,
  //       [product.id]: {
  //         ...product,
  //         // selectedWeight: isSeedProduct ? selectedWeight : undefined,
  //         // price: `${weightPrice.toFixed(2)}€`,
  //       },
  //     };

  //     dispatch(userActions.setCart(updatedCart));

  //     await setDoc(doc(db, "cart", user.uid), updatedCart, { merge: true });

  //     setAlertType("success");
  //     setOpen(true);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoadingId(null);
  //   }
  // };

  const handleCartData = async (product) => {
    setLoadingId(product.id);
    try {
      if (!user.uid) {
        setAlertType("warning");
        setLoadingId(null);
        setOpen(true);
        return;
      }
  
      // Generate unique key
      const variantKey = product.variants?.length > 0
        ? `${product.id}_${selectedVariant.weight}`
        : product.id;
  
      // Get existing item if any
      const existingItem = currentCart[variantKey] || { quantity: 0 };
  
      // Create cart item
      const cartItem = {
        ...product,
        selectedVariant: product.variants?.length > 0 ? selectedVariant : null,
        price: product.variants?.length > 0 ? selectedVariant.price : product.price,
        quantity: existingItem.quantity + 1
      };
  
      // Update cart
      const updatedCart = {
        ...currentCart,
        [variantKey]: cartItem
      };
  
      dispatch(userActions.setCart(updatedCart));
      await setDoc(doc(db, "cart", user.uid), updatedCart, { merge: true });
  
      setSnackbarMessage("Added to cart successfully");
      setSnackbarSeverity("success");
      setOpen(true);
    } catch (error) {
      console.log(error);
      setSnackbarMessage("Failed to add to cart");
      setSnackbarSeverity("error");
      setOpen(true);
    } finally {
      setLoadingId(null);
    }
  };

  const allProducts = [
    ...birdProducts,
    ...fishProducts,
    ...catProducts,
    ...rabbitProducts,
    ...dogProducts,
  ];
  const product = allProducts.find((product) => product.name === name);

  const similarProducts = allProducts
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  console.log(similarProducts);

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

  const isSeedProduct = product?.isSeed;

  const basePrice = parseFloat(product.price);
  const weightPrice = selectedWeight === "5kg" ? basePrice * 5 : basePrice;

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setSelectedWeight(newAlignment);
    }
  };

  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  const handleVariantChange = (event, newVariantWeight) => {
    if (newVariantWeight !== null) {
      const variant = product.variants.find(
        (v) => v.weight === newVariantWeight
      );
      setSelectedVariant(variant);
    }
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
            <p>{t(product.description)}</p>

            <h5>{selectedVariant ? selectedVariant.price : product.price}</h5>

            {product.variants && product.variants.length > 0 && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem" }}>Option:</p>
                </div>
                <ToggleButtonGroup
                  value={selectedVariant?.weight}
                  exclusive
                  onChange={handleVariantChange}
                  aria-label="Option"
                  size="small"
                  sx={{ alignSelf: "flex-start" }}
                >
                  {product.variants.map((variant) => (
                    <ToggleButton
                      key={variant.weight}
                      value={variant.weight}
                      sx={{
                        px: 1,
                        py: 0.5,
                        fontSize: "0.75rem",
                        minHeight: "28px",
                        minWidth: "40px",
                        "&.Mui-selected": {
                          backgroundColor: "#1976d2",
                          color: "#fff",
                          "&:hover": { backgroundColor: "#1565c0" },
                        },
                      }}
                    >
                      {variant.weight}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </div>
            )}

            <div className="action-container">
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

        <SimilarProducts similarProducts={similarProducts} />

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
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 3rem;

    .left-side {
      flex: 1;
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        height: auto;
        max-height: 400px;
        object-fit: contain;
        border-radius: var(--l-radius);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
    }

    .right-side {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 2rem;
      border: 1px solid var(--border-color);
      border-radius: var(--l-radius);
      background: #fff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

      h3 {
        font-weight: 600;
      }

      p {
        color: var(--text-color);
        line-height: 1.6;
      }

      h5 {
        font-weight: bold;
        color: var(--primary-color);
      }

      .action-container {
        display: flex;
        gap: 1rem;
        /* flex-wrap: wrap; */
      }
    }
  }

  @media (max-width: 768px) {
    .product-detail {
      flex-direction: column;
      align-items: center;
    }
    .right-side {
      width: 100%;
    }
  }
`;
