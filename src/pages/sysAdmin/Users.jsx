import React, { useState, useEffect, useContext } from 'react';
import { AuthenticationContext } from '../../components/services/authentication/UserAuthenticationContext';

const styles = {
  container: {
    marginRight: '400px',
    marginLeft: '60px',
    marginTop: '60px',
    marginBottom: '200px',
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

function Users({ users, setUsers }) {
  const { currentUser } = useContext(AuthenticationContext);
  const [editUser, setEditUser] = useState(null);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    status: '',
    isSysAdmin: '',
  });

  //para cargar datos del usuario en edicion
  useEffect(() => {
    if (editUser) {
      setUserDetails({
        firstName: editUser.firstName,
        lastName: editUser.lastName,
        email: editUser.email,
        password: editUser.password,
        status: editUser.status,
        isSysAdmin: editUser.isSysAdmin,
      });
    }
  }, [editUser]);

  /*maneja cambios en los campos del form 
e.target: es para el input que el usuario esta editando
name: el nombre del campo  que está siendo cambiado el nombre corresponde a la propiedad en el estado userDetails que se tiene actualizar
value: nuevo valor del input cambiado
type tipo de campo  esto es importante para saber si el campo es checkbox o texto
checked:  para campos de tipo checkbox dice si la casilla está marcada o no booleano
*/
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  /* esto es para eliminar
  si la respuesta es exitosa
users.filter(user => user.id !== userId): hace un nuevo array de usuarios que saca al usuario con el userId eliminado.
setUsers: actualiza el estado de los usuarios en el componente con el nuevo array.
*/
  const handleDeleteUser = async (userId) => {
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

  /* esto para modificar 
  setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user))):
users.map: recorre el array de usuarios
user.id === updatedUser.id ? updatedUser : user: reemplaza el usuario que el id coincide con el del usuario actualizado updatedUser
setUsers: actualiza el estado users con el array modificado que incluye los cambios

  */
  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/users/${editUser.id}`, {
        method: 'PUT',
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${currentUser.accessToken}`
        },
        body: JSON.stringify(userDetails),
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

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Usuarios</h2>
      <ul style={styles.list}>
        {users.map(user => (
          <li key={user.id} style={styles.listItem}>
            {editUser?.id === user.id ? (
              <form style={styles.form} onSubmit={handleEditUser}>
                <input
                  type="text"
                  name="firstName"
                  value={userDetails.firstName}
                  onChange={handleInputChange}
                  style={styles.input}
                />
                <input
                  type="text"
                  name="lastName"
                  value={userDetails.lastName}
                  onChange={handleInputChange}
                  style={styles.input}
                />
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  style={styles.input}
                />
                <input
                  type="password"
                  name="password"
                  value={userDetails.password}
                  onChange={handleInputChange}
                  style={styles.input}
                />
                <label style={styles.label}>
                  Administrador:
                  <input
                    type="checkbox"
                    name="status"
                    checked={userDetails.status}
                    onChange={handleInputChange}
                    style={styles.checkbox}
                  />
                </label>
                <label style={styles.label}>
                  Administrador del sistema:
                  <input
                    type="checkbox"
                    name="isSysAdmin"
                    checked={userDetails.isSysAdmin}
                    onChange={handleInputChange}
                    style={styles.checkbox}
                  />
                </label>
                <button type="submit" style={styles.button}>Guardar</button>
                <button type="button" onClick={() => setEditUser(null)} style={styles.redButton}>Cancelar</button>
              </form>
            ) : (
              <div style={styles.userInfo}>
                <span>{user.firstName} {user.lastName}</span>
                <div style={styles.userActions}>
                  <button onClick={() => setEditUser(user)} style={styles.button}>Editar</button>
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
