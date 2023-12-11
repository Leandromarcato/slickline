// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// function Prediccion() {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({
//     profundidad: "",
//     presion: "",
//     temperatura: "",
//   });

//   const handleInputChange = (e) => {
//         const { name, value } = e.target;
    
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           [name]: value,
//         }));
//       };

     

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const valoresNumericos = [
//       parseFloat(formData.profundidad),
//       parseFloat(formData.presion),
//       parseFloat(formData.temperatura),
//     ];

//     // Realizar solicitud POST a la API FastAPI
//     axios
//       .post("http://127.0.0.1:8000/ia", valoresNumericos)
//       .then((response) => {
//         // Manejar la respuesta según sea necesario
//         console.log("Datos enviados con éxito:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error al enviar datos:", error);
//       });
//   };

//   // useEffect(() => {
//   //   // Realizar solicitud GET a la API FastAPI
//   //   axios
//   //     .get("http://127.0.0.1:8000/ia")
//   //     .then((response) => {
//   //       const filteredData = filterData(response.data);
//   //       setData(filteredData);
//   //       console.log(filteredData);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error al obtener datos:", error);
//   //     });
//   // }, []);

//   // Función para filtrar los datos y obtener solo la producción del último día de cada mes
//   const filterData = (responseData) => {
//     const currentDate = new Date();
//     const twoYearsAgo = new Date(
//       currentDate.getFullYear() - 2,
//       currentDate.getMonth(),
//       currentDate.getDate()
//     );

//     const filteredData = responseData.fechas.reduce((acc, fecha, index) => {
//       const currentDate = new Date(fecha);
//       if (currentDate >= twoYearsAgo) {
//         acc.push({
//           fechas: fecha,
//           produccion_acumulada: responseData.produccion_acumulada[index],
//         });
//       }
//       return acc;
//     }, []);

//     return filteredData;
//   };

//   return (
//     <div className="max-w-screen-md mx-auto p-4 flex">
//       {/* Formulario */}
//       <form onSubmit={handleSubmit} className="flex-shrink-0 mr-4">
//         <div className="mb-4">
//           <label htmlFor="campo1" className="block text-sm font-medium text-gray-600">
//             Campo 1:
//           </label>
//           <input
//             type="text"
//             id="campo1"
//             name="campo1"
//             value={formData.campo1}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="campo2" className="block text-sm font-medium text-gray-600">
//             Campo 2:
//           </label>
//           <input
//             type="text"
//             id="campo2"
//             name="campo2"
//             value={formData.campo2}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="campo3" className="block text-sm font-medium text-gray-600">
//             Campo 3:
//           </label>
//           <input
//             type="text"
//             id="campo3"
//             name="campo3"
//             value={formData.campo3}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           Enviar
//         </button>
//       </form>

//       {/* Gráfico */}
//       <div className="bg-white p-10 rounded shadow flex-grow">
//         <h1 className="text-3xl mb-4 text-center">
//           Gráfico de Producción de Petróleo por Barriles
//         </h1>
//         <LineChart
//           width={660}
//           height={400}
//           data={data}
//           margin={{
//             top: 30,
//             right: 50,
//             left: 2,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="1 1" stroke="#8884d8" />
//           <XAxis
//             dataKey="fechas"
//             angle={-35}
//             textAnchor="start"
//             label={{
//               value: "Fechas",
//               position: "insideBottomCenter",
//               offset: -10,
//             }}
//             tick={{ fontSize: 10 }}
//             className="bg-slate-400"
//             axisLine={false}
//           />
//           <YAxis
//             textAnchor="start"
//             axisLine={false}
//             label={{
//               value: "Producción en Barriles",
//               angle: -90,
//               position: "insideCenter",
//             }}
//             tick={{ fontSize: 10 }}
//             angle={-45}
//           />
//           <Tooltip />
//           <Legend iconType="circle" content={() => null} />
//           <Line
//             className="border-l-gray-400"
//             type="monotone"
//             dataKey="produccion_acumulada"
//             stroke="#8884d8"
//             strokeWidth={2}
//             dot={{ r: 3 }}
//           />
//         </LineChart>
//       </div>
//     </div>
//   );
// }

// export default Prediccion;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// function Prediccion() {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({
//     profundidad: "",
//     presion: "",
//     temperatura: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Convertir los valores a números antes de enviarlos al servidor
//     const valoresNumericos = [
//       parseFloat(formData.profundidad),
//       parseFloat(formData.presion),
//       parseFloat(formData.temperatura),
//     ];

//     // Verificar que todos los campos sean números antes de enviar la solicitud
//     if (!valoresNumericos.some(isNaN)) {
//       // Realizar solicitud POST a la API FastAPI
//       axios
//         .post("http://127.0.0.1:8000/ia", valoresNumericos)
//         .then((response) => {
//           // Manejar la respuesta según sea necesario
//           console.log("Datos enviados con éxito:", response.data);
//         })
//         .catch((error) => {
//           console.error("Error al enviar datos:", error);
//         });
//     } else {
//       console.error("Los valores deben ser números");
//     }
//   };

//   // useEffect(() => {
//   //   // Realizar solicitud GET a la API FastAPI
//   //   axios
//   //     .get("http://127.0.0.1:8000/ia_data")
//   //     .then((response) => {
//   //       const filteredData = filterData(response.data);
//   //       setData(filteredData);
//   //       console.log(filteredData);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error al obtener datos:", error);
//   //     });
//   // }, []);

//   // Función para filtrar los datos y obtener solo la producción del último día de cada mes
//   const filterData = (responseData) => {
//     const currentDate = new Date();
//     const twoYearsAgo = new Date(
//       currentDate.getFullYear() - 2,
//       currentDate.getMonth(),
//       currentDate.getDate()
//     );

//     const filteredData = responseData.fechas.reduce((acc, fecha, index) => {
//       const currentDate = new Date(fecha);
//       if (currentDate >= twoYearsAgo) {
//         acc.push({
//           fechas: fecha,
//           produccion_acumulada: responseData.produccion_acumulada[index],
//         });
//       }
//       return acc;
//     }, []);

//     return filteredData;
//   };

//   return (
//     <div className="max-w-screen-md mx-auto p-4 flex">
//       {/* Formulario */}
//       <form onSubmit={handleSubmit} className="flex-shrink-0 mr-4">
//         <div className="mb-4">
//           <label htmlFor="profundidad" className="block text-sm font-medium text-gray-600">
//             Profundidad:
//           </label>
//           <input
//             type="number"
//             id="profundidad"
//             name="profundidad"
//             value={formData.profundidad}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border rounded-md text-black"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="presion" className="block text-sm font-medium text-gray-600">
//             Presión:
//           </label>
//           <input
//             type="number"
//             id="presion"
//             name="presion"
//             value={formData.presion}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border rounded-md text-black"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="temperatura" className="block text-sm font-medium text-gray-600">
//             Temperatura:
//           </label>
//           <input
//             type="number"
//             id="temperatura"
//             name="temperatura"
//             value={formData.temperatura}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border rounded-md text-black"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           Enviar
//         </button>
//       </form>

//       {/* Gráfico */}
//       <div className="bg-white p-10 rounded shadow flex-grow">
//          <h1 className="text-3xl mb-4 text-center">
//           Gráfico de Producción de Petróleo por Barriles
//         </h1>
//          <LineChart
//           width={660}
//           height={400}
//           data={data}
//           margin={{
//             top: 30,
//             right: 50,
//             left: 2,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="1 1" stroke="#8884d8" />
//           <XAxis
//             dataKey="fechas"
//             angle={-35}
//             textAnchor="start"
//             label={{
//               value: "Fechas",
//               position: "insideBottomCenter",
//               offset: -10,
//             }}
//             tick={{ fontSize: 10 }}
//             className="bg-slate-400"
//             axisLine={false}
//           />
//           <YAxis
//             textAnchor="start"
//             axisLine={false}
//             label={{
//               value: "Producción en Barriles",
//               angle: -90,
//               position: "insideCenter",
//             }}
//             tick={{ fontSize: 10 }}
//             angle={-45}
//           />
//           <Tooltip />
//           <Legend iconType="circle" content={() => null} />
//           <Line
//             className="border-l-gray-400"
//             type="monotone"
//             dataKey="produccion_acumulada"
//             stroke="#8884d8"
//             strokeWidth={2}
//             dot={{ r: 3 }}
//           />
//         </LineChart>
//       </div>
//     </div>
    
//   );
// }

// export default Prediccion;

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Prediccion() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    profundidad: "",
    presion: "",
    temperatura: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valoresNumericos = [
      parseFloat(formData.profundidad),
      parseFloat(formData.presion),
      parseFloat(formData.temperatura),
    ];

    if (!valoresNumericos.some(isNaN)) {
      axios
        .post("http://127.0.0.1:8000/ia", valoresNumericos)
        .then((response) => {
          const filteredData = filterData(response.data);
          setData(filteredData);
          console.log("Datos enviados con éxito:", response.data);
        })
        .catch((error) => {
          console.error("Error al enviar datos:", error);
        });
    } else {
      console.error("Los valores deben ser números");
    }
  };

  // useEffect(() => {
  //   // Realizar solicitud GET a la API FastAPI para obtener datos iniciales
  //   axios
  //     .get("http://127.0.0.1:8000/ia)
  //     .then((response) => {
  //       const filteredData = filterData(response.data);
  //       setData(filteredData);
  //       console.log(filteredData);
  //     })
  //     .catch((error) => {
  //       console.error("Error al obtener datos:", error);
  //     });
  // }, []);

  const filterData = (responseData) => {
    const currentDate = new Date();
    const twoYearsAgo = new Date(
      currentDate.getFullYear() - 2,
      currentDate.getMonth(),
      currentDate.getDate()
    );

    const filteredData = responseData.fechas.reduce((acc, fecha, index) => {
      const currentDate = new Date(fecha);
      if (currentDate >= twoYearsAgo) {
        acc.push({
          fechas: fecha,
          produccion_acumulada: responseData.produccion_acumulada[index],
        });
      }
      return acc;
    }, []);

    return filteredData;
  };

  return (
    <div className="max-w-screen-md mx-auto p-4 flex">
      <form onSubmit={handleSubmit} className="flex-shrink-0 mr-4">
        <div className="mb-4">
          <label htmlFor="profundidad" className="block text-sm font-medium text-gray-600">
            Profundidad:
          </label>
          <input
            type="number"
            id="profundidad"
            name="profundidad"
            value={formData.profundidad}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="presion" className="block text-sm font-medium text-gray-600">
            Presión:
          </label>
          <input
            type="number"
            id="presion"
            name="presion"
            value={formData.presion}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="temperatura" className="block text-sm font-medium text-gray-600">
            Temperatura:
          </label>
          <input
            type="number"
            id="temperatura"
            name="temperatura"
            value={formData.temperatura}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>

      <div className="bg-white p-10 rounded shadow flex-grow">
        <h1 className="text-3xl mb-4 text-center">
          Gráfico de Producción de Petróleo por Barriles
        </h1>
        <LineChart
          width={660}
          height={400}
          data={data}
          margin={{
            top: 30,
            right: 50,
            left: 2,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" stroke="#8884d8" />
          <XAxis
            dataKey="fechas"
            angle={-35}
            textAnchor="start"
            label={{
              value: "Fechas",
              position: "insideBottomCenter",
              offset: -10,
            }}
            tick={{ fontSize: 10 }}
            className="bg-slate-400"
            axisLine={false}
          />
          <YAxis
            textAnchor="start"
            axisLine={false}
            label={{
              value: "Producción en Barriles",
              angle: -90,
              position: "insideCenter",
            }}
            tick={{ fontSize: 10 }}
            angle={-45}
          />
          <Tooltip />
          <Legend iconType="circle" content={() => null} />
          <Line
            className="border-l-gray-400"
            type="monotone"
            dataKey="produccion_acumulada"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default Prediccion;
