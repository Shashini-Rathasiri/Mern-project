import { useContext, useEffect, useState } from "react";
import "../../../styles/componentStyle/ShoppingCartcomponant.css";
import ShoppingCartBillComponant from "./ShoppingCartBillComponant.jsx";
import ShoppingCartBlock from "./ShoppingCartBlock";
import { CartContext } from "../../../context/CartContext";

const ShoppingCartcomponant = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Array.isArray(cart.products)) {
      setTotal(0);
      cart.products.forEach((product) => {
        const subTotal = product.price * product.quantity;
        setTotal((pre) => pre + subTotal);
      });
    }
  }, [cart]);

  console.log(total);
  return (
    <section className="shoppingcart_main_container">
      <div className="shoppingcart_block">
        {cart?.products?.map((product) => (
          <ShoppingCartBlock
            key={product._id}
            product={product}
            setTotal={setTotal}
          />
        ))}
      </div>

      <div>
        <ShoppingCartBillComponant total={total} />
      </div>
    </section>
  );
};

export default ShoppingCartcomponant;
