import React, { useEffect, useState } from "react";

const Vehiculos = () => {
  /*useEffect -> funcion de react, Esto es un use effect que carga 
  una sola vez cuando la pagina se renderiza, porque tiene el array
  de dependencias vacio.
  estructura:
  useEffect(() => {
    console.log("Hola Mundo");
  }, []);*/

  return (
    <div>
      <h2>Pagina administracion de vehiculos</h2>
      <button className="text-black bg-yellow-400 p-5 roun">
        {" "}
        Crear Nuevo Vehiculo
      </button>
    </div>
  );
};

export default Vehiculos;
