// import React ,{ useState}from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import axios from 'axios';
// import { useAuth } from "../../context/AuthContext";
// import jwt_decode from "jwt-decode";

// function MiComponente({ pozoSeleccionado, setPozoSeleccionado }) {
//   const { control, handleSubmit, setValue, getValues } = useForm({
//     defaultValues: {
//       filas: [
//         {
//           Time: '',
//           Pressure: '',
//           Temperature: '',
//           Depth: '',
//           Dp_Dz: '',
//           Dt_Dz: '',
//           Description: ''
//         },
//       ],
//     },
//   });

//   const { token } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = React.useState(null);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const decodedToken = jwt_decode(token);
//       const userId = decodedToken.id;

//       console.log('ID del Usuario:', userId);
//       console.log('ID del Pozo:', pozoSeleccionado.value);
//       console.log(data);

//       // Enviar los datos directamente como un objeto
//       await axios.post(`http://localhost:3000/datos/create/${userId}/${pozoSeleccionado.value}`, {
//         Time: data.filas[0].Time,
//         Pressure: data.filas[0].Pressure,
//         Temperature: data.filas[0].Temperature,
//         Depth: data.filas[0].Depth,
//         Dp_Dz: data.filas[0].Dp_Dz,
//         Dt_Dz: data.filas[0].Dt_Dz,
//         Description: data.filas[0].Description,
//       });

//       console.log('Datos enviados correctamente');
//     } catch (error) {
//       console.error('Error al enviar datos:', error);
//       setError('Error al enviar datos. Por favor, inténtalo de nuevo.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAgregarFila = () => {
//     setLoading(true);
//     setError(null);
//     setValue('filas', [
//       ...getValues().filas,
//       {
//         Time: '',
//         Pressure: '',
//         Temperature: '',
//         Depth: '',
//         Dp_Dz: '',
//         Dt_Dz: '',
//         Description: ''
//       },
//     ]);
//     setLoading(false);
//   };

//   const handleVolverAtras = () => {
//     setPozoSeleccionado(false);
//   };

//   return (
//     <div className="flex flex-col items-center space-y-6 p-4 bg-gray-500">
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
//         {getValues().filas.map((fila, index) => (
//           <div key={index} className="flex space-x-2 mb-5">
//            <span className="text-white">{`Parada N° ${index + 1}`}</span>
//             <Controller
//               name={`filas[${index}].Time`}
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="number"
//                   {...field}
//                   className="border rounded w-full py-2 px-4"
//                   placeholder="Time"
//                   required
//                 />
//               )}
//             />

//             <Controller
//               name={`filas[${index}].Pressure`}
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="number"
//                   {...field}
//                   className="border rounded w-full py-2 px-4"
//                   placeholder="Pressure"
//                   required
//                 />
//               )}
//             />

//             <Controller
//               name={`filas[${index}].Temperature`}
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="number"
//                   {...field}
//                   className="border rounded w-full py-2 px-4"
//                   placeholder="Temperature"
//                   required
//                 />
//               )}
//             />

//             <Controller
//               name={`filas[${index}].Depth`}
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="number"
//                   {...field}
//                   className="border rounded w-full py-2 px-4"
//                   placeholder="Depth"
//                   required
//                 />
//               )}
//             />

//             <Controller
//               name={`filas[${index}].Dp_Dz`}
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="number"
//                   {...field}
//                   className="border rounded w-full py-2 px-4"
//                   placeholder="Dp_Dz"
//                   required
//                 />
//               )}
//             />

//             <Controller
//               name={`filas[${index}].Dt_Dz`}
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="number"
//                   {...field}
//                   className="border rounded w-full py-2 px-4"
//                   placeholder="Dt_Dz"
//                   required
//                 />
//               )}
//             />

//             <Controller
//               name={`filas[${index}].Description`}
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   type="text"
//                   {...field}
//                   className="border rounded w-full py-2 px-4"
//                   placeholder="Description"
//                   required
//                 />
//               )}
//             />
//           </div>
//         ))}

//         <button
//           type="button"
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
//           onClick={handleAgregarFila}
//         >
//           Agregar Fila
//         </button>

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
//         >
//           Enviar
//         </button>

//         <button
//           type="button"
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 my-2"
//           onClick={handleVolverAtras}
//         >
//           Volver Atrás
//         </button>
//       </form>
//     </div>
//   );
// }

// export default MiComponente;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAuth } from "../../context/AuthContext";
// import jwt_decode from "jwt-decode";

// function MiComponente({ pozoSeleccionado, setPozoSeleccionado }) {
//   const { token } = useAuth();
//   const [filas, setFilas] = useState([
//     {
//       Time: '',
//       Pressure: '',
//       Temperature: '',
//       Depth: '',
//       Dp_Dz: '',
//       Dt_Dz: '',
//       Description: '',
//     },
//   ]);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

  

// const handleInputChange = (index, name, value) => {
//     const newFilas = [...filas];
//     newFilas[index][name] = value;
//     setFilas(newFilas);
//   };

//   const handleAgregarFila = () => {
//     setFilas([
//       ...filas,
//       {
//         Time: '',
//         Pressure: '',
//         Temperature: '',
//         Depth: '',
//         Dp_Dz: '',
//         Dt_Dz: '',
//         Description: '',
//       },
//     ]);
//   };

//   const handleEliminarFila = (index) => {
//     const newFilas = [...filas];
//     newFilas.splice(index, 1);
//     setFilas(newFilas);
//   };

//   const handleVolverAtras = () => {
//     setPozoSeleccionado(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       setLoading(true);
//       setError(null);
  
//       const decodedToken = jwt_decode(token);
//       const userId = decodedToken.id;
  
//       console.log('ID del Usuario:', userId);
//       console.log('ID del Pozo:', pozoSeleccionado.value);
//       console.log(filas);
  
//       // const formattedData = filas.map((fila) => ({
//       //   Time: Number(fila.Time),
//       //   Pressure: Number(fila.Pressure),
//       //   Temperature: Number(fila.Temperature),
//       //   Depth: Number(fila.Depth),
//       //   Dp_Dz: Number(fila.Dp_Dz),
//       //   Dt_Dz: Number(fila.Dt_Dz),
//       //   Description: fila.Description,
//       // }));
//       const formattedData = {
//         datos: filas.map((fila) => ({
//           Time: Number(fila.Time),
//           Pressure: Number(fila.Pressure),
//           Temperature: Number(fila.Temperature),
//           Depth: Number(fila.Depth),
//           Dp_Dz: Number(fila.Dp_Dz),
//           Dt_Dz: Number(fila.Dt_Dz),
//           Description: fila.Description,
//         })),
//       };
      
  
//       console.log('Datos formateados:', formattedData);
  
//       await axios.post(`http://localhost:3000/datos/create/${userId}/${pozoSeleccionado.value}`, formattedData.datos);
  
//       console.log('Datos enviados correctamente');
//     } catch (error) {
//       console.error('Error al enviar datos:', error);
//       setError('Error al enviar datos. Por favor, inténtalo de nuevo.');
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   return (
//     <div className="flex flex-col items-center space-y-6 p-4 bg-gray-500">
//       <form onSubmit={handleSubmit} className="space-y-2">
//         {filas.map((fila, index) => (
//           <div key={index} className="flex space-x-2 mb-5">
//             <span className="text-white">{`Parada N° ${index + 1}`}</span>

//             <input
//               type="number"
//               value={fila.Time}
//               onChange={(e) => handleInputChange(index, "Time", e.target.value)}
//               className="border rounded w-full py-2 px-4"
//               placeholder="Time"
//               required
//             />

//             <input
//               type="number"
//               value={fila.Pressure}
//               onChange={(e) =>
//                 handleInputChange(index, "Pressure", e.target.value)
//               }
//               className="border rounded w-full py-2 px-4"
//               placeholder="Pressure"
//               required
//             />

//             <input
//               type="number"
//               value={fila.Temperature}
//               onChange={(e) =>
//                 handleInputChange(index, "Temperature", e.target.value)
//               }
//               className="border rounded w-full py-2 px-4"
//               placeholder="Temperature"
//               required
//             />

//             <input
//               type="number"
//               value={fila.Depth}
//               onChange={(e) =>
//                 handleInputChange(index, "Depth", e.target.value)
//               }
//               className="border rounded w-full py-2 px-4"
//               placeholder="Depth"
//               required
//             />

//             <input
//               type="number"
//               value={fila.Dp_Dz}
//               onChange={(e) =>
//                 handleInputChange(index, "Dp_Dz", e.target.value)
//               }
//               className="border rounded w-full py-2 px-4"
//               placeholder="Dp_Dz"
//               required
//             />

//             <input
//               type="number"
//               value={fila.Dt_Dz}
//               onChange={(e) =>
//                 handleInputChange(index, "Dt_Dz", e.target.value)
//               }
//               className="border rounded w-full py-2 px-4"
//               placeholder="Dt_Dz"
//               required
//             />

//             <input
//               type="text"
//               value={fila.Description}
//               onChange={(e) =>
//                 handleInputChange(index, "Description", e.target.value)
//               }
//               className="border rounded w-full py-2 px-4"
//               placeholder="Description"
//               required
//             />

//             <button
//               type="button"
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
//               onClick={() => handleEliminarFila(index)}
//             >
//               Eliminar Fila
//             </button>
//           </div>
//         ))}

//         <button
//           type="button"
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
//           onClick={handleAgregarFila}
//         >
//           Agregar Fila
//         </button>

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
//         >
//           Enviar
//         </button>

//         <button
//           type="button"
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 my-2"
//           onClick={handleVolverAtras}
//         >
//           Volver Atrás
//         </button>
//       </form>
//     </div>
//   );
// }

// export default MiComponente;
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from "../../context/AuthContext";
import jwt_decode from "jwt-decode";

function MiComponente({ pozoSeleccionado, setPozoSeleccionado }) {
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      filas: [
        {
          Time: '',
          Pressure: '',
          Temperature: '',
          Depth: '',
          Dp_Dz: '',
          Dt_Dz: '',
          Description: ''
        },
      ],
    },
  });

  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = React.useState(null);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const decodedToken = jwt_decode(token);
      const userId = decodedToken.id;

      console.log('ID del Usuario:', userId);
      console.log('ID del Pozo:', pozoSeleccionado.value);
      console.log(data);

      await axios.post(`http://localhost:3000/datos/create/${userId}/${pozoSeleccionado.value}`, {
        Time: data.filas[0].Time,
        Pressure: data.filas[0].Pressure,
        Temperature: data.filas[0].Temperature,
        Depth: data.filas[0].Depth,
        Dp_Dz: data.filas[0].Dp_Dz,
        Dt_Dz: data.filas[0].Dt_Dz,
        Description: data.filas[0].Description,
      });

      console.log('Datos enviados correctamente');
    } catch (error) {
      console.error('Error al enviar datos:', error);
      setError('Error al enviar datos. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleAgregarFila = () => {
    setLoading(true);
    setError(null);
    setValue('filas', [
      ...getValues().filas,
      {
        Time: '',
        Pressure: '',
        Temperature: '',
        Depth: '',
        Dp_Dz: '',
        Dt_Dz: '',
        Description: ''
      },
    ]);
    setLoading(false);
  };

  const handleEliminarFila = (index) => {
    const newFilas = [...getValues().filas];
    newFilas.splice(index, 1);
    setValue('filas', newFilas);
  };

  const handleVolverAtras = () => {
    setPozoSeleccionado(false);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-gray-500">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        {getValues().filas.map((fila, index) => (
          <div key={index} className="flex space-x-2 mb-5">
            <span className="text-white">{`Parada N° ${index + 1}`}</span>
            <Controller
              name={`filas[${index}].Time`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="border rounded w-full py-2 px-4"
                  placeholder="Time"
                  required
                />
              )}
            />
              <Controller
              name={`filas[${index}].Pressure`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="border rounded w-full py-2 px-4"
                  placeholder="Pressure"
                  required
                />
              )}
            />

            <Controller
              name={`filas[${index}].Temperature`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="border rounded w-full py-2 px-4"
                  placeholder="Temperature"
                  required
                />
              )}
            />

            <Controller
              name={`filas[${index}].Depth`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="border rounded w-full py-2 px-4"
                  placeholder="Depth"
                  required
                />
              )}
            />

            <Controller
              name={`filas[${index}].Dp_Dz`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="border rounded w-full py-2 px-4"
                  placeholder="Dp_Dz"
                  required
                />
              )}
            />

            <Controller
              name={`filas[${index}].Dt_Dz`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  className="border rounded w-full py-2 px-4"
                  placeholder="Dt_Dz"
                  required
                />
              )}
            />

            <Controller
              name={`filas[${index}].Description`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="border rounded w-full py-2 px-4"
                  placeholder="Description"
                  required
                />
              )}
            />

            {/* Repite lo mismo para los demás campos */}

            <button
              type="button"
              onClick={() => handleEliminarFila(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              Eliminar Fila
            </button>
          </div>
        ))}

        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handleAgregarFila}
        >
          Agregar Fila
        </button>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Enviar Formulario
        </button>

        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 my-2"
          onClick={handleVolverAtras}
        >
          Volver Atrás
        </button>
      </form>
    </div>
  );
}

export default MiComponente;

