import { useContext } from "react";
import Button from "../../commonComponents/Button";
import "./../../../styles/componentStyle/ShoppingCartBillComponant.css";
import { PaymentContext } from "../../../context/PaymentContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShoppingCartBillComponant = ({ total }) => {
  const { setClientSecret } = useContext(PaymentContext);
  const navigate = useNavigate();

  const redy = () => {
    axios
      .post("http://localhost:5000/api/checkout/create-payment-intent", {
        amount: total,
      })
      .then((result) => {
        const { clientSecret } = result.data;
        setClientSecret(clientSecret);
        navigate("/payment");
      });
  };

  return (
    <div>
      <div className="main_item_details_shoppingcart">
        <div className="bill_details">
          <div className="checkout_btn">
            <div onClick={redy}>
              <Button>Go to checkout</Button>
            </div>
          </div>
          <div className="final_item_details"></div>
        </div>
        <hr />
        <div className="subtotal">
          <div className="SubtotalName">Total</div>
          <div className="Subtotalamount">USD {total}</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartBillComponant;
