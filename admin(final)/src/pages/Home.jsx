import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [adminname, setAdminname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginHandle = () => {
    if (error.length > 0) {
      setError("");
    }
    setLoading(true);

    const body = { adminname, password };
    axios
      .post("http://localhost:5000/api/auth/admin/login", body)
      .then((res) => {
        // console.log(res.data);
        setAuth(res.data);
        localStorage.setItem("auth", JSON.stringify(res.data));
        setLoading(false);
        navigate("/users");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError(err.message);
      });

    setAdminname("");
    setPassword("");
  };

  return (
    <div className="homecontainer">
      <div className="logincontainer">
        <h1>Admin Login</h1>
        <input
          placeholder="username"
          type="test"
          value={adminname}
          onChange={(e) => setAdminname(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="adminerror">{error}</p>}
        {loading ? (
          <button>Login</button>
        ) : (
          <button onClick={loginHandle}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Home;
