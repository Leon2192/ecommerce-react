import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      navigate("/");
    }
  };

  return (
    <div className="rootNav">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className="appBar">
          <Toolbar>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img
                  src="https://www.gran-turismo.com/gtsport/decal/5765245246239671296_1.png"
                  className="navLogo"
                  alt="logo"
                />
              </IconButton>
            </Link>
            <Typography
              color="textPrimary"
              variant="h6"
              component="p"
              sx={{ flexGrow: 1 }}
            >
              Hola {user ? user.email : "Usuario"}
            </Typography>
            <div className="buttonNav">
              <Link to="/signin">
                <Button variant="filled" onClick={handleAuth}>
                  <strong>{user ? "Sign Out" : "Sign In"}</strong>
                </Button>
              </Link>
              <Link to="/checkout">
                <IconButton aria-label="show cart items" color="inherit">
                  <Badge badgeContent={basket?.length} color="secondary">
                    <ShoppingCart fontSize="large" />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
