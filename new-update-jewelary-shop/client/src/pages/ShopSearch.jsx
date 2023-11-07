import { useSearchParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../styles/pageStyle/shop.css";
import ShopListUnit from "../components/pageComponents/ShopPageComponents/ShopListUnit";
import { useEffect, useState } from "react";
import axios from "axios";

const ShopSearch = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const [shops, setShops] = useState([]);

  useEffect(() => {
    const name = searchParams.get("name");
    const location = searchParams.get("location");
    console.log(name, location);

    if (name && location) {
      axios
        .get(
          `http://localhost:5000/api/shops?name=${name}&location=${location}`
        )
        .then((res) => setShops(res.data))
        .catch((err) => console.log(err));
    } else if (name) {
      axios
        .get(`http://localhost:5000/api/shops?name=${name}`)
        .then((res) => setShops(res.data))
        .catch((err) => console.log(err));
    } else if (location) {
      axios
        .get(`http://localhost:5000/api/shops?location=${location}`)
        .then((res) => setShops(res.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`http://localhost:5000/api/shops`)
        .then((res) => setShops(res.data))
        .catch((err) => console.log(err));
    }
  }, [searchParams]);

  return (
    <div className="main_container">
      <Header />
      {/* shop section */}
      <div className="shop_section">
        <h1>Gem and Jewelry Shops</h1>
        <section className="shop_list_container">
          <div></div>
          <div className="shop_list">
            {shops?.map((shop) => (
              <ShopListUnit key={shop._id} shop={shop} />
            ))}
          </div>
        </section>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ShopSearch;
