import React from "react";

const Button = ({ children, header, white }) => {
  return (
    <div
      style={{
        padding: header ? "7px 40px" : "12px 40px",
        backgroundColor: white ? "#eee" : "black",
        color: white ? "black" : "#eee",
      }}
      className="main_button"
    >
      {children}
    </div>
  );
};

export default Button;
