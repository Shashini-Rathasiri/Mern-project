import "../styles/pageStyle/category.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProductCategory from "../components/commonComponents/ProductCategory";
import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category/")
      .then((res) => setCategoryData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="main_container">
      {/* header */}
      <Header />
      {/* category collection */}
      <div className="main_collection">
        {categoryData?.map(({ _id, categoryName, img }) => (
          <ProductCategory
            key={_id}
            image={img}
            title={categoryName}
            link={`/category/${_id}`}
          />
        ))}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Category;
