import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import img from "./ID_refsaHidro.png";
function Operario() {

  //  const cerrarSesion = () => {
  
  //   navigate('/Admin');
  //  }


  return (
    
    <div className=' bg-gradient-to-b from-blue-600 to-gray-300 h-screen   text-white '>
    <nav className="flex items-center justify-between bg-gray-400 p-4 text-white">
    <div className="flex items-center">
    <img src={img} alt="Logo" className="w-40 h-10 mr-6" />
      <span className="text-white text-lg font-bold">
        Analisis de Dato de SlickLine
      </span>
    </div>
    <div className="flex items-center">
      <ul className="flex space-x-4 ">
        <li>
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
            <Link to="/Operario/CargaManual" className="text-zinc-100">
              Carga Manual
            </Link>
          </button>
        </li>
        <li>
          <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
            <Link to="/Operario/CargarArchivo" className="text-zinc-100">
              Subir Archivo
            </Link>
          </button>
        </li>

        {/* <li>
            <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600" onClick={cerrarSesion}>
                Cerrar Sesión
            </button>
          </li> */}
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

export default Operario