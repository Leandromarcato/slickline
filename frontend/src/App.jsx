import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Importa tu contexto de autenticación
import Login from "./pages/Autenticacion/Login";
import Register from "./pages/Autenticacion/Register";
import Root from "./layouts/Root";
import SuperAdminPanel from "./pages/SuperAdminPanel";
import Admin from "./pages/Admin";
import Cargararchivo from "./layouts/Carga_De_Datos/Cargararchivo";
import Cargadatos from "./layouts/Carga_De_Datos/Cargadatos";
import Posos from "./layouts/Posos";
import Cargapozos from "./layouts/Pozos/Cargapozos";
import AgregarPozo from "./layouts/Pozos/AgregarPozo"
import MostrarPozo from "./layouts/Pozos/MostrarPozo";
import Control_Datos from "./layouts/Carga_De_Datos/Control_Datos";
import Prueba from "./layouts/Carga_De_Datos/Prueba";
import Mapa from "./components/Mapa";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path="/R/*" element={<Root/>}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />}/>
            </Route>

            <Route path="h/*" element={<Posos />}>
              <Route path="superAdmin" element={<SuperAdminPanel />} />
              <Route path="cargar" element={<Cargadatos />} />
              <Route path="mapa" element={<Mapa />}/>
              <Route path="Admin"  element={<Admin/>}></Route>
            </Route>

            <Route path="/Pozos/*" element={<MostrarPozo />}>
              <Route path="CargarArchivo" element={<Cargararchivo />} />
              <Route path="ListarPozos" element={<Cargapozos />} />
              <Route path="AgregarPozos" element={<AgregarPozo />} />
              <Route path="Control_Datos" element={<Control_Datos />}></Route>
              <Route path="Prueba" element={<Prueba />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
