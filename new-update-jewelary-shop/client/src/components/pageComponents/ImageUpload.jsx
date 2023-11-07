import { useState } from "react";
import Add from "../../img/addAvatar.png";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/firebase";

const ImageUpload = ({ setImage, n }) => {
  const [file, setFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  const uploadImage = async () => {
    try {
      //Create a unique image name
      const storageRef = ref(storage, `${uuid()}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          setImage(downloadURL);
          alert("image uploaded");
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add_product_image">
      <input
        required
        onChange={(e) => {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setSelectedImage(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
          setFile(e.target.files[0]);
        }}
        style={{ display: "none" }}
        type="file"
        id={`file${n}`}
      />
      <div className="input_wrapper">
        <label htmlFor={`file${n}`} className="add_image_label">
          <img
            className="select_image"
            src={selectedImage ? selectedImage : Add}
            alt=""
          />
        </label>
        <span onClick={uploadImage}>Upload</span>
      </div>
    </div>
  );
};

export default ImageUpload;
