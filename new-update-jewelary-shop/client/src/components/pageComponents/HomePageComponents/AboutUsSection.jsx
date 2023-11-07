import { Link } from "react-router-dom";
import Button from "../../commonComponents/Button";

const AboutUsSection = () => {
  return (
    <section className="home_about_section">
      <div className="home_about_section_details">
        <h3 className="dis">Discover</h3>
        <h1 className="about">About Us</h1>
        <p>
        Gold Shay, the premier online shopping and booking platform dedicated to providing you with a captivating collection of gems and jewelry. As a cutting-edge marketplace, we strive to offer a seamless and enchanting shopping experience for all our valued customers.

At Gold Shay, we understand that gems and jewelry hold a special place in the hearts of individuals seeking beauty, elegance, and self-expression. Our platform brings together a wide range of renowned and talented jewelry designers, ensuring that you have access to the finest craftsmanship and the most stunning pieces.
        </p>
        <Link to="/about">
          <Button>Read Me</Button>
        </Link>
      </div>
      <div className="home_about_section_image">
        <img
          src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="home_bottom_about"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
