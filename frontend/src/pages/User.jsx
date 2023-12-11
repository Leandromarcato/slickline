// import React, { useEffect } from "react";
// import axios from "axios";

// function User() {
//   useEffect(() => {
   
//     const apiUrl = "http://localhost:3000"; 

  
//     // Obtener todos los usuarios activos
//     axios
//       .get(`${apiUrl}/user/todos`)
//       .then((response) => {
//         console.log("Todos los usuarios:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error al obtener todos los usuarios:", error);
//       });

//     // Obtener todos los operarios
//     axios
//       .get(`${apiUrl}/user/operarios`)
//       .then((response) => {
//         console.log("Operarios:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error al obtener operarios:", error);
//       });

//       axios
//       .get(`${apiUrl}/user/admin`)
//       .then((response) => {
//         console.log("admin:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error al obtener admin:", error);
//       });



//     // Actualizar un admin a operario
//     const adminId = "id_del_admin_a_actualizar";
//     axios
//       .put(`${apiUrl}/user/actualizarAdmin/${adminId}`)
//       .then((response) => {
//         console.log("Admin actualizado a operario:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error al actualizar admin a operario:", error);
//       });

//     // Actualizar un usuario
//     const userId = "id_del_usuario_a_actualizar";
//     const updateUserDto = {
//       /* ... */
//     }; // Asegúrate de proporcionar los datos correctos
//     axios
//       .patch(`${apiUrl}/user/actualizar/${userId}`, updateUserDto)
//       .then((response) => {
//         console.log("Usuario actualizado:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error al actualizar usuario:", error);
//       });

//     // Eliminar un usuario
//     const userToRemoveId = "id_del_usuario_a_eliminar";
//     axios
//       .delete(`${apiUrl}/user/remover/${userToRemoveId}`)
//       .then((response) => {
//         console.log("Usuario eliminado:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error al eliminar usuario:", error);
//       });

//     // Obtener un usuario por ID
//     const userIdToFind = "id_del_usuario_a_buscar";
//     axios
//       .get(`${apiUrl}/user/unUser/${userIdToFind}`)
//       .then((response) => {
//         console.log("Usuario encontrado:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error al obtener usuario por ID:", error);
//       });

    
//   }, []); 

//   return (
//   <div className="container mx-auto mt-8">
     
//     </div>
//   );
// }

// export default User;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useAuth } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
// const {token}= useAuth()
function User() {
  // const decodedToken = jwtDecode(token);
  //     const userId = decodedToken.id;
  //     console.log(userId);

  const apiUrl = "http://localhost:3000";

  const [todos, setTodos] = useState([]);
  const [operarios, setOperarios] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTodos = await axios.get(`${apiUrl}/user/todos`);
        setTodos(responseTodos.data || []);

        const responseOperarios = await axios.get(`${apiUrl}/user/operarios`);
        setOperarios(responseOperarios.data || []);

        const responseAdmin = await axios.get(`${apiUrl}/user/admin`);
        setAdmin(responseAdmin.data || []);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async () => {
    try {
      // Realizar la solicitud PATCH para actualizar el usuario
      await axios.patch(`${apiUrl}/user/actualizar/${selectedUser._id}`, {
        // Aquí incluye los campos que deseas editar
        // Por ejemplo: username, email, etc.
      });

      // Actualizar el estado para reflejar los cambios
      // Puedes implementar una función específica para actualizar los datos del usuario
      // o simplemente volver a cargar todos los usuarios desde el servidor

      // Vuelve a cargar los datos
      const responseTodos = await axios.get(`${apiUrl}/user/todos`);
      setTodos(responseTodos.data || []);

      const responseOperarios = await axios.get(`${apiUrl}/user/operarios`);
      setOperarios(responseOperarios.data || []);

      const responseAdmin = await axios.get(`${apiUrl}/user/admin`);
      setAdmin(responseAdmin.data || []);

      // Cerrar el modal de edición
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error al guardar la edición:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-300 rounded-md shadow-md">
      <UserList users={todos} onEdit={handleEditUser} />
      <UserList users={operarios} onEdit={handleEditUser} />
      <UserList users={admin} onEdit={handleEditUser} />

      {/* Modal de Edición */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
      >
        {selectedUser && (
          <div>
            <h2>Editar Usuario</h2>
            <form>
              {/* Incluye los campos que deseas editar en el formulario */}
              {/* Por ejemplo: */}
              {/* <label>Username: </label>
              <input
                type="text"
                value={selectedUser.username}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    username: e.target.value,
                  })
                }
              /> */}

              {/* Otros campos... */}

              <button type="button" onClick={handleSaveEdit}>
                Guardar Cambios
              </button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
}

const UserList = ({ users, onEdit }) => (
  <ul>
    {users.map((user) => (
      <li key={user._id}>
        {user.username} - {user.email}
        <button onClick={() => onEdit(user)}>Editar</button>
      </li>
    ))}
  </ul>
);

export default User;

