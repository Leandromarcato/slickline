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

//         if (jsonData) {
//           setJsonResult(jsonData);

//           // Enviar JSON al servidor NestJS
//           const response = await axios.post(
//             `http://localhost:3000/datos/json${pozoSeleccionado.value}/${userId}`,
//             { datos: jsonData }
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
//       const headers = lines[0].trim().split(/\s+/);
//       const data = [];

//       for (let i = 1; i < lines.length; i++) {
//         const values = lines[i].trim().split(/\s+/);
//         const entry = {};

//         for (let j = 0; j < headers.length; j++) {
//           const propertyName = headers[j];
//           const propertyValue = values[j];

//           // Solo agrega la propiedad si tiene un valor
//           if (propertyValue !== undefined && propertyValue !== null && propertyValue !== '') {
//             // Evita agregar propiedades nulas a objetos
//             entry[propertyName] = isNaN(propertyValue) ? propertyValue : parseFloat(propertyValue);
//           }
//         }

//         // Convierte el objeto a JSON solo si no hay propiedades nulas
//         if (!Object.values(entry).includes(null)) {
//           data.push(entry);
//         } else {
//           console.warn('Datos con propiedades nulas en la entrada:', entry);
//         }
//       }

//       return data;
//     } catch (error) {
//       console.error('Error al convertir el texto a JSON:', error);
//       return null;
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-2xl font-bold mb-4">Convertidor de Archivos a JSON</h1>
//       <input type="file" onChange={handleFileChange} className="mb-4" />
//       <button
//         onClick={handleFileUpload}
//         className="bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
//       >
//         Enviar
//       </button>

//       {jsonResult && (
//         <div className="mt-8">
//           <h2 className="text-xl font-bold mb-4">JSON resultante:</h2>
//           <pre className="bg-gray-200 p-4 rounded">{JSON.stringify(jsonResult, null, 2)}</pre>
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();
  const obtenerId = jwt_decode(token);
  const userId = obtenerId.id;

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      if (!file) {
        setError('Por favor, selecciona un archivo.');
        return;
      }

      setLoading(true);
      setError(null);

      const reader = new FileReader();

      reader.onload = async (event) => {
        try {
          const fileContent = event.target.result;
          const jsonData = convertTextToJson(fileContent);

          if (jsonData && validateJsonData(jsonData)) {
            // Enviar JSON al servidor NestJS
            await sendJsonDataToServer(jsonData);

            setError(null);
            alert('Datos enviados exitosamente.');
          } else {
            setError('Formato JSON inválido o faltan valores requeridos. Por favor, revisa tu archivo.');
          }
        } catch (error) {
          console.error('Error al convertir el archivo:', error);
          setError('Ocurrió un error al procesar el archivo.');
        } finally {
          setLoading(false);
        }
      };

      reader.readAsText(file);
    } catch (error) {
      console.error('Error al leer el archivo:', error);
      setError('Ocurrió un error al leer el archivo.');
      setLoading(false);
    }
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

          if (propertyValue !== undefined && propertyValue !== null && propertyValue !== '') {
            if (propertyName === 'Time') {
              entry[propertyName] = parseFloat(propertyValue);
            } else {
              entry[propertyName] = propertyValue;
            }
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

  const validateJsonData = (jsonData) => {
    if (!Array.isArray(jsonData)) {
      console.error('El JSON no es un array.');
      return false;
    }

    if (jsonData.length === 0) {
      console.error('El array JSON está vacío.');
      return false;
    }

    const expectedProperties = ['Time', 'Pressure', 'Temperature', 'Depth', 'DpDz', 'DtDz', 'Density', 'Description'];

    const firstData = jsonData[0];

    for (const property of expectedProperties) {
      if (!(property in firstData)) {
        console.error(`La propiedad '${property}' no está presente en el primer conjunto de datos.`);
        return false;
      }
    }

    return true;
  };

  const sendJsonDataToServer = async (jsonData) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/datos/json/${pozoSeleccionado.value}/${userId}`,
        { datos: jsonData }
      );

      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al enviar los datos al servidor:', error);
      throw new Error('Ocurrió un error al enviar los datos al servidor.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-400 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-white">Subir Archivo</h1>

      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-black rounded-md"
      />
      <br />

      <button
        onClick={handleFileUpload}
        className={`bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 ${loading && 'cursor-not-allowed opacity-50'}`}
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>

      {error && (
        <div className="mt-4 text-red-600">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default SubirArchivo;



