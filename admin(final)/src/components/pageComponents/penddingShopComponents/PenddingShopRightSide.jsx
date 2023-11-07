import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import PenddingShopModal from "./PenddingShopModal";

const PenddingShopRightSide = () => {
  const [shops, setShops] = useState([]);
  const [selected, setSelected] = useState({});
  const [open, setOpen] = useState(false);

  const selectShopHandle = (index) => {
    setSelected(shops[index]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pendding-shops")
      .then((res) => {
        if (res.data) {
          //   console.log(res.data);
          setShops(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="rightcontainer">
      <PenddingShopModal
        open={open}
        handleClose={handleClose}
        selected={selected}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Shop Name</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shops?.map((shop, index) => (
              <TableRow
                key={shop._id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  onClick={() => selectShopHandle(index)}
                  sx={{ cursor: "pointer" }}
                  component="th"
                  scope="row"
                >
                  {shop.shopName}
                </TableCell>
                <TableCell align="right">{shop._id}</TableCell>
                <TableCell align="right">{shop.location}</TableCell>
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
  );
};

export default PenddingShopRightSide;
