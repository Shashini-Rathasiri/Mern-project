import { useContext } from "react";
import Button from "../../commonComponents/Button";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const ShopListUnit = ({ shop }) => {
  const { auth } = useContext(AuthContext);

  const bookShop = () => {
    if (auth._id) {
      const bodyData = {
        username: auth.username,
        shopId: shop._id,
        userId: auth._id,
        shopName: shop.shopName,
        location: shop.location,
        mobileNumber: auth.mobileNumber,
      };

      axios
        .post(`http://localhost:5000/api/booking`, bodyData, {
          headers: {
            "Content-Type": "application/json",
            token: `token ${auth.accessToken}`,
          },
        })
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            alert("You Booked this Shop");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="shop_list_unit_container">
      <div
        className="shop_list_unit_image"
        style={{
          backgroundImage: `url("${shop.img}")`,
        }}
      ></div>
      <div className="shop_list_details">
        <p></p>
        <h3>{shop.shopName}</h3>
        <div className="shop_list_buttons">
          <Link to={`/shopsearch/${shop._id}`}>
            <Button>View Product</Button>
          </Link>
          <div onClick={bookShop}>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopListUnit;
