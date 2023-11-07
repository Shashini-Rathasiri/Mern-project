import { useEffect, useState } from "react";
import Button from "../../commonComponents/Button";
import Search from "../../commonComponents/Search";
import ShopListUnit from "./ShopListUnit";
import axios from "axios";
import { Link } from "react-router-dom";

const ShopSection = () => {
  const [shops, setShops] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/shops")
      .then((res) => setShops(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="shop_section">
      <h1>Gem and Jewelry Shops</h1>
      <section className="shop_list_container">
        <div className="shop_search">
          <h4>Search</h4>
          <Search
            setText={setName}
            title="Shop Name"
            placeholder="Search Shop"
          />
          <Search
            setText={setLocation}
            title="Location"
            placeholder="Search Location"
          />
          <div className="shop_search_button">
            <Link to={`/searchshops?name=${name}&location=${location}`}>
              <Button white={true}>Search</Button>
            </Link>
          </div>
        </div>
        <div className="shop_list">
          {shops?.map((shop) => (
            <ShopListUnit key={shop._id} shop={shop} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopSection;
