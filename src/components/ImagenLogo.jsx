import React from "react";
import Logo from "media/logo_large.png";
import { Link } from "react-router-dom";

const ImagenLogo = () => {
  return (
    <Link to="/">
      <img className="mx-auto h-40 w-auto" src={Logo} alt="Workflow" />
    </Link>
  );
};

export default ImagenLogo;
