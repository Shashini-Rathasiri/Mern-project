import { useEffect, useState } from "react";
import ProductCategory from "../components/commonComponents/ProductCategory";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

const CategoryUnit = () => {
  const [collectionData, setCollectionData] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products?category=${categoryId}`)
      .then((res) => setCollectionData(res.data))
      .catch((err) => console.log(err));
  }, [categoryId]);

  console.log("collection Data", collectionData);
  return (
    <div>
      <div className="main_container">
        {/* Header */}
        <Header />
        {/* Category unit collection */}
        <div className="main_collection">
          {collectionData?.map(({ _id, productName, img }) => (
            <ProductCategory
              key={_id}
              image={img[0]}
              title={productName}
              // link={"`/category/:categoryId/:categoryItemId"}
              link={`/category/${categoryId}/${_id}`}
            />
          ))}
        </div>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default CategoryUnit;
