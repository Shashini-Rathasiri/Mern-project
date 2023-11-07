import "../styles/pageStyle/login.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Button from "../components/commonComponents/Button";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { Container } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const { setCart } = useContext(CartContext);

  const navigate = useNavigate();

  const loginHandle = () => {
    if (error.length > 0) {
      setError("");
    }
    setLoading(true);

    const body = { username, password };
    axios
      .post("http://localhost:5000/api/auth/login", body)
      .then((res) => {
        // console.log(res.data);
        setAuth(res.data);
        localStorage.setItem("user-auth", JSON.stringify(res.data));
        setLoading(false);
        //get cart
        axios
          .get(`http://localhost:5000/api/carts/find/${res.data._id}`, {
            headers: {
              "Content-Type": "application/json",
              token: `token ${res.data.accessToken}`,
            },
          })
          .then((cart) => {
            console.log("cart set", cart.data);
            if (cart.data) {
              setCart(cart.data);
            }
          })
          .catch((err) => console.log("my", err));
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError(err.message);
      });

    setUsername("");
    setPassword("");
  };

  return (
    <div className="main_container">
      {/* header */}
      <Header />
      {/* login section */}
      <div className="login_container">
        <div className="login_block">
       <div className ="login_profile" ><AccountCircleIcon> </AccountCircleIcon></div>
          <h1>Login</h1>
         
          <input
            type="text"
            placeholder="Enter UserName"

            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
          <input
            className="login_last_input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="register_error">{error}</p>}
          {loading ? (
            <Button>Login</Button>
          ) : (
            <div onClick={loginHandle}>
              <Button>Login</Button>
<br></br>
              <input type="checkbox" checked="checked"/> Remember me

              <div className ='Container'  style= {{backgroundColor: "#f1f1f1"}}>
                <button type="button" className="cancelbtn">Cancel</button>

                <span className="psw"> <a href="#"> Forgot Password?</a></span>
              </div>
            </div>
            
          )}
        </div>
      </div>
      {/* footer */}
      <div className="login_footer">
        <Footer />
        
      </div>
    </div>
  );
};

export default Login;
