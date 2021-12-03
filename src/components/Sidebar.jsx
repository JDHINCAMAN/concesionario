import React from "react";
import { Link } from "react-router-dom";
import Logo from "media/logo_large2.png";

const Sidebar = () => {
  return (
    <nav className="w-72 bg-yellow-300">
      <ul className="flex flex-col items-center p-2">
        <li className="p-2">
          <Link to="/">
            <img className="mx-auto h-11" src={Logo} alt="Workflow" />
          </Link>
        </li>
        <li className="p-2">
          <Link to="/admin">
            <button className="bg-blue-400 p-2 text-gray-50 rounded-lg shadow-md hover:bg-blue-500">
              Panel de Administracion
            </button>
          </Link>
        </li>
        <li className="p-2">
          <Link to="/admin/vehiculos">
            <button className="bg-blue-400 p-2 text-gray-50 rounded-lg shadow-md hover:bg-blue-500">
              Vehiculos
            </button>
          </Link>
        </li>
        <li className="p-2">
          <Link to="/admin/clientes">
            <button className="bg-blue-400 p-2 text-gray-50 rounded-lg shadow-md hover:bg-blue-500">
              Clientes
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
