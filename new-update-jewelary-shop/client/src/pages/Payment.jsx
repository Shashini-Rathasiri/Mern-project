import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import CheckoutForm from "../components/CheckoutForm";
import { PaymentContext } from "../context/PaymentContext";

// "pk_test_51N6SokEyrZyjTHe0PcPSXjZLwXWjD3lFXpHhyS5YZNbilUmZ7uP9VXOHVXDxqfOUvC9pdBcpA9A3nsrgQnsCdXsa00kHybSWpm"
const stripePromise = loadStripe(
  "pk_test_51N7r4OBOou8k29epJhu61s8P94bfvOGUS3BTRU7VP0GuIIpA9PmDYTDwg2imRUo6zNYPYiO06EDOCyUZ4ZfBMDZw00j7TJYGy7"
);

const Payment = () => {
  const { clientSecret } = useContext(PaymentContext);

  return (
    <div className="payment_container">
      <div className="payment_block">
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default Payment;
