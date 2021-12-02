import React from "react";
import { Link } from "react-router-dom";
import Logo from "media/logo_large2.png";

const Navbar = () => {
  return (
    <nav className="bg-yellow-300">
      <ul className="flex w-full justify-between my-3">
        <li>
          <Link to="/">
            <img className="mx-auto h-11 w-auto" src={Logo} alt="Workflow" />
          </Link>
        </li>
        <li>Navegacion1</li>
        <li>Navegacion2</li>
        <li>Navegacion3</li>
        <li>Navegacion4</li>
        <li className="px-3">
          <Link to="/login">
            <button className="bg-blue-400 p-2 text-gray-50 rounded-lg shadow-md hover:bg-blue-500">
              Iniciar Sesion
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
