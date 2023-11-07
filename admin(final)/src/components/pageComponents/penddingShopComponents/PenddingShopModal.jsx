import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const PenddingShopModal = ({ open, handleClose, selected }) => {
  const { auth } = useContext(AuthContext);

  const acceptHandle = () => {
    const bodyData = {
      shopName: selected.shopName,
      img: selected.img,
      location: selected.location,
      userId: selected.userId,
    };
    axios
      .post("http://localhost:5000/api/shops", bodyData, {
        headers: {
          "Content-Type": "application/json",
          token: `token ${auth.accessToken}`,
        },
      })
      .then((res) => {
        console.log("shop added", res.data);
        //update user status
        axios
          .put(
            `http://localhost:5000/api/users/${selected.userId}`,
            {
              status: "shop owner",
            },
            {
              headers: {
                "Content-Type": "application/json",
                token: `token ${auth.accessToken}`,
              },
            }
          )
          .then((res) => console.log("user status updated", res))
          .catch((err) => console.log(err));
        //delete pending shop
        axios
          .delete(`http://localhost:5000/api/pendding-shops/${selected._id}`, {
            headers: {
              "Content-Type": "application/json",
              token: `token ${auth.accessToken}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            alert("Shop Added");
            handleClose();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const deleteShop = () => {
    axios
      .delete(`http://localhost:5000/api/pendding-shops/${selected._id}`, {
        headers: {
          "Content-Type": "application/json",
          token: `token ${auth.accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Request Rejected");
        handleClose();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modal_container">
          <div
            className="modal_image"
            style={{
              backgroundImage: `url("${selected.img}")`,
            }}
          ></div>
          <div className="modal_details">
            <h3>{selected.shopName}</h3>
            <p>{selected.location}</p>
          </div>
        </div>
        <div className="modal_buttons">
          <button onClick={acceptHandle}>Accept</button>
          <button onClick={deleteShop}>Cancel</button>
        </div>
      </Box>
    </Modal>
  );
};

export default PenddingShopModal;
