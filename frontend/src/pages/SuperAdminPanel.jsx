import React, { useState } from 'react';
import axios from 'axios';

const SuperAdminPanel = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const assignRole = () => {
    axios.post('http://api.example.com/grant-roles', {
      userId: selectedUser,
      roles: [selectedRole]
    })
      .then(response => {
        console.log('Rol otorgado con éxito');
      })
      .catch(error => {
        console.error('Error al otorgar el rol:', error);
      });
  };

  return (
    <div>
      <h2>Panel de Super Administrador</h2>
      <label>
        Seleccionar Usuario:
        <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
          <option value="1">Usuario 1</option>
          <option value="2">Usuario 2</option>
          {/* Agrega más opciones según tus usuarios */}
        </select>
      </label>
      <br/>
      <label>
        Seleccionar Rol:
        <select value={selectedRole} onChange={e => setSelectedRole(e.target.value)}>
          <option value="superadmin">Super Admin</option>
          <option value="admin">Admin</option>
          <option value="user">Usuario</option>
          {/* Agrega más opciones según tus roles */}
        </select>
      </label>
      <br />
      <button onClick={assignRole}>Otorgar Rol</button>
    </div>
  );
};

export default SuperAdminPanel;
