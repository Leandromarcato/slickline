// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// const AgregarPozo = () => {
//   const [nombrePozo, setNombrePozo] = useState('');
//   // const navigate = useNavigate();

//   const handleAgregarPozo = () => {
//     axios.post(`/pozos/nuevo/:userId`, { name: nombrePozo })
//       .then(() => {
//         alert('Pozo creado correctamente')
//         // navigate('/Pozos/ListarPozos');
//       })
//       .catch(error => console.error('Error al crear pozo:', error));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Pozo</h2>
//       <input
//         type="text"
//         value={nombrePozo}
//         onChange={e => setNombrePozo(e.target.value)}
//         placeholder="Nombre del pozo"
//         className="border border-gray-300 p-2 mb-4 w-full rounded"
//       />
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAgregarPozo}
//       >
//         Agregar Pozo
//       </button>
//       <Link to="/Pozos/ListarPozos" className="block mt-4 text-blue-500 hover:text-blue-700">
//         Ir a la lista de pozos
//       </Link>
//     </div>
//   );
// };

// export default AgregarPozo;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import jwt_decode from "jwt-decode";
import { validarRoles } from "./../../Utils/validaciones";

const AgregarPozo = () => {
  const { token, roles } = useAuth();
  const [nombrePozo, setNombrePozo] = useState("");
  const [pozosOptions, setPozosOptions] = useState([]);
  const [selectedPozo, setSelectedPozo] = useState(null);

  useEffect(() => {
    cargarPozos();
  }, []);

  const cargarPozos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/pozos/all");
      const options = response.data.map((pozo) => ({
        value: pozo._id,
        label: pozo.Pozoname,
      }));
      setPozosOptions(options);
    } catch (error) {
      console.error("Error al cargar los pozos:", error.message);
    }
  };

  const handleAgregarPozo = async () => {
    try {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.id;

      const response = await axios.post(`http://localhost:3000/pozos/${userId}`, {
        name: nombrePozo,
      });

      alert("Pozo creado correctamente");
      setPozosOptions((prevOptions) => [
        ...prevOptions,
        { value: response.data._id, label: nombrePozo },
      ]);
      setNombrePozo(""); // Limpiar el campo de nombrePozo
    } catch (error) {
      console.error(
        "Error al crear el pozo:",
        error.response?.data || error.message
      );
      alert("Error al crear el pozo. Consulta la consola para más detalles.");
    }
  };

  const handleOperacionPozo = (operacion) => {
    if (selectedPozo) {
      console.log(`${operacion} el pozo: ${selectedPozo.value}`);
    } else {
      alert("Selecciona un pozo antes de realizar la operación.");
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Editar o Eliminar Pozo
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre del pozo
        </label>
        <input
          type="text"
          value={nombrePozo}
          onChange={(e) => setNombrePozo(e.target.value)}
          placeholder="Nombre del pozo"
          className="border border-gray-300  text-black p-2 w-full rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        onClick={handleAgregarPozo}
      >
        Agregar Pozo
      </button>

      <Select
        options={pozosOptions}
        value={selectedPozo}
        onChange={setSelectedPozo}
        isSearchable={false}
        placeholder="Selecciona un pozo"
        className="mt-4 text-black"
      />

      {selectedPozo && (
        <div className="mt-4 space-x-2">
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={() => handleOperacionPozo("Editar")}
          >
            Editar Pozo
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={() => handleOperacionPozo("Eliminar")}
          >
            Eliminar Pozo
          </button>
        </div>
      )}

<Link
  to="/Operario"
  className="block mt-6 text-blue-500 hover:text-blue-700"
>
  Ir a la lista de pozos
</Link>
    </div>
  );
};

export default AgregarPozo