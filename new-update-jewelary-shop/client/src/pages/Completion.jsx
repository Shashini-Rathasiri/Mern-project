import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Completion = () => {
  const { setCart } = useContext(CartContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/carts/find/${auth._id}`, {
        headers: {
          "Content-Type": "application/json",
          token: `token ${auth.accessToken}`,
        },
      })
      .then((cart) => {
        console.log("cart get", cart.data);
        if (cart.data) {
          const products = [...cart.data.products];

          products.forEach((prod) => {
            const bodyData = {
              productId: prod.productId,
              productName: prod.productName,
              price: prod.price,
              img: prod.img,
              shopId: prod.shopId,
              userId: prod.userId,
              username: prod.username,
              mobileNumber: prod.mobileNumber,
              quantity: prod.quantity,
            };

            axios
              .post(`http://localhost:5000/api/orders`, bodyData, {
                headers: {
                  "Content-Type": "application/json",
                  token: `token ${auth.accessToken}`,
                },
              })
              .then((res) => {
                console.log("oder added ", res.data);
              })
              .catch((err) => console.log(err));
          });

          axios
            .delete(`http://localhost:5000/api/carts/${cart.data._id}`, {
              headers: {
                "Content-Type": "application/json",
                token: `token ${auth.accessToken}`,
              },
            })
            .then((res) => {
              setCart({
                products: [],
              });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log("my", err));
  }, [auth]);

  return (
    <section>
      <div className ="payment_complete_Box">
    <div className="payment_complete_page">
      <h2>Transaction Completed</h2>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
    </div>
    </section>
  );
};

export default Completion;
