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

  useEffect(() => {
    // Realizar solicitud a la API FastAPI
    axios
      .get("http://127.0.0.1:8000/ia")
      .then((response) => {
        const filteredData = filterData(response.data);
        setData(filteredData);
        console.log(filteredData);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  // Función para filtrar los datos y obtener solo la producción del último día de cada mes
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
    <div className="max-w-screen-md mx-auto p-4">
    <h1 className="text-3xl mb-4 text-center">
      Gráfico de Producción Mensual de Petróleo
    </h1>
    <div className="bg-white p-10 rounded shadow">
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
        <CartesianGrid strokeDasharray="1 1" stroke="#ccc" />
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
          type="monotone"
          dataKey="produccion_acumulada"
          stroke="#8884d8"
          strokeWidth={2} // Aumenta el ancho de la línea
          dot={{ r: 3 }} // Aumenta el tamaño de los puntos en la línea
        />
      </LineChart>
    </div>
  </div>
  );
}

export default Prediccion;
