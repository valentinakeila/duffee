import React, { useState, useEffect, useContext } from 'react';
import { AuthenticationContext } from '../../components/services/authentication/UserAuthenticationContext';

const styles = {
  container: {
    marginRight: '400px',
    marginLeft:'60px',
    marginTop:'60px',
    marginBottom:'200px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'left',
    color: '#333',
    marginLeft: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
    marginLeft: '10px',
  },
  input: {
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  label: {
    margin: '5px',
    fontWeight: 'bold',
  },
  checkbox: {
    marginLeft: '10px',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#28a745',
    color: 'white',
    cursor: 'pointer',
  },
  redButton: {
    margin: '5px',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#dc3545',
    color: 'white',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '10px',
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  userActions: {
    display: 'flex',
    gap: '10px',
  }
};

function Users({ getAllUsers, users, setUsers}) {
  const { currentUser } = useContext(AuthenticationContext);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    status: false,
    isSysAdmin: false,
  });

  const [editUser, setEditUser] = useState(null);

  // agregar un nuevo usuario
  const handleAddUser = async (e) => {
    e.preventDefault();
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
          isSysAdmin: false,
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
    // Confirmación antes de eliminar
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
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

  // maneja cambios inputs del formulario de creacion de usuario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'status' || name === 'isSysAdmin') {
      setNewUser({ ...newUser, [name]: e.target.checked });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  // maneja cambios en los inputs del formulario de edicion de usuario
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

 

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Usuarios</h2>

      <form onSubmit={handleAddUser} style={styles.form}>
        <input type="text" name="firstName" value={newUser.firstName} onChange={handleInputChange} placeholder="Nombre" style={styles.input} />
        <input type="text" name="lastName" value={newUser.lastName} onChange={handleInputChange} placeholder="Apellido" style={styles.input} />
        <input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" style={styles.input} />
        <input type="password" name="password" value={newUser.password} onChange={handleInputChange} placeholder="Contraseña" style={styles.input} />
        <label style={styles.label}>
          Administrador:
          <input type="checkbox" name="status" checked={newUser.status} onChange={handleInputChange} style={styles.checkbox} />
        </label>
        <label style={styles.label}>
          Administrador del sistema:
          <input type="checkbox" name="isSysAdmin" checked={newUser.isSysAdmin} onChange={handleInputChange} style={styles.checkbox} />
        </label>
        <button type="submit" style={styles.button}>Agregar Usuario</button>
      </form>

      <ul style={styles.list}>
        {users.map(user => (
          <li key={user.id} style={styles.listItem}>
            {editUser?.id === user.id ? (
              <div>
                <input type="text" name="firstName" value={editUser.firstName} onChange={(e) => handleEditInputChange(e, editUser)} style={styles.input} />
                <input type="text" name="lastName" value={editUser.lastName} onChange={(e) => handleEditInputChange(e, editUser)} style={styles.input} />
                <input type="email" name="email" value={editUser.email} onChange={(e) => handleEditInputChange(e, editUser)} style={styles.input} />
                <input type="password" name="password" value={editUser.password} onChange={(e) => handleEditInputChange(e, editUser)} style={styles.input} />
                <label style={styles.label}>
                  Administrador:
                  <input type="checkbox" name="status" checked={editUser.status} onChange={(e) => handleEditInputChange(e, editUser)} style={styles.checkbox} />
                </label>
                <label style={styles.label}>
                  Administrador del sistema:
                  <input type="checkbox" name="isSysAdmin" checked={editUser.isSysAdmin} onChange={(e) => handleEditInputChange(e, editUser)} style={styles.checkbox} />
                </label>
                <button onClick={handleEditUser} style={styles.button}>Guardar</button>
                <button onClick={() => setEditUser(null)} style={styles.redButton}>Cancelar</button>
              </div>
            ) : (
              <div style={styles.userInfo}>
                <span>{user.firstName} {user.lastName}</span>
                <div style={styles.userActions}>
                  <button onClick={() => toggleEditUser(user)} style={styles.button}>Editar</button>
                  <button onClick={() => handleDeleteUser(user.id)} style={styles.redButton}>Eliminar</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
