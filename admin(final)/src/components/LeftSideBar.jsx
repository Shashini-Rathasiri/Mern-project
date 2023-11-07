import AdminLink from "./AdminLink";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from "@mui/icons-material/Category";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LeftSideBar = () => {
  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const Logout = () => {
    setAuth({});
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div className="leftsidebar">
      <center>
        <h1>Admin</h1>
        <button className="btn1" onClick={Logout}>
          Logout
        </button>
      </center>
      <AdminLink title="Users" Icon={PeopleIcon} link="users" />
      <AdminLink title="Shops" Icon={StoreIcon} link="shops" />
      <AdminLink
        title="Pendding Shops"
        Icon={StoreIcon}
        link="pendding-shops"
      />
      <AdminLink title="Categories" Icon={CategoryIcon} link="category" />
      <AdminLink
        title="Collections"
        Icon={CollectionsBookmarkIcon}
        link="collections"
      />
      <AdminLink title="Products" Icon={Inventory2Icon} link="products" />
      <div className="finalmenustyle"></div>
    </div>
  );
};

export default LeftSideBar;
