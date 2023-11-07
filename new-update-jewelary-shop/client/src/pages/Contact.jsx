import "../styles/pageStyle/login.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Button from "../components/commonComponents/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Contact = () => {
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [feedback, setFeedback] = useState("");

  const navigate = useNavigate();

  const registerHandle = () => {
    setYourName("");
    setEmail("");
    setMobileNumber("");

    const body = { yourName, email, mobileNumber };

    axios
      .post("http://localhost:5000/api/auth/register", body)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  };

  return (
    <div className="main_container">
      {/* header */}
      <Header />
      {/* login section */}
      <div className="contact_container">
        <div className="contact_block">
        <div className ="login_profile" ><AccountCircleIcon> </AccountCircleIcon></div>
          <h1>Contact Us</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={5}
            placeholder="Your Feedback"
          />
          <div onClick={registerHandle}>
            <Button>send</Button>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="contact_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
