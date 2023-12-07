import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock } from "react-feather";
import { useForm } from "react-hook-form";
import { loginRequest } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, token } = useAuth(); 
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await loginRequest(data, token);
      const { token: newtoken, roles } = response.data;
      

      login(newtoken, roles);
      // Almacena el token en el contexto de autenticación
      console.log("Usuario autenticado:", roles);
      // Redirige al usuario al panel u otra página
      if (roles.includes("operario")) {
        navigate("/Operario");
      } else if (roles.includes("superadmin")) {
        navigate("/SuperAdmin");
      } else {
        navigate("/"); 
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-400 border rounded shadow-lg">
      <h2 className="text-black text-xl font-bold mb-4">Inicio de Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex items-center">
          <User className="w-6 h-6 mr-2 text-gray-950" />{" "}
          {/* Icono de usuario */}
          <input
            {...register("email", { required: true })}
            className="block w-full py-2 px-4 border rounded bg-gray-500 border-white text-white focus:outline-none focus:border-blue-500"
            placeholder="Correo electrónico"
          />
        </div>
        {errors.email && (
          <p className="text-red-500">Este campo es obligatorio</p>
        )}

        <div className="mb-4 flex items-center">
          <Lock className="w-6 h-6 mr-2 text-black" /> {/* Icono de candado */}
          <input
            {...register("password", { required: true })}
            type="password"
            className="block w-full py-2 px-4 border rounded bg-gray-600 border-white text-white focus:outline-none  focus:border-blue-700"
            placeholder="Contraseña"
          />
        </div>
        {errors.password && (
          <p className="text-red-500">Este campo es obligatorio</p>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 mt-4 bg-blue-700 text-white font-bold rounded focus:outline-none hover:bg-gray-600"
        >
          Iniciar Sesión
        </button>
      </form>
      <Link
        to="/register"
        className="block mt-4 text text-center hover:text-blue-700 hover:underline"
      >
        ¿No tienes una cuenta? Regístrate aquí
      </Link>
    </div>
  );
}

export default Login;
