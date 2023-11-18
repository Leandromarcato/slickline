import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import jwt_decode from 'jwt-decode';

function Prueba({ pozoSeleccionado }) {
  const [formList, setFormList] = useState([
    {
      Time: 0,
      Pressure: 0,
      Temperature: 0,
      Depth: 0,
      Dp_Dz: 0,
      Dt_Dz: 0,
      Description: '',
      Density: 0,
    },
  ]);
  const [response, setResponse] = useState('');
  const { token } = useAuth();

  const handleInputChange = (index, name, value) => {
    const newFormList = [...formList];
    newFormList[index] = {
      ...newFormList[index],
      [name]: value,
    };
    setFormList(newFormList);
  };

  const addRow = () => {
    setFormList([
      ...formList,
      {
        Time: 0,
        Pressure: 0,
        Temperature: 0,
        Depth: 0,
        Dp_Dz: 0,
        Dt_Dz: 0,
        Description: '',
        Density: 0,
      },
    ]);
  };

  const removeRow = (index) => {
    const newFormList = [...formList];
    newFormList.splice(index, 1);
    setFormList(newFormList);
  };

  const postData = async () => {
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.id;

    console.log('ID del Usuario:', userId);
    console.log('ID del Pozo:', pozoSeleccionado.value);
    console.log('Datos del Formulario:', formList);

    try {
      const result = await fetch(`http://localhost:3000/datos/create/${userId}/${pozoSeleccionado.value}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formList[0]), // Enviar solo el primer objeto de la lista
      });

      const data = await result.json();
      setResponse(data);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {formList.map((form, index) => (
          <div key={index} className="mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Time:
                  <input
                    type="number"
                    name="Time"
                    value={form.Time}
                    onChange={(e) => handleInputChange(index, 'Time', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Pressure:
                  <input
                    type="number"
                    name="Pressure"
                    value={form.Pressure}
                    onChange={(e) => handleInputChange(index, 'Pressure', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Temperature:
                  <input
                    type="number"
                    name="Temperature"
                    value={form.Temperature}
                    onChange={(e) => handleInputChange(index, 'Temperature', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Depth:
                  <input
                    type="number"
                    name="Depth"
                    value={form.Depth}
                    onChange={(e) => handleInputChange(index, 'Depth', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Dp_Dz:
                  <input
                    type="number"
                    name="Dp_Dz"
                    value={form.Dp_Dz}
                    onChange={(e) => handleInputChange(index, 'Dp_Dz', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Dt_Dz:
                  <input
                    type="number"
                    name="Dt_Dz"
                    value={form.Dt_Dz}
                    onChange={(e) => handleInputChange(index, 'Dt_Dz', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description:
                <input
                  type="text"
                  name="Description"
                  value={form.Description}
                  onChange={(e) => handleInputChange(index, 'Description', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Density:
                <input
                  type="number"
                  name="Density"
                  value={form.Density}
                  onChange={(e) => handleInputChange(index, 'Density', e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <button
              type="button"
              onClick={() => removeRow(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Eliminar Fila
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addRow}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:shadow-outline"
        >
          Agregar Fila
        </button>
        <button
          type="button"
          onClick={postData}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Realizar solicitud POST
        </button>
      </form>
      <p className="mt-4">Respuesta: {response}</p>
    </div>
  );
}

export default Prueba;
