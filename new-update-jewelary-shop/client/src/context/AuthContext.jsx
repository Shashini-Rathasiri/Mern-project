import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  // console.log("auth context", auth);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user-auth"));
    if (user) {
      setAuth(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
