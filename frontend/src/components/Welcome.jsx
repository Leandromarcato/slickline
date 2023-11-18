import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

function Welcome() {
  // Datos de ejemplo para el gráfico
  const chartData = [
    { name: "Enero", temperatura: 10 },
    { name: "Febrero", temperatura: 15 },
    { name: "Marzo", temperatura: 20 },
    { name: "Abril", temperatura: 18 },
    { name: "Mayo", temperatura: 25 },
  ];

  return (
    <div className="welcome-page bg-gradient-to-b from-blue-500 to-gray-300 h-screen flex flex-col justify-center items-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-900" >Bienvenido a SmartDev</h1>
      <p className="text-lg mb-8">
        Explora todas las increíbles características que tenemos para ofrecerte,
        incluyendo datos de temperatura y presión en función de la profundidad.
      </p>

      {/* Contenedor flex para la imagen y el gráfico */}
      <div className="flex items-center">
        {/* Imagen */}
        <img
          src="../../public/slickline service - copia.jpeg" // Ajusta la ruta de la imagen según tu estructura de archivos
          alt="Imagen Ejemplo"
          className="w-90 h-90 object-cover rounded-full mr-14"
        />

        {/* Gráfico */}
        <div >
          <LineChart
            width={500}
            height={500}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperatura" stroke="#3182CE" />
          </LineChart>
          
          
        </div>
      </div>
      <div>
            {/* Botón de inicio */}
            <Link
              to="/R"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 mt-4"
            >
              Iniciar
            </Link>
          </div>
    </div>
    
  );
}

export default Welcome;
