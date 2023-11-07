import { useParams } from "react-router-dom";
import "../styles/pageStyle/userBooking.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const ShopOrder = () => {
  const { shopId } = useParams();

  const { auth } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/orders/find/shop/${shopId}`, {
        headers: {
          "Content-Type": "application/json",
          token: `token ${auth.accessToken}`,
        },
      })
      .then((res) => {
        if (res.data) {
          setOrders(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [auth, shopId]);

  return (
    <div className="main_container">
      <Header />
      <div className="userBooking">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell align="right">Product Id</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.username}
                  </TableCell>
                  <TableCell align="right">{order.productId}</TableCell>
                  <TableCell align="right">{order.quantity}</TableCell>
                  <TableCell align="right">{order.mobileNumber}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default ShopOrder;
