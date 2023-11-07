import { useEffect, useState } from "react";
import ProductCategory from "../components/commonComponents/ProductCategory";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

const CollectionUnit = () => {
  const [collectionData, setCollectionData] = useState([]);

  const { collectionId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products?collection=${collectionId}`)
      .then((res) => setCollectionData(res.data))
      .catch((err) => console.log(err));
  }, [collectionId]);

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
              link={`/collection/${collectionId}/${_id}`}
            />
          ))}
        </div>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default CollectionUnit;
