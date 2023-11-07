import Button from "../../commonComponents/Button";

const imageArray = [1, 2, 3, 4];

const NewArrivalsSction = () => {
  return (
    <section className="home_new_arrival_section">
      <div className="home_booking_shop_section_images">
        <div className="home_booking_shop_section_image_left">
          <div className="home_booking_shop_section_image_left_unit">
            <img
              src="https://images.pexels.com/photos/4939296/pexels-photo-4939296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="home_bottom_about"
            />
          </div>
        </div>
        <div className="home_booking_shop_section_image_right">
          <div className="home_booking_shop_section_image_right_unit">
            <img
              src="https://images.pexels.com/photos/6387623/pexels-photo-6387623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="home_bottom_about"
            />
          </div>
          <div className="home_booking_shop_section_image_right_unit">
            <img
              src="https://images.pexels.com/photos/15081674/pexels-photo-15081674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="home_bottom_about"
            />
          </div>

          <div className="home_booking_shop_section_image_left_unit">
            <img
              src="https://images.pexels.com/photos/4741615/pexels-photo-4741615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="home_bottom_about"
            />
          </div>
        </div>
      </div>
      <div className="home_new_arrivals_details">
        <h1>New Arrivals</h1>
        <p>
        At Gold Shay, we take great pride in curating a mesmerizing collection of gems and jewelry that reflects the latest trends and timeless elegance. We are thrilled to unveil our stunning new arrivals, designed to captivate your senses and elevate your style to new heights.

Our team of expert jewelry curators has scoured the world to bring you a carefully selected assortment of breathtaking pieces. From exquisite necklaces and bracelets to dazzling rings and earrings, our new arrivals embody the perfect blend of craftsmanship, beauty, and sophistication.
        </p>
        <Button>Buy Now</Button>
      </div>
    </section>

    
  );
};

export default NewArrivalsSction;
