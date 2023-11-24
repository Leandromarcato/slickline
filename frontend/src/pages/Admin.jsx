import React from 'react'
import { Outlet,Link } from 'react-router-dom'
function Admin() {
  return (
    <div className='bg-gradient-to-b from-gray-300 to-gray-300 h-screen  text-white'>
      <nav className="flex items-center justify-between bg-blue-600 p-4 text-white">
    <div className="flex items-center">
      <span className="text-white text-lg font-bold">
        Analisis de Dato de SlickLine
      </span>
    </div>
    <div className="flex items-center">
      <ul className="flex space-x-4">
        <li>
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
            <Link to="/Admin/Registrar" className="text-zinc-100">
              Registrar
            </Link>
          </button>
        </li>

        <li>
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
            <Link to="/Admin/AgregarPozos" className="text-zinc-100">
              Agregar Pozos
            </Link>
          </button>
        </li>

        <li>
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
            <Link to="/Admin/MostrarGraficos" className="text-zinc-100">
              Mostrar Graficos
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

export default Admin