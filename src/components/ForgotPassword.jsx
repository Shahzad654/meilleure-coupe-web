import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { CircularProgress } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

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

export default function ForgotPassword({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [linkSent, setLinkSent] = useState(false); 
  const emailRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, emailRef.current.value);
      setLinkSent(true);
    } catch (e) {
      console.log("reset error", e);
    }
    setLoading(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open} 
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div>
            <h5 id="transition-modal-title">Reset Password</h5>
          </div>

          <form
            onSubmit={submitHandler}
            style={{
              marginTop: "5%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "5%",
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              ref={emailRef}
              required
            />

            <button type="submit">
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                "Submit"
              )}
            </button>
          </form>
          {linkSent && <p style={{ color: "green" }}>Reset link sent!</p>}
        </Box>
      </Fade>
    </Modal>
  );
}
