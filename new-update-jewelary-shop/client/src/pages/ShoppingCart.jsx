import { useContext, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ShoppingCartcomponant from "../components/pageComponents/ShoppingCartComponant/ShoppingCartcomponant";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const ShoppingCart = () => {
  const { setCart } = useContext(CartContext);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    //get cart
    axios
      .get(`http://localhost:5000/api/carts/find/${auth._id}`, {
        headers: {
          "Content-Type": "application/json",
          token: `token ${auth.accessToken}`,
        },
      })
      .then((cart) => {
        console.log("cart set", cart.data);
        if (cart.data) {
          setCart(cart.data);
        }
      })
      .catch((err) => console.log("my", err));
  }, [auth]);

  return (
    <div>
      <div className="main_container">
        <Header />
        <ShoppingCartcomponant />
        <Footer />
      </div>
    </div>
  );
};

export default ShoppingCart;
