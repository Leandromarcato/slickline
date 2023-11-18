import React from "react";
import { Link } from "react-router-dom";

function Cargadatos() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-between">
        <div className="max-w-xs bg-white rounded shadow-lg p-6 mb-6 text-center">
          <h1 className="text-xl font-bold mb-4">Tarjeta 1</h1>
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
            <Link to="/h/ejemplo">Cargamanual</Link>
          </button>
        </div>
        <div className="w-4"></div> {/* Espacio entre las tarjetas */}
        <div className="max-w-xs bg-white rounded shadow-lg p-6 mb-6 text-center">
          <h1 className="text-xl font-bold mb-4">Tarjeta 2</h1>
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
            <Link to="/h/CargarArchivo">SubirArchivo</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cargadatos;
