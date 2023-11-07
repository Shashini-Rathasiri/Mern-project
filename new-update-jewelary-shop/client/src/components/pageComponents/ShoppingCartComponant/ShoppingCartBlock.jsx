const ShoppingCartBlock = ({ product, setTotal }) => {
  return (
    <div className="main_item_details_view">
      <div
        className="product_item_image"
        style={{
          backgroundImage: `url("${product.img}")`,
        }}
      ></div>
      <p className="item_description">{product.productName}</p>
      <div className="item_qty">
        <div className="item_qty_name">Qty</div>
        <div className="item_qty_amount">{product.quantity}</div>
      </div>
      <div className="item_price">
        <div className="item_price_unit">LKR</div>
        <div className="item_price_amount">
          {product.price * product.quantity}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartBlock;
