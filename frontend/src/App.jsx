import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Importa tu contexto de autenticación
import Login from "./pages/Autenticacion/Login";
import Register from "./pages/Autenticacion/Register";
import Root from "./layouts/Root";
import Admin from "./pages/Admin";
import Cargapozos from "./layouts/Pozos/Cargapozos";
import AgregarPozo from "./layouts/Pozos/AgregarPozo"
import Control_Datos from "./layouts/Carga_De_Datos/Control_Datos";
import Operario from "./components/Operario";
import Welcome from "./components/Welcome";
import ElejirArchivo from "./layouts/Pozos/ElejirArchivo";
import SuperAdmin from  './components/SuperAdmin';
import Mapa from './components/Mapa'
import User from "./pages/User";
import Prediccion from "./layouts/Prediccion";
function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path="/R/*" element={<Root/>}>
              <Route path="login" element={<Login/>}/>
            </Route>

            <Route path="/Operario/*" element={<Operario/>}>
            <Route path="CargaManual" element={<Cargapozos/>}></Route>
            <Route path="CargarArchivo" element={<ElejirArchivo/>}></Route>
            <Route path="mapa" element={<Mapa/>}></Route>
            </Route>

            <Route path="/Admin/*" element={<Admin/>}>
            <Route path="Registrar" element={<Register/>}></Route>
            <Route path="AgregarPozos" element={<AgregarPozo/>}></Route>
            <Route path="MostrarGraficos" element={<Control_Datos/>}></Route>
            <Route path="Prediccion" element={<Prediccion/>}></Route>
            <Route path="User" element={<User/>}></Route>
            </Route>

            <Route path="/SuperAdmin/*" element={<SuperAdmin/>}>
            <Route path="Registrar" element={<Register/>}></Route>
            <Route path="AgregarPozos" element={<AgregarPozo/>}></Route>
            <Route path="MostrarGraficos" element={<Control_Datos/>}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
