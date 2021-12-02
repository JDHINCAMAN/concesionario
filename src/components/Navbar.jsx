import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-yellow-300">
      <ul className="flex w-full justify-between my-3">
        <li>Logo</li>
        <li>Navegacion1</li>
        <li>Navegacion2</li>
        <li>Navegacion3</li>
        <li>Navegacion4</li>
        <li className="px-3">
          <button className="bg-blue-400 p-2 text-gray-50 rounded-lg shadow-md hover:bg-blue-500">
            Iniciar Sesion
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
