import "../../styles/componentStyle/footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_top_circle"></div>
      </div>
      <div className="footer_social_media">
        <h3>Follow Us</h3>
        <div className="footer_social_media_icons">
          <FacebookIcon sx={{ fontSize: 30 }} />
          <PinterestIcon sx={{ fontSize: 30 }} />
          <TwitterIcon sx={{ fontSize: 30 }} />
          <InstagramIcon sx={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
