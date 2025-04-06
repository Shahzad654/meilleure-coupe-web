import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SignupImg from "../assets/signup.jpg";
import { CircularProgress, Snackbar, Alert } from "@mui/material";
import Logo from "../assets/logo.png";
import { useSelector } from "react-redux";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });
  const navigate = useNavigate();
  const location = useLocation();
  
  const user = useSelector((state) => state.user.currentUser);
  console.log(user)

  useEffect(() => {
   
    if (user?.email) {

      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(userCredential.user);
      await signOut(auth);
      setVerificationSent(true);
      setSnackbar({ open: true, message: "Please check your email to verify your account.", severity: "success" });
      setTimeout(() => {
        navigate("/profile-setup", { replace: true });
      }, 1500);
      // navigate("/profile-setup", { replace: true });
    } catch (error) {
      setSnackbar({ open: true, message: error.message, severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledSignup>
      <div className="signup_container">
        <div className="left_side">
          <img src={SignupImg} alt="" />
        </div>
        <div className="right_side">
          <div className="image">
            <img src={Logo} alt="" />
          </div>

          <h3>Signup</h3>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup} disabled={loading}>
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Signup"
            )}
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </StyledSignup>
  );
}

const StyledSignup = styled.div`
  height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
  .signup_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 80%;
    margin: auto;

    .right_side {
      flex-basis: 45%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100px;
          height: 100px;
          object-fit: contain;
        }
      }
      h2 {
        text-align: center;
      }
      button {
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        color: var(--secondary-color);
        cursor: pointer;
      }
    }
    .left_side {
      flex-basis: 45%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 640px) {
    .signup_container {
      justify-content: center;
      .right_side {
        flex-basis: 100%;
        .image{
          img{
            width: 200px;
            height: 200px;
          }
        }
      }
      .left_side {
        display: none;
      }
    }
  }
`;
