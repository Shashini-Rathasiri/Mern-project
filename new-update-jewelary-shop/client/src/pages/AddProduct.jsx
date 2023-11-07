import { useContext, useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import "../styles/pageStyle/addProduct.css";
import ImageUpload from "../components/pageComponents/ImageUpload";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const AddProduct = () => {
  const { shopId } = useParams();

  const [productName, setProductName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [categories, setCategories] = useState([]);
  const [collection, setCollection] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [selectedColl, setSelectedColl] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [priceError, setPriceError] = useState("");

  const { auth } = useContext(AuthContext);

  console.log(selectedCat, selectedColl);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/collection/")
      .then((res) => {
        setCollection(res.data);
        setSelectedColl(res.data[0]._id);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/category/")
      .then((res) => {
        setCategories(res.data);
        setSelectedCat(res.data[0]._id);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitProduct = () => {

    // Validation for quantity
    if (!Number.isInteger(Number(quantity)) || Number(quantity) <= 0) {
      setQuantityError("Please enter a valid quantity");
      return;
    } else {
      setQuantityError("");
    }

    // Validation for price
    if (Number(price) <= 0) {
      setPriceError("Please enter a valid price");
      return;
    } else {
      setPriceError("");
    }

    const bodyData = {
      productName,
      desc,
      img: [img1, img2, img3, img4],
      price: Number(price),
      quantity: Number(quantity),
      categories: [selectedCat],
      collections: [selectedColl],
      shopId,
    };

    axios
      .post("http://localhost:5000/api/products", bodyData, {
        headers: {
          "Content-Type": "application/json",
          token: `token ${auth.accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Product Added successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Can't add your product, have some error");
      });
  };

  return (
    <div className="main_container">
      <Header />
      <div className="product_container">
        <div className="product_container_block">
          <h2>Add Product</h2>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
         {priceError && <p className="error_message">{priceError}</p>}

          <input
            type="text"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          {quantityError && <p className="error_message">{quantityError}</p>}
          {/* Imagers */}
          <div className="image_upload_container">
            <ImageUpload setImage={setImg1} n={1} />
            <ImageUpload setImage={setImg2} n={2} />
            <ImageUpload setImage={setImg3} n={3} />
            <ImageUpload setImage={setImg4} n={4} />
          </div>
          <select onChange={(e) => setSelectedCat(e.target.value)}>
            {categories?.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.categoryName}
              </option>
            ))}
          </select>
          <select onChange={(e) => setSelectedColl(e.target.value)}>
            {collection?.map((coll) => (
              <option key={coll._id} value={coll._id}>
                {coll.collectionName}
              </option>
            ))}
          </select>
          <div style={{ marginTop: "37px" }}>
            <button onClick={submitProduct} className="main_button">
              Add Product
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
