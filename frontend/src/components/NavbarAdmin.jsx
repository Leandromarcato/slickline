import React from "react";
import { Link } from "react-router-dom";
import img from "./ID_refsaHidro.png";
import { useAuth } from "../context/AuthContext";
import jwt_decode from "jwt-decode";

function NavbarAdmin() {
  return (
    <nav className="flex items-center justify-between bg-gray-400 p-4 text-white">
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
              <Link to="/R/login" className="text-zinc-100">
                Iniciar Sesión
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarAdmin;

// Otras importaciones y código
// import React from 'react';
// import { Link } from 'react-router-dom';
// import img from './ID_refsaHidro.png';
// import { useAuth } from '../context/AuthContext';
// function Navbar() {
//   const { roles, logout } = useAuth();
//   console.log(roles)

//   if (roles.length > 0 && !roles.includes('superadmin')) {
//     window.alert('No tienes permisos de superadmin. Algunas opciones pueden no estar disponibles.');
//   }

//   return (
//     <nav className="flex items-center justify-between bg-gray-400 p-4 text-white">
//       <div className="flex items-center">
//         <img src={img} alt="Logo" className="w-40 h-10 mr-6" />
//         <span className="text-white text-lg font-bold">Analisis de Dato de SlickLine</span>
//       </div>
//       <div className="flex items-center">
//         <ul className='flex space-x-4'>
//           {roles.length > 0 ? (
//             <>
//               {roles.includes('superadmin') && (
//                 <>
//                   <li>
//                     <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
//                       <Link to="/R/register">Registrar Usuario</Link>
//                     </button>
//                   </li>
//                   <li>
//                     <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
//                       <Link to="/R/login">Iniciar Sesión</Link>
//                     </button>
//                   </li>
//                 </>
//               )}
//               {roles.includes('admin') && (
//                 <li>
//                   <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
//                     <Link to="/admin-dashboard">Panel de Admin</Link>
//                   </button>
//                 </li>
//               )}
//               {roles.includes('operario') && (
//                 <li>
//                   <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
//                     <Link to="/operario-dashboard">Panel de Operario</Link>
//                   </button>
//                 </li>
//               )}
//               <li>
//                 <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600" onClick={logout}>
//                   Cerrar Sesión
//                 </button>
//               </li>
//             </>
//           ) : (
//             <>
//               {roles.includes('superadmin') || (
//                 <>
//                   <li>
//                     <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
//                       <Link to="/R/register">Registrarse</Link>
//                     </button>
//                   </li>
//                   <li>
//                     <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl hover:bg-gray-600">
//                       <Link to="/R/login" className='text-zinc-100'>Iniciar Sesión</Link>
//                     </button>
//                   </li>
//                 </>
//               )}
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
