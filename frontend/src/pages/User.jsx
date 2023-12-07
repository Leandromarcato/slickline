import React, { useEffect } from "react";
import axios from "axios";

function User() {
  useEffect(() => {
   
    const apiUrl = "http://localhost:3000"; 

  
    // Obtener todos los usuarios activos
    axios
      .get(`${apiUrl}/user/todos`)
      .then((response) => {
        console.log("Todos los usuarios:", response.data);
      })
      .catch((error) => {
        console.error("Error al obtener todos los usuarios:", error);
      });

    // Obtener todos los operarios
    axios
      .get(`${apiUrl}/user/operarios`)
      .then((response) => {
        console.log("Operarios:", response.data);
      })
      .catch((error) => {
        console.error("Error al obtener operarios:", error);
      });
    // Actualizar un admin a operario
    const adminId = "id_del_admin_a_actualizar";
    axios
      .put(`${apiUrl}/user/actualizarAdmin/${adminId}`)
      .then((response) => {
        console.log("Admin actualizado a operario:", response.data);
      })
      .catch((error) => {
        console.error("Error al actualizar admin a operario:", error);
      });

    // Actualizar un usuario
    const userId = "id_del_usuario_a_actualizar";
    const updateUserDto = {
      /* ... */
    }; // Asegúrate de proporcionar los datos correctos
    axios
      .patch(`${apiUrl}/user/actualizar/${userId}`, updateUserDto)
      .then((response) => {
        console.log("Usuario actualizado:", response.data);
      })
      .catch((error) => {
        console.error("Error al actualizar usuario:", error);
      });

    // Eliminar un usuario
    const userToRemoveId = "id_del_usuario_a_eliminar";
    axios
      .delete(`${apiUrl}/user/remover/${userToRemoveId}`)
      .then((response) => {
        console.log("Usuario eliminado:", response.data);
      })
      .catch((error) => {
        console.error("Error al eliminar usuario:", error);
      });

    // Obtener un usuario por ID
    const userIdToFind = "id_del_usuario_a_buscar";
    axios
      .get(`${apiUrl}/user/unUser/${userIdToFind}`)
      .then((response) => {
        console.log("Usuario encontrado:", response.data);
      })
      .catch((error) => {
        console.error("Error al obtener usuario por ID:", error);
      });

    
  }, []); 

  return (
  <div className="container mx-auto mt-8">
     
    </div>
  );
}

export default User;
