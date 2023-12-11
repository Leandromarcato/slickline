// // import React, {useEffect, useState} from 'react'
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // function Control_Datos() {
// // const [datos, setDatos] = useState([]);

// // useEffect(() => {
// //   const fetchData = async () => {
// //     try {
// //       const response = await fetch('http://localhost:3000/datos/findAll'); // Reemplaza con la URL real de tu API
// //       const data = await response.json();
// //       setDatos(data);
// //     } catch (error) {
// //       console.error('Error al obtener datos:', error);
// //     }
// //   };

// //   fetchData();
// // }, []);
// // const profundidadData = datos.map((dato) => ({ Depth: dato.Depth, Temperature: dato.Temperature, Pressure: dato.Pressure }));

// // return (
// //     <div className="container mx-auto mt-8 flex flex-col">
// //       <h2 className="text-2xl font-bold mb-4 text-blue-700">Tabla de Datos</h2>
// //       <div className="overflow-x-auto mb-8">
// //         <table className="table-auto w-full bg-gray-200">
// //         <thead>
// //           <tr>
// //             {/* <th className="px-4 py-2">ID</th>
// //             <th className="px-4 py-2">Pozo</th>
// //             <th className="px-4 py-2">User</th> */}
// //             <th className="px-4 py-2">Time</th>
// //             <th className="px-4 py-2">Pressure</th>
// //             <th className="px-4 py-2">Temperature</th>
// //             <th className="px-4 py-2">Depth</th>
// //             <th className="px-4 py-2">Dp_Dz</th>
// //             <th className="px-4 py-2">Dt_Dz</th>
// //             <th className="px-4 py-2">Description</th>
// //             <th className="px-4 py-2">Density</th>
// //             <th className="px-4 py-2">createdAt</th>
// //             <th className="px-4 py-2">updatedAt</th>
// //           </tr>
// //         </thead>
// //         <tbody> 
// //           {datos.map((dato) => (
// //             <tr key={dato._id}>
// //               {/* <td className="border px-4 py-2">{dato._id}</td>
// //               <td className="border px-4 py-2">{dato.Pozo[0]}</td>
// //               <td className="border px-4 py-2">{dato.User[0]}</td> */}
// //               <td className="border px-4 py-2">{dato.Time}</td>
// //               <td className="border px-4 py-2">{dato.Pressure}</td>
// //               <td className="border px-4 py-2">{dato.Temperature}</td>
// //               <td className="border px-4 py-2">{dato.Depth}</td>
// //               <td className="border px-4 py-2">{dato.Dp_Dz}</td>
// //               <td className="border px-4 py-2">{dato.Dt_Dz}</td>
// //               <td className="border px-4 py-2">{dato.Description}</td>
// //               <td className="border px-4 py-2">{dato.Density}</td>
// //               <td className="border px-4 py-2">{dato.createdAt}</td>
// //               <td className="border px-4 py-2">{dato.updatedAt}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //     <div className="flex">
// //         <div className="w-1/2 p-4 bg-gray-200">
// //           <h3 className="text-xl font-bold mb-4 text-blue-700">Gráfico de Temperatura en función de la Profundidad</h3>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <LineChart data={profundidadData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
// //               <XAxis dataKey="Depth" label={{ value: 'Profundidad', position: 'insideBottomRight', offset: 0 }} />
// //               <YAxis label={{ value: 'Temperatura', angle: -90, position: 'insideLeft' }} />
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <Tooltip />
// //               <Legend />
// //               <Line type="monotone" dataKey="Temperature" stroke="#3490dc" activeDot={{ r: 8 }} />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </div>

// //         <div className="w-1/2 p-4 bg-gray-200">
// //           <h3 className="text-xl font-bold mb-4 text-blue-700">Gráfico de Presión en función de la Profundidad</h3>
// //           <ResponsiveContainer width="100%" height={300}>
// //             <LineChart data={profundidadData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
// //               <XAxis dataKey="Depth" label={{ value: 'Profundidad', position: 'insideBottomRight', offset: 0 }} />
// //               <YAxis label={{ value: 'Presión', angle: -90, position: 'insideLeft' }} />
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <Tooltip />
// //               <Legend />
// //               <Line type="monotone" dataKey="Pressure" stroke="#64748b" activeDot={{ r: 8 }} />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </div>
// //     </div>
// // );
// // };
  
// // export default Control_Datos;
// import React, { useEffect, useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// function Control_Datos() {
//   const [datos, setDatos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/datos/findAll'); // Reemplaza con la URL real de tu API
//         const data = await response.json();
//         setDatos(data);
//       } catch (error) {
//         console.error('Error al obtener datos:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const profundidadData = datos.map((dato) => ({
//     Depth: dato.Depth,
//     Temperature: dato.Temperature,
//     Pressure: dato.Pressure,
//     Dp_Dz: dato.Dp_Dz,
//     Dt_Dz: dato.Dt_Dz,
//     Description: dato.Description,
//     Density: dato.Density,
//     createdAt: dato.createdAt,
//     updatedAt: dato.updatedAt,
//   }));

//   return (
//     <div className="container mx-auto mt-8 p-4">
//       <h2 className="text-2xl font-bold mb-4 text-blue-700">Tabla de Datos</h2>
//       <div className="overflow-x-auto mb-8">
//         <table className="table-auto w-full bg-gray-200">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Time</th>
//               <th className="px-4 py-2">Pressure</th>
//               <th className="px-4 py-2">Temperature</th>
//               <th className="px-4 py-2">Depth</th>
//               <th className="px-4 py-2">Dp_Dz</th>
//               <th className="px-4 py-2">Dt_Dz</th>
//               <th className="px-4 py-2">Description</th>
//               <th className="px-4 py-2">Density</th>
//               <th className="px-4 py-2">createdAt</th>
//               <th className="px-4 py-2">updatedAt</th>
//             </tr>
//           </thead>
//           <tbody>
//             {datos.map((dato) => (
//               <tr key={dato._id}>
//                 <td className="border px-4 py-2">{dato.Time}</td>
//                 <td className="border px-4 py-2">{dato.Pressure}</td>
//                 <td className="border px-4 py-2">{dato.Temperature}</td>
//                 <td className="border px-4 py-2">{dato.Depth}</td>
//                 <td className="border px-4 py-2">{dato.Dp_Dz}</td>
//                 <td className="border px-4 py-2">{dato.Dt_Dz}</td>
//                 <td className="border px-4 py-2">{dato.Description}</td>
//                 <td className="border px-4 py-2">{dato.Density}</td>
//                 <td className="border px-4 py-2">{dato.createdAt}</td>
//                 <td className="border px-4 py-2">{dato.updatedAt}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="flex">
//         <div className="w-1/2 p-4 bg-gray-200">
//           <h3 className="text-xl font-bold mb-4 text-blue-700">Gráfico de Temperatura en función de la Profundidad</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={profundidadData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//               <YAxis dataKey="Depth" label={{ value: 'Profundidad', angle: -90, position: 'insideLeft' }} />
//               <XAxis label={{ value: 'Temperatura', position: 'insideBottomRight', offset: 0 }} />
//               <CartesianGrid strokeDasharray="3 3" />
//               <Tooltip formatter={(value) => [`${value} m`, '']} />
//               <Legend />
//               <Line type="monotone" dataKey="Temperature" name="Temperatura" stroke="#3490dc" activeDot={{ r: 8 }} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="w-1/2 p-4 bg-gray-200">
//           <h3 className="text-xl font-bold mb-4 text-blue-700">Gráfico de Presión en función de la Profundidad</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={profundidadData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//               <YAxis dataKey="Depth" label={{ value: 'Profundidad', angle: -90, position: 'insideLeft' }} />
//               <XAxis label={{ value: 'Presión', position: 'insideBottomRight', offset: 0 }} />
//               <CartesianGrid strokeDasharray="3 3" />
//               <Tooltip formatter={(value) => [`${value} Pa`, '']} />
//               <Legend />
//               <Line type="monotone" dataKey="Pressure" name="Presión" stroke="#64748b" activeDot={{ r: 8 }} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Control_Datos;

import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function Control_Datos() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/datos/findAll');
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  const renderLineChart = (dataKey, yAxisLabel, tooltipFormatter, strokeColor) => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={datos} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Depth" label={{ value: 'Profundidad', position: 'insideBottomRight', offset: 0, dy: 10 }} />
        <YAxis dataKey={dataKey} label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', dy: -15 }} />
        <Tooltip formatter={(value) => tooltipFormatter(value)} />
        <Legend wrapperStyle={{ paddingBottom: 20 }} />
        <Line
          type="monotone"
          dataKey={dataKey}
          name={yAxisLabel}
          stroke={strokeColor}
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-300 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Gráficos de Datos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Temperatura en función de la Profundidad</h3>
          {renderLineChart("Temperature", "Temperatura (°C)", (value) => `${value} °C`, "#3B82F6")}
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Presión en función de la Profundidad</h3>
          {renderLineChart("Pressure", "Presión (Pa)", (value) => `${value} Pa`, "#4CAF50")}
        </div>
      </div>
    </div>
  );
}

export default Control_Datos;






