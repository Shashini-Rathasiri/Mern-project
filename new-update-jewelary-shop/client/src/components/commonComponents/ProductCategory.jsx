import { Link } from "react-router-dom";

const ProductCategory = ({ image, title, link }) => {
  console.log("Path Name", link);
  return (
    <div className="product_category_block">
      <img
        className="product_category_image"
        src={
          image
            ? image
            : "https://images.pexels.com/photos/7541801/pexels-photo-7541801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt={title ? title : "product category"}
      />
      <p className="product_category_title">
        <Link to={link}>{title}</Link>
      </p>
    </div>
  );
};

export default ProductCategory;
