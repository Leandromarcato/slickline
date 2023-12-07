import React from 'react'
import img from "./ID_refsaHidro.png";
import { Outlet, Link } from 'react-router-dom'

function SuperAdmin() {
  return (
    <div className='bg-gradient-to-bl from-blue-500 to-gray-300 h-screen  text-white'>
      <nav className="flex items-center justify-between bg-gray-500 p-4 text-white">
    <div className="flex items-center">
    <img src={img} alt="Logo" className="w-40 h-10 mr-6" />
      <span className="text-white text-lg font-bold">
        Analisis de Dato de SlickLine
      </span>
    </div>
    <div className="flex items-center">
      <ul className="flex space-x-4">
        <li>
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
            <Link to="/SuperAdmin/Registrar" className="text-zinc-100">
              Registrar
            </Link>
          </button>
        </li>

        <li>
          <button className="bg-blue-400 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
            <Link to="/SuperAdmin/AgregarPozos" className="text-zinc-100">
              Agregar Pozos
            </Link>
          </button>
        </li>

        <li>
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
            <Link to="/SuperAdmin/MostrarGraficos" className="text-zinc-100">
            Graficos 
            </Link>
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <br />
  <div>
    <Outlet/>
  </div>
    </div>
  )
}

export default SuperAdmin