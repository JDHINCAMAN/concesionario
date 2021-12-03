import React, { useEffect, useState } from "react";

const Admin = () => {
  const [edad, setEdad] = useState();
  const [menorDeEdad, setMenorDeEdad] = useState(false);
  const [camposAdicionales, setCamposAdicionales] = useState(false);

  const botonCampos = (e) => {
    setCamposAdicionales(!camposAdicionales);
  };

  useEffect(() => {
    if (edad > 17) {
      setMenorDeEdad(false);
    } else {
      setMenorDeEdad(true);
    }
  }, [edad]);

  const ingresarEdad = (e) => {
    setEdad(e.target.value);
  };

  return (
    <form className="flex flex-col items-center">
      <h1 className="p-2 text-4xl">Ejemplo useEffect</h1>
      <label htmlFor="edad" className="p-2">
        Porfavor ingrese su edad
        <input
          value={edad}
          onChange={ingresarEdad}
          className="border border-gray-600"
          name="edad"
          type="number"
        />
      </label>
      {menorDeEdad ? (
        <span className="text-3xl text-red-600">
          Usted es menor de edad no puede pagar
        </span>
      ) : (
        <span className="text-3xl text-green-500">
          Usted es mayor de edad si puede pagar
        </span>
      )}
      <button
        type="button"
        className="text-white bg-yellow-400 p-3 my-2"
        onClick={botonCampos}
      >
        Mostrar campos adicionales
      </button>
      {camposAdicionales && (
        <div>
          <input
            type="text"
            className="border border-yellow-400 my-2 p-3"
            placeholder="Dato nuevo"
          />
          <input
            type="text"
            className="border border-yellow-400 my-2 p-3"
            placeholder="Dato nuevo"
          />
          <input
            type="text"
            className="border border-yellow-400 my-2 p-3"
            placeholder="Dato nuevo"
          />
          <input
            type="text"
            className="border border-yellow-400 my-2 p-3"
            placeholder="Dato nuevo"
          />
        </div>
      )}
    </form>
  );
};

export default Admin;
