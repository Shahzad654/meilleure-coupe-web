import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { userActions } from "../store/userSlice";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseProfile = () => {
    setAnchorEl(null);
    navigate("/profile");
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(
        userActions.setCurrentUser({
          email: null,
          uid: null,
        })
      );
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <StyledNavbar>
      <div className="main_container">
        <div className="logo_container">
          <img
            src={Logo}
            alt=""
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="links_container">
          <a href="/">Home</a>
          <a href="/categories">Categories</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>

        {user.uid ? (
          <div className="profile_container">
            <MdOutlineShoppingCart
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
            />
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{ bgcolor: deepOrange[500], cursor: "pointer" }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {user.email[0].toUpperCase()}
              </Avatar>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                disableScrollLock
                sx={{
                  '& .MuiPaper-root': {
                    marginTop: '8px',
                    minWidth: '130px',
                    position: 'fixed',
                    top: 'auto',
                    left: 'auto',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'none',
                  }
                }}
              >
                <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Stack>
            <button onClick={handleSignOut} className="outline-btn">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="auth_btn">
            <button onClick={() => navigate("/login")}>Get Started</button>
          </div>
        )}

        <div className="mobile_navbar">
          <GiHamburgerMenu />
        </div>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  .main_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    height: var(--nav-height);
    width: 90%;
    margin: auto;

    .logo_container {
      margin-top: 2%;
      img {
        width: 70px;
        height: var(--nav-height);
      }
    }

    .links_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      a {
        &:hover {
          color: var(--secondary-color);
        }
      }
    }

    .profile_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }

    .auth_btn {
      display: flex;
      gap: 1rem;
    }

    .mobile_navbar {
      display: none;
    }
  }

  @media (max-width: 830px) {
    .main_container {
      .logo_container {
        margin-top: 4%;
      }
      .links_container {
        display: none;
      }
      .mobile_navbar {
        display: flex;
      }
    }
  }
`;
