import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from './AuthContext'; // Adjust the import path as needed
import logo from "../HB_logo_passworgpannel-removebg-preview.png";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const menuItems = [
    { name: "Home", icon: <HomeIcon />, path: "/home" },
    { name: "Course", icon: <SchoolIcon />, path: "/course" },
    { name: "Glossary", icon: <BookIcon />, path: "/glossary" },
    { name: "Daily Progress", icon: <TrendingUpIcon />, path: "/progress" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout(); // This should clear the token and update the context
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={logo}
            style={{
              height: "auto",
              width: "90px",
              maxHeight: "60px",
              objectFit: "contain",
              padding: '5px',
            }}
            alt="logo"
          />
          <span style={{padding:'5px', fontWeight:'600'}}>HBITS College of Insurance</span>
        </Typography>
        {isAuthenticated ? (
          isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  startIcon={item.icon}
                  sx={{
                    mx: 1,
                    "&.active": {
                      bgcolor: "maroon",
                      color: "white",
                      padding: "10px",
                    },
                  }}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                color="inherit"
                startIcon={<ExitToAppIcon />}
                onClick={handleLogout}
                sx={{ mx: 1 }}
              >
                Sign Out
              </Button>
            </Box>
          )
        ) : (
          <Button
            color="inherit"
            startIcon={<LoginIcon />}
            onClick={handleLogin}
            sx={{ mx: 1 }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;