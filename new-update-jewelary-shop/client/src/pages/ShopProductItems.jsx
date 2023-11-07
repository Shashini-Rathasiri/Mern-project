import { useContext, useEffect, useState } from "react";
import Button from "../components/commonComponents/Button";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../styles/pageStyle/collectionitem.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const ShopProductItems = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});

  const { cart, setCart } = useContext(CartContext);
  const { auth } = useContext(AuthContext);
  console.log(cart);

  const handleincrement = () => {
    setCount((preCount) => preCount + 1);
  };

  const handledecrement = () => {
    if (count > 1) {
      setCount((preCount) => preCount - 1);
    } else {
    }
  };

  const addCart = async () => {
    const headers = {
      "Content-Type": "application/json",
      token: `token ${auth.accessToken}`,
    };
    const data = {
      userId: auth._id,
      products: [
        ...cart.products,
        {
          productId: product._id,
          productName: product.productName,
          price: product.price,
          img: product.img[0],
          shopId: product.shopId,
          userId: auth._id,
          username: auth.username,
          mobileNumber: auth.mobileNumber,
          quantity: count,
        },
      ],
    };
    if (auth._id) {
      if (!cart._id) {
        axios
          .post("http://localhost:5000/api/carts", data, {
            headers: headers,
          })
          .then((res) => {
            setCart(res.data);
            alert("Product Added to your cart");
          })
          .catch((err) => console.log(err));
      } else {
        axios
          .put(`http://localhost:5000/api/carts/${cart._id}`, data, {
            headers: headers,
          })
          .then((res) => {
            setCart(res.data);
            alert("Product Added to your cart");
          })
          .catch((err) => console.log(err));
      }
    } else {
      alert("You must log in to do this");
    }
  };

  const { shopItemId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/find/${shopItemId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [shopItemId]);

  return (
    <div>
      <div className="main_container">
        {/* Header */}
        <Header />

        {/* collection Item */}

        <div className="collection_item_container">
          <div className="collectionitem_sm_image">
            <div
              className="sm_img1"
              style={{
                backgroundImage: product.img
                  ? `url("${product.img[0]}")`
                  : 'url("https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg")',
              }}
            ></div>
            <div
              className="sm_img1"
              style={{
                backgroundImage: product.img
                  ? `url("${product.img[1]}")`
                  : 'url("https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg")',
              }}
            ></div>
            <div
              className="sm_img1"
              style={{
                backgroundImage: product.img
                  ? `url("${product.img[2]}")`
                  : 'url("https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg")',
              }}
            ></div>
          </div>
          <div
            className="collectionitem_middle_image"
            style={{
              backgroundImage: product.img
                ? `url("${product.img[3]}")`
                : 'url("https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg")',
            }}
          ></div>
          <div className="collectionitem_details">
            <div className="details_container">
              <h1>{product.productName ? product.productName : ""}</h1>

              <h2>{product.shopName ? product.shopName : ""}</h2>
              <h4>LKR {product.price ? product.price : ""}.00</h4>
              <p>InStock</p>
            </div>
            <div className="collectionitem_qty">
              <p>Qty</p>
              <p className="add_qty" onClick={handleincrement}>
                +
              </p>
              <p className="qty">{count}</p>
              <p className="sub_qty" onClick={handledecrement}>
                -
              </p>

              <div className="details_add_button">
                <div onClick={addCart}>
                  <Button> Add to Bag</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ShopProductItems;
