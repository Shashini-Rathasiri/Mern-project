//dependancies 
import { createContext, useState } from "react";

export const PaymentContext = createContext(null);

const PaymentContextProvider = ({ children }) => {
  const [paymentStatus, setPaymentStatus] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  console.log(paymentStatus);
  return (
    <PaymentContext.Provider
      value={{ paymentStatus, setPaymentStatus, clientSecret, setClientSecret }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContextProvider;
