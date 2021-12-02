import React, { useEffect, useState } from "react";

const Vehiculos = () => {
  /*useEffect -> funcion de react, Esto es un use effect que carga 
  una sola vez cuando la pagina se renderiza, porque tiene el array
  de dependencias vacio 
  estructura:
  useEffect(() => {
    console.log("Hola Mundo");
  }, []);*/

  const [nombreVehiculo, setNombreVehiculo] = useState("");

  useEffect(() => {
    console.log("Esta es una funcio nque se ejecuta cada vez que ");
  }, [nombreVehiculo]);

  const cambioDeNombre = (evento) => {
    setNombreVehiculo(evento.target.value);
  };

  const enviarDatosAlBackend = () => {
    console.log("el valor de la variable nombreVehiculo es: ", nombreVehiculo);
  };

  return (
    <form className="flex flex-col">
      <h2>Formulario Registro de Vehiculos</h2>
      <input
        onChange={cambioDeNombre}
        type="text"
        placeholder="Nombre del vehiculo"
      />
      <input type="text" placeholder="Marca del vehiculo" />
      <input type="text" placeholder="Modelo del vehiculo" />
      <button
        type="button"
        onClick={enviarDatosAlBackend}
        className="bg-yellow-300"
      >
        Enviar Datos
      </button>
    </form>
  );
};

export default Vehiculos;
