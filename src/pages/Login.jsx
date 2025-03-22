import React, { useState } from "react";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import LoginImg from "../assets/login.jpg";
import CircularProgress from "@mui/material/CircularProgress";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Logo from "../assets/logo.png";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!userCredential.user.emailVerified) {
        setSnackbar({
          open: true,
          message: "Please verify your email before logging in",
          severity: "error",
        });
        return;
      }

      const profileInfo = localStorage.getItem('user_info');
      console.log('Profile Info from localStorage:', profileInfo);

      if(profileInfo){
        try {
          const parsedProfileInfo = JSON.parse(profileInfo);
          console.log('Parsed Profile Info:', parsedProfileInfo);

          await setDoc(doc(db, 'userInfo', userCredential.user.uid), {
            ...parsedProfileInfo,
            email: userCredential.user.email,
            createdAt: new Date().toISOString()
          });
          console.log('Data saved to Firebase');

          dispatch(userActions.setUserInfo(parsedProfileInfo));
          console.log('Data dispatched to Redux');

          localStorage.removeItem('user_info');
          console.log('LocalStorage cleared');
        } catch (error) {
          console.error('Error saving profile data:', error);
          setSnackbar({
            open: true,
            message: "Error saving profile data. Please try again.",
            severity: "error",
          });
        }
      } else {
        console.log('No profile info found in localStorage, fetching from Firebase');
        try {
          const userDoc = await getDoc(doc(db, 'userInfo', userCredential.user.uid));
          if (userDoc.exists()) {
            dispatch(userActions.setUserInfo(userDoc.data()));
            console.log('User data fetched from Firebase and set to Redux');
          }
        } catch (error) {
          console.error('Error fetching user data from Firebase:', error);
        }
      }
        
      dispatch(
        userActions.setCurrentUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        })
      );
      setSnackbar({
        open: true,
        message: "Successfully logged in!",
        severity: "success",
      });
      setTimeout(() => {
        
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      }, 1000);
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledLogin>
      <div className="login_container">
        <div className="left_side">
          <img src={LoginImg} alt="login" />
        </div>

        <div className="right_side">
          <div className="image">
            <img src={Logo} alt="" />
          </div>

          <h2>Login</h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} disabled={loading}>
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Login"
            )}
          </button>
          <p>Forget Password?</p>
          <p className="signup_link">Don't have an account? <Link to="/signup">Signup</Link></p>
        </div>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;

  .login_container {
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
        text-decoration: underline;
      }
      .signup_link{
        color: var(--text-color);
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
    .login_container {
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
