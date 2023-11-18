import React from "react";
import { User, Lock } from "react-feather";
import { useForm } from "react-hook-form";
import { registerRequest } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await registerRequest(data);
      const { token } = response.data;

      login(token);

      console.log("Usuario registrado:", token);
    } catch (error) {
      console.error("Error al registrar el usuario:");
      console.log({ error });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-400 border rounded shadow-lg">
      <h2 className="text-white text-xl font-bold mb-4">Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex items-center">
          <User className="w-6 h-6 mr-2 text-white" />
          <input
            {...register("username", { required: true })}
            className="block w-full py-2 px-4 border rounded bg-gray-500 border-white text-white  focus:border-black"
            placeholder="Nombre de usuario"
          />
        </div>
        {errors.username && (
          <p className="text-red-500">Este campo es obligatorio</p>
        )}

        <div className="mb-4 flex items-center">
          <User className="w-6 h-6 mr-2 text-white" />
          <input
            {...register("email", { required: true })}
            className="block w-full py-2 px-4 border rounded bg-blue-700 border-white text-white focus:outline-none focus:border-blue-500"
            placeholder="Correo electrónico"
          />
        </div>
        {errors.email && (
          <p className="text-red-500">Este campo es obligatorio</p>
        )}

        <div className="mb-4 flex items-center">
          <Lock className="w-6 h-6 mr-2 text-white" />
          <input
            {...register("password", { required: true })}
            type="password"
            className="block w-full py-2 px-4 border rounded bg-blue-700 border-white text-white focus:outline-none focus:border-blue-500"
            placeholder="Contraseña"
          />
        </div>
        {errors.password && (
          <p className="text-red-800">Este campo es obligatorio</p>
        )}

        <div className="mb-4 flex items-center">
          <User className="w-6 h-6 mr-2 text-white" />
          <input
            {...register("roles", { required: true })}
            className="block w-full py-2 px-4 border rounded bg-blue-700 border-white text-white focus:outline-none focus:border-blue-500"
            placeholder="Rol"
          />
        </div>
        {errors.roles && (
          <p className="text-red-800">Este campo es obligatorio</p>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 mt-4 bg-blue-700 text-white font-bold rounded focus:outline-none hover:bg-blue-700"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
