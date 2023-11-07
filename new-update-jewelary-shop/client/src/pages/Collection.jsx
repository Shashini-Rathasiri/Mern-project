import { useEffect, useState } from "react";
import ProductCategory from "../components/commonComponents/ProductCategory";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import axios from "axios";

const Collection = () => {
  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/collection/")
      .then((res) => setCollectionData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main_container">
      {/* header */}
      <Header />
      {/* category collection */}
      <div className="main_collection">
        {collectionData?.map(({ _id, collectionName, img }) => (
          <ProductCategory
            key={_id}
            image={img}
            title={collectionName}
            link={`/collection/${_id}`}
          />
        ))}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Collection;
