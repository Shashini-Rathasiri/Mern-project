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

const CollectionRightSide = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/collection")
      .then((res) => {
        if (res.data) {
          //   console.log(res.data);
          setCollection(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="rightcontainer">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Collection Name</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {collection?.map((coll) => (
              <TableRow
                key={coll._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {coll.collectionName}
                </TableCell>
                <TableCell align="right">{coll._id}</TableCell>
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

export default CollectionRightSide;
