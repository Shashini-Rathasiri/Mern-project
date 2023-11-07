import { Link } from "react-router-dom";

const MyShopBlock = ({ myShops, shop }) => {
  return (
    <div className="my_shop_block_container">
      <div
        className="my_shop_block_image"
        style={{
          backgroundImage: `url("${shop.img}")`,
        }}
      ></div>
      <div className="my_shop_block_details">
        
        <h3>{shop.shopName}</h3>
        <p>{shop.location}</p>
        <p>{shop.description}</p>
      </div>
      <div className="my_shop_block_buttons">
        {myShops ? (
          <>
            <Link to={`/shop-orders/${shop._id}`}>
              <button className="main_button">View Orders</button>
            </Link>
            <Link to={`/add-product/${shop._id}`}>
              <button className="main_button">Add Product</button>
            </Link>
            <Link to={`/shop-booking/${shop._id}`}>
              <button className="main_button">View Booking</button>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MyShopBlock;
