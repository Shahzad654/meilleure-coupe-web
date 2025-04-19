import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import { MdOutlineShoppingCart } from "react-icons/md";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { userActions } from "../store/userSlice";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ContactIcon from "@mui/icons-material/ContactSupport";
import { useTranslation } from "react-i18next";
import i18n from "../locale/i18n";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const user = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoggingOut, setIsLoggingOut] = React.useState(false);
  const open = Boolean(anchorEl);
  const [value, setValue] = useState(0);
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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

  const handleCloseEdit = () => {
    setAnchorEl(null);
    navigate("/edit-profile");
  };

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
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
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
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
            <Link to="/" className="link">
              {/* Home */}
              {t("homeLink")}
            </Link>
            <a href="/categories" className="link">
              {/* Categories */}
              {t("catLink")}
            </a>

            <Link to="/about" className="link">
              {/* Contact Us */}
              {t("aboutLink")}
            </Link>
            <Link to="/contact" className="link">
              {/* Contact Us */}
              {t("contactLink")}
            </Link>
          </div>

          {user.uid ? (
            <div className="profile_container">
              <MdOutlineShoppingCart
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
                onClick={() => navigate("/cart")}
              />
              <Stack direction="row" spacing={2} sx={{ marginRight: "20px" }}>
                <Avatar
                  sx={{ bgcolor: deepOrange[500], cursor: "pointer" }}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  {user.email[0].toUpperCase()}
                </Avatar>

                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  sx={{
                    width: "20%",
                    
                    "& .MuiToggleButton-root": {
                      padding: "4px 8px", 
                      fontSize: "12px", 
                      borderRadius: "20px", 
                      minWidth: "40px",
                      marginLeft:"5%"
                    },
                  }}
                >
                  <ToggleButton value="en" onClick={() => i18n.changeLanguage("en")}>en</ToggleButton>
                  <ToggleButton value="fr" onClick={() => i18n.changeLanguage("fr")}>fr</ToggleButton>
                </ToggleButtonGroup>

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
                    "& .MuiPaper-root": {
                      marginTop: "8px",
                      minWidth: "100px",
                      position: "fixed",
                      top: "auto",
                      left: "auto",
                      right: "auto",
                      bottom: "auto",
                      transform: "none",
                    },
                  }}
                >
                  <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleCloseEdit}>Edit Profile</MenuItem>
                  <MenuItem onClick={handleSignOut} disabled={isLoggingOut}>
                    {isLoggingOut ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <CircularProgress size={16} />
                        Logging out
                      </div>
                    ) : (
                      "Logout"
                    )}
                  </MenuItem>
                </Menu>
              </Stack>
            </div>
          ) : (
            <div className="auth_btn">
              <button onClick={() => navigate("/login")}>Get Started</button>
            </div>
          )}
        </div>
      </StyledNavbar>
      <MobileNavbar>
        <Box sx={{ width: "100%" }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{
              borderTopLeftRadius: "var(--l-radius)",
              borderTopRightRadius: "var(--l-radius)",
            }}
          >
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon />}
              onClick={() => navigate("/")}
            />
            <BottomNavigationAction
              label="Categories"
              icon={<CategoryIcon />}
              // onClick={() => navigate("/categories")}
            />
            <BottomNavigationAction
              label="Contact"
              icon={<ContactIcon />}
              onClick={() => navigate("/contact")}
            />
          </BottomNavigation>
        </Box>
      </MobileNavbar>
    </>
  );
}

const MobileNavbar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  @media (max-width: 830px) {
    display: block;
  }
`;

const StyledNavbar = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: var(--l-radius);
  border-bottom-right-radius: var(--l-radius);

  .main_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    height: var(--nav-height);
    width: 90%;
    margin: auto;

    .logo_container {
      img {
        max-width: 65px;
        height: 65px;
      }
    }

    .links_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      .link {
        font-size: var(--text);
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-color);
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
      .links_container {
        display: none;
      }
      .mobile_navbar {
        display: flex;
      }
    }
  }
`;
