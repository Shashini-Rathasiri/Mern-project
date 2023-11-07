import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../styles/pageStyle/userBooking.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const UserBooking = () => {
  const { auth } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/booking/find/user/${auth._id}`, {
        headers: {
          "Content-Type": "application/json",
          token: `token ${auth.accessToken}`,
        },
      })
      .then((res) => {
        if (res.data) {
          setBooking(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [auth]);

  return (
    <div className="main_container">
      <Header />
      <div className="userBooking">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Shop Name</TableCell>
                <TableCell align="right">Shop Id</TableCell>
                <TableCell align="right">Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {booking?.map((book) => (
                <TableRow
                  key={book._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {book.shopName}
                  </TableCell>
                  <TableCell align="right">{book.shopId}</TableCell>
                  <TableCell align="right">{book.location}</TableCell>
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

export default UserBooking;
