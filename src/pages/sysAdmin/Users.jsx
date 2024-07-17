import React, { useState, useEffect } from 'react';

function Users({ getAllUsers, users, setUsers, currentUser }) {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    status: false, 
    isSysAdmin: false, // se pone asi si no seleccionas
  });

  const [editUser, setEditUser] = useState(null);

  // agregar un nuevo usuario
  const handleAddUser = async () => {
    try {
      const response = await fetch("http://localhost:8000/users", {
        method: 'POST',
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        setUsers([...users, data]);
        setNewUser({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          status: false,
          isSysAdmin: false
        });
      } else {
        console.error('Error al crear el usuario:', response.statusText);
      }
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  // eliminar un usuario
  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8000/users/${userId}`, {
        method: 'DELETE',
        headers: {
          "authorization": `Bearer ${currentUser.accessToken}`
        },
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== userId));
      } else {
        console.error('Error al eliminar el usuario:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  // editar un usuario
  const handleEditUser = async () => {
    try {
      const response = await fetch(`http://localhost:8000/users/${editUser.id}`, {
        method: 'PUT',
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify(editUser),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
        setEditUser(null);
      } else {
        console.error('Error al actualizar el usuario:', response.statusText);
      }
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  //maneja cambios inputs del formulario de creacion de usuario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'status' || name === 'isSysAdmin') {
      setNewUser({ ...newUser, [name]: e.target.checked });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  //  maneja cambios en los inputs del formulario de edicion de usuario
  const handleEditInputChange = (e, user) => {
    const { name, value } = e.target;
    if (name === 'status' || name === 'isSysAdmin') {
      setEditUser({ ...user, [name]: e.target.checked });
    } else {
      setEditUser({ ...user, [name]: value });
    }
  };

  // activa la edición de un usuario
  const toggleEditUser = (user) => {
    setEditUser(user);
  };

  // para obtener usuarios al cargar el componente
  useEffect(() => {
    getAllUsers(); 
  }, [getAllUsers]);

  return (
    <div>
      <h2>Usuarios</h2>

      <form onSubmit={handleAddUser}>
        <input type="text" name="firstName" value={newUser.firstName} onChange={handleInputChange} placeholder="Nombre" />
        <input type="text" name="lastName" value={newUser.lastName} onChange={handleInputChange} placeholder="Apellido" />
        <input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" />
        <input type="password" name="password" value={newUser.password} onChange={handleInputChange} placeholder="Contraseña" />
        <label>
          Administrador:
          <input type="checkbox" name="status" checked={newUser.status} onChange={handleInputChange} />
        </label>
        <label>
          Administrador del sistemas:
          <input type="checkbox" name="isSysAdmin" checked={newUser.isSysAdmin} onChange={handleInputChange} />
        </label>
        <button type="submit">Agregar Usuario</button>
      </form>

    
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {editUser?.id === user.id ? (
              <div>
                <input type="text" name="firstName" value={editUser.firstName} onChange={(e) => handleEditInputChange(e, editUser)} />
                <input type="text" name="lastName" value={editUser.lastName} onChange={(e) => handleEditInputChange(e, editUser)} />
                <input type="email" name="email" value={editUser.email} onChange={(e) => handleEditInputChange(e, editUser)} />
                <input type="password" name="password" value={editUser.password} onChange={(e) => handleEditInputChange(e, editUser)} />
                <label>
                  Administrador:
                  <input type="checkbox" name="status" checked={editUser.status} onChange={(e) => handleEditInputChange(e, editUser)} />
                </label>
                <label>
                  Administrador del sistema:
                  <input type="checkbox" name="isSysAdmin" checked={editUser.isSysAdmin} onChange={(e) => handleEditInputChange(e, editUser)} />
                </label>
                <button onClick={handleEditUser}>Guardar</button>
                <button onClick={() => setEditUser(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                <span>{user.firstName} {user.lastName}</span>
                <button onClick={() => toggleEditUser(user)}>Editar</button>
                <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
