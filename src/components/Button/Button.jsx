import React from "react";

const Button = ({ estim, children }) => {
  return <button onClick={estim}>{children}</button>;
};

export default Button;
