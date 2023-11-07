import Button from "../../commonComponents/Button";
import { Link } from "react-router-dom";

const BookingShopSection = () => {
  return (
    <section className="home_booking_shop_section">
      <div className="home_booking_shop_section_details">
        <h1>Booking Shop</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          perferendis magnam explicabo quaerat pariatur reprehenderit harum,
          porro expedita ab ex, natus ea aperiam? Aspernatur asperiores,
          reiciendis optio natus laborum in. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Autem, perferendis magnam explicabo
          quaerat pariatur reprehenderit harum, porro expedita ab ex, natus ea
          aperiam? Aspernatur asperiores, reiciendis optio natus laborum in.
        </p>
        <Link to="/shops">
        <div>
        <Button>Book You Want Shop</Button>
            </div>
        </Link>
       
      </div>
      <div className="home_booking_shop_section_images">
        <div className="home_booking_shop_section_image_left">
          <div className="home_booking_shop_section_image_left_unit">
            <img
              src="https://images.pexels.com/photos/2097109/pexels-photo-2097109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="home_bottom_about"
            />
          </div>
        </div>
        <div className="home_booking_shop_section_image_right">
          <div className="home_booking_shop_section_image_right_unit">
            <img
              src="https://images.pexels.com/photos/279183/pexels-photo-279183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="home_bottom_about"
            />
          </div>
          <div className="home_booking_shop_section_image_right_unit">
            <img
              src="https://images.pexels.com/photos/8681007/pexels-photo-8681007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="home_bottom_about"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingShopSection;
