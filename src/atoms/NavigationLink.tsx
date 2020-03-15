import React from "react";
import { Link, LinkProps } from "react-router-dom";

const NavigationLink = ({ style, ...props }: LinkProps) => {
  return (
    <Link
      style={{ color: "white", textDecoration: "none", ...style }}
      {...props}
    />
  );
};

export default NavigationLink;
