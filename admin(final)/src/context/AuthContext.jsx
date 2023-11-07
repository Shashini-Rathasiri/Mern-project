import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("auth"));
    if (admin) {
      setAuth(admin);
    }
  }, []);

  // console.log("auth context", auth);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
