import { useContext, useState } from "react";
import Add from "../../../img/addAvatar.png";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase/firebase";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

const AddShopContent = () => {
  const [shopName, setShopName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageName, setSelectedImageName] = useState("");
  // console.log(img);
  const { auth } = useContext(AuthContext);

  const addShopHandle = async () => {
    if (auth._id) {
      try {
        //Create a unique image name
        const storageRef = ref(storage, `${uuid()}`);

        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              // set data to db
              const bodyData = {
                description,
                shopName,
                img: downloadURL,
                location,
                userId: auth._id,
              };
              axios
                .post(`http://localhost:5000/api/pendding-shops`, bodyData, {
                  headers: {
                    "Content-Type": "application/json",
                    token: `token ${auth.accessToken}`,
                  },
                })
                .then((shop) => {
                  console.log("shop set", shop.data);
                  alert("Add your shop");
                })
                .catch((err) => {
                  console.log("my", err);
                  alert("Can't Add your shop, have some error");
                });
            } catch (err) {
              console.log(err);
            }
          });
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("You can not do that");
    }
  };

  return (
    <div className="addshop_container">
      <h1>Add Your Shop</h1>
      <input
        type="test"
        value={shopName}
        onChange={(e) => setShopName(e.target.value)}
        placeholder="Shop Name"
      />
      <input
        type="test"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Shop Location"
      />
      <input
        type="test"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        required
        onChange={(e) => {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setSelectedImage(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
          setFile(e.target.files[0]);
          setSelectedImageName(e.target.files[0].name);
        }}
        style={{ display: "none" }}
        type="file"
        id="file"
      />
      <label htmlFor="file" className="add_image_label">
        <img
          className="select_image"
          src={selectedImage ? selectedImage : Add}
          alt=""
        />
        <span>{selectedImageName ? selectedImageName : "Add Shop Image"}</span>
      </label>
      <button onClick={addShopHandle} className="main_button">
        Add Shop
      </button>
    </div>
  );
};

export default AddShopContent;
