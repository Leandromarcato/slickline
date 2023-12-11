import axios from "axios";

const servidor = "http://localhost:3000/auth";


// export const registerRequest = (user) => axios.post(`${servidor}/register`, user)

// export const loginRequest = (dato) => axios.post(`${servidor}/login`, dato)

export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`${servidor}/signup`, user);
    const { token } = response.data;

    // Establecer el token en el encabezado de las solicitudes Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return response;
  } catch (error) {
    throw error;
  }
};

export const loginRequest = async (dato) => {
  try {
    const response = await axios.post(`${servidor}/signin`, dato);
    const { token } = response.data;
    console.log(response.data);

    // Establecer el token en el encabezado de las solicitudes Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return response;
  } catch (error) {
    throw error;
  }
};
