import "../styles/pageStyle/login.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Button from "../components/commonComponents/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const registerHandle = () => {
    if (password === confirmPassword) {
      if (error.length > 0) {
        setError("");
      }
      setLoading(true);

      const validateEmail = (email) => {
        // Email regex pattern for basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      
    
        if (!validateEmail(email)) {
          setEmailError("Invalid email address");
          return;
        }

      const body = {
        firstName,
        lastName,
        username,
        email,
        mobileNumber,
        password,
      };

      axios
        .post("http://localhost:5000/api/auth/register", body)
        .then((res) => {
          console.log(res.data);
          setLoading(false);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
          setError(err.message);
        });

      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setMobileNumber("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setError("Your password is not matched.");
    }
  };


  

  

  return (
    <div className="main_container">
      {/* header */}
      <Header />
      {/* login section */}
      <div className="register_container">
        <div className="register_block">
        <div className ="login_profile" ><AccountCircleIcon> </AccountCircleIcon></div>
          <h1>Registration</h1>
          <div className="register_user_names">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              if (error.length > 0) {
                setError("");
              }
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <p className="register_error">{emailError}</p>}

          <input
            type="text"
            placeholder="Phone"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              if (error.length > 0) {
                setError("Invalid password");
              }
              setPassword(e.target.value);
            }}
          />
          <input
            className="register_last_input"
            type="password"
            placeholder="Confirmed Password"
            value={confirmPassword}
            onChange={(e) => {
              if (error.length > 0) {
                setError("");
              }
              setConfirmPassword(e.target.value);
            }}
          />
          {error && <p className="register_error">{error}</p>}
          {loading ? (
            <Button>Sign Up</Button>
          ) : (
            <div onClick={registerHandle}>
              <Button>Sign Up</Button>
            </div>
          )}
        </div>
      </div>
      {/* footer */}
      <div className="register_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Register;
