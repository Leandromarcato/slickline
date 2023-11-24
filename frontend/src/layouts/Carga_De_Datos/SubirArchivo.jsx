// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../context/AuthContext';
// import jwt_decode from 'jwt-decode';

// function SubirArchivo({ pozoSeleccionado }) {
//   const [file, setFile] = useState(null);
//   const [jsonResult, setJsonResult] = useState(null);
//   const { token } = useAuth();
//   const obtenerid = jwt_decode(token);
//   const userId = obtenerid.id;

//   console.log('ID del Usuario:', userId);
//   console.log('ID del Pozo:', pozoSeleccionado.value);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleFileUpload = async () => {
//     if (!file) {
//       alert('Por favor, selecciona un archivo.');
//       return;
//     }

//     const reader = new FileReader();

//     reader.onload = async (event) => {
//       try {
//         const fileContent = event.target.result;
//         const jsonData = convertTextToJson(fileContent);

//         if (jsonData && jsonData.length > 0 && Object.values(jsonData[0]).every(value => value !== undefined && value !== null)) {
//           setJsonResult(jsonData);

//           // Enviar JSON al servidor NestJS
//           const response = await axios.post(
//             `http://localhost:3000/datos/json/${pozoSeleccionado.value}/${userId}`,
//             { datos: jsonData[0] }  // Enviar el primer conjunto de datos
//           );

//           console.log('Respuesta del servidor:', response.data);
//         } else {
//           alert('Formato JSON inválido o faltan valores requeridos. Por favor, revisa tu archivo.');
//         }
//       } catch (error) {
//         console.error('Error al convertir el archivo:', error);
//       }
//     };

//     reader.readAsText(file);
//   };

//   const convertTextToJson = (text) => {
//     try {
//       const lines = text.split('\n');
//       const headers = lines[1].trim().split(/\s+/);
//       const data = [];

//       for (let i = 2; i < lines.length; i++) {
//         const values = lines[i].trim().split(/\s+/);
//         const entry = {};

//         for (let j = 0; j < headers.length; j++) {
//           const propertyName = headers[j];
//           const propertyValue = values[j];

//           // Solo agrega la propiedad si tiene un valor
//           if (propertyValue !== undefined && propertyValue !== null && propertyValue !== '') {
//             entry[propertyName] = propertyValue;
//           }
//         }

//         data.push(entry);
//       }

//       return data;
//     } catch (error) {
//       console.error('Error al convertir el texto a JSON:', error);
//       return null;
//     }
//   };

//   return (
//     <div>
//       <h1>Convertidor de Archivos a JSON</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload}>Convertir a JSON</button>

//       {jsonResult && (
//         <div>
//           <h2>JSON resultante:</h2>
//           <pre>{JSON.stringify(jsonResult, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SubirArchivo;

import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import jwt_decode from 'jwt-decode';

function SubirArchivo({ pozoSeleccionado }) {
  const [file, setFile] = useState(null);
  const [jsonResult, setJsonResult] = useState(null);
  const { token } = useAuth();
  const obtenerid = jwt_decode(token);
  const userId = obtenerid.id;

  console.log('ID del Usuario:', userId);
  console.log('ID del Pozo:', pozoSeleccionado.value);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert('Por favor, selecciona un archivo.');
      return;
    }

    const reader = new FileReader();

    reader.onload = async (event) => {
      try {
        const fileContent = event.target.result;
        const jsonData = convertTextToJson(fileContent);

        if (jsonData && jsonData.length > 0 && Object.values(jsonData[0]).every(value => value !== undefined && value !== null)) {
          setJsonResult(jsonData);

          // Enviar JSON al servidor NestJS
          const response = await axios.post(
            `http://localhost:3000/datos/json/${pozoSeleccionado.value}/${userId}`,
            { datos: jsonData[0] }  // Enviar el primer conjunto de datos
          );

          console.log('Respuesta del servidor:', response.data);
        } else {
          alert('Formato JSON inválido o faltan valores requeridos. Por favor, revisa tu archivo.');
        }
      } catch (error) {
        console.error('Error al convertir el archivo:', error);
      }
    };

    reader.readAsText(file);
  };

  const convertTextToJson = (text) => {
    try {
      const lines = text.split('\n');
      const headers = lines[1].trim().split(/\s+/);
      const data = [];

      for (let i = 2; i < lines.length; i++) {
        const values = lines[i].trim().split(/\s+/);
        const entry = {};

        for (let j = 0; j < headers.length; j++) {
          const propertyName = headers[j];
          const propertyValue = values[j];

          // Solo agrega la propiedad si tiene un valor
          if (propertyValue !== undefined && propertyValue !== null && propertyValue !== '') {
            entry[propertyName] = propertyValue;
          }
        }

        data.push(entry);
      }

      return data;
    } catch (error) {
      console.error('Error al convertir el texto a JSON:', error);
      return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Convertidor de Archivos a JSON</h1>

      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />

      <button
        onClick={handleFileUpload}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Convertir a JSON
      </button>

      {jsonResult && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">JSON resultante:</h2>
          <pre className="bg-gray-200 p-4 rounded-md">{JSON.stringify(jsonResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default SubirArchivo;
