import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import  axios from 'axios'
// import { useAuth } from '../../context/AuthContext';
// import decodeficar from 'jwt-decode'
function Cargararchivo() {
  // const [pozos , Setpozos] = useState()
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);

//   const {token} = useAuth()
//   const userId = decodeficar(token)
//   console.log(userId)

// const TraerPozos = async ()=> {
//     const response = await axios.get('http://localhost:3000/pozos/all')
//     const data =  await response.data;
//     const idPozo = data[0]._id
//     console.log(idPozo)
// return idPozo;
// }
  
//   TraerPozos()


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error('Selecciona un archivo antes de cargarlo.');
      alert('Selecciona un archivo antes de cargar');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`http://localhost:3001/upload`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const jsonData = await response.json();
        console.log('Archivo cargado y procesado correctamente');
        alert('Archivo cargado y procesado correctamente');
        setJsonData(jsonData.data);
        console.log(jsonData.data);
      } else {
        console.error('Error al cargar el archivo');
      }
    } catch (error) {
      console.error('Error al procesar el archivo:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="max-w-md bg-white rounded shadow-lg p-6">
      <h1 className="text-xl font-bold mb-4 text-center">Subir Archivo .txt y Enviar al Servidor</h1>
      <div className="flex justify-center mb-4">
        <input
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Cargar Archivo
        </button>
      </div>
    </div>

    {jsonData && (
      <div className="flex">
        <div className="w-1/2 p-4">
          <div className="bg-blue-100 p-2 mb-2 rounded text-center">
            <h2 className="text-xl font-bold">Gradiente de Presión</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <LineChart width={400} height={300} data={jsonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Depth" />
              <YAxis />
              <Tooltip labelFormatter={(value) => `Profundidad: ${value}`} />
              <Legend />
              <Line type="monotone" dataKey="Pressure" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="bg-blue-100 p-2 mb-2 rounded text-center">
            <h2 className="text-xl font-bold">Gradiente de Temperatura</h2>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <LineChart width={400} height={300} data={jsonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Depth" />
              <YAxis />
              <Tooltip labelFormatter={(value) => `Profundidad: ${value}`} />
              <Legend />
              <Line type="monotone" dataKey="Temperature" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
        </div>
      </div>
    )}
  </div>
     
  );
}

export default Cargararchivo;
// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';
// import { useAuth } from '../../context/AuthContext';

// function Cargararchivo() {
//   const [file, setFile] = useState(null);
//   const [jsonData, setJsonData] = useState(null);
//   const [idPozo, setIdPozo] = useState(null);

//   const { token } = useAuth();
//   const decodificar = jwt_decode(token);
//   const userId = decodificar.id;

//   const TraerPozos = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/pozos/all');
//       const data = response.data;
//       const idPozo = data.length > 0 ? data[0]._id : null;
//       setIdPozo(idPozo);
//       console.log(`id del pozo: ${idPozo}`);
//     } catch (error) {
//       console.error('Error al obtener los pozos:', error.message);
//       // Puedes agregar lógica para manejar el error, como mostrar un mensaje al usuario
//     }
//   };

//   useEffect(() => {
//     TraerPozos();
//   }, []); // Llamar a la función TraerPozos cuando el componente se monta

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const parseAndUpload = async () => {
//     try {
//       if (!file || !idPozo) {
//         throw new Error('Selecciona un archivo y asegúrate de tener un ID de pozo antes de cargarlo.');
//       }

//       const reader = new FileReader();
//       reader.onload = async (event) => {
//         const fileContent = event.target.result;

//         // Dividir el contenido del archivo en líneas
//         const lines = fileContent.split('\n');

//         // Extraer el encabezado y las filas de datos
//         const header = lines[1].split(/\s+/); // Tomamos la segunda línea como encabezado
//         const dataRows = lines.slice(3); // Omitir las primeras dos líneas y el encabezado

//         // Convertir las filas de datos a objetos JSON
//         const parsedJson = dataRows.map((row) => {
//           const values = row.split(/\s+/);
//           return {
//             Time: parseFloat(values[0]),
//             Pressure: parseFloat(values[1]),
//             Temperature: parseFloat(values[2]),
//             Depth: parseFloat(values[3]),
//             DpDz: values[4] ? parseFloat(values[4]) : null,
//             DtDz: values[5] ? parseFloat(values[5]) : null,
//             Description: values[6],
//             Density: values[7] ? parseFloat(values[7]) : null,
//           };
//         });
//         console.log('Datos antes de enviar al servidor:', parsedJson)
//         // Enviar JSON al servidor
//         const response = await axios.post(`http://localhost:3000/datos/json/${idPozo}/${userId}`, parsedJson);

//         if (response.data) {
//           console.log('Archivo cargado y procesado correctamente');
//           alert('Archivo cargado y procesado correctamente');
//           setJsonData(response.data);
//         } else {
//           console.error('Error al procesar el archivo en el servidor');
//         }
//       };

//       // Leer el contenido del archivo como texto
//       reader.readAsText(file);
//     } catch (error) {
//       console.error('Error al cargar y procesar el archivo:', error.message);
//       alert('Error al cargar y procesar el archivo');
//       // Puedes agregar lógica para manejar el error, como mostrar un mensaje al usuario
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="max-w-md bg-white rounded shadow-lg p-6">
//         <h1 className="text-xl font-bold mb-4 text-center">Subir Archivo .txt y Enviar al Servidor</h1>
//         <div className="flex justify-center mb-4">
//           <input
//             type="file"
//             accept=".txt"
//             onChange={handleFileChange}
//             className="p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="flex justify-center mb-4">
//           <button
//             onClick={parseAndUpload}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//           >
//             Cargar Archivo
//           </button>
//         </div>
//       </div>

//       {/* Agregamos un bloque de código para verificar los datos enviados al servidor */}
//       {jsonData && (
//         <div className="flex">
//           <div className="w-1/2 p-4">
//             <div className="bg-blue-100 p-2 mb-2 rounded text-center">
//               <h2 className="text-xl font-bold">Gradiente de Presión</h2>
//             </div>
//             <div className="bg-white p-4 rounded shadow">
//               <LineChart width={400} height={300} data={jsonData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="Time" />
//                 <YAxis />
//                 <Tooltip labelFormatter={(value) => `Tiempo: ${value}`} />
//                 <Legend />
//                 <Line type="monotone" dataKey="Pressure" stroke="#8884d8" activeDot={{ r: 8 }} />
//               </LineChart>
//             </div>
//           </div>
//           <div className="w-1/2 p-4">
//             <div className="bg-blue-100 p-2 mb-2 rounded text-center">
//               <h2 className="text-xl font-bold">Gradiente de Temperatura</h2>
//             </div>
//             <div className="bg-white p-4 rounded shadow">
//               <LineChart width={400} height={300} data={jsonData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="Time" />
//                 <YAxis />
//                 <Tooltip labelFormatter={(value) => `Tiempo: ${value}`} />
//                 <Legend />
//                 <Line type="monotone" dataKey="Temperature" stroke="#82ca9d" activeDot={{ r: 8 }} />
//               </LineChart>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cargararchivo;





