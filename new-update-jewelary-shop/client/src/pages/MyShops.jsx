import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MyShopBlock from "../components/pageComponents/MyShopsPageComponents/MyShopBlock";
import "../styles/pageStyle/myShop.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const MyShops = () => {
  const [collectionData, setCollectionData] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/shops?userId=${auth._id}`)
      .then((res) => setCollectionData(res.data))
      .catch((err) => console.log(err));
  }, [auth]);

  return (
    <div className="main_container">
      <Header />
      <div className="my_shop_container">
        <div className="my_shop_top">
          <div className="my_shop_top_buttons">
            <Link to="/my-pendding-shops">
              <button className="main_button">Pendding Shops</button>
            </Link>
            <Link to="/add-shop">
              <button className="main_button">Add Shop</button>
            </Link>
          </div>
        </div>
        <div className="my_shop_bottom">
          {collectionData?.map((shop) => (
            <MyShopBlock key={shop._id} myShops={true} shop={shop} />
          ))}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MyShops;
