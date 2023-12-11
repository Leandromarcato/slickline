// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import MiComponente from "../Carga_De_Datos/Ejemplo";
// const Cargapozos = () => {
//   const [pozos, setPozos] = useState([]);
//   const [selectedPozo, setSelectedPozo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Realizar solicitud para obtener la lista de pozos
//     axios
//       .get("http://localhost:3000/pozos/all")
//       .then((response) => {
//         console.log(response.data);
//         setPozos(response.data);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const handleAddPozo = () => {
//     const name = prompt("Ingrese el nombre del nuevo pozo:");
//     if (name) {
//       axios
//         .post(`http://localhost:3000/pozos/nuevo/:userId`, { name })
//         .then((response) => {
//           setPozos((prevPozos) => [...prevPozos, response.data]);
//         })
//         .catch((error) => console.error("Error adding pozo:", error));
//     }
//   };

//   const options = pozos.map((pozo) => ({
//     value: pozo._id,
//     label: pozo.Pozoname,
//   }));

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Lista de Pozos</h2>
//       {options.length > 0 ? (
//         <Select
//           options={options}
//           value={selectedPozo}
//           onChange={setSelectedPozo}
//           isSearchable={false}
//           placeholder="Selecciona un pozo"
//         />
//       ) : (
//         <div className="text-red-600">
//           No hay pozos cargados en la base de datos.
//         </div>
//       )}
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//         onClick={handleAddPozo}
//       >
//         Agregar Pozo
//       </button>
//       <Link
//         to="/Pozos/AgregarPozos" // Esta debe ser la ruta correcta hacia la página de creación de pozo
//         className="block mt-4 text-blue-500 hover:text-blue-700"
//       >
//         Ir a Agregar Pozo
//       </Link>
//     </div>
//   );
// };

// export default Cargapozos;
// Cargapozos.js

import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";
import MiComponente from "../Carga_De_Datos/Ejemplo"; // Asegúrate de importar el componente correctamente
import Prueba from "../Carga_De_Datos/Prueba";
const Cargapozos = () => {
  const [pozos, setPozos] = useState([]);
  const [selectedPozo, setSelectedPozo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pozos/all")
      .then((response) => {
        setPozos(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const options = pozos.map((pozo) => ({
    value: pozo._id,
    label: pozo.Pozoname,
  }));

  const handlePozoSelect = (selectedOption) => {
    setSelectedPozo(selectedOption);
    setMostrarFormulario(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Pozos</h2>
      {options.length > 0 ? (
        <Select
          className="text-black"
          options={options}
          value={selectedPozo}
          onChange={handlePozoSelect}
          isSearchable={false}
          placeholder="Selecciona un pozo "
        />
      ) : (
        <div className="text-red-600">
          No hay pozos cargados en la base de datos.
        </div>
        
      )}
      <br />
  
      {mostrarFormulario && <Prueba pozoSeleccionado={selectedPozo} />}
      
    </div>
  );
};

export default Cargapozos;

