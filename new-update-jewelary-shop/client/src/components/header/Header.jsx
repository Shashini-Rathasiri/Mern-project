/* eslint-disable no-undef */
import { Link, useNavigate } from "react-router-dom";
import "../../styles/componentStyle/header.css";
import StoreIcon from "@mui/icons-material/Store";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../img/logo.png";

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [clickuser, setClickUser] = useState(false);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("user-auth");
    setClickUser(false);
    setAuth({});
    navigate("/");
  };

  return (
    <div className="header_container">
      <div></div>
      <div>
        <img src={logo} className="header-logo" alt="logo" />
      </div>

      <div className="header_menu_desktop">
        <Link to="/">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/shops">
          <div>
            <button className="btn1" header={true}>
              Book Now Shops{" "}
            </button>
          </div>
        </Link>

        <Link to="/login">
          <div className="header_icon">
            <ChatIcon />
            <p>Online Chat</p>
          </div>
        </Link>
        <Link to="/shopping-cart">
          <div className="header_icon">
            <LocalGroceryStoreIcon />
            <p>Shopping Cart</p>
          </div>
        </Link>
        <div className="Acc">
          <AccountCircleIcon />
          <div className="user_acc" onClick={() => setClickUser(!clickuser)}>
            <p className="username">{auth ? auth.username : ""}</p>
            <p className="username">
              {auth ? (auth.status ? auth.status : null) : null}
            </p>
          </div>
        </div>
        {clickuser && (
          <div className="user_menu">
            <p onClick={logOut} className="pointer">
              Logout
            </p>
            <Link to="/my-shops">
              <p className="pointer">My Shops</p>
            </Link>
            <Link to="/user-booking">
              <p className="pointer">My Booking</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
