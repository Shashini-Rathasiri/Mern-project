import { Link } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const AdminLink = ({ title, Icon, link }) => {
  return (
    <div className="adminlink">
      <Link to={`/${link}`}>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </Link>
    </div>
  );
};

export default AdminLink;
