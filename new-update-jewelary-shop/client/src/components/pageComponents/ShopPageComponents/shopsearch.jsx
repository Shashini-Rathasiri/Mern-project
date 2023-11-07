import ShopListUnit from "./ShopListUnit";
import "../styles/pageStyle/about.css";

const shopsearch = () => {
  return (
    <div className="main_container">
      {/* shopListUnit */}
      < ShopListUnit/>
      {/* about us contant */}
      <div className="about_us_container">
        <h1>About Us</h1>
        <div className="about_us_block">
          <div className="about_us_block_image">
            <img
              src="https://images.pexels.com/photos/12769896/pexels-photo-12769896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="about us"
            />
          </div>
          <div className="about_us_block_details">
            <p>
            Welcome to Gold Shay, the premier online shopping and booking platform dedicated to providing you with a captivating collection of gems and jewelry. As a cutting-edge marketplace, we strive to offer a seamless and enchanting shopping experience for all our valued customers.

At Gold Shay, we understand that gems and jewelry hold a special place in the hearts of individuals seeking beauty, elegance, and self-expression. Our platform brings together a wide range of renowned and talented jewelry designers, ensuring that you have access to the finest craftsmanship and the most stunning pieces.

With Gold Shay, multiple users can open their own shops, creating a vibrant community of passionate artisans and jewelry enthusiasts. This unique feature allows you to explore an extensive variety of styles, designs, and materials, catering to diverse tastes and preferences.
            </p>

<br></br>

            <p>
            Our website is designed to make your shopping journey effortless and enjoyable. Discover an extensive catalog showcasing an array of breathtaking gemstones, from sparkling diamonds and lustrous pearls to vibrant rubies and deep sapphires. Whether you're looking for an engagement ring to declare your love or a statement necklace to enhance your personal style, Gold Shay has the perfect piece for every occasion.

In addition to purchasing stunning gems and jewelry, Gold Shay also offers a convenient booking system, allowing you to reserve your desired pieces for special events or occasions. This service ensures that you can secure your favorite designs and experience the joy of wearing exquisite jewelry at your convenience.

Customer satisfaction is at the core of our philosophy. Our dedicated support team is always ready to assist you, answering any inquiries and guiding you through the purchasing and booking process. We prioritize transparency, authenticity, and reliability, providing detailed product descriptions, high-quality images, and trustworthy seller ratings.

Gold Shay is committed to fostering a secure and trustworthy online environment. We employ robust security measures to protect your personal information and ensure secure transactions. You can shop with confidence, knowing that your privacy and data integrity are safeguarded.

Join us at Gold Shay and embark on a captivating journey through the world of gems and jewelry. Indulge in the luxury and allure of our collections, discover talented artisans, and make cherished memories with our timeless pieces. Your ultimate destination for exceptional jewelry experiences awaits you at Gold Shay.
            </p>
<br></br>
<br></br>
            <div>
            <button className="btn" header={true}>Read More </button>
            </div>
        
          </div>
        </div>
      </div>

    
      
    </div>
  );
};

export default shopsearch;